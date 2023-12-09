"use client";
import ReviewCard from "@/components/review-card";
import useCarousel from "@/hooks/useCarousel";
import { reviews } from "@/lib/data";
import { cn } from "@/lib/utils";

type Props = {};

const ClientReviews = (props: Props) => {
  const itemsPerPage = 5;
  const { currentPage, nextPage, prevPage, totalPages } = useCarousel({
    totalItems: reviews.length,
    itemsPerPage,
  });
  return (
    <section className="mb-20">
      <div className="container mx-auto px-6 md:px-0">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-bold text-4xl">OUR HAPPY CUSTOMERS</h2>

          <div className="flex gap-4">
            <button onClick={prevPage} disabled={currentPage === 0}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.70406 4.4541L2.95406 11.2041C2.84918 11.3086 2.76597 11.4328 2.70919 11.5696C2.6524 11.7063 2.62317 11.8529 2.62317 12.001C2.62317 12.149 2.6524 12.2957 2.70919 12.4324C2.76597 12.5691 2.84918 12.6933 2.95406 12.7979L9.70406 19.5479C9.91541 19.7592 10.2021 19.8779 10.5009 19.8779C10.7998 19.8779 11.0865 19.7592 11.2978 19.5479C11.5092 19.3365 11.6279 19.0499 11.6279 18.751C11.6279 18.4521 11.5092 18.1654 11.2978 17.9541L6.46875 13.125L20.25 13.125C20.5484 13.125 20.8345 13.0065 21.0455 12.7955C21.2565 12.5846 21.375 12.2984 21.375 12C21.375 11.7017 21.2565 11.4155 21.0455 11.2045C20.8345 10.9936 20.5484 10.875 20.25 10.875L6.46875 10.875L11.2987 6.04598C11.5101 5.83463 11.6288 5.54799 11.6288 5.2491C11.6288 4.95022 11.5101 4.66357 11.2987 4.45223C11.0874 4.24088 10.8008 4.12215 10.5019 4.12215C10.203 4.12215 9.91634 4.24088 9.705 4.45223L9.70406 4.4541Z"
                  className={cn(
                    currentPage === 0 ? "fill-gray-300" : "fill-black"
                  )}
                />
              </svg>
            </button>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2959 4.4541L21.0459 11.2041C21.1508 11.3086 21.234 11.4328 21.2908 11.5696C21.3476 11.7063 21.3768 11.8529 21.3768 12.001C21.3768 12.149 21.3476 12.2957 21.2908 12.4324C21.234 12.5691 21.1508 12.6933 21.0459 12.7979L14.2959 19.5479C14.0846 19.7592 13.7979 19.8779 13.4991 19.8779C13.2002 19.8779 12.9135 19.7592 12.7022 19.5479C12.4908 19.3365 12.3721 19.0499 12.3721 18.751C12.3721 18.4521 12.4908 18.1654 12.7022 17.9541L17.5313 13.125L3.75 13.125C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5846 2.625 12.2984 2.625 12C2.625 11.7017 2.74353 11.4155 2.95451 11.2045C3.16548 10.9936 3.45163 10.875 3.75 10.875L17.5313 10.875L12.7013 6.04598C12.4899 5.83463 12.3712 5.54799 12.3712 5.2491C12.3712 4.95022 12.4899 4.66357 12.7013 4.45223C12.9126 4.24088 13.1992 4.12215 13.4981 4.12215C13.797 4.12215 14.0837 4.24088 14.295 4.45223L14.2959 4.4541Z"
                  className={cn(
                    currentPage === totalPages - 1
                      ? "fill-gray-300"
                      : "fill-black"
                  )}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className={`grid gap-5 px-6 lg:gap-10 lg:grid-cols-5 lg:px-20`}>
          {Array.from({ length: itemsPerPage }).map((_, index) => {
            const itemIndex = currentPage * itemsPerPage + index;
            return (
              <ReviewCard
                key={index}
                author={reviews[itemIndex].author}
                content={reviews[itemIndex].content}
                rating={reviews[itemIndex].rating}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
