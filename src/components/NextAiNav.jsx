import React, { useState } from "react";
import Button from "./common/Button";

const NextAiNav = () => {
  const [first, setfirst] = useState(false);
  function setopen() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <>
      <div className="max-w-[775px] 2xl:max-w-[900px] sm:px-3 lg:ms-auto lg:me-[120px] pt-[31px]">
        <nav className="flex justify-between items-center">
          <div
            className={`${
              first ? "left-0" : " -left-full"
            } flex gap-6 md:gap-10 max-[768px]:w-full h-screen md:h-full absolute  bg-black top-0 items-center justify-center md:h-unset md:static md:left-0  md:bg-transparent md:justify-end flex-col md:flex-row z-[4]  transition-all ease-linear duration-300 `}
          >
            <ul className="flex items-center gap-5 flex-col md:flex-row">
              <li>
                <a
                  href="#Home"
                  onClick={setopen}
                  className=" font-Poppins font-normal text-base text-white leading-[24px] border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF]"
                >
                  Home
                </a>{" "}
              </li>{" "}
              <li>
                <a
                  href="#MarketPlace"
                  onClick={setopen}
                  className=" font-Poppins font-normal text-base text-white leading-[24px] border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF]"
                >
                  Marketplace
                </a>{" "}
              </li>{" "}
              <li>
                <a
                  href="#AndMore"
                  onClick={setopen}
                  className=" font-Poppins font-normal text-base text-white leading-[24px] border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF]"
                >
                  About
                </a>{" "}
              </li>{" "}
              <li>
                <a
                  href="#Features"
                  onClick={setopen}
                  className=" font-Poppins font-normal text-base text-white leading-[24px] border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF]"
                >
                  NexChat
                </a>
              </li>
              <li>
                <a
                  href="#Token"
                  onClick={setopen}
                  className=" font-Poppins font-normal text-base text-white leading-[24px] border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF]"
                >
                  Tokens
                </a>
              </li>
            </ul>
          </div>{" "}
          <Button btn="Sign Up" />
          <div onClick={setopen} className="md:hidden">
            {first ? (
              <div className="flex md:hidden flex-col z-50 justify-between w-[24px] h-[24px] cursor-pointer  ">
                {" "}
                <span className="bg-[#02CDCF] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[11px]"></span>
                <span className="bg-[#02CDCF] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-[56deg] bottom-[8px]"></span>
              </div>
            ) : (
              <div className=" flex md:hidden flex-col  z-50 justify-between w-[24px] h-[24px] cursor-pointer relative ">
                {" "}
                <span className="bg-[#02CDCF] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                <span className="bg-[#02CDCF]  w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                <span className="bg-[#02CDCF] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NextAiNav;
