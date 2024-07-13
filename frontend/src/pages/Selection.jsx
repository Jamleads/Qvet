import React from "react";
import { Link } from "react-router-dom";
import About2 from "../components/About2";
function Selection() {
  return (
    <div className="md:flex  md:items-center md:p-6 md:px-14 md:justify-between ">
      <div className=" h-[984px] flex flex-col justify-center">
        <div className="w-full flex justify-between p-5 md:hidden ">
          <img src="/Union.png" alt="Qvet_logo" className="w-[40px] h-[40px]" />
          <button className="w-[81px] h-[44px] px-[24px] py-[10px] gap-[8px] rounded-[16px]  bg-[#7474801a]">
            <p className="w-[33px] h-[24px]  font-inter text-base font-normal leading-[24px] text-left text-black">
              Skip
            </p>
          </button>
        </div>
        <div className="w-[370px] h-[71px] ml-[24px] gap-[8px] ">
          <h1 className="w-[302px] h-[39px]  font-inter text-2xl font-bold leading-[38.73px] text-left text-black">
            Make you selection
          </h1>
          <p className="w-[370px] h-[24px] opacity-60 font-inter text-base font-normal leading-[24px] text-left text-black">
            Pick as many as you like. You can add more later.
          </p>
        </div>
        <div className=" w-[382px] h-[518px] top-[273px] left-[24px] gap-[8px]  grid grid-cols-3">
          <div className="item w-[122px] h-[162px] pt-[8px] pr-[0px] pb-[0px] pl-[0px] gap-[8px] rounded-[100px_100px_24px_24px]  bg-[#eeeafa] flex flex-col items-center">
            <div className=" overflow-hidden w-[106px] h-[106px] p-[17px] gap-[0px] rounded-[100px] border-[4px] border-t-[0px] border-r-[0px] border-b-[0px] border-l-[0px]  bg-[#0057ff]  border-white flex justify-center items-center">
              <img
                src="/behance.png"
                className="w-[72px] h-[72px]"
                alt="Be_logo"
              />
            </div>
            <p className="w-[106px] h-[32px] p-[4px_0px_4px_0px] gap-[10px] rounded-[20px]  bg-[#ffffff] text-[16px] font-normal text-[#000000] text-center">
              Behance
            </p>
          </div>
          <div className="item w-[122px] h-[162px] pt-[8px] pr-[0px] pb-[0px] pl-[0px] gap-[8px] rounded-[100px_100px_24px_24px]  bg-[#eeeafa] flex flex-col items-center">
            <div className=" overflow-hidden w-[106px] h-[106px] p-[13px] gap-[0px] rounded-[100px]  border-[4px] border-white bg-[#000000] flex justify-center items-center">
              <img
                src="/github.png"
                className="w-[80px] h-[80px]"
                alt="github_logo"
              />
            </div>
            <p className="w-[106px] h-[32px] p-[4px_0px_4px_0px] gap-[10px] rounded-[20px]  bg-[#ffffff] text-[16px] font-normal text-[#000000] text-center">
              GitHub
            </p>
          </div>
          <div className="item w-[122px] h-[162px] pt-[8px] pr-[0px] pb-[0px] pl-[0px] gap-[8px] rounded-[100px_100px_24px_24px]  bg-[#eeeafa] flex flex-col items-center">
            <div className=" overflow-hidden w-[106px] h-[106px] p-[13px] gap-[0px] rounded-[100px]  bg-[#fe0000] border-[4px] border-white flex justify-center items-center">
              <img
                src="/youtube.png"
                className="w-[80px] h-[80px]"
                alt="youtube_logo"
              />
            </div>
            <p className="w-[106px] h-[32px] p-[4px_0px_4px_0px] gap-[10px] rounded-[20px]  bg-[#ffffff] text-[16px] font-normal text-[#000000] text-center">
              YouTube
            </p>
          </div>
          <div className="item w-[122px] h-[162px] pt-[8px] pr-[0px] pb-[0px] pl-[0px] gap-[8px] rounded-[100px_100px_24px_24px]  bg-[#eeeafa] flex flex-col items-center">
            <div className=" overflow-hidden w-[106px] h-[106px] p-[21px] gap-[0px] rounded-[100px] border-[4px] border-t-[0px] border-r-[0px] border-b-[0px] border-l-[0px]  bg-[#000000]  border-white flex justify-center items-center">
              <img src="/x.png" className="w-[64px] h-[64px]" alt="x_logo" />
            </div>
            <p className="w-[106px] h-[32px] p-[4px_0px_4px_0px] gap-[10px] rounded-[20px]  bg-[#ffffff] text-[16px] font-normal text-[#000000] text-center">
              X
            </p>
          </div>
          <div className="item w-[122px] h-[162px] pt-[8px] pr-[0px] pb-[0px] pl-[0px] gap-[8px] rounded-[100px_100px_24px_24px]  bg-[#eeeafa] flex flex-col items-center">
            <div className=" overflow-hidden w-[106px] h-[106px] p-[1px_2px_2px_1px] gap-[0px] rounded-[100px] border-[4px] border-t-[0px] border-r-[0px] border-b-[0px] border-l-[0px]   border-white flex justify-center items-center">
              <img
                src="/insta.png"
                className="w-[103px] h-[103px]"
                alt="instagram_logo"
              />
            </div>
            <p className="w-[106px] h-[32px] p-[4px_0px_4px_0px] gap-[10px] rounded-[20px]  bg-[#ffffff] text-[16px] font-normal text-[#000000] text-center">
              Instagram
            </p>
          </div>
          <div className="item w-[122px] h-[162px] pt-[8px] pr-[0px] pb-[0px] pl-[0px] gap-[8px] rounded-[100px_100px_24px_24px]  bg-[#eeeafa] flex flex-col items-center">
            <div className=" overflow-hidden w-[106px] h-[106px] p-[28px_27px_29px_27px] gap-[0px] rounded-[100px]  bg-[#010101] border-[4px] border-white flex justify-center items-center">
              <img
                src="/tiktok.png"
                className="w-[52px] h-[49px]"
                alt="tiktok_logo"
              />
            </div>
            <p className="w-[106px] h-[32px] p-[4px_0px_4px_0px] gap-[10px] rounded-[20px]  bg-[#ffffff] text-[16px] font-normal text-[#000000] text-center">
              TikTok
            </p>
          </div>
          <div className="item w-[122px] h-[162px] pt-[8px] pr-[0px] pb-[0px] pl-[0px] gap-[8px] rounded-[100px_100px_24px_24px]  bg-[#eeeafa] flex flex-col items-center">
            <div className=" overflow-hidden w-[106px] h-[106px] p-[21px] gap-[0px] rounded-[100px] border-[4px] border-t-[0px] border-r-[0px] border-b-[0px] border-l-[0px]  bg-[#1bd742]  border-white flex justify-center items-center">
              <img
                src="/whatsapp.png"
                className="w-[64px] h-[64px]"
                alt="whatsapp_logo"
              />
            </div>
            <p className="w-[106px] h-[32px] p-[4px_0px_4px_0px] gap-[10px] rounded-[20px]  bg-[#ffffff] text-[16px] font-normal text-[#000000] text-center">
              WhatsApp
            </p>
          </div>
          <div className="item w-[122px] h-[162px] pt-[8px] pr-[0px] pb-[0px] pl-[0px] gap-[8px] rounded-[100px_100px_24px_24px]  bg-[#eeeafa] flex flex-col items-center">
            <div className=" overflow-hidden w-[106px] h-[106px] p-[21px] gap-[0px] rounded-[100px] border-[4px] border-t-[0px] border-r-[0px] border-b-[0px] border-l-[0px]  bg-[#0065bd]  border-white flex justify-center items-center">
              <img
                src="/website.png"
                className="w-[64px] h-[64px]"
                alt="website_logo"
              />
            </div>
            <p className="w-[106px] h-[32px] p-[4px_0px_4px_0px] gap-[10px] rounded-[20px]  bg-[#ffffff] text-[16px] font-normal text-[#000000] text-center">
              Website
            </p>
          </div>
          <div className="item w-[122px] h-[162px] pt-[8px] pr-[0px] pb-[0px] pl-[0px] gap-[8px] rounded-[100px_100px_24px_24px]  bg-[#eeeafa] flex flex-col items-center">
            <div className="w-[106px] h-[106px] p-[16px_14px_13px_15px] gap-[0px] rounded-[100px] border-[4px] border-t-[0px] border-r-[0px] border-b-[0px] border-l-[0px]  bg-[#0f0f0f]  border-white flex justify-center items-center overflow-hidden">
              <img
                src="/amazon.png"
                className="w-[77px] h-[77px]"
                alt="amazon_logo"
              />
            </div>
            <p className="w-[106px] h-[32px] p-[4px_0px_4px_0px] gap-[10px] rounded-[20px]  bg-[#ffffff] text-[16px] font-normal text-[#000000] text-center">
              Amazon
            </p>
          </div>
        </div>
        <button className="w-[382px] h-[64px] p-[20px_40px] gap-[8px] rounded-[24px]  bg-gradient-to-br from-[#552dce] to-[#896ddf] flex justify-center items-center mt-[20px] mb-[20px]">
          <Link to="/enterlinks">
            <p className="w-[69px] h-[24px]  font-inter text-base font-normal leading-[24px] text-left text-white">
              Continue
            </p>
          </Link>
        </button>
      </div>
      <About2 />
    </div>
  );
}

export default Selection;
