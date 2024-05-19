'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BannerImage from "../../public/assets/images/image-placeholder-removebg-preview.png";
import IconComponent from "./IconComponents";

function BasicTable() {
    const [productsList, setProductsList] = useState([]);
    const [checkboxInput, setCheckboxInput] = useState({});

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxInput(prevCheckboxInput => ({ ...prevCheckboxInput, [name] : checked }));
    }
    console.log(checkboxInput);

    const getProducts = () => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`)
            .then((res) => {
                setProductsList(res.data);
                console.log("response", res.data);
            })
            .then(() => {
                console.log("state", productsList);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    useEffect(() => {
        getProducts();

        console.log("getProducts", productsList);
    }, []);
    return (
            <table className="table-auto min-w-full leading-normal overflow-hidden rounded-md">
                <thead>
                    <tr>
                        <th className="px-3 py-3 border-b border-b-cs-dark-blue bg-transparent text-cs-dark-blue text-left text-xs font-semibold uppercase tracking-wider">
                            Product
                        </th>
                        <th className="text-center mx-auto px-3 py-3 border-b border-b-cs-dark-blue bg-transparent text-cs-dark-blue text-xs font-semibold uppercase tracking-wider">
                            Status
                        </th>
                        <th className="text-center mx-auto px-3 py-3 border-b border-b-cs-dark-blue bg-transparent text-cs-dark-blue text-xs font-semibold uppercase tracking-wider">
                            Inventory
                        </th>
                        <th className="text-center mx-auto px-3 py-3 border-b border-b-cs-dark-blue bg-transparent text-cs-dark-blue text-xs font-semibold uppercase tracking-wider">
                            Category
                        </th>
                        <th className="text-center mx-auto px-3 py-3 border-b border-b-cs-dark-blue bg-transparent text-cs-dark-blue text-xs font-semibold uppercase tracking-wider">
                            Vendor
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {productsList.length > 0 ? (
                        productsList.map((product, index) => (
                            <tr className="w-full" key={index}>
                                <td className="px-3 py-3 border-b border-white-light-grey bg-transparent text-cs-dark-blue text-medium-sm grid grid-cols-[22px_40px_max-content] items-center gap-3 w-full h-full">
                                    <label>
                                        <IconComponent
                                            name={ checkboxInput[product.name] ? "IoMdCheckboxOutline":"MdCheckBoxOutlineBlank"}
                                            size="20px"
                                            color="cs-dark-blue"
                                            className="w-fit"
                                        />
                                        <input
                                        type="checkbox"
                                        name={product.name}
                                        onChange={handleCheckboxChange}
                                        checked={checkboxInput[product.name] || false}
                                        style={{display: 'none'}}
                                        />
                                    </label>
                                    {product.image ? (
                                        <Image
                                            src={product.image}
                                            priority
                                            className="w-full h-auto aspect-square object-contain bg-white rounded-md"
                                            width={40}
                                            height={40}
                                            alt="Picture of the author"
                                        />
                                    ) : (
                                        <Image
                                            src={BannerImage}
                                            priority
                                            className="w-full h-auto aspect-square object-contain bg-white rounded-md"
                                            width={40}
                                            height={40}
                                            alt="Picture of the author"
                                        />
                                    )}
                                    <div>
                                    <p>{product.name}</p>
                                    </div>
                                </td>
                                <td className="h-full px-3 py-3 border-b border-white-light-grey bg-transparent text-cs-dark-blue text-medium-sm">
                                    <div className="grid grid-cols-[max-content_8px] items-center gap-2 w-max mx-auto align-middle text-center">
                                        {product.status ? product.status : <></>}
                                        <IconComponent
                                            name="GoDotFill"
                                            size="8px"
                                            color={`${product.status ? "#337357" : "#a41726"}`}
                                            className="w-fit"
                                        />
                                    </div>
                                </td>
                                <td className="h-full px-3 py-3 border-b border-white-light-grey bg-transparent text-cs-dark-blue text-medium-sm w-max mx-auto align-middle text-center">
                                    {product.stock ? product.stock : "-"}
                                </td>
                                <td className="h-full px-3 py-3 border-b border-white-light-grey bg-transparent text-cs-dark-blue text-medium-sm w-max mx-auto align-middle text-center">
                                    {product.collection ? product.collection : "-"}
                                </td>
                                <td className="h-full px-3 py-3 border-b border-white-light-grey bg-transparent text-cs-dark-blue text-medium-sm w-max mx-auto align-middle text-center">
                                    {product.vendor ? product.vendor : "-"}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>
                            <h6 style={{ color: "#121212" }}>Null...</h6>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
    );
}

export default BasicTable;
