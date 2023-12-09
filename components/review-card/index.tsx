import { cn } from "@/lib/utils";
import React from "react";
import Rating from "../rating";

type Props = {
  rating: number;
  author: string;
  content: string;
  postedAt?: string;
  extra?: React.ReactNode;
};

const ReviewCard = (props: Props) => {
  const { rating, author, content, postedAt, extra } = props;
  return (
    <div className={cn("flex border rounded-2xl")}>
      <div className="px-8 py-7 h-full">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2 mb-2">
            <Rating value={rating} showLabel={false} />
            <div>
              <h3 className="font-semibold">{author}</h3>
            </div>
          </div>

          {extra && <div className="flex items-center gap-4">{extra}</div>}
        </div>

        <p className="text-gray-500 whitespace-normal text-sm">{content}</p>

        {postedAt && (
          <div className="flex items-center mt-4">
            <span className="text-sm">{postedAt}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
