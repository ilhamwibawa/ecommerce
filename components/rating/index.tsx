import { Star, StarHalf } from "lucide-react";

type Props = {
  value: number;
  showLabel?: boolean;
};

const Rating = (props: Props) => {
  const { value, showLabel } = props;

  return (
    <div className="flex items-center gap-2">
      {/* looping */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index}>
            {value >= index + 1 ? (
              <Star
                size={16}
                fill={value >= index + 1 ? "#FBBF24" : "#E5E7EB"}
                stroke="#FBBF24"
              />
            ) : value >= index + 0.5 ? (
              <StarHalf size={16} fill="#FBBF24" stroke="#FBBF24" />
            ) : null}
          </div>
        ))}
      </div>

      {showLabel && (
        <span className="text-sm">
          {value}/<span className="text-gray-500">5</span>
        </span>
      )}
    </div>
  );
};

Rating.defaultProps = {
  showLabel: true,
};

export default Rating;
