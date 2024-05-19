'use client'
import React, { useState, useEffect } from 'react';
import MenuDrawer from './MenuDrawer';
import Link from 'next/link';
import IconComponent from './IconComponents';

function TopNavigation() {
    const [drawerState, setDrawerState] = useState(false);
    const [isLogin, isLoggedIn] = useState(false);

    const drawerToggle = () => {
        setDrawerState(!drawerState);
    };

    const handleLogout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        isLoggedIn(false);
        console.log("logout");
    };

    // const handleLogout = async () => {
    //     try {
    //         await api.post('/api/logout/');
    //         logout();
    //     } catch (error) {
    //         console.error('Logout failed', error);
    //     }
    // };
    let getUserfromLocalStorage;

    const getTokenUser = () => {
        getUserfromLocalStorage = localStorage.getItem("access");
        console.log(isLogin, getUserfromLocalStorage);
        if (getUserfromLocalStorage) {
            isLoggedIn(true);
            // console.log(isLogin, getUserfromLocalStorage);
            console.log(localStorage.getItem("access"));
            console.log(localStorage.getItem("refresh"));
        }
    }

    useEffect(() => {
        if (window.localStorage !== "undefined") {
            getTokenUser();
        } else {
            null
        }
    }, []);

    return (
        <div className='w-full max-w-[100%] fixed top-0 pt-4 px-4 left-0 z-20 bg-white'>
            <div className="bg-black-navy p-4 bg-white rounded-2xl w-full max-w-[1130px] mx-auto shadow-sm">
                <nav className="grid grid-cols-3 justify-center align-middle gap-4 w-full relative">
                    <div onClick={drawerToggle} className="cursor-pointer">
                        <IconComponent name="GiHamburgerMenu" size="20px" color="white-light-grey" className='w-fit' />
                    </div>
                    <div className="text-center w-full font-semibold uppercase">
                        <Link href="/"><h6>Fashion Style Website</h6></Link>
                    </div>
                    <div className="w-full">
                        <ul className="w-full h-full mr-0 ml-auto flex justify-end align-middle gap-4 items-center">
                            <li className="cursor-pointer w-max font-extralight uppercase text-xs">Search</li>
                            <li className="cursor-pointer w-max font-extralight uppercase text-xs">
                                {isLogin ?
                                    <a href="/pages/notes">
                                        Account
                                    </a> :
                                    <a href="/pages/user/login">
                                        Login
                                    </a>
                                }
                            </li>
                            {isLogin ?
                                (<li className='w-max cursor-pointer pb-[3px]'>
                                    <button className='mx-auto p-0 font-extralight uppercase text-xs' onClick={handleLogout}>Logout</button>
                                </li>) : (
                                    <li className='w-max cursor-pointer' style={{ display: 'none', }}>
                                    </li>)
                            }
                            <li className="cursor-pointer w-max font-extralight uppercase text-xs">Cart</li>
                        </ul>
                    </div>
                </nav>
            </div>
            {drawerState ?
                <div style={{ backgroundColor: '#181818b3', display: drawerState ? "block" : "none" }} className="w-96 h-screen absolute top-0 left-0 pt-8 z-20">
                    <div className="w-full text-right text-slate-300 py-2 px-4">
                        <button onClick={drawerToggle} className="cursor-pointer w-fit font-extralight text-xs uppercase hover:font-semibold">[close]</button>
                    </div>
                    <MenuDrawer />
                </div>
                : null
            }
        </div>
    )
}

export default TopNavigation;