"use client";

import Breadcrumb from "@/components/breadcrumb";
import ProductCard from "@/components/product-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { fetcher } from "@/lib/fetcher";
import { Product } from "@/lib/products";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import Filter from "./filter";
import Pagination from "./pagination";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Sliders } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function ShopPage() {
  const [pageIndex, setPageIndex] = React.useState(0);
  const [limit, setLimit] = React.useState(9);
  const offset = pageIndex * limit;

  const [products, setProducts] = React.useState<Product[]>([]);
  const { data, isLoading } = useSWR(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`,
    fetcher
  );

  React.useEffect(() => {
    if (!isLoading && data) {
      const manipulatedData = data.map((product: Product) => {
        return {
          ...product,
          discountPercentage: Math.floor(Math.random() * 100),

          rating: Math.floor(Math.random() * 5) + 1,
        };
      });

      setProducts(manipulatedData);
    }
  }, [data, isLoading]);

  return (
    <div className="container mx-auto px-6 lg:px-0 py-4">
      <Breadcrumb
        crumbs={[
          {
            path: "/",
            label: "Home",
          },
          {
            path: "#",
            label: "Shop",
          },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start mt-4">
        <div className="col-span-3 hidden lg:block">
          <div className="border rounded-2xl p-5">
            <Filter />
          </div>
        </div>

        <div className="col-span-9">
          <div className="flex justify-between">
            <span className="text-3xl font-semibold">Products</span>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 hidden">
                Showing 1-10 of 100 Products
              </span>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Sliders size={18} className="text-gray-500" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="bottom" className="pr-0 rounded-t-3xl">
                  <Filter />
                </SheetContent>
              </Sheet>
              <div className=" items-center space-x-2 text-sm hidden lg:flex">
                <span className="text-gray-500 whitespace-nowrap">
                  Sort by:
                </span>
                <Select defaultValue="most-popular">
                  <SelectTrigger className="border-0 p-0">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="most-popular">Most Popular</SelectItem>
                    <SelectItem value="lower-price">Lower Price</SelectItem>
                    <SelectItem value="hight-price">High Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center h-96">
              <span className="text-3xl font-semibold">Loading...</span>
            </div>
          )}

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 mt-4">
            {products?.map((product: Product, index: number) => (
              <Link key={index} href={`/shop/${product.id}`}>
                <ProductCard
                  discountPercentage={product.discountPercentage}
                  images={product.images}
                  price={product.price}
                  rating={product.rating}
                  title={product.title}
                />
              </Link>
            ))}
          </div>

          <Separator className="my-10" />

          <Pagination
            onPageChange={(page) => {
              setPageIndex(page);
            }}
          />
        </div>
      </div>
    </div>
  );
}
