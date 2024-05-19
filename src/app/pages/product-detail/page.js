import React from 'react';
import Image from 'next/image';
import product1 from '../../../../public/assets/images/image-placeholder.png';

export default function page() {
  return (
    <div className='mt-8 grid md:grid-cols-2 sm:grid-cols-1 w-full p-4 mx-auto'>
        <div className='grid grid-cols-2'>
            <Image className="w-full max-w-52 h-full object-cover"
                src={product1}
                alt="Picture of banner"
                width={2560}
                height={1024}
                />
            <Image className="w-full max-w-52 h-full object-cover"
                src={product1}
                alt="Picture of banner"
                width={2560}
                height={1024}
                />
            <Image className="w-full max-w-52 h-full object-cover"
                src={product1}
                alt="Picture of banner"
                width={2560}
                height={1024}
                />
            <Image className="w-full max-w-52 h-full object-cover"
                src={product1}
                alt="Picture of banner"
                width={2560}
                height={1024}
                />
        </div>
        <div className='mt-8 w-full max-w-[350px]'>
            <h1 className="md:text-xl lg:text-4xl">Product Name</h1>
            <p className='font-normal py-2 text-base text-left'>$290.00</p>
            <button className='p-4 bg-[#FFF] uppercase text-base w-full font-bold text-[#121212]'>Add to cacrt</button>
            <button className='p-4 bg-[#121212] uppercase text-base w-full font-bold text-white'>checkout</button>
            <p className='font-light py-2 text-sm text-left'>Product description</p>
        </div>
    </div>
  )
}
