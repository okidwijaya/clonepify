"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard"
import Link from "next/link";

export default function Page() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`)
        .then((res) => {
          setProductsList(res.data);
          console.log('response', res.data);
        })
        .then(() => {
          console.log('state', productsList);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getProducts();

    console.log('getProducts', productsList);
  }, []);
  // redirect('/pages');

  return (
    <main className="min-h-screen w-full p-4 mx-auto mt-[4.5rem] relative">
      <div className="w-full max-w-[1130px] mx-auto p-4">
      <div className="grid grid-cols-[0.7fr_0.3fr] items-stretch">
        <p className="mt-0 h-auto font-semibold text-md text-left">
          NEW ITEMS
        </p>
        <Link
          href="#"
          className="mt-0 h-auto font-light text-medium-sm text-right underline"
        >
          View All
        </Link>
      </div>
      <ul className="flex flex-wrap flex-row w-full max-w-[1130px] mx-auto justify-start" style={{columnGap: '0.75'}}>
        {productsList.length > 0 ? (
          productsList.map((product, index) => (
            <li className="w-full max-w-[265px]" key={index}>
              <ProductCard name={product.name} vendor={product.vendor} price={product.price} image={product.image ? product.image : null} />
            </li>
          ))
        ) : (
          <p style={{ color: "#ffff" }}>Loading...</p>
        )}
      </ul>
      </div>
    </main>
  );
}
