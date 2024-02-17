import React from "react";
import AndMoreImg from "../assets/image/AndMoreImg.webp";
import { Door, Square, Table } from "./common/Helper";
import Slider from "react-slick";

const AndMore = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3.6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="AndMore" className="relative z-10">
      {" "}
      <div className=" absolute left-0 top-0 z-[-1] max-w-[40px] sm:max-w-[60px]  ">
        <img src={AndMoreImg} alt="img" />
      </div>
      <div className="bg-[#02CDCF] w-[140px] h-[140px]  lg:h-[160px]  absolute right-[0%] top-[0%] blur-[200px] z-[-1] "></div>
      <div className="max-w-[1140px] px-3 mx-auto pt-12 sm:pt-16 md:pt-20 ">
        <h2 className="ff-Recharge font-normal text-2xl sm:text-3xl lg:text-[40px] text-[#02CDCF] leading-[35px] sm:leading-[40px] lg:leading-[50.4px] text-center ">
          NexAi does all this. And more.{" "}
        </h2>
        <p className=" font-Poppins font-normal text-sm sm:text-base text-white leading-[22px] sm:leading-[25.6px] opacity-70 pt-4 max-w-[992px] mx-auto text-center">
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
      </div>
      <div className="py-12 sm:py-16 md:py-20">
        {" "}
        <Slider {...settings}>
          {Square.map((event, index) => (
            <div key={index}>
              <div
                className={`${event.className} shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl max-w-[340px] my-5 group cursor-pointer`}
              >
                <h2 className="ff-Recharge font-bold text-lg sm:text-xl md:text-2xl text-white leading-[26px] sm:leading-[32px] md:leading-[38.4px] text-center group-hover:text-[#02CDCF] duration-300">
                  {event.phara}
                </h2>
              </div>
            </div>
          ))}{" "}
        </Slider>
        <div className="SliderTwo">
          {" "}
          <Slider {...settings} rtl="true">
            {Door.map((props, indexTwo) => (
              <div key={indexTwo}>
                <div
                  className={`${props.className} shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl max-w-[340px] my-5 group cursor-pointer`}
                >
                  <h2 className="ff-Recharge font-bold text-lg sm:text-xl md:text-2xl text-white leading-[26px] sm:leading-[32px] md:leading-[38.4px] text-center group-hover:text-[#02CDCF] duration-300">
                    {props.phara}
                  </h2>
                </div>
              </div>
            ))}{" "}
          </Slider>
        </div>
        <Slider {...settings}>
          {Table.map((e, indexOne) => (
            <div key={indexOne}>
              <div
                className={`${e.className} shadow-[0px_4px_20px_0px_#02CDCF29] rounded-2xl max-w-[340px] group cursor-pointer`}
              >
                <h2 className="ff-Recharge font-bold text-lg sm:text-xl md:text-2xl text-white leading-[26px] sm:leading-[32px] md:leading-[38.4px] text-center group-hover:text-[#02CDCF] duration-300">
                  {e.phara}
                </h2>
              </div>
            </div>
          ))}{" "}
        </Slider>
      </div>
    </div>
  );
};

export default AndMore;
