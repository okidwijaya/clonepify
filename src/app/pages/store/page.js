import React from 'react'
import ChannelsStatus from "@/components/ChannelsStatus";
import NarrowCard from "@/components/NarrowCard";
import SideBarNavigation from "@/components/SideBarNavigation";
import SmallCard from "@/components/SmallCard";

export default function page() {
    return (
        <div className="min-h-screen w-full justify-between p-0 mx-auto relative">
            <div className="w-full m-auto h-full">
                <ChannelsStatus />
                <div className="flex flex-wrap gap-4">
                <SmallCard heading="Total Sales" caption="$ 8891.00" content="79%" color="#337357" iconname="HiTrendingUp"/>
                <SmallCard heading="Total Orders" caption="$ 313.00" content="45%" color="#EE4266" iconname="HiTrendingDown"/>
                <SmallCard heading="Total Revenue" caption="$ 1M" content="64%" color="#5E1675" iconname="HiTrendingUp"/>
                </div>
                <NarrowCard />
            </div>
        </div>
    )
}

