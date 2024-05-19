import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='w-full min-h-96 flex items-center bg-[#323232] text-white mt-12'>
    <div className='w-full p-4 grid md:grid-cols-4 sm:grid-cols-1'>
        <div className='grid grid-cols-1'>
            <h1>LOGO</h1>
            <p>Brand description</p>
        </div>
        <div className='grid grid-cols-1'>
            <ul className='grid grid-cols-1'>
                <li>
                    <Link href="#">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Privacy Policy
                    </Link>
                </li>
            </ul>
        </div>
        <div className='grid grid-cols-1'>
            <ul className='grid grid-cols-1'>
                <li>
                    <Link href="#">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Privacy Policy
                    </Link>
                </li>
            </ul>
        </div>
        <div className='grid grid-cols-1'>
            <ul className='grid grid-cols-3'>
                <li>
                    <Link href="#">
                        IG
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        TW
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        FB
                    </Link>
                </li>
            </ul>
            <div className='grid grid-cols-1'>
                <label>Newsletters</label>
                <input className='w-full py-2 px-4 border border-black' type="email" placeholder="Email Address" />
            </div>
        </div>
    </div>
    </div>
  )
}
