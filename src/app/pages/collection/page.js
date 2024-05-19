import ProductCard from "@/components/ProductCard";
import React from "react";

function Page() {
  return (
    <div className="max-w-[920px] mx-auto flex flex-row flex-wrap items-start align-middle content-center">
      <div className="text-left">
        <h1 className="md:text-xl lg:text-4xl">Collection Page</h1>
        <p>
          This i a Collection Page, Our product build from best nylon with
          handamae creation
        </p>
      </div>
      <div className="w-full grid grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Page;
