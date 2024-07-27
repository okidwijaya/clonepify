"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function RightSideSlider(props) {
    const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1,
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
        },
    };

    return (
        <>
        <div className="w-full grid grid-cols-1">
            <div className="w-full max-w-[500px]">
            <div className="mb-4 w-full">
                <h2 className="text-5xl text-[#121212]">Get To Know</h2>
            </div>
            </div>
            <div className="w-full max-w-[1440px]">
            <div className="w-full slider-container">
                <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["dekstop", "tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                arrows={false}
                >
                <div className="w-100 max-w-[344px] py-4 px-8 rounded-md mr-4 text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Compatability</p>
                    <h2 className="text-2xl text-[#121212]">Work Great Together</h2>
                </div>
                <div className="w-100 max-w-[344px] py-4 px-8 rounded-md mr-4 text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Compatability</p>
                    <h2 className="text-2xl text-[#121212]">Work Great Together</h2>
                </div>
                <div className="w-100 max-w-[344px] py-4 px-8 rounded-md mr-4 text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Compatability</p>
                    <h2 className="text-2xl text-[#121212]">Work Great Together</h2>
                </div>
                <div className="w-100 max-w-[344px] py-4 px-8 rounded-md mr-4 text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Compatability</p>
                    <h2 className="text-2xl text-[#121212]">Work Great Together</h2>
                </div>
                <div className="w-100 max-w-[344px] py-4 px-8 rounded-md mr-4 text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Compatability</p>
                    <h2 className="text-2xl text-[#121212]">Work Great Together</h2>
                </div>
                <div className="w-100 max-w-[344px] py-4 px-8 rounded-md mr-4 text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Compatability</p>
                    <h2 className="text-2xl text-[#121212]">Work Great Together</h2>
                </div>
                {/* <div className="w-100 max-w-[344px] rounded-md mr-4 text-white bg-[#BFBEE0] min-h-[560px]">Item 1</div>
                <div className="w-100 max-w-[344px] rounded-md mr-4 text-white bg-[#81B428] min-h-[560px]">Item 2</div>
                <div className="w-100 max-w-[344px] rounded-md mr-4 text-white bg-[#FAFAFA] min-h-[560px]">Item 3</div>
                <div className="w-100 max-w-[344px] rounded-md mr-4 text-white bg-[#232325] min-h-[560px]">Item 4</div>
                <div className="w-100 max-w-[344px] rounded-md mr-4 text-white bg-[#201412] min-h-[560px]">Item 5</div>
                <div className="w-100 max-w-[344px] rounded-md mr-4 text-white bg-[#F86B4D] min-h-[560px]">Item 6</div> */}
                </Carousel>
            </div>
            </div>
        </div>
        </>
    );
}
