import ProductCard from '@/components/ProductCard';
import React from 'react'

export default function Page() {
    const nums = [];
    for (let i = 1; i < 9; i++) {
        nums.push(i);
    }
  return (
    <div className="pt-12 pb-4 px-4 w-full">
        <div className='mt-8 w-full grid grid-cols-2 justify-center align-middle'>
            <h1 className="font-semibold uppercase text-sm">Shop All</h1>
            <p className="font-light text-xs text-right cursor-pointer">Filter</p>
        </div>
        <ul className='grid md:grid-cols-4 sm:grid-cols-2 gap-4'>
        { nums.map(number => (
            <li key={number} className='list-none'>
                <ProductCard />
            </li>
        ))}
        </ul>
    </div>
  )
}
