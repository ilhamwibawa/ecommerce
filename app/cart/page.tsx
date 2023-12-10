"use client";

import Breadcrumb from "@/components/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FallbackImage } from "@/components/ui/fallback-image";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/utils";
import { ArrowRight, Trash } from "lucide-react";
import Counter from "../shop/[product_id]/counter";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  return (
    <div className="py-4 container mx-auto px-6 lg:px-0">
      <Breadcrumb
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Cart", path: "/cart" },
        ]}
        className="mb-4"
      />

      <h2 className="font-bold text-4xl mb-12">YOUR CART</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="border rounded-lg px-4">
            {cart?.length === 0 ? (
              <div className="text-center">
                <p className="text-gray-500">
                  Your cart is empty.{" "}
                  <a className="underline" href="/">
                    Continue shopping
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div className="divide-y">
                {cart?.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-stretch justify-between py-4"
                  >
                    <div className="flex space-x-4">
                      <FallbackImage
                        src={item.images[0]}
                        alt={item.title}
                        width={120}
                        height={120}
                        className="rounded object-cover"
                      />
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <div>
                          <span>Size:</span>
                          <span className="text-gray-600"> {item.size}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>Color:</span>
                          <span className="text-gray-600">
                            <div
                              className={`w-6 h-6 rounded-full`}
                              style={{
                                backgroundColor: item.color,
                              }}
                            ></div>
                          </span>
                        </div>
                        <div className=" mt-4">
                          <span className="font-semibold">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex  flex-col h-auto items-end justify-between">
                      <button
                        type="button"
                        className="text-red-500 hover:underline"
                        onClick={() => {
                          removeFromCart(item.id as number);
                        }}
                      >
                        <Trash size={16} />
                      </button>

                      <Counter
                        defaultValue={item.quantity}
                        onValueChange={(value) => {
                          updateQuantity(item.id as number, value);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* subtotal */}
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                $
                {cart
                  ?.reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>
            {/* discount */}
            <div className="flex justify-between">
              <span>Discount</span>
              <span>$0.00</span>
            </div>

            {/* Delivery Fee */}
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$0.00</span>
            </div>
            <Separator />
            {/* Total */}
            <div className="flex justify-between">
              <span>Total</span>
              <span>
                $
                {cart
                  ?.reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>

            <Button className="w-full flex items-center gap-2">
              Go to Checkout <ArrowRight />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
