'use client'
import React, { useState } from "react";
import IconComponent from "./IconComponents";

const ChannelsStatus = () => {
    const [val, setVal] = useState('online');
    const options = [
        { label: 'Online Store', value: 'online' },
        { label: 'Shop', value: 'shop' },
    ];
    const handleChange = (e) => {
        setVal(e.target.value);
    };
    return (
        <>
        <div className="w-full max-w-[150px] bg-white text-cs-dark-blue p-0 rounded-md border">
            <label className="grid grid-cols-1 gap-2 relative">
                <select className="text-medium-sm appearance-none rounded-md py-2 px-4 overflow-hidden bg-white" value={val} onChange={handleChange}>
                {options.map((option) => (
                    <option className="text-medium-sm" key={option.value} value={option.value}>{option.label}</option>
                ))}
                </select>
                <div className="absolute right-2 top-3">
                    <IconComponent 
                        name="IoIosArrowDown"
                        size="12px"
                        color="cs-dark-blue"
                        className="w-fit "
                    />
                </div>
            </label>
        </div>
        </>
    );
};

export default ChannelsStatus;
