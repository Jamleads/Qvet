import React from "react";
import { Link } from "react-router-dom";
function Qrcode() {
  return (
    <div>
      <div className="head w-full flex justify-between items-center p-5">
        <img src="/Union.png" alt="Qvet_logo" className="w-[24px] h-[24px]" />
        <img src="/nav.png" className="w-[24px] h-[24px]" alt="" />
      </div>
      <div className="w-[382px] h-[40px] px-[16px] flex justify-between items-center">
        <h1 className="w-[137px] h-[39px] gap-0 font-inter text-[32px] font-bold leading-[38.73px] text-left ">
          QR Code
        </h1>
        <button className="w-[40px] h-[40px] rounded-[12px] p-[8] bg-[#F2F2F7] flex justify-center items-center ">
          <img
            src="Menu Vertical.png"
            className="w-[24px] h-[24px] bg-inherit"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Qrcode;
