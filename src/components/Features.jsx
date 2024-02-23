import React from "react";
import { Clock, ClockPlus, FeatureseSvg, Message } from "./common/SvgExport";
const Features = () => {
  return (
    <div id="Features" className="px-3 lg:px-12 py-12 sm:py-16  md:py-20">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-24 border border-[#FCFCFC] bg-[url(../src/assets/image/FeaturesBg.webp)] bg-cover bg-no-repeat bg-center rounded-[32px] overflow-hidden relative z-[1] ">
        <h2 className=" ff-Recharge font-bold text-2xl sm:text-[30px] lg:text-[40px] text-white leading-[35px] sm:leading-[40px] lg:leading-[50.4px] text-center pt-12 sm:pt-16 md:pt-20 ">
          Unique features
        </h2>
        <p className=" font-Poppins font-normal text-sm sm:text-base text-white leading-[22px] sm:leading-[25.6px] text-center max-w-[397px] mx-auto pt-4 opacity-70 pb-8 sm:pb-12">
          ability to engage in natural, fluent conversations in over 15
          languages,
        </p>
        <div className="flex flex-row flex-wrap -mx-3 overflow-y-scroll overflow_hidden max-h-[500px] pt-7 sm:pt-9 md:pt-12">
          <div className="w-full lg:w-6/12 px-3 ">
            {" "}
            <div className=" group cursor-pointer max-w-[364px] bg-white rounded-2xl p-4 sm:p-6 md:p-[30px_24px_56px_24px] mx-auto lg:mx-0">
              <div>
                <Clock />
              </div>
              <h3 className="ff-Recharge font-bold text-[#0B0A0A] text-base sm:text-lg md:text-xl leading-[25px] md:leading-[32px] pt-4 sm:pt-[30px] group-hover:text-[#02CDCF] duration-300">
                Remote Access and File Management
              </h3>
              <p className=" font-Poppins font-normal text-black text-sm sm:text-base leading-[22px] sm:leading-[25.6px] opacity-70 pt-[10px]">
                {" "}
                Imagine you're at work, and you realize you forgot to bring an
                important file stored on your desktop computer at home. No
                worries! Simply open the Nexai app on your phone, initiate a
                call with Nexai, and request access to your computer.{" "}
              </p>
            </div>
            <div className="h-[150px] md:h-[270px]"></div>
            <div className="group cursor-pointer max-w-[364px] bg-white rounded-2xl p-4 sm:p-6 md:p-[30px_24px_56px_24px] mx-auto lg:mx-0">
              <div>
                <Message />
              </div>
              <h3 className=" ff-Recharge font-bold text-[#0B0A0A]  text-base sm:text-lg md:text-xl leading-[25px] md:leading-[32px] pt-4 sm:pt-[30px] group-hover:text-[#02CDCF] duration-300">
                Autonomous and Natural Language Communication
              </h3>
              <p className=" font-Poppins font-normal text-black text-sm sm:text-base leading-[22px] sm:leading-[25.6px] opacity-70 pt-[10px]">
                {" "}
                Nexai goes beyond standard home assistants by taking proactive
                initiatives and engaging in natural language conversations. It
                communicates with you as if you're talking to a friend,
              </p>
            </div>{" "}
            <div className="h-[200px] md:h-[270px]"></div>
            <div className="group cursor-pointer max-w-[364px] bg-white rounded-2xl p-4 sm:p-6 md:p-[30px_24px_56px_24px] mx-auto lg:mx-0">
              <div>
                <Clock />
              </div>
              <h3 className=" ff-Recharge font-bold text-[#0B0A0A]  text-base sm:text-lg md:text-xl leading-[25px] md:leading-[32px] pt-4 sm:pt-[30px] group-hover:text-[#02CDCF] duration-300">
                Remote Access and File Management
              </h3>
              <p className=" font-Poppins font-normal text-black text-sm sm:text-base leading-[22px] sm:leading-[25.6px] opacity-70 pt-[10px]">
                {" "}
                Imagine you're at work, and you realize you forgot to bring an
                important file stored on your desktop computer at home. No
                worries! Simply open the Nexai app on your phone, initiate a
                call with Nexai, and request access to your computer.{" "}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-3">
            <div className="h-[150px] md:h-[270px]"></div>
            <div className="group cursor-pointer max-w-[364px] bg-white rounded-2xl p-4 sm:p-6 md:p-[30px_24px_56px_24px] mx-auto lg:me-0 lg:ms-auto">
              <div>
                <ClockPlus />
              </div>
              <h3 className=" ff-Recharge font-bold text-[#0B0A0A]  text-base sm:text-lg md:text-xl leading-[25px] md:leading-[32px] pt-4 sm:pt-[30px] group-hover:text-[#02CDCF] duration-300">
                {" "}
                Real-time Home Monitoring
              </h3>
              <p className=" font-Poppins font-normal text-black text-sm sm:text-base leading-[22px] sm:leading-[25.6px] opacity-70 pt-[10px]">
                While you're out with your family, you may wonder if you
                remembered to turn off the stove. Thanks to Nexai, this is no
                longer a concern. Using the Nexai app, you can initiate a video
                call with Nexai and activate the mini drone stationed in your
                home.
              </p>
            </div>{" "}
            <div className="h-[150px] md:h-[270px]"></div>
            <div className=" group cursor-pointer max-w-[364px] bg-white rounded-2xl p-4 sm:p-6 md:p-[30px_24px_56px_24px] mx-auto lg:me-0 lg:ms-auto">
              <div>
                <FeatureseSvg />
              </div>
              <h3 className=" ff-Recharge font-bold text-[#0B0A0A]  text-base sm:text-lg md:text-xl leading-[25px] md:leading-[32px] pt-4 sm:pt-[30px] group-hover:text-[#02CDCF] duration-300">
                Intelligent Contextual Awareness
              </h3>
              <p className=" font-Poppins font-normal text-black text-sm sm:text-base leading-[22px] sm:leading-[25.6px] opacity-70 pt-[10px]">
                {" "}
                Nexai utilizes the hardware sensors placed throughout your home
                to understand your location and deliver relevant information or
                actions. For instance, if you're in the bedroom and there's a
                smart TV present, Nexai will automatically display on the TV
                screen.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#02CDCF] rounded-[100px] absolute top-[2%] right-[-25%] w-[262px] h-[262px] blur-[220px] z-[-1]"></div>
        <div className="bg-[#02CDCF] rounded-[100px] absolute bottom-0 left-[-15%] w-[262px] h-[262px] blur-[220px] z-[-1]"></div>
      </div>
    </div>
  );
};

export default Features;
