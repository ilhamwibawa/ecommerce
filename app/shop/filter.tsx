"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ColorPickerGroup,
  ColorPickerGroupItem,
} from "@/components/ui/color-picker";
import MenuTree, { MenuTreeItem } from "@/components/ui/menu-tree";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Sliders } from "lucide-react";
import React from "react";

type Props = {};

const items: MenuTreeItem[] = [
  {
    label: "T-Shirt",
    path: "/",
    items: [
      {
        label: "T-Shirt",
        path: "/",
      },
      {
        label: "T-Shirt",
        path: "/",
      },
      {
        label: "T-Shirt",
        path: "/",
      },
    ],
  },
  {
    label: "Shorts",
    path: "/",
    items: [
      {
        label: "Shorts",
        path: "/",
      },
      {
        label: "Shorts",
        path: "/",
      },
      {
        label: "Shorts",
        path: "/",
      },
    ],
  },
  {
    label: "Jeans",
    path: "/",
    items: [
      {
        label: "Jeans",
        path: "/",
      },
      {
        label: "Jeans",
        path: "/",
      },
      {
        label: "Jeans",
        path: "/",
      },
    ],
  },
  {
    label: "Shirts",
    path: "/",
    items: [
      {
        label: "Shirts",
        path: "/",
      },
      {
        label: "Shirts",
        path: "/",
      },
      {
        label: "Shirts",
        path: "/",
      },
    ],
  },
  {
    label: "Hoodie",
    path: "/",
    items: [
      {
        label: "Hoodie",
        path: "/",
      },
      {
        label: "Hoodie",
        path: "/",
      },
      {
        label: "Hoodie",
        path: "/",
      },
    ],
  },
];

const colors = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
  {
    label: "Orange",
    value: "orange",
  },
  {
    label: "Purple",
    value: "purple",
  },
  {
    label: "Pink",
    value: "pink",
  },
  {
    label: "Gray",
    value: "gray",
  },
];

const sizes = [
  {
    label: "XSmall",
    value: "xs",
  },
  {
    label: "Small",
    value: "s",
  },
  {
    label: "Medium",
    value: "m",
  },
  {
    label: "Large",
    value: "l",
  },
  {
    label: "XLarge",
    value: "xl",
  },
  {
    label: "2XLarge",
    value: "xxl",
  },
  {
    label: "3XLarge",
    value: "xxxl",
  },
];

const styles: MenuTreeItem[] = [
  {
    label: "Casual",
    path: "/",
    items: [
      {
        label: "Casual",
        path: "/",
      },
      {
        label: "Casual",
        path: "/",
      },
      {
        label: "Casual",
        path: "/",
      },
    ],
  },
  {
    label: "Formal",
    path: "/",
    items: [
      {
        label: "Formal",
        path: "/",
      },
      {
        label: "Formal",
        path: "/",
      },
      {
        label: "Formal",
        path: "/",
      },
    ],
  },
  {
    label: "Sport",
    path: "/",
    items: [
      {
        label: "Sport",
        path: "/",
      },
      {
        label: "Sport",
        path: "/",
      },
      {
        label: "Sport",
        path: "/",
      },
    ],
  },
  {
    label: "Business",
    path: "/",
    items: [
      {
        label: "Business",
        path: "/",
      },
      {
        label: "Business",
        path: "/",
      },
      {
        label: "Business",
        path: "/",
      },
    ],
  },
  {
    label: "Party",
    path: "/",
    items: [
      {
        label: "Party",
        path: "/",
      },
      {
        label: "Party",
        path: "/",
      },
      {
        label: "Party",
        path: "/",
      },
    ],
  },
];

const Filter = (props: Props) => {
  const [sizeValue, setSizeValue] = React.useState<string[]>([]);
  return (
    <ScrollArea className="lg:h-auto h-[90vh] pr-6 lg:pr-0">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-xl">Filters</p>

        <Sliders size={18} className="text-gray-500 hidden lg:block" />
      </div>

      <div className="mt-4 border-y py-4">
        <MenuTree items={items} />
      </div>

      <Accordion
        type="multiple"
        defaultValue={["price", "colors", "size", "style"]}
      >
        <AccordionItem value="price">
          <AccordionTrigger className="hover:no-underline">
            <p className="font-semibold text-xl">Price</p>
          </AccordionTrigger>
          <AccordionContent className="my-6 mx-4">
            <Slider defaultValue={[60, 200]} max={300} step={1} unit="$" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="colors">
          <AccordionTrigger className="hover:no-underline">
            <p className="font-semibold text-xl">Colors</p>
          </AccordionTrigger>
          <AccordionContent>
            <div className="">
              <ColorPickerGroup className="flex items-center gap-2 flex-wrap">
                {colors.map((color, index) => (
                  <ColorPickerGroupItem
                    key={index}
                    label={color.label}
                    value={color.value}
                    color={color.value}
                  />
                ))}
              </ColorPickerGroup>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="size">
          <AccordionTrigger className="hover:no-underline">
            <p className="font-semibold text-xl">Size</p>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center gap-2 flex-wrap">
              {sizes.map((size, index) => (
                <Button
                  variant={
                    sizeValue.includes(size.value) ? "default" : "secondary"
                  }
                  size="sm"
                  onClick={() => {
                    if (sizeValue.includes(size.value)) {
                      setSizeValue(sizeValue.filter((s) => s !== size.value));
                    } else {
                      setSizeValue([...sizeValue, size.value]);
                    }
                  }}
                  key={index}
                >
                  {size.label}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="style" className="border-b-0">
          <AccordionTrigger className="hover:no-underline">
            <p className="font-semibold text-xl">Dress Style</p>
          </AccordionTrigger>
          <AccordionContent>
            <MenuTree items={styles} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-4">
        <Button variant="default" size="lg" className="w-full">
          Apply Filter
        </Button>
      </div>
    </ScrollArea>
  );
};

export default Filter;
