import React from 'react'

export default function BannerTextLarge() {
  return (
    <div>
      <h1 className="text-[#121212] uppercase md:text-5xl text-2xl mb-4 w-100 max-w-[400px]">
        About
      </h1>
      <div className="flex flex-col justify-between w-100 py-4 px-4 border rounded-md text-[#121212] border-[#121212] bg-[#FFFFFF] min-h-[560px]">
        <h1 className="md:text-5xl text-3xl w-100 max-w-[400px]">
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
