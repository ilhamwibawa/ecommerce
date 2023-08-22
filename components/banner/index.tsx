import Link from "next/link";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Banner = (props: Props) => {
  return (
    <div className="bg-black text-white py-2">
      <div className="container mx-auto px-6 md:px-0 text-center">
        <p className="text-xs md:text-sm">{props.children}</p>
      </div>
    </div>
  );
};

export default Banner;
