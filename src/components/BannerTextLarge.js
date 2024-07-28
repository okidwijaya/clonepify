import Link from 'next/link'
import React from 'react'

export default function BannerTextLarge() {
  return (
    <div className='w-full px-4 max-w-[1190px] mx-auto'>
      <div className='grid grid-cols-[1fr_auto] mb-4 w-full items-center justify-between'>
      <h1 className="text-[#121212] uppercase md:text-5xl text-2xl w-100 max-w-[400px]">
        About
      </h1>
      <Link href="/">[more]</Link>
      </div>
      <div className="flex flex-col justify-between w-100 py-4 px-4 border rounded-[16px] text-[#121212] border-[#c0c0c0] bg-[#FFFFFF] min-h-[560px]">
        <h1 className="md:text-7xl text-3xl w-100 max-w-[445px]">
          If you can dream it,
          You can do it.
        </h1>
        <p>
          Delivering creativity with our design &
          solutions
          Passionate delivering creative design solutions for impactful results.
        </p>
      </div>
    </div>
  )
}
