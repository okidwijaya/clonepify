"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function RightSideSlider(props) {
    const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
        },
        tablet: {
        breakpoint: { max: 1024, min: 414 },
        items: 2,
        slidesToSlide: 1,
        },
        mobile: {
        breakpoint: { max: 414, min: 0 },
        items: 1,
        slidesToSlide: 1,
        },
    };

    return (
        <>
        <div className="w-full grid grid-cols-1">
            <div className="w-full max-w-[500px]">
            <div className="mb-4 w-full">
                <h2 className="md:text-5xl text-2xl uppercase text-[#121212]">Get To Know</h2>
            </div>
            </div>
            <div className="w-full max-w-[1440px]">
            <div className="w-full slider-container">
                {/* <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
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
                arrows={true}
                > */}
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="carousel-container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass="carousel-item-padding-40-px"
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable={true}
            >
                <div className="w-100 max-w-[414px] py-4 px-4 rounded-md text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Shopify Themes</p>
                    <h2 className="text-2xl text-[#121212]">Shopify Themes Customization</h2>
                </div>
                <div className="w-100 max-w-[414px] py-4 px-4 rounded-md text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Shopify App</p>
                    <h2 className="text-2xl text-[#121212]">Shopify App Remix, Shopify App Extension and Shopify Function</h2>
                </div>
                <div className="w-100 max-w-[414px] py-4 px-4 rounded-md text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Javascipt</p>
                    <h2 className="text-2xl text-[#121212]">React JS</h2>
                </div>
                <div className="w-100 max-w-[414px] py-4 px-4 rounded-md text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Javascipt</p>
                    <h2 className="text-2xl text-[#121212]">Next JS</h2>
                </div>
                <div className="w-100 max-w-[414px] py-4 px-4 rounded-md text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Javascipt</p>
                    <h2 className="text-2xl text-[#121212]">Express JS</h2>
                </div>
                <div className="w-100 max-w-[414px] py-4 px-4 rounded-md text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Javascipt</p>
                    <h2 className="text-2xl text-[#121212]">Angular JS</h2>
                </div>
                <div className="w-100 max-w-[414px] py-4 px-4 rounded-md text-[#121212] border border-[#121212] bg-[#FFFFFF] min-h-[560px]">
                    <p className="text-[#121212]">Python</p>
                    <h2 className="text-2xl text-[#121212]">Django Api</h2>
                </div>
                {/* <div className="w-100 max-w-[414px] rounded-md mr-4 text-white bg-[#BFBEE0] min-h-[560px]">Item 1</div>
                <div className="w-100 max-w-[414px] rounded-md mr-4 text-white bg-[#81B428] min-h-[560px]">Item 2</div>
                <div className="w-100 max-w-[414px] rounded-md mr-4 text-white bg-[#FAFAFA] min-h-[560px]">Item 3</div>
                <div className="w-100 max-w-[414px] rounded-md mr-4 text-white bg-[#232325] min-h-[560px]">Item 4</div>
                <div className="w-100 max-w-[414px] rounded-md mr-4 text-white bg-[#201412] min-h-[560px]">Item 5</div>
                <div className="w-100 max-w-[414px] rounded-md mr-4 text-white bg-[#F86B4D] min-h-[560px]">Item 6</div> */}
                </Carousel>
            </div>
            </div>
        </div>
        </>
    );
}
