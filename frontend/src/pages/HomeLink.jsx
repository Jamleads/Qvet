import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
function HomeLink() {
  return (
    <div className="homelink flex">
      <Sidebar />
      <div className=" md:mt-28">
        <div className="head w-full flex justify-between items-center p-5 md:hidden">
          <img src="/Union.png" alt="Qvet_logo" className="w-[24px] h-[24px]" />
          <img src="/nav.png" className="w-[24px] h-[24px]" alt="" />
        </div>
        <p className="w-full h-[1px] bg-gray-400 md:hidden"></p>
        <div className="main w-[382px] h-[556px] top-[134px] left-[24px] gap-[24px]  mt-[10px] p-[20px]">
          <div className="homelinktop flex items-center justify-between">
            <h1 className="w-[202px] h-[39px] gap-0  font-inter text-[32px] font-bold leading-[38.73px] text-left text-black">
              Lorem ipsum
            </h1>
            <p className="flex items-center">
              <div className="w-[40px] h-[40px] p-[8px] gap-[8px] rounded-[12px]  bg-[#f2f2f7]">
                <img
                  src="/LinkSimple.png"
                  className="w-[24px] h-[24px]"
                  alt=""
                />
              </div>
              <Link to="/qrcode">
                <div className="ml-4">
                  <img src="/QrCode.png" className="w-[24px] h-[24px]" alt="" />
                </div>
              </Link>
            </p>
          </div>
          <div className="w-[370px] h-[480px] gap-[16px]  mt-[20px]">
            <div className="w-[350px] h-[80px] gap-0 rounded-[24px] border border-solid border-[#78788052]  bg-white flex items-center justify-between p-[15px] mb-[10px]">
              <div className="flex items-center">
                <div className="w-[64px] h-[64px] top-[8px] left-[8px] p-[10.26px] gap-0 rounded-full  bg-[#0057ff] border border-solid border-white mr-[15px] overflow-hidden">
                  <img
                    src="/behance.png"
                    className="w-[43px] h-[43px]"
                    alt="behance_logo"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="h-22 opacity-80 font-inter font-semibold text-base leading-22 text-left text-black">
                    Behance
                  </h1>
                  <p className="w-28 h-6 opacity-60 font-inter text-base font-normal leading-6 text-left text-black">
                    moyinthegrait
                  </p>
                </div>
              </div>
              <img
                src="/PencilSimple.png"
                className="w-[24px] h-[24px]"
                alt="pencil_image"
              />
            </div>
            <div className="w-[350px] h-[80px] gap-0 rounded-[24px] border border-solid border-[#78788052]  bg-white flex items-center justify-between p-[15px] mb-[10px]">
              <div className="flex items-center">
                <div className="w-[64px] h-[64px] top-[8px] left-[8px] gap-0 rounded-full  bg-white border border-solid border-white mr-[15px] overflow-hidden">
                  <img
                    src="/insta.png"
                    className="w-[64px] h-[64px]"
                    alt="instagram_logo"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="h-22 opacity-80 font-inter font-semibold text-base leading-22 text-left text-black">
                    Instagram
                  </h1>
                  <p className="w-28 h-6 opacity-60 font-inter text-base font-normal leading-6 text-left text-black">
                    moyinthegrait
                  </p>
                </div>
              </div>
              <img
                src="/PencilSimple.png"
                className="w-[24px] h-[24px]"
                alt="pencil_image"
              />
            </div>
            <div className="w-[350px] h-[80px] gap-0 rounded-[24px] border border-solid border-[#78788052]  bg-white flex items-center justify-between p-[15px] mb-[10px]">
              <div className="flex items-center">
                <div className="w-[64px] h-[64px] top-[8px] left-[8px] p-[16.91px] pr-[16.3px] pb-[17.51px] pl-[16.3px] gap-0 rounded-full  bg-[#010101] border border-solid border-white overflow-hidden mr-[15px]">
                  <img
                    src="/tiktok.png"
                    className="w-[31px] h-[29px]"
                    alt="tiktok_logo"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="h-22 opacity-80 font-inter font-semibold text-base leading-22 text-left text-black">
                    TikTok
                  </h1>
                  <p className="w-28 h-6 opacity-60 font-inter text-base font-normal leading-6 text-left text-black">
                    moyinthegrait
                  </p>
                </div>
              </div>
              <img
                src="/PencilSimple.png"
                className="w-[24px] h-[24px]"
                alt="pencil_image"
              />
            </div>
            <div className="w-[350px] h-[80px] gap-0 rounded-[24px] border border-solid border-[#78788052]  bg-white flex items-center justify-between p-[15px] mb-[10px]">
              <div className="flex items-center">
                <div className=" w-[64px] h-[64px] top-[8px] left-[8px] p-[12.68px] gap-0 rounded-full  bg-[#0065bd] border border-solid border-white overflow-hidden mr-[15px]">
                  <img
                    src="/website.png"
                    className="w-[38px] h-[38px]"
                    alt="website_icon"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="h-22 opacity-80 font-inter font-semibold text-base leading-22 text-left text-black">
                    Website
                  </h1>
                  <p className="w-28 h-6 opacity-60 font-inter text-base font-normal leading-6 text-left text-black">
                    https://moyinthegrait/fr...
                  </p>
                </div>
              </div>
              <img
                src="/PencilSimple.png"
                className="w-[24px] h-[24px]"
                alt="pencil_image"
              />
            </div>
            <div className="w-[350px] h-[80px] gap-0 rounded-[24px] border border-solid border-[#78788052]  bg-white flex items-center justify-between p-[15px] mb-[10px]">
              <div className="flex items-center">
                <div className="w-16 h-16 top-2 left-2 p-4 px-5 rounded-full  bg-green-500 border border-white overflow-hidden mr-4 flex justify-center items-center">
                  <h1 className="text-white">M</h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="h-22 opacity-80 font-inter font-semibold text-base leading-22 text-left text-black">
                    My Portfolio
                  </h1>
                  <p className="w-28 h-6 opacity-60 font-inter text-base font-normal leading-6 text-left text-black">
                    https://moyinthegrait/fr...
                  </p>
                </div>
              </div>
              <img
                src="/PencilSimple.png"
                className="w-[24px] h-[24px]"
                alt="pencil_image"
              />
            </div>
          </div>
          <button className=" min-w-36 h-11 p-2 px-6 gap-2 rounded-lg  bg-[#7474801A] flex items-center justify-center">
            <img src="/Plus.png" className="w-[24px] h-[24px]" alt="plus_img" />
            <p className="w-18 h-6  font-inter text-base font-normal leading-6 text-left text-black">
              Add more
            </p>
          </button>
          <div className="linktoggle w-64 md:absolute md:top-0 top-784 left-90 p-1 gap-2 rounded-lg border-t-0 border-l-0 border-r-0  bg-gray-100 border border-gray-200 mb-8 mt-8 mx-auto flex items-center justify-center">
            <div className="w-60 h-12 gap-0 rounded-lg border-t-0 border-l-0 border-r-0  bg-white border border-gray-300 flex items-center">
              <div className="w-32 h-12 p-3 gap-1 rounded-lg  bg-[#896DDF] flex justify-center items-center">
                <img
                  src="LinkSimple2.png"
                  className="w-[24px] h-[24px]"
                  alt="link_icon"
                />
                <p className="w-9 h-5  font-inter text-sm font-normal leading-5 text-left text-white">
                  Links
                </p>
              </div>
              <div className="w-32 h-12 p-3 gap-1 rounded-tl-lg opacity-60 flex justify-center items-center">
                <img
                  src="/Ticket.png"
                  className="w-[24px] h-[24px]"
                  alt="ticket_img"
                />
                <Link to="/homeevents">
                  <p className="w-12 h-5  font-inter text-sm font-normal leading-5 text-left text-black">
                    Events
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLink;
