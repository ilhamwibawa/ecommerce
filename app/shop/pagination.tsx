"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect } from "react";

type Props = {
  onPageChange?: (page: number) => void;
};

const Pagination = (props: Props) => {
  const CURRENT_PAGE = 1;
  const TOTAL_PAGES = 5;

  const [currentPage, setCurrentPage] = React.useState(CURRENT_PAGE);
  const [totalPages, setTotalPages] = React.useState(TOTAL_PAGES);

  useEffect(() => {
    props.onPageChange?.(currentPage);
  }, [currentPage]);

  return (
    <div className="flex items-center justify-between">
      <Button
        variant="outline"
        className="rounded flex gap-2 items-center"
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft size={16} />
        Previous
      </Button>

      <ul className=" gap-2 hidden lg:flex">
        {Array.from(Array(totalPages).keys()).map((page) => (
          <li
            key={page}
            className={cn(
              "rounded-full w-8 h-8 flex items-center justify-center cursor-pointer",
              {
                "bg-primary text-white": currentPage === page + 1,
                "bg-background text-gray-500": currentPage !== page + 1,
              }
            )}
            onClick={() => setCurrentPage(page + 1)}
          >
            {page + 1}
          </li>
        ))}
      </ul>

      <Button
        variant="outline"
        className="rounded flex gap-2 items-center"
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <ArrowRight size={16} />
      </Button>
    </div>
  );
};

export default Pagination;
