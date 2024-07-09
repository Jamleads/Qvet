import React from "react";
import { Link } from "react-router-dom";
import About2 from "../components/About2";
function EnterLinks() {
  return (
    <div className="flex  items-center p-6 justify-between ">
      <About2 />
      <div className="md:w-[692px] md:h-[800px] md:p-10 ">
        <div className=" h-[723px]">
          <div className="head w-full flex justify-between md:hidden">
            <img
              src="/Union.png"
              alt="Qvet_logo"
              className="w-[40px] h-[40px]"
            />
            <button className="w-[81px] h-[44px] px-[24px] py-[10px] gap-[8px] rounded-[16px]  bg-[#7474801a]">
              <p className="w-[33px] h-[24px] gap-[0px]  font-inter text-[16px] font-normal leading-[24px] text-left text-[#000000]">
                Skip
              </p>
            </button>
          </div>
          <div className=" w-[382px] md:w-[692px] h-[287px]  gap-[24px] ">
            <h1 className="w-[166px] h-[39px] gap-[0px]  font-inter text-[32px] font-bold leading-[38.73px] text-left text-[#000000] ml-2">
              Enter links
            </h1>
            <div className="links w-[382px] md:w-[692px] h-[260px] gap-[16px]  p-[20px]">
              <div className="w-[382px] md:w-full h-[64px] gap-[8px]  flex items-center mb-[10px]">
                <div className="w-[64px] h-[64px] p-[10.26px] gap-[0px] rounded-[60.38px]  bg-[#0057ff] border-[1px] border-[#ffffff] flex items-center justify-between">
                  <img
                    src="/behance.png"
                    className="w-[43px] h-[43px]"
                    alt="behance_logo"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Behance portfolio link"
                  className="w-[270px] md:w-[75%] h-[56px] p-[17px] gap-[0px] rounded-[12px]  bg-[#f2f2f7]"
                />
              </div>
              <div className="w-[382px] md:w-full h-[64px] gap-[8px]  flex items-center mb-[10px]">
                <div className="w-[64px] h-[64px] gap-[0px] rounded-[60.38px]  border-[1px] border-[#ffffff] overflow-hidden flex items-center justify-between">
                  <img
                    src="/insta.png"
                    className="w-[64px] h-[64px]"
                    alt="instagram_logo"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Instagram profile link"
                  className="w-[270px] md:w-[75%] h-[56px] p-[17px] gap-[0px] rounded-[12px]  bg-[#f2f2f7]"
                />
              </div>
              <div className="w-[382px] md:w-full h-[64px] gap-[8px]  flex items-center mb-[10px]">
                <div className="w-[64px] h-[64px] p-[16.91px 16.3px 17.51px 16.3px] gap-[0px] rounded-[60.38px]  bg-[#010101] border-[1px] border-[#ffffff] overflow-hidden flex items-center justify-center">
                  <img
                    src="/tiktok.png"
                    className="w-[31.4px] h-[29.58px]"
                    alt="tiktok_logo"
                  />
                </div>
                <input
                  type="text"
                  placeholder="TikTok profile link"
                  className="w-[270px] md:w-[75%] h-[56px] p-[17px] gap-[0px] rounded-[12px]  bg-[#f2f2f7]"
                />
              </div>
            </div>
          </div>
          <p className="middleline w-[500px] mx-auto h-[0px] mt-[20px]  border-[1px]  border-[#78788052] mb-[20px]"></p>
          <div className="lower md:w-[600px]">
            <div className="top top w-[382px] md:w-[600px] md:px-10 h-[44px] gap-[0px] flex items-center justify-between ">
              <h1 className="w-[67px] h-[24px] gap-[0px]  font-inter font-bold text-base leading-[24.2px] text-left text-[#000000] ml-2">
                Others
              </h1>
              <p>See all</p>
            </div>
            <div className="links w-[382px] md:w-[692px] h-[224px] gap-[16px]  p-[20px]">
              <div className="w-[382px] md:w-full h-[64px] gap-[8px]  flex items-center mb-[20px]">
                <div className="img  w-[64px] h-[64px] px-[16.91px] py-[16.3px] gap-[0px] rounded-[60.38px]  bg-[#010101] border-[1px] border-white ">
                  <img
                    src="/x.png"
                    className="w-[38px] h-[38px]"
                    alt="x_logo"
                  />
                </div>
                <input
                  type="text"
                  placeholder="X profile link"
                  className="w-[270px] md:w-[75%] h-[56px] px-[17px] gap-[0px] rounded-[12px]  bg-[#f2f2f7]"
                />
              </div>
              <div className="w-[382px] md:w-full h-[64px] gap-[8px]  flex items-center">
                <div className="img w-[64px] h-[64px] p-[12.68px] rounded-[60.38px]  bg-[#0065bd] border-[1px] border-white">
                  <img
                    src="/website.png"
                    className="w-[38px] h-[38px]"
                    alt="website_logo"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Title label  |  Website URL"
                  className="w-[270px] md:w-[75%] h-[56px] px-[17px] gap-[0px] rounded-[12px]  bg-[#f2f2f7]"
                />
              </div>
            </div>
          </div>
          <button className="w-[382px] md:w-[400px] h-[64px] top-[792px] left-[24px] px-[40px] py-[20px] gap-[8px] rounded-[24px] bg-gradient-to-br from-[#552dce] to-[#896ddf] flex justify-center items-center">
            <Link to="/editprofile">
              <p className="w-[69px] h-[24px] gap-0  font-inter text-base font-normal leading-[24px] text-white">
                Continue
              </p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterLinks;
