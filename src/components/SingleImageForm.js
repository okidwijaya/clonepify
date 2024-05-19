"use client";
import Image from "next/image";
import React, { useState } from "react";
import BannerImage from "../../../../../../public/assets/images/image-placeholder-removebg-preview.png";

const SingleImageForm = () => {
    const [mainImagePreview, setMainImagePreview] = useState();
    return (
        <>
            <div className="relative">
                {mainImagePreview ? (
                    <Image
                        src={mainImagePreview}
                        priority
                        className="w-full max-w-full h-full aspect-square object-contain bg-white rounded-md"
                        width={1440}
                        height={600}
                        alt="Picture of the author"
                    />
                ) : (
                    <Image
                        src={BannerImage}
                        priority
                        className="w-full max-w-full h-full aspect-square object-contain bg-white rounded-md"
                        width={1440}
                        height={600}
                        alt="Picture of the author"
                    />
                )}
                <input
                    type="file"
                    name="main_img"
                    className="w-full h-full absolute top-0 left-0 z-10 opacity-0 cursor-cell"
                    onChange={({ target }) => {
                        if (target.files) {
                            const file = target.files[0];
                            setMainImagePreview(URL.createObjectURL(file));
                        }
                    }}
                />
            </div>
        </>
    );
};

export default SingleImageForm;
