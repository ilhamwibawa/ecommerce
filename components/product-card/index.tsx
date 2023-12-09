import Image from "next/image";
import React from "react";
import Rating from "../rating";
import { Badge } from "../ui/badge";
import { Eye } from "lucide-react";
import { ProductType } from "@/lib/data";
import { cn } from "@/lib/utils";
import PriceTag from "../price-tag";
import { FallbackImage } from "../ui/fallback-image";

type Props = {} & ProductType & React.HTMLAttributes<HTMLDivElement>;

const ProductCard = (props: Props) => {
  const { title, images, price, rating, discountPercentage } = props;
  return (
    <div className={cn("flex flex-col gap-3", props.className)}>
      <div className="flex relative max-h-80 rounded-2xl items-center overflow-hidden group">
        <FallbackImage
          src={images[0]}
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

        <PriceTag price={price} discountPercentage={discountPercentage} />
      </div>
    </div>
  );
};

export default ProductCard;
