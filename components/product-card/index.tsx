import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import React from "react";
import PriceTag from "../price-tag";
import Rating from "../rating";
import { FallbackImage } from "../ui/fallback-image";
import { Product } from "@/lib/products";

type Props = {} & Product & React.HTMLAttributes<HTMLDivElement>;

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
