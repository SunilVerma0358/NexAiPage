import React from "react";
import { Facebook, Telgram, Twitter } from "./common/SvgExport";

const Footer = () => {
  return (
    <div className="bg-[url(../src/assets/image/FooterBg.webp)] bg-size bg-cover bg-no-repeat bg-center pt-12 sm:pt-16 lg:pt-24">
      <div className="max-w-[1140px] mx-auto px-3 ">
        <div className="flex flex-wrap flex-row -mx-3 items-center pb-[30px] ">
          <div className="w-full md:w-7/12 px-3">
            <p className=" ff-Recharge font-normal text-sm sm:text-base text-white leading-[25.6px] max-w-[356px] opacity-70">
              Nullam viverra natoque amet et sed scelerisque viverra fringilla
              platea. Ullamcorper.
            </p>
            <div className="flex gap-3 pt-5">
              <a
                href="https://www.facebook.com/radialcode/"
                target="blank"
                className="group"
              >
                <Facebook />
              </a>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Fradialcode"
                target="blank"
                className="group"
              >
                <Twitter />
              </a>
              <a
                href="https://web.telegram.org/k/"
                target="blank"
                className="group"
              >
                <Telgram />
              </a>
            </div>
          </div>
          <div className="w-full md:w-5/12 px-3  pt-6 md:pt-0">
            <div className="flex flex-row flex-wrap -mx-3">
              <div className="w-6/12 px-3">
                <p className="ff-Recharge font-bold text-base sm:text-lg text-white leading-[21.6px]">
                  Quick links
                </p>
                <ul>
                  <li className="pt-3 sm:pt-5">
                    <a
                      href="#!"
                      className="ff-Recharge font-bold text-sm sm:text-base text-white leading-[21.6px] opacity-70 border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF] py-1 "
                    >
                      Home
                    </a>
                  </li>
                  <li className="pt-3 sm:pt-5">
                    <a
                      href="#!"
                      className="ff-Recharge font-bold text-sm sm:text-base text-white leading-[21.6px] opacity-70 border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF] py-1"
                    >
                      Features
                    </a>
                  </li>
                  <li className="pt-3 sm:pt-5">
                    <a
                      href="#!"
                      className="ff-Recharge font-bold text-sm sm:text-base text-white leading-[21.6px] opacity-70 border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF] py-1"
                    >
                      Marketplace
                    </a>
                  </li>
                  <li className="pt-3 sm:pt-5">
                    <a
                      href="#!"
                      className="ff-Recharge font-bold text-sm sm:text-base text-white leading-[21.6px] opacity-70 border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF] py-1"
                    >
                      Tokens
                    </a>
                  </li>
                  <li className="pt-3 sm:pt-5">
                    <a
                      href="#!"
                      className="ff-Recharge font-bold text-sm sm:text-base text-white leading-[21.6px] opacity-70 border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF] py-1"
                    >
                      NexChat
                    </a>
                  </li>
                  <li className="pt-3 sm:pt-5">
                    <a
                      href="#!"
                      className="ff-Recharge font-bold text-sm sm:text-base text-white leading-[21.6px] opacity-70 border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF] py-1"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-6/12 px-3">
                <p className="ff-Recharge font-bold text-base sm:text-lg text-white leading-[21.6px]">
                  Information's
                </p>
                <ul>
                  <li className="pt-3 sm:pt-5">
                    <a
                      href="#!"
                      className="ff-Recharge font-bold text-sm sm:text-base text-white leading-[21.6px] opacity-70 border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF] py-1"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="pt-3 sm:pt-5">
                    <a
                      href="#!"
                      className="ff-Recharge font-bold text-sm sm:text-base text-white leading-[21.6px] opacity-70 border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF] py-1"
                    >
                      Phone
                    </a>
                  </li>
                  <li className="pt-3 sm:pt-5">
                    <a
                      href="#!"
                      className="ff-Recharge font-bold text-sm sm:text-base text-white leading-[21.6px] opacity-70 border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF] py-1"
                    >
                      terms
                    </a>
                  </li>
                  <li className="pt-3 sm:pt-5">
                    <a
                      href="#!"
                      className="ff-Recharge font-bold text-sm sm:text-base text-white leading-[21.6px] opacity-70 border-transparent border-y-[1px] rounded-sm hover:border-[#02CDCF] duration-300 ease-linear hover:text-[#02CDCF] py-1"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-t-[#676D6D]">
          <p className="ff-Recharge font-bold  text-base text-white opacity-70 leading-[19px] text-center py-5">
            @Copyright.nexai
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
