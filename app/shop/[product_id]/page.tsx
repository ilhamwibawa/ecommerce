"use client";

import Breadcrumb, { Crumb } from "@/components/breadcrumb";
import PriceTag from "@/components/price-tag";
import Rating from "@/components/rating";
import {
  ColorPickerGroup,
  ColorPickerGroupItem,
} from "@/components/ui/color-picker";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import ProductImages from "./product-images";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";
import React, { useEffect } from "react";
import Counter from "./counter";
import Details from "./details";
import FAQs from "./faq";
import RelatedProducts from "./related-products";
import Reviews from "./reviews";
import SelectSize from "./select-size";
import { Product } from "@/lib/products";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

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

const formSchema = z.object({
  quantity: z.number().min(1),
  color: z.string(),
  size: z.string(),
});

export default function DetailProduct() {
  // get product id from url
  const params = useParams();
  const product_id = params.product_id;

  const [product, setProduct] = React.useState<Product>();
  const { data, isLoading } = useSWR(
    `https://api.escuelajs.co/api/v1/products/${product_id}`,
    fetcher
  );

  React.useEffect(() => {
    if (!isLoading && data) {
      const manipulatedData = {
        ...data,
        discountPercentage: Math.floor(Math.random() * 100),

        rating: Math.floor(Math.random() * 5) + 1,
      };

      setProduct(manipulatedData as Product);
    }
  }, [data, isLoading]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
      color: "#31344F",
      size: "",
    },
  });

  function addToCart() {
    const { color, size, quantity } = form.getValues();

    // add to localstorage
    const cart = localStorage.getItem("cart");
    const cartItems = cart ? JSON.parse(cart) : [];

    console.log("cart items", cartItems);

    // check if product is already in cart
    const existingProduct = cartItems.find(
      (item: any) => item.id === parseInt(product_id as string)
    );
    console.log("is existing product", existingProduct);

    if (existingProduct) {
      // update quantity
      existingProduct.quantity += quantity;
      localStorage.setItem("cart", JSON.stringify(cartItems));
      return;
    }

    cartItems.push({
      ...product,
      color,
      size,
      quantity,
    });

    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <Loader2 className="animate-spin" size={48} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 lg:px-0">
      <Breadcrumb crumbs={crumbs} className="py-4" />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">
        <div className="col-span-3">
          <ProductImages images={product?.images} />
        </div>

        <div className="w-full space-y-4 col-span-2">
          <h2 className=" font-bold text-4xl ">{product?.title}</h2>

          <Rating value={4.5} />

          <PriceTag
            price={product?.price || 0}
            discountPercentage={20}
            size="lg"
            badgeVariant="destructive"
          />

          <div className="space-y-6">
            <p className="text-sm text-gray-500">{product?.description}</p>
            <Separator />

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(addToCart)}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                      <FormItem>
                        <Label className="text-gray-500 text-sm">
                          Select Colors
                        </Label>
                        <FormControl>
                          <ColorPickerGroup
                            className="flex items-center gap-4"
                            defaultValue="#31344F"
                            onChange={(value) => {
                              field.onChange(value);
                            }}
                          >
                            {colors.map((color) => (
                              <ColorPickerGroupItem
                                key={color.name}
                                value={color.color}
                                id={color.name}
                                color={color.color}
                                label={color.label}
                              />
                            ))}
                          </ColorPickerGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label className="text-gray-500 text-sm">Select Size</Label>
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <FormItem>
                        <SelectSize
                          onValueChange={(value) => {
                            field.onChange(value);
                          }}
                        />
                      </FormItem>
                    )}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between gap-4">
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem className="w-[200px]">
                        <FormControl>
                          <Counter
                            onValueChange={(value) => {
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Add to Cart
                  </Button>
                </div>
              </form>
            </Form>
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
