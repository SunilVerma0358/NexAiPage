import React from "react";
import poweredImg from "../assets/image/Powered.webp";
import Button from "./common/Button";
const Powered = () => {
  return (
    <div id="MarketPlace" className="relative overflow-hidden z-[1]">
      <div className="max-w-[1140px] px-3 mx-auto pb-12 sm:py-16 md:py-20 lg:py-36 ">
        <div className="flex flex-wrap flex-row -mx-3">
          <div className="w-full md:w-6/12 px-3 lg:pe-[38px]">
            <div data-aos="zoom-in" className="max-w-[612px] mx-auto relative">
              <img className="w-full" src={poweredImg} alt="powered" />
              <div className="bg-[#02CDCF] w-[228px] h-[140px]  lg:h-[160px]  absolute right-[20%] top-[40%] blur-[170px] z-[-1] "></div>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-3 pt-6 md:pt-0 lg:ps-[38px]">
            <h2 className="ff-Recharge font-normal text-2xl sm:text-3xl lg:text-[40px]  text-[#02CDCF] leading-[35px] sm:leading-[40px] md:lg:leading-[35px] lg:leading-[50.4px] ">
              Ai-Powered Home Assistant
            </h2>
            <p className=" font-Poppins font-normal max-[400px]:text-[12px] text-sm sm:text-base md:text-sm lg:text-base text-white leading-[20px] sm:leading-[25.6px] opacity-70 pt-3 sm:pt-4">
              Nexai is an advanced AI-powered home assistant that brings the
              future to your fingertips. With its ability to engage in natural,
              fluent conversations in over 15 languages,
            </p>
            <p className=" font-Poppins font-normal max-[400px]:text-[12px] text-sm sm:text-base md:text-sm lg-text-base text-white leading-[20px] sm:leading-[25.6px] opacity-70 py-[6px]">
              Nexai offers an incredibly futuristic experience. It can take the
              initiative to ask about your day, schedule meetings, provide
              timely reminders
            </p>
            <p className=" font-Poppins font-normal max-[400px]:text-[12px] text-sm sm:text-base md:text-sm lg-text-base text-white leading-[20px] sm:leading-[25.6px] opacity-70">
              assist with cooking by suggesting ingredients, track your fitness
              and nutrition goals, and even handle bill payments.
            </p>
            <Button
              classname="mt-6 sm:mt-8 lg:mt-10 md:p-[14px_24px] lg:p-[18px_32px]"
              btn="Learn More"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#02CDCF] w-[228px] h-[140px] lg:h-[160px] absolute right-[-10%] top-[40%] blur-[200px] z-[-1] "></div>
    </div>
  );
};

export default Powered;
