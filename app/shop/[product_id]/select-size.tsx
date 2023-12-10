"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

type Props = {
  onValueChange?: (value: string) => void;
};

const sizes = [
  {
    name: "small",
    label: "Small",
  },
  {
    name: "medium",
    label: "Medium",
  },
  {
    name: "large",
    label: "Large",
  },
  {
    name: "xlarge",
    label: "X-Large",
  },
];

const SelectSize = (props: Props) => {
  const { onValueChange } = props;
  const [selectedSize, setSelectedSize] = React.useState(sizes[0]);

  useEffect(() => {
    onValueChange?.(selectedSize.name);
  }, [selectedSize]);

  return (
    <div className="flex gap-2">
      {sizes.map((size) => (
        <Button
          type="button"
          key={size.name}
          variant={"secondary"}
          className={cn("text-sm", {
            "bg-primary text-white hover:bg-primary":
              size.name === selectedSize.name,
          })}
          onClick={() => setSelectedSize(size)}
        >
          {size.label}
        </Button>
      ))}
    </div>
  );
};

export default SelectSize;
