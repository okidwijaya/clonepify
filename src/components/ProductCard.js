import React from "react";
import Image from "next/image";
import Link from "next/link";
import product1 from "../../public/assets/images/image-placeholder-removebg-preview.png";
import IconComponent from "./IconComponents";

export default function ProductCard({ name, price, image, vendor }) {
    return (
        <div
            className="
            w-full my-4 py-3 px-1 cursor-pointershadow-lg text-black-navy-based bg-[#FFFFFF] p-4 rounded-md"
        >
            <div className="w-full text-white-light-grey grid grid-cols-1">
                <Link href="#" className="rounded-md px-2">
                    {image ? (
                        <Image
                            className="w-full rounded-md h-auto aspect-square object-cover bg-transparent"
                            src={image}
                            alt="Picture of banner"
                            width={2560}
                            height={1024}
                        />
                    ) : (
                        // <Image
                        //     className="w-full h-auto aspect-[3/4] object-contain bg-transparent"
                        //     src={product1}
                        //     alt="Picture of banner"
                        //     width={2560}
                        //     height={1024}
                        // />
                        <IconComponent
                            name="CiImageOff"
                            size="80%"
                            color="cs-dark-blue"
                            className="mx-auto opacity-100 h-full w-fit"
                        />
                    )}
                </Link>
                <div className="my-0 min-h-[3rem] flex flex-col flex-nowrap w-full justify-start bg-transparent p-3 rounded-sm gap-0 text-cs-dark-blue">
                    <div className="flex flex-col justify-start">
                        <div className="grid grid-cols-[0.7fr_0.3fr] items-stretch">
                            {vendor ? (
                            <Link
                                href="#"
                                className="uppercase py-0 px-2 mt-0 h-fit font-semibold text-[10px] text-left border border-white-light-grey text-cs-dark-blue rounded-lg w-fit"
                            >
                                {vendor}
                            </Link>
                            ): (
                                <div className="min-w-[2rem]"></div>
                            )}
                            <button className="text-right w-full flex justify-end">
                                <IconComponent
                                    name="FaRegHeart"
                                    size="1rem"
                                    color="cs-dark-blue"
                                    className="w-fit hover:fill:cs-dark-blue"
                                />
                            </button>
                        </div>
                        <Link
                            href="#"
                            className="mt-4 mb-0 h-auto font-semibold uppercase text-sm text-left"
                        >
                            {name}
                        </Link>
                        <p className="mt-0 h-auto font-light text-[14px] text-left">
                            Rp. {price}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-1 px-3">
                    <button className="rounded-sm font-semibold hover:bg-cs-dark-blue hover:text-white-light-grey text-cs-dark-blue border border-opacity-5 border-cs-dark-blue text-medium-sm w-full p-3">
                        Add To Cart
                    </button>
                    <button className="rounded-sm font-semibold hover:bg-cs-dark-blue hover:text-white-light-grey text-cs-dark-blue border border-opacity-5 border-cs-dark-blue text-medium-sm w-full p-3">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
