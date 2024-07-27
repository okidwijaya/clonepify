"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function BlogpostsCard() {
  const [blogpost, setBlogpost] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/blogposts/`)
        .then((res) => {
          setBlogpost(res.data);
          console.log("response", res.data);
        })
        .then(() => {
          console.log("state", blogpost);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getProducts();

    console.log("getblogposts", blogpost);
  }, []);
  return (
    <>
      <h1 className="text-[#121212] text-5xl w-100 max-w-[400px]">
        News
      </h1>
      <ul
        className="flex flex-wrap flex-row w-full mx-auto justify-start"
      >
        {blogpost.length > 0 ? (
          blogpost.map((blog, index) => (
            <li className="w-full max-w-[350px] cursor-pointer" key={index}>
              <div className="max-w-sm rounded-md mr-4 text-[#121212] border border-[#121212] overflow-hidden">
                {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                <div className="px-6 py-4">
                  <div className="text-xl mb-2">{blog.title}</div>
                  <p className="text-base" style={{ visibility: 'hidden', height: '0', width: '0'}}>
                  {blog.content}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {blog.tags}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {blog.blog}
                  </span>
                  {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span> */}
                </div>
              </div>
            </li>
          ))
        ) : (
          <p style={{ color: "#ffff" }}>Loading...</p>
        )}
      </ul>
    </>
  );
}
