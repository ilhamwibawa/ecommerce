import Image from "next/image";
import React from "react";
import Rating from "../rating";
import { Badge } from "../ui/badge";
import { Eye } from "lucide-react";
import { ProductType } from "@/lib/data";
import { cn } from "@/lib/utils";

type Props = {} & ProductType & React.HTMLAttributes<HTMLDivElement>;

const ProductCard = (props: Props) => {
  const { title, image, price, rating, discountPercentage } = props;
  return (
    <div className={cn("flex flex-col gap-3", props.className)}>
      <div className="flex relative max-h-80 rounded-2xl items-center overflow-hidden group">
        <Image
          src={`/images/products/${image}`}
          alt="product"
          width={500}
          height={500}
          className="object-cover"
        />

        <div className="absolute w-full h-full items-center justify-center bg-black bg-opacity-30 hidden group-hover:flex">
          <Eye size={32} className="text-white" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg whitespace-nowrap text-ellipsis overflow-hidden">
          {title}
        </h3>
        <Rating value={rating} />

        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">
            ${price - price * (discountPercentage / 100)}
          </span>
          {discountPercentage > 0 && (
            <div className="flex gap-2">
              <span className="text-gray-500 line-through">${price}</span>

              <Badge>-{discountPercentage}%</Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
