import ProductCard from "@/components/product-card";
import { Product, getProducts } from "@/lib/products";
import Link from "next/link";

type Props = {};

const NewArrivals = async (props: Props) => {
  const data = await getProducts(0, 4);

  return (
    <>
      {data.map((product: Product, index: number) => (
        <Link href={`shop/${product.id}`} key={index} passHref>
          <ProductCard
            title={product.title}
            images={product.images}
            price={product.price}
            rating={product.rating}
            discountPercentage={product.discountPercentage}
          />
        </Link>
      ))}
    </>
  );
};

export default NewArrivals;
