import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Badge, BadgeProps } from "../ui/badge";

const priceTagVariants = cva("font-semibold", {
  variants: {
    size: {
      default: "text-lg",
      sm: "text-base",
      lg: "text-2xl",
    },
  },
});

type Props = {
  price: number;
  discountPercentage?: number;
  badgeVariant?: BadgeProps["variant"];
} & VariantProps<typeof priceTagVariants>;

const PriceTag = (props: Props) => {
  const { price, discountPercentage = 0, size, badgeVariant } = props;
  return (
    <div className="flex items-center gap-2">
      <span className={cn(priceTagVariants({ size }))}>
        ${(price - price * (discountPercentage / 100)).toFixed(2)}
      </span>
      {discountPercentage > 0 && (
        <div className="flex gap-2">
          <span
            className={cn(
              "text-gray-400 line-through ",
              priceTagVariants({ size })
            )}
          >
            ${price}
          </span>

          <Badge variant={badgeVariant}>-{discountPercentage}%</Badge>
        </div>
      )}
    </div>
  );
};

export default PriceTag;
