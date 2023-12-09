export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  rating: number;
  discountPercentage: number;
  creationAt: string;
  updatedAt: string;
  category: Category;
};

export type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export async function getProducts(offset: number, limit: number) {
  const data = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
  )
    .then((res) => res.json())
    .then((data) => data);

  const manipulatedData = data.map((product: Product) => {
    return {
      ...product,
      discountPercentage: Math.floor(Math.random() * 100),

      rating: Math.floor(Math.random() * 5) + 1,
    };
  });

  return manipulatedData;
}
