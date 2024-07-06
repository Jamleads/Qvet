import React from "react";
import { Link } from "react-router-dom";
function HomeEvents() {
  return (
    <div className="homeevents h-full">
      <div className="head w-full flex justify-between items-center p-[20px] ">
        <img src="/Union.png" alt="Qvet_logo" className="w-[24px] h-[24px]" />
        <img src="/nav.png" className="w-[24px] h-[24px]" alt="" />
      </div>
      <p className="w-full h-[1px] bg-gray-400"></p>
      <div className="top w-[382px] h-[40px] top-[134px] left-[24px] px-4 gap-0 flex justify-between items-center  mt-5">
        <h1 className="w-[258px] h-[39px] gap-0  font-inter text-[32px] font-bold leading-[38.73px] text-left text-black">
          Available Events
        </h1>
        <button className="w-[40px] h-[40px] p-2 gap-2 rounded-[12px]  bg-[#f2f2f7]">
          <img
            src="/small-button-neutral-icon.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
        </button>
      </div>
      <div className=" px-3">
        <div className="w-full h-[56px] top-[190px] left-[24px] gap-0 rounded-[12px]  bg-[#f2f2f7] flex items-center justify-start p-5 mt-5">
          <img
            src="/MagnifyingGlass.png"
            className="w-[24px] h-[24px] mr-[20px]"
            alt=""
          />
          <input
            type="text"
            className=" bg-inherit"
            placeholder="Search events"
          />
        </div>
      </div>
      <div className="w-full h-[356px] top-[270px] left-[24px] px-3 mt-2">
        <div className="w-full h-[170px] gap-0 rounded-[24px] border border-solid border-[#78788052]  text-white flex flex-col mt-[10px]">
          <img
            src="Frame 1000005388.png"
            className="w-full h-[64px]"
            alt="blank_img_background"
          />
          <div className="w-[366px] bg-white flex justify-between p-[15px] ">
            <div className=" w-[169px] h-[72px] gap-[8] flex flex-col ">
              <h1 className="w-[91px] h-[22px] gap-0  font-inter text-[18px] font-normal leading-[21.78px] text-left text-black">
                Google I/O
              </h1>
              <div className="flex justify-center items-center mb-3">
                <img
                  src="Location.png"
                  className="w-[16px] h-[16px] mr-1"
                  alt=""
                />
                <p className="w-[149px] h-[18px] gap-0 opacity-[0.8] font-inter text-[12px] font-normal leading-[18px] text-left text-[#787880]">
                  123 Street, City, ST 12345
                </p>
              </div>
              <div className="w-[138px] h-[20px] gap-[4px]  flex justify-between">
                <button className="w-[81px] h-[20px] p-[4px_16px] gap-[10px] rounded-[8px]  bg-[#eeeafa] flex justify-center items-center">
                  <p className="w-[49px] h-[12px] gap-0 opacity-[0.6] font-inter text-[10px] font-normal leading-[12.1px] text-center text-black">
                    Upcoming
                  </p>
                </button>
                <button className="w-[53px] h-[20px] p-[4px_16px] gap-[10px] rounded-[8px]  bg-[#fffbe5] flex justify-center items-center">
                  <p className="w-[21px] h-[12px] gap-0  font-inter text-[10px] font-normal leading-[12.1px] text-center text-[#665500]">
                    Paid
                  </p>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <p className="w-[67px] h-[18px] gap-0 opacity-[0.8] font-inter text-[12px] font-normal leading-[18px] text-left text-[#787880]">
                24/07/2024
              </p>
              <button className="w-[90px] h-[44px] top-[112px] left-[289px] p-[10px_24px] gap-[8px] rounded-[16px]  bg-gradient-to-br from-[#552dce] to-[#896ddf]">
                <p className="w-[42px] h-[24px] gap-0  font-inter text-[16px] font-normal leading-[24px] text-left text-white">
                  RSVP
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-[170px] gap-0 rounded-[24px] border border-solid border-[#78788052]  text-white flex flex-col mt-[10px]">
          <img
            src="Frame 1000005388.png"
            className="w-full h-[64px]"
            alt="blank_img_background"
          />
          <div className="w-[366px] bg-white flex justify-between p-[15px] ">
            <div className=" w-[169px] h-[72px] gap-[8] flex flex-col ">
              <h1 className="w-[91px] h-[22px] gap-0  font-inter text-[18px] font-normal leading-[21.78px] text-left text-black">
                Event Title
              </h1>
              <div className="flex justify-center items-center mb-2">
                <img
                  src="Location.png"
                  className="w-[16px] h-[16px] mr-1"
                  alt=""
                />
                <p className="w-[149px] h-[18px] gap-0 opacity-[0.8] font-inter text-[12px] font-normal leading-[18px] text-left text-[#787880]">
                  Virtual
                </p>
              </div>
              <div className="w-[138px] h-[20px] gap-[4px]  flex justify-between">
                <button className="w-[81px] h-[20px] p-[4px_16px] gap-[10px] rounded-[8px]  bg-[#eeeafa] flex justify-center items-center">
                  <p className="w-[49px] h-[12px] gap-0 opacity-[0.6] font-inter text-[10px] font-normal leading-[12.1px] text-center text-black">
                    Upcoming
                  </p>
                </button>
                <button className="w-[53px] h-[20px] p-[4px_16px] gap-[10px] rounded-[8px]  bg-[#EAFAEE] flex justify-center items-center">
                  <p className="w-[21px] h-[12px] gap-0  font-inter text-[10px] font-normal leading-[12.1px] text-center text-[#155124]">
                    Free
                  </p>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <p className="w-[67px] h-[18px] gap-0 opacity-[0.8] font-inter text-[12px] font-normal leading-[18px] text-left text-[#787880]">
                24/07/2024
              </p>
              <button className="w-[90px] h-[44px] top-[112px] left-[289px] p-[10px_24px] gap-[8px] rounded-[16px]  bg-gradient-to-br from-[#552dce] to-[#896ddf]">
                <p className="w-[42px] h-[24px] gap-0  font-inter text-[16px] font-normal leading-[24px] text-left text-white">
                  RSVP
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="linktoggle w-64  top-784 left-90 p-1 gap-2 rounded-lg border-t-0 border-l-0 border-r-0  bg-gray-100 border border-gray-200 mb-8 mt-8 mx-auto flex items-center justify-center">
        <div className="w-60 h-12 gap-0 rounded-lg border-t-0 border-l-0 border-r-0  bg-white border border-gray-300 flex items-center">
          <div className="w-32 h-12 p-3 gap-1 rounded-lg   flex justify-center items-center">
            <img
              src="LinkSimple.png"
              className="w-[24px] h-[24px]"
              alt="link_icon"
            />
            <Link to="/homelink">
              <p className="w-9 h-5  font-inter text-sm font-normal leading-5 text-left text-black">
                Links
              </p>
            </Link>
          </div>
          <div className="w-32 h-12 p-3 gap-1 rounded-[14px]  bg-[#896DDF] flex justify-center items-center">
            <img
              src="/Ticketlight.png"
              className="w-[24px] h-[24px]"
              alt="ticket_img"
            />
            <p className="w-12 h-5  font-inter text-sm font-normal leading-5 text-left text-white">
              Events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeEvents;
