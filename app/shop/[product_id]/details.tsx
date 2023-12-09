import React from "react";

type Props = {};

const Details = (props: Props) => {
  return (
    <div className="mt-4">
      <span className="text-lg lg:text-xl font-semibold">Product Details</span>

      <div className="max-w-lg mt-6">
        <h4 className="text-xl font-medium mb-4">Additional Information</h4>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Color</span>
            <span className="text-sm text-gray-500">Size</span>
            <span className="text-sm text-gray-500">Material</span>
            <span className="text-sm text-gray-500">SKU</span>
            <span className="text-sm text-gray-500">Brand</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm">Black</span>
            <span className="text-sm">M</span>
            <span className="text-sm">Cotton</span>
            <span className="text-sm">N/A</span>
            <span className="text-sm">Nike</span>
          </div>
        </div>
      </div>
      {/* Care, wash, dry */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4">
        <div>
          <h4 className="text-xl font-medium mb-4">Care</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptatibus, nemo quia, quae voluptate voluptatem voluptates
            doloribus consequatur quibusdam quos? Quisquam quod, voluptatibus,
            nemo quia, quae voluptate voluptatem voluptates doloribus
            consequatur quibusdam quos?
          </p>
        </div>

        <div>
          <h4 className="text-xl font-medium mb-4">Wash</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptatibus, nemo quia, quae voluptate voluptatem voluptates
            doloribus consequatur quibusdam quos? Quisquam quod, voluptatibus,
            nemo quia, quae voluptate voluptatem voluptates doloribus
            consequatur quibusdam quos?
          </p>
        </div>

        <div>
          <h4 className="text-xl font-medium mb-4">Dry</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptatibus, nemo quia, quae voluptate voluptatem voluptates
            doloribus consequatur quibusdam quos? Quisquam quod, voluptatibus,
            nemo quia, quae voluptate voluptatem voluptates doloribus
            consequatur quibusdam quos?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
