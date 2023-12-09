"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export type MenuTreeItem = {
  label: string;
  path: string;
  icon?: React.ReactNode;
  items?: MenuTreeItem[];
};

type Props = {
  items: MenuTreeItem[];
};

const MenuTree = (props: Props) => {
  const { items } = props;
  const [open, setOpen] = React.useState<string[]>([]);
  const router = useRouter();

  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div key={index}>
          <div
            className="flex items-center gap-2 justify-between hover:bg-gray-100 cursor-pointer rounded-md p-2 text-gray-600"
            onClick={() => {
              if (item.items) {
                if (open.includes(item.label)) {
                  setOpen(open.filter((i) => i !== item.label));
                } else {
                  setOpen([...open, item.label]);
                }
              } else {
                router.push(item.path);
              }
            }}
          >
            <div className="flex item-center gap-2">
              {item.icon && (
                <div className="flex items-center justify-center w-6 h-6">
                  {item.icon}
                </div>
              )}

              <span className="text-sm">{item.label}</span>
            </div>

            {item.items && (
              <div className="flex items-center justify-center w-6 h-6">
                <ChevronRight size={16} />
              </div>
            )}
          </div>

          {item.items && (
            <div
              className={cn("ml-4", {
                hidden: !open.includes(item.label),
              })}
            >
              <MenuTree items={item.items} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuTree;
