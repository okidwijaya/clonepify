import React from 'react';
import ProductCardSmall from '@/components/ProductCardSmall';

export default function page() {
  return (
    <div className="pt-12 pb-4 px-4 w-full">
        <div className='mt-8 w-full max-w-[300px] mx-auto grid grid-cols-2 justify-center align-middle gap-2'>
            <h1 className="w-fit mx-auto text-center border-b border-b-[#121212] font-semibold uppercase text-sm cursor-pointer">Cart</h1>
            <p className="w-fit mx-auto text-center border-b border-b-[#121212] font-semibold uppercase text-sm cursor-pointer">Wishlist</p>
        </div>
        <div className='mt-8 w-full grid md:grid-cols-[1fr_300px] sm:grid-cols-1 max-w-[1024px] mx-auto gap-8'>
            <div>
                <p className='py-2 px-4 w-full uppercase font-bold'>Cart</p>
                <div>
                    <ul>
                        <li>
                            <ProductCardSmall />
                        </li>
                        <li>
                            <ProductCardSmall />
                        </li>
                        <li>
                            <ProductCardSmall />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full bg-gray-100 h-fit mt-12'>
                <p className='pb-2 pt-4 mb-4 px-4 w-full uppercase font-bold border-b border-b-[#121212]'>Order Summary</p>
                <div className='w-full h-full flex flex-col gap-2'>
                    <div className='mt-2 w-full grid grid-cols-2 px-4'>
                        <p className="font-normal text-sm">Shipping</p>
                        <p className="font-light text-xs text-right cursor-pointer">$20.00</p>
                    </div>
                    <div className='mt-2 w-full grid grid-cols-2 px-4'>
                        <p className="font-normal text-sm">SubTotal</p>
                        <p className="font-light text-xs text-right cursor-pointer">$290.00</p>
                    </div>
                    <div className='mt-2 w-full grid grid-cols-2 px-4'>
                        <p className="font-normal text-sm">Total</p>
                        <p className="font-light text-xs text-right cursor-pointer">$310.00</p>
                    </div>
                    <button className='mt-4 p-4 bg-[#121212] uppercase text-base w-full font-bold text-white'>checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}
