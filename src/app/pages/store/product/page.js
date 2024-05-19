'use client'
import React from "react";
import IconComponent from "@/components/IconComponents";
import SmallCard from "@/components/SmallCard";
import Link from "next/link";
import BasicTable from "@/components/BasicTable";

function page() {
    return (
        <>
            <div className="w-full m-auto h-full max-w-[1024px] relative">
                <div className="w-full grid grid-cols-2 content-between align-middle">
                <div>
                    <h2 className="font-semibold text-2xl">Products</h2>
                </div>
                <div className="flex flex-wrap gap-2 w-full align-middle justify-end">
                    <button className="grid grid-cols-[20px_max-content] w-full max-w-max rounded-md h-fit bg-cs-dark-blue text-white-light-grey font-normal text-[12px] py-2 px-2 uppercase">
                    <IconComponent
                        name="MdUploadFile"
                        size="1rem"
                        color="cs-dark-blue"
                        className="w-fit"
                    />
                        <span>Import file</span>
                    </button>
                    <Link href="/pages/store/product/new" className="grid grid-cols-[20px_max-content] w-full max-w-max rounded-md h-fit bg-cs-dark-blue text-white-light-grey font-normal text-[12px] py-2 px-2 uppercase">
                        <IconComponent
                            name="MdAdd"
                            size="1rem"
                            color="cs-dark-blue"
                            className="w-fit"
                        />
                        <span>Add Product</span>
                    </Link>
                </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <SmallCard
                        heading="Total Sales"
                        caption="$ 8891.00"
                        content="79%"
                        color="#337357"
                        iconname="HiTrendingUp"
                    />
                    <SmallCard
                        heading="Total Orders"
                        caption="$ 313.00"
                        content="45%"
                        color="#EE4266"
                        iconname="HiTrendingDown"
                    />
                    <SmallCard
                        heading="Total Revenue"
                        caption="$ 1M"
                        content="64%"
                        color="#5E1675"
                        iconname="HiTrendingUp"
                    />
                </div>
                <BasicTable />
            </div>
        </>
    );
}

export default page;
