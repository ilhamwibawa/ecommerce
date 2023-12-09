import { useState } from "react";

type UseCarouselProps = {
  totalItems: number;
  itemsPerPage?: number;
};

function useCarousel({ totalItems, itemsPerPage = 1 }: UseCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    nextPage,
    prevPage,
    totalPages,
  };
}

export default useCarousel;
