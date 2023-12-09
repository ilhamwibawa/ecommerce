export const products = [
  {
    images: [
      "/images/products/prod-1.png",
      "/images/products/prod-2.png",
      "/images/products/prod-3.png",
    ],
    title: "T-shirt with Tape Details",
    rating: 4.5,
    price: 120,
    discountPercentage: 0,
  },
  {
    images: ["/images/products/prod-2.png"],
    title: "Skinny Fit Jeans",
    rating: 4,
    price: 240,
    discountPercentage: 20,
  },
  {
    images: ["/images/products/prod-3.png"],
    title: "Checkered Shirt",
    rating: 3,
    price: 180,
    discountPercentage: 0,
  },
  {
    images: ["/images/products/prod-4.png"],
    title: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 130,
    discountPercentage: 30,
  },
  {
    images: ["/images/products/prod-5.png"],
    title: "Vertical Stripped Shirt",
    rating: 5,
    price: 212,
    discountPercentage: 20,
  },
  {
    images: ["/images/products/prod-6.png"],
    title: "Courage Graphic T-shirt",
    rating: 4,
    price: 140,
    discountPercentage: 0,
  },
  {
    images: ["/images/products/prod-7.png"],
    title: "Loose Fit Bermuda Shorts",
    rating: 3,
    price: 80,
    discountPercentage: 0,
  },
  {
    images: ["/images/products/prod-8.png"],
    title: "Faded Skinny Jeans",
    rating: 4,
    price: 210,
    discountPercentage: 0,
  },
  {
    images: ["/images/products/prod-9.png"],
    title: "Gradient Graphic T-Shirt",
    rating: 3.5,
    price: 210,
    discountPercentage: 0,
  },
];

export type ProductType = (typeof products)[0];

// make array of objects that contain author, rating, and content. the data is dummy
// Path: lib/data.ts
export const reviews = [
  {
    author: "John Doe",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    author: "Jane Doe",
    rating: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    author: "John Smith",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    author: "Jane Smith",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    author: "John Doe",
    rating: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    author: "Jane Doe",
    rating: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    author: "John Smith",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    author: "Jane Smith",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    author: "John Doe",
    rating: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
  {
    author: "John Doe",
    rating: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  },
];
