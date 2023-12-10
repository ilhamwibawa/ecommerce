"use client";

import { FallbackImage } from "@/components/ui/fallback-image";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

type Props = {
  images?: string[];
};

const ProductImages = (props: Props) => {
  const { images } = props;
  const [selectedImage, setSelectedImage] = React.useState(images?.[0] || "");

  useEffect(() => {
    if (images) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 w-full max-w-3xl">
      <div className="flex flex-row lg:flex-col gap-4">
        {images?.map((image, index) => (
          <div
            className={cn(
              "rounded-xl border-2 border-transparent cursor-pointer ",
              {
                " border-black": selectedImage === image,
              }
            )}
            key={index}
            onClick={() => setSelectedImage(image)}
          >
            <FallbackImage
              src={image}
              alt="product"
              width={200}
              height={200}
              className=" object-cover h-32 w-32 lg:h-48 lg:w-48  rounded-xl"
            />
          </div>
        ))}
      </div>

      <div className="flex-1 w-full">
        <FallbackImage
          src={selectedImage}
          alt="product"
          width={600}
          height={600}
          priority
          className=" object-cover h-[400px] lg:h-[619px] w-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default ProductImages;
