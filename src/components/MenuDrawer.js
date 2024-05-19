'use client'
import React from 'react';
import Link from 'next/link'

function MenuDrawer() {
  return (
    <div className="w-full">
        <ul className="relative text-slate-300 w-fit my-auto mr-auto ml-0 grid grid-cols-1 justify-start text-left gap-4 py-8 px-4">
            <li className="cursor-pointer hover:border-b-2 border-b-slate-300 w-max font-normal uppercase text-2xl">
              <Link href="pages/shopall">
                Shop All
              </Link>
            </li>
            <li className="cursor-pointer hover:border-b-2 border-b-slate-300 w-max font-normal uppercase text-2xl">
              <Link href="/pages/collection">
                Collections
              </Link>
            </li>
            <li className="cursor-pointer hover:border-b-2 border-b-slate-300 w-max font-normal uppercase text-2xl">About</li>
            <li className="cursor-pointer hover:border-b-2 border-b-slate-300 w-max font-normal uppercase text-2xl">News</li>
        </ul>
        <ul className="relative text-slate-300 w-fit my-auto mr-auto ml-0 grid grid-cols-1 justify-start text-left gap-4 py-8 px-4">
            <li className="cursor-pointer hover:border-b-2 border-b-slate-300 w-max font-extralight text-xs">Privacy Policy</li>
            <li className="cursor-pointer hover:border-b-2 border-b-slate-300 w-max font-extralight text-xs">Contact Us</li>
        </ul>
        <ul className="relative text-slate-300 w-fit my-auto mr-auto ml-0 grid grid-cols-1 justify-start text-left gap-4 py-8 px-4">
            <li className="cursor-pointer hover:border-b-2 border-b-slate-300 w-max font-normal uppercase text-xl">
              <Link href="pages/user/login">
                [*Login]
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default MenuDrawer;