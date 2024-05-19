import React from "react";
import Image from "next/image"
import Link from "next/link"
import BannerImage from "../../public/assets/images/laptop.png"
import IconComponent from "./IconComponents";

function BigCard() {
    return (
        <>
        <div className="h-auto w-full bg-black-navy-based text-white-light-grey p-4 rounded-md border-black-navy-based-text border">
            <div className="relative h-56 shadow-none">
            <Image
                priority
                className="object-contain h-full shadow-none w-full"
                src={BannerImage}
                width={300}
                height={300}
                alt="Picture of the author"
            />
            </div>
            <div className="w-full max-w-lg mx-auto">
            <h4 className="text-center mb-2">
            Your orders will show here
            </h4>
            <p className="text-center">
            This is where you’ll fulfill orders, collect payments, and track order progress.
            </p>
            </div>
            <div className="pt-0 mx-auto flex justify-between items-center">
            <Link href="#" className="font-semibold cursor-pointer underline">Read More</Link>
            <Link href="#" className="inline-block">
                <button
                className="flex items-center gap-2 py-2 px-3 font-semibold cursor-pointer bg-white-light-grey text-black-navy-based rounded-md"
                >
                Create Order
                <IconComponent name="IoIosArrowForward" size="1rem" color="black-navy-based" className='w-fit'/>
                </button>
            </Link>
            </div>
        </div>
        </>
    );
}

export default BigCard;
