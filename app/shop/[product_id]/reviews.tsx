import ReviewCard from "@/components/review-card";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { reviews } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  MoreHorizontal,
  MoreVertical,
  Sliders,
} from "lucide-react";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2">
          <span className="text-lg lg:text-xl font-semibold">All Reviews</span>
          <span className="text-sm text-gray-500">(172)</span>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="secondary">
            <Sliders size={18} />
          </Button>

          <div className="hidden lg:block">
            <Select>
              <SelectTrigger
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "w-[160px] justify-between border-0"
                )}
                defaultValue="latest"
              >
                <SelectValue placeholder="Order by" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="highest">Highest Rating</SelectItem>
                <SelectItem value="lowest">Lowest Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button variant="default">Write a Review</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {reviews.slice(0, 6).map((review, index) => (
          <ReviewCard
            key={index}
            {...review}
            postedAt="Posted on August 14, 2023"
            extra={
              <button>
                <MoreHorizontal className="text-gray-600" size={21} />
              </button>
            }
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button variant="outline" className="w-[200px]">
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Reviews;
