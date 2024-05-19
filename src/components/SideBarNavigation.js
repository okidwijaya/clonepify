"use client";
import React from "react";
import IconComponent from "./IconComponents";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarNavigation() {
    const pathname = usePathname();
    return (
        <>
        <div
            className="
                h-[80vh] grid grid-cols-1 place-content-between w-full max-w-[200px] bg-white ml-4 text-cs-dark-blue p-4 rounded-md border
            "
        >
            {/* fixed top-[10%] left-[5%] */}
            <ul className="grid grid-cols-1 gap-0">
            <li
                className={`${
                pathname === "/pages/store" ? "bg-cs-dark-blue text-white " : " "
                } p-2 rounded-md`}
            >
                <Link
                href="/pages/store"
                className="grid grid-cols-[auto_1fr] w-full gap-2 text-medium-sm"
                >
                <IconComponent
                    name="HiHome"
                    size="16px"
                    color="cs-dark-blue"
                    className="w-fit"
                />
                Home
                </Link>
            </li>
            <li
                className={`${
                pathname === "/pages/store/order"
                    ? "bg-cs-dark-blue text-white "
                    : " "
                } p-2 rounded-md`}
            >
                <Link
                href="/pages/store/order"
                className="grid grid-cols-[auto_1fr] w-full gap-2 text-medium-sm"
                >
                <IconComponent
                    name="FaInbox"
                    size="16px"
                    color="cs-dark-blue"
                    className="w-fit"
                />
                Orders
                </Link>
            </li>
            <li
                className={`${
                pathname === "/pages/store/product"
                    ? "bg-cs-dark-blue text-white "
                    : " "
                } p-2 rounded-md`}
            >
                <Link
                href="/pages/store/product"
                className="grid grid-cols-[auto_1fr] w-full gap-2 text-medium-sm"
                >
                <IconComponent
                    name="IoMdPricetag"
                    size="16px"
                    color="cs-dark-blue"
                    className="w-fit"
                />
                Products
                </Link>
            </li>
            <li className="p-2">
                <Link
                href="/"
                className="grid grid-cols-[auto_1fr] w-full gap-2 text-medium-sm"
                >
                <IconComponent
                    name="BsFillFileBarGraphFill"
                    size="16px"
                    color="cs-dark-blue"
                    className="w-fit"
                />
                Analitics
                </Link>
            </li>
            <li className="p-2">
                <Link
                href="/"
                className="grid grid-cols-[auto_1fr] w-full gap-2 text-medium-sm"
                >
                <IconComponent
                    name="TbTargetArrow"
                    size="16px"
                    color="cs-dark-blue"
                    className="w-fit"
                />
                Marketing
                </Link>
            </li>
            <li className="p-2">
                <Link
                href="/"
                className="grid grid-cols-[auto_1fr] w-full gap-2 text-medium-sm"
                >
                <IconComponent
                    name="BiSolidDiscount"
                    size="16px"
                    color="cs-dark-blue"
                    className="w-fit"
                />
                Discount
                </Link>
            </li>
            </ul>
            <ul>
            <li className="p-2">
                <Link
                href="/"
                className="grid grid-cols-[auto_1fr] w-full gap-2 text-medium-sm"
                >
                <IconComponent
                    name="IoMdSettings"
                    size="16px"
                    color="cs-dark-blue"
                    className="w-fit"
                />
                Settings
                </Link>
            </li>
            </ul>
        </div>
        </>
    );
}
