import React from "react";
import Slider from "react-slick";
import hexconTrangle from "../assets/image/hexconTrangle.webp";
import BlockChainEllips from "../assets/image/BlockChainEliips.webp";
import { HexconTrangle } from "./common/Helper";

const BlockChain = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    slidesToShow: 4,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden  z-10">
      <div className="max-w-[1140px] px-3 mx-auto pt-12 sm:pt-10 md:pt-20 ">
        <h2 className="ff-Recharge font-normal text-2xl sm:text-3xl lg:text-[40px] text-[#02CDCF] leading-[35px] sm:leading-[40px] lg:leading-[50.4px] text-center ">
          Blockchain & AI technology
        </h2>
        <p className=" font-Poppins font-normal text-sm sm:text-base text-white leading-[25.6px] opacity-70 pt-4 max-w-[997px] mx-auto text-center">
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
        <p className=" ff-Recharge font-bold text-base sm:text-lg md:text-xl text-white leading-[24px] md:leading-[32px] max-w-[684px] mx-auto text-center pt-12 sm:pt-16 lg:pt-24">
          By building the software on blockchain, Nexai provides the following
          advantages
        </p>
      </div>{" "}
      <div className="max-w-[1200px] 2xl:max-w-[1536px] ms-auto ps-3 overflow-hidden py-12 sm:py-16 md:py-20 ">
        <Slider {...settings}>
          {HexconTrangle.map((eventOne, indexOnce) => (
            <div key={indexOnce}>
              <div
                className={`${eventOne.className} relative overflow-hidden max-w-[320px] sm:max-w-[340px] group cursor-pointer`}
              >
                <img className="w-full" src={hexconTrangle} alt="hexcon" />
                <div className="absolute top-0 right-0 bottom-0 w-full h-full flex justify-center items-center flex-col">
                  <div className="w-[58px] h-[58px] rounded-[58px] bg-[#040404] shadow-[0_4px_16px_0_#02CDCF99_inset] flex justify-center items-center">
                    <p className="ff-Recharge font-bold text-xl sm:text-2xl md:text-[32px] text-white leading-[40px] sm:leading-[45px] md:leading-[51.2px] group-hover:text-[#02CDCF] duration-300 ease-linear ">
                      {eventOne.CirclePhara}
                    </p>
                  </div>
                  <p className="ff-Recharge font-bold text-base sm:text-lg md:text-xl text-white leading-[24px] sm:leading-[32px] text-center max-w-[212px] mx-auto pt-[30px] group-hover:text-[#02CDCF] duration-300 ease-linear">
                    {eventOne.heading}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>{" "}
      <div className="bg-[#02CDCF] w-[228px] h-[140px]  lg:h-[160px]  absolute right-[-6%] top-[25%] blur-[190px] z-[-1] "></div>
      <div className="bg-[#02CDCF] w-[228px] h-[140px]  lg:h-[160px]  absolute left-[-10%] top-[30%] blur-[190px] z-[-1] "></div>
      <div className=" absolute right-0 top-0 z-[-1] max-w-[40px] sm:max-w-[60px]  ">
        <img src={BlockChainEllips} alt="img" />
      </div>
    </div>
  );
};

export default BlockChain;
