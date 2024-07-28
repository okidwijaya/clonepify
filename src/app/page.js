"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard"
import Link from "next/link";
import BlogpostsCard from "@/components/BlogpostsCard";
import RightSideSlider from "@/components/RightSideSlider";
import BannerTextLarge from "@/components/BannerTextLarge";

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
    <main className="min-h-screen w-full mx-auto mt-[4.5rem] relative">
      <div className="w-full max-w-[1440px] mx-auto">
      <div className="hidden grid-cols-[0.7fr_0.3fr] items-stretch" style={{ visibility: 'hidden', height: '0', width: '0'}}>
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
      <div className="grid grid-cols-1 gap-8">
        <BannerTextLarge />
        <RightSideSlider />
        <BlogpostsCard />
      </div>
      <ul className="hidden flex-wrap flex-row w-full max-w-[1130px] mx-auto justify-start" style={{columnGap: '0.75', visibility: 'hidden', height: '0', width: '0'}}>
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
