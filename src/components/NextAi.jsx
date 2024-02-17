import React from "react";
import Button from "./common/Button";
import NextAiImg from "../assets/image/NextAiMainImg.webp";
const NextAi = () => {
  return (
    <div className="px-3 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 ">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-24 py-12 sm:py-16  border border-[#FCFCFC] bg-[url(../src/assets/image/NextAiBg.webp)] bg-cover bg-no-repeat bg-center rounded-[32px] xl:min-h-[810px] overflow-hidden relative flex items-center z-[1]  ">
        <div className=" flex lg:flex-row flex-wrap flex-col-reverse items-center -mx-3 ">
          <div className="w-full lg:w-6/12 px-3 pt-6 lg:pt-0">
            <h2 className="ff-Recharge font-normal text-2xl sm:text-[30px] lg:text-[40px] text-[#02CDCF] leading-[35px] sm:leading-[40px] lg:leading-[50.4px] ">
              What is NexAi?
            </h2>
            <p className=" font-Poppins font-normal text-sm sm:text-base text-white leading-[22px] sm:leading-[25.6px] opacity-70 pt-4">
              Beyond its convenience, Nexai revolutionizes the way you interact
              with your home environment. It enhances productivity, efficiency,
              and overall well-being. From managing your schedules to
              transforming the way you experience smart living, Nexai opens up a
              world of possibilities.
            </p>
            <p className=" max-[400px]:hidden font-Poppins font-normal text-sm sm:text-base text-white leading-[22px] sm:leading-[25.6px] opacity-70 pt-2">
              Nexai's software can be installed on all your smart devices,
              including smartphones, computers, smart TVs, and kitchen
              appliances. It acts as a centralized control hub, allowing you to
              manage and interact with all your devices seamlessly. Whether it's
              adjusting the temperature, turning on appliances, or even
              accessing files on your home computer from anywhere, Nexai
              empowers you with effortless control.
            </p>
            <Button btn="Learn More" classname="mt-6 sm:mt-9 md:mt-12" />
          </div>
          <div className="w-full lg:w-6/12 px-3 ">
            {" "}
            <div className=" mix-blend-Lighten">
              <img
                className="rounded-3xl mx-auto"
                src={NextAiImg}
                alt="NextAiImg"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#02CDCF] w-[228px] h-[140px]  lg:h-[160px]  absolute right-[-10%] top-[40%] blur-[200px] z-[-1] "></div>
        <div className="bg-[#02CDCF] w-[228px] h-[140px]  lg:h-[160px]  absolute left-[-10%] bottom-0 blur-[180px] z-[-1] "></div>
      </div>
    </div>
  );
};

export default NextAi;
