import React from "react";
import NextAiNav from "./NextAiNav";
import Button from "./common/Button";

const HeroSection = () => {
  return (
    <div className="bg-[#040404] px-4 sm:px-6 md:px-8 pb-14 relative z-10">
      <div className=" bg-[url(../src/assets/image/HeroMainImg.webp)] h-screen sm:min-h-[810px] bg-no-repeat bg-cover bg-size flex flex-col object-cover relative z-10">
        <div>
          <NextAiNav />
        </div>

        <div id="Home" className="flex grow items-center">
          {" "}
          <div className="max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
            <div className="flex flex-row flex-wrap -mx-3 sm:pt-20 2xl:pt-40">
              <div className="w-full lg:w-7/12 2xl:w-8/12 px-3">
                {" "}
                <h1 className="ff-Recharge font-normal text-3xl sm:text-5xl md:text-[60px] 2xl:text-[75px] text-white leading-[45px] sm:leading-[60px] md:leading-[75.5px] 2xl:leading-[90px] max-w-[1340px] ">
                  <span className="ff-Recharge font-bold text-[#02CDCF]">
                    Nexai
                  </span>{" "}
                  is an advanced AI-powered home assistant
                </h1>
                <p className=" font-Poppins font-normal text-sm sm:text-base text-white leading-[22px] sm:leading-[25.6px] opacity-70 pt-3 sm:pt-4 ">
                  Etiam viverra nec libero a. A id id tempus molestie sed.
                  Fringilla odio.
                </p>{" "}
                <Button classname="mt-6 sm:mt-9 md:mt-12" btn="Know More" />
              </div>
            </div>
          </div>
          <div className=" bg-layer h-[106px] absolute bottom-0 right-0 left-0 w-full blur-2xl"></div>
        </div>
        <div className="bg-[#02CDCF] w-[262px] h-[140px]  lg:h-[262px]  absolute left-0 top-[20%] opacity-30 blur-[140px] z-[-1] "></div>
      </div>
    </div>
  );
};

export default HeroSection;
