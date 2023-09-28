import React from "react";
import Link from "next/link";

async function ambilPostingan() {
  const products = await fetch("https://dummyjson.com/products?limit=5");
  return products.json();
}

export default async function layout({ children }) {
  const { products } = await ambilPostingan();

  return (
    <div>
      {products.map((product) => (
        <>
          <div key={product?.id}>
            <Link href={`/postingan/${product?.id}`}>
              No.{product?.id} - {product?.title}
            </Link>
            <p>{product?.description}</p>
          </div>
        </>
      ))}
      <hr />
      <div>{children}</div>
    </div>
  );
}
