import Breadcrumb, { Crumb } from "@/components/breadcrumb";
import PriceTag from "@/components/price-tag";
import Rating from "@/components/rating";
import {
  ColorPickerGroup,
  ColorPickerGroupItem,
} from "@/components/ui/color-picker";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { products } from "@/lib/data";
import ProductImages from "./product-images";

import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Counter from "./counter";
import Details from "./details";
import FAQs from "./faq";
import Reviews from "./reviews";
import SelectSize from "./select-size";
import RelatedProducts from "./related-products";
import React from "react";
import { Loader2 } from "lucide-react";

async function getProduct(id: string) {
  const data = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then((res) => res.json())
    .then((data) => data);

  return {
    ...data,
    discountPercentage: Math.floor(Math.random() * 100),

    rating: Math.floor(Math.random() * 5) + 1,
  };
}

type Params = {
  params: {
    product_id: string;
  };
};

export default async function DetailProduct({ params }: Params) {
  const crumbs: Crumb[] = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "#",
      label: "Shop",
    },
    {
      path: "#",
      label: "Man",
    },
    {
      path: "#",
      label: "T-shirts",
    },
  ];

  const colors = [
    {
      name: "option-one",
      color: "#31344F",
      label: "Option One",
    },
    {
      name: "option-two",
      color: "#314F4A",
      label: "Option Two",
    },
    {
      name: "option-three",
      color: "#4F4631",
      label: "Option Three",
    },
  ];

  const product = await getProduct(params.product_id);

  return (
    <div className="container mx-auto px-6 lg:px-0">
      <Breadcrumb crumbs={crumbs} className="py-4" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">
        <div className="col-span-3">
          <ProductImages images={product.images} />
        </div>

        <div className="w-full space-y-4 col-span-2">
          <h2 className=" font-bold text-4xl ">{product.title}</h2>

          <Rating value={4.5} />

          <PriceTag
            price={product.price}
            discountPercentage={20}
            size="lg"
            badgeVariant="destructive"
          />

          <div className="space-y-6">
            <p className="text-sm text-gray-500">{product.description}</p>
            <Separator />

            <div className="space-y-3">
              <Label className="text-gray-500 text-sm">Select Colors</Label>
              <ColorPickerGroup
                className="flex items-center gap-4"
                defaultValue="option-one"
              >
                {colors.map((color) => (
                  <ColorPickerGroupItem
                    key={color.name}
                    value={color.name}
                    id={color.name}
                    color={color.color}
                    label={color.label}
                  />
                ))}
              </ColorPickerGroup>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label className="text-gray-500 text-sm">Select Size</Label>

              <SelectSize />
            </div>

            <Separator />

            <div className="flex items-center justify-between gap-4">
              <Counter />

              <Button className="w-full">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>

      <Tabs className="mt-10" defaultValue="reviews">
        <TabsList className="flex gap-4">
          <TabsTrigger value="details">Product Details</TabsTrigger>
          <TabsTrigger value="reviews">Rating & Reviews</TabsTrigger>
          <TabsTrigger value="faq">FAQs</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Details />
        </TabsContent>
        <TabsContent value="reviews">
          <Reviews />
        </TabsContent>
        <TabsContent value="faq">
          <FAQs />
        </TabsContent>
      </Tabs>

      <div className="mt-20">
        <h2 className=" font-bold text-4xl text-center mb-20">
          You might also like
        </h2>

        <React.Suspense
          fallback={
            <div className="flex justify-center items-center w-full h-full">
              <Loader2 className="animate-spin" />
            </div>
          }
        >
          <RelatedProducts />
        </React.Suspense>
      </div>
    </div>
  );
}
