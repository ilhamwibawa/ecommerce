import ProductCard from "@/components/product-card";
import { Product, getProducts } from "@/lib/products";
import Link from "next/link";
import React from "react";

type Props = {};

const RelatedProducts = async (props: Props) => {
  const products = await getProducts(2, 4);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product: Product, index: number) => (
        <Link href={`/shop/${product.id}`} key={index} passHref>
          <ProductCard
            title={product.title}
            images={product.images}
            price={product.price}
            rating={product.rating}
            discountPercentage={product.discountPercentage}
          />
        </Link>
      ))}
    </div>
  );
};

export default RelatedProducts;
