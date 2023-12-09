import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export type Crumb = {
  path: string;
  label: string;
};

type Props = {
  crumbs: Crumb[];
  className?: string;
};

const Breadcrumb = (props: Props) => {
  return (
    <div className={cn("flex items-center", props.className)}>
      {props.crumbs.map((crumb, index) => (
        <div className="flex items-center" key={index}>
          <Link
            href={crumb.path}
            className="text-sm text-gray-500 hover:text-black"
          >
            {crumb.label}
          </Link>
          {index < props.crumbs.length - 1 && (
            <span className="mx-2 text-sm text-gray-500">
              <ChevronRight size={12} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
