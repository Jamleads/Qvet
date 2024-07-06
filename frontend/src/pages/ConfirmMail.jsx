import React from "react";
import { Link } from "react-router-dom";
function ConfirmMail() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <div className="w-[382px] h-[547px]  gap-[24px]  flex flex-col items-center ">
          <h1 className=" h-[32px] opacity-80 font-switzer text-2xl font-semibold leading-[31.68px] text-left text-[#090909]">
            Check your inbox
          </h1>
          <p className="w-[280px] h-[42px] opacity-80 font-inter text-sm font-normal leading-[21px] text-center text-black">
            Verify your mail via the link sent to example@gmail.com
          </p>
          <img src="/mail.png" alt="mail_img" className="w-[300px] h-[300px]" />
          <div className="flex flex-col items-center">
            <button className="email">
              <Link to="/selection">
                <p className=" text-white">Continue</p>
              </Link>
            </button>
            <p className="w-[283px] h-[63px] opacity-80 font-inter text-sm font-normal leading-[21px] text-center mt-[20px]">
              Didn’t get a mail?
              <span className="text-[#896ddf]">Resend</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmMail;
