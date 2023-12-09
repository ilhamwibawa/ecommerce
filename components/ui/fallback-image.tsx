"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const FallbackImage = ({
  src,
  ...rest
}: {
  src: string;
  [x: string]: any;
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      alt={""}
      {...rest}
      src={imgSrc ? imgSrc : "/images/placeholder-images-image_large.png"}
      onError={() => {
        setImgSrc("/images/placeholder-images-image_large.png");
      }}
    />
  );
};
