import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className={`${props.classname} ff-Recharge font-bold text-base sm:text-lg text-[#0B0A0A] leading-[21.6px] bg-[#02CDCF] rounded-xl p-[14px_24px] sm:p-[18px_32px] common_btn  duration-300 ease-linear hover:text-white `}
      >
        {props.btn}
      </button>
    </>
  );
};

export default Button;
