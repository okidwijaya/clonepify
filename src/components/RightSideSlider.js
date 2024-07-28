"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

export default function RightSideSlider(props) {

  return (
    <>
      <div className="w-full grid grid-cols-1">
          <div className="mb-4 w-full px-4 grid grid-cols-[1fr_auto] items-center justify-between max-w-[1190px] mx-auto">
            <h2 className="md:text-5xl text-2xl uppercase text-[#121212] w-full">
              Get To Know
            </h2>
            <Link href="/">[more]</Link>
          </div>
        <div className="w-full max-w-[1440px]">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                0: {
                  slidesPerView: 1.2,
                },
                650:{
                  slidesPerView:2.8
                },
                1000:{
                  slidesPerView: 3.2
                },
                1200:{
                  slidesPerView: 3.8
                }
              }}
          >
            <SwiperSlide>
              <div className="SwiperSlide--item w-100 max-w-[375px] py-4 px-4 rounded-[16px] text-[#121212] border border-[#c0c0c0] bg-[#FFFFFF] min-h-[560px]">
                <p className="text-[#121212]">Shopify Themes</p>
                <h2 className="text-2xl text-[#121212]">
                  Shopify Themes Customization
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SwiperSlide--item w-100 max-w-[375px] py-4 px-4 rounded-[16px] text-[#121212] border border-[#c0c0c0] bg-[#FFFFFF] min-h-[560px]">
                <p className="text-[#121212]">Shopify App</p>
                <h2 className="text-2xl text-[#121212]">
                  Shopify App Remix, Shopify App Extension and Shopify Function
                </h2>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="SwiperSlide--item w-100 max-w-[375px] py-4 px-4 rounded-[16px] text-[#121212] border border-[#c0c0c0] bg-[#FFFFFF] min-h-[560px]">
                <p className="text-[#121212]">Javascipt</p>
                <h2 className="text-2xl text-[#121212]">React JS</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SwiperSlide--item w-100 max-w-[375px] py-4 px-4 rounded-[16px] text-[#121212] border border-[#c0c0c0] bg-[#FFFFFF] min-h-[560px]">
                <p className="text-[#121212]">Javascipt</p>
                <h2 className="text-2xl text-[#121212]">Next JS</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SwiperSlide--item w-100 max-w-[375px] py-4 px-4 rounded-[16px] text-[#121212] border border-[#c0c0c0] bg-[#FFFFFF] min-h-[560px]">
                <p className="text-[#121212]">Javascipt</p>
                <h2 className="text-2xl text-[#121212]">Express JS</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SwiperSlide--item w-100 max-w-[375px] py-4 px-4 rounded-[16px] text-[#121212] border border-[#c0c0c0] bg-[#FFFFFF] min-h-[560px]">
                <p className="text-[#121212]">Javascipt</p>
                <h2 className="text-2xl text-[#121212]">Angular JS</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SwiperSlide--item w-100 max-w-[375px] py-4 px-4 rounded-[16px] text-[#121212] border border-[#c0c0c0] bg-[#FFFFFF] min-h-[560px]">
                <p className="text-[#121212]">Python</p>
                <h2 className="text-2xl text-[#121212]">Django Api</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="SwiperSlide--item w-100 max-w-[375px] py-4 px-4 rounded-[16px] text-[#121212]bg-[#FFFFFF] min-h-[560px]">
                <p className="text-[#121212] invisible">Python</p>
                <h2 className="text-2xl text-[#121212] invisible">Django Api</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

{/* <div className="w-100 max-w-[414px] rounded-md mr-4 text-white bg-[#BFBEE0] min-h-[560px]">Item 1</div>
<div className="w-100 max-w-[414px] rounded-md mr-4 text-white bg-[#81B428] min-h-[560px]">Item 2</div>
<div className="w-100 max-w-[414px] rounded-md mr-4 text-white bg-[#FAFAFA] min-h-[560px]">Item 3</div>
<div className="w-100 max-w-[414px] rounded-md mr-4 text-white bg-[#232325] min-h-[560px]">Item 4</div>
<div className="w-100 max-w-[414px] rounded-md mr-4 text-white bg-[#201412] min-h-[560px]">Item 5</div>
<div className="w-100 max-w-[414px] rounded-md mr-4 text-white bg-[#F86B4D] min-h-[560px]">Item 6</div> */}