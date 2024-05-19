import React from "react";
import SmallCard from "@/components/SmallCard";
import BigCard from "@/components/BigCard";

function Page() {
    return (
        <>
        <div className="w-full m-auto h-full max-w-[850px]">
            <div className="flex flex-wrap gap-4">
            <SmallCard
                heading="Orders"
                caption="$ 313.00"
                content="45%"
                color="#EE4266"
                iconname="HiTrendingDown"
            />
            <SmallCard
                heading="Fullfillment"
                caption="$ 8891.00"
                content="79%"
                color="#337357"
                iconname="HiTrendingUp"
            />
            <SmallCard
                heading="Return"
                caption="$ 1M"
                content="64%"
                color="#5E1675"
                iconname="HiTrendingUp"
            />
            <SmallCard
                heading="Delivered"
                caption="$ 1M"
                content="64%"
                color="#5E1675"
                iconname="HiTrendingUp"
            />
            </div>
            <BigCard />
        </div>
        </>
    );
}

export default Page;
