'use client'
import React, { useState } from "react";
import IconComponent from "./IconComponents";

function SmallCard({color, heading, content, iconname, caption}) {
    // const [colorbg, setcolorbg]= useState();
    // setcolorbg(color);
    // console.log(colorbg);
    return (
        <>
        <div 
        className="h-auto w-full max-w-[200px] text-cs-dark-blue rounded-md bg-white border my-4"
        style={{border:`1px solid  ${color}`,}}>
            <div className="grid grid-cols-1 gap-0 w-full h-full items-center justify-center px-0 py-0">
            <div className="flex items-center flex-nowrap justify-between px-2 pt-2">
                <h5 className="pl-2 font-semibold text-medium-sm">{heading}</h5>
                <button className="hover:bg-white !hover:text-black-green text-cs-dark-blue w-fit text-sm py-0 px-2 rounded">
                <IconComponent
                    name="IoIosArrowDown"
                    size="12px"
                    color="cs-dark-blue"
                    className="w-fit "
                />
                </button>
            </div>
            <div className="grid grid-cols-[1fr_auto] align-middle items-center justify-center place-content-between w-full py-4 px-4 pb-2 pt-2 gap-2">
                <p className="text-cs-dark-blue !text-md">
                {caption}
                </p>
            <div className="flex justify-center flex-row items-center flex-nowrap gap-2">
                <p className="text-cs-dark-blue text-xl font-light">
                {content}
                </p>
                <IconComponent
                name={iconname}
                size="1rem"
                color="cs-dark-blue"
                className="w-fit"
                />
            </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default SmallCard;
