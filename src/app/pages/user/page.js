'use client'
import React, { useState } from 'react'
import { redirect } from "next/navigation";

export default function page() {
    const[activeTabs, setActiveTab] = useState(1);
    redirect('/pages/user/login');

    return (
        <div className="min-h-screen w-full justify-between p-0 mx-auto relative">r
            {/* <div class="tabs">
                <button className={activeTabs === 1 ? 'block' : 'hidden'} onClick={() => setActiveTab(1)}>Login</button>
                <button className={activeTabs === 2 ? 'block' : 'hidden'} onClick={() => setActiveTab(2)}>Register</button>
            </div>

            <div className='tab_contents'>
                {activeTabs === 1 && <><Login /></>}
                {activeTabs === 2 && <><Register /></>}
            </div> */}
        </div>
    )
}