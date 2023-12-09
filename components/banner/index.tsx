import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

const Banner = (props: Props) => {
  return (
    <div className={cn("bg-black text-white py-2", props.className)}>
      <div className="container mx-auto px-6 md:px-0 text-center">
        <p className="text-xs md:text-sm">{props.children}</p>
      </div>
    </div>
  );
};

export default Banner;
