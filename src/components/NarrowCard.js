import React from 'react'

function NarrowCard() {
  return (
    <>
    <div className='mt-0'>
        <p className="text-cs-dark-blue text-sm">Things to do next</p>
        <div className="grid grid-cols-1 gap-2 mt-2 max-w-[640px] overflow-hidden shadow-lg text-cs-dark-blue bg-white p-4 rounded-md">
        <div className="px-0 py-0">
            <div className="font-bold text-sm mb-2">The Coldest Sunset</div>
            <p className="text-cs-dark-blue text-medium-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <button className="bg-cs-dark-blue border hover:bg-white text-white hover:text-cs-dark-blue hover:border hover:border-cs-dark-blue max-w-[150px] text-medium-sm py-2 px-4 rounded">
        Button
        </button>
        </div>
        </div>
    </>
  )
}

export default NarrowCard