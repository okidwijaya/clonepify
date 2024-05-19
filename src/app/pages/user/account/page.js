import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <>
        <div className='h-full bg-white mt-[5rem] grid grid-cols-[0.2fr_1fr] w-full max-w-[1330] ml-auto mr-auto py-4 px-8 gap-7'>
            <div>
                <ul>
                    <li>
                        <Link href="#">My Account</Link>
                    </li>
                    <li>
                        <Link href="#">History</Link>
                    </li>
                    <li>
                        <Link href="#">Billing</Link>
                    </li>
                    <li>
                        <Link href="#">Reports</Link>
                    </li>
                    <li>
                        <Link href="#">Settings</Link>
                    </li>
                </ul>
            </div>
            <div className='h-full w-full rounded-2xl min-h-96 py-3 px-8 bg-white shadow-md'>
                content from menu
            </div>
        </div>
    </>
  )
}

export default page