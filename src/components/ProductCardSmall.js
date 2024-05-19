import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import product1 from '../../public/assets/images/image-placeholder.png';

export default function ProductCardSmall() {
  return (
    <>
        <div className='w-full mb-4 py-2 px-0'>
            <Link href="#" className='w-full grid grid-cols-[70px_1fr_1fr]'>
                <Image className="w-full h-full object-cover"
                    src={product1}
                    alt="Picture of banner"
                    width={2560}
                    height={1024}
                    />
                <div className="grid grid-cols-1 pt-3 w-full h-fit gap-4">
                    <p className='font-light text-xs text-left'>Product Title</p>
                    <p className='font-light text-xs text-left'>$290.00</p>
                </div>
                <div className="w-full text-right text-[#121212] py-2 px-4">
                    <button className="cursor-pointer w-fit font-extralight text-xs uppercase hover:font-semibold">[x]</button>
                </div>
            </Link>
        </div>
    </>
  )
}
