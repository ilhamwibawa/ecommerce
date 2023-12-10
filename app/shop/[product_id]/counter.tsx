"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import React from "react";

type Props = {
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  defaultValue?: number;
};

const Counter = (props: Props) => {
  const { min = 1, max, onValueChange, defaultValue } = props;
  const [count, setCount] = React.useState(defaultValue || min);

  React.useEffect(() => {
    onValueChange?.(count);
  }, [count]);

  return (
    <div
      className={cn(
        buttonVariants({ variant: "secondary" }),
        "w-full max-w-[180px] justify-between"
      )}
    >
      <button
        type="button"
        className="w-8 h-8 flex items-center justify-center text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => setCount(count - 1)}
        disabled={count === min}
      >
        <Minus size={14} />
      </button>
      <span className="text-base">{count}</span>
      <button
        type="button"
        className="w-8 h-8 flex items-center justify-center text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => setCount(count + 1)}
        disabled={max ? count === max : false}
      >
        <Plus size={14} />
      </button>
    </div>
  );
};

export default Counter;
