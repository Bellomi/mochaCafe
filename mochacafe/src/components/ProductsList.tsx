import React from "react";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./ProductCard";

export function ProductsList() {
  const { data } = useProducts();
  console.log(data);

  return (
    <div>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image_url}
          title={product.name}
          price={product.price_in_cents}
        />
      ))}
    </div>
  );
}
