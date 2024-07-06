import React from "react";

function About() {
  return (
    <div className=" hidden md:block w-[1400px] h-[784px] rounded-[30px] relative pt-[40px] ">
      <div className=" max-w-[130px] h-[40px] ml-[60px] mb-2 flex justify-between z-30 ">
        <img src="/Union.png" className="w-[40px] h-[40px]" alt="" />
        <h1 className="w-[74px] h-[39px] font-inter text-[32px] font-bold leading-[38.73px] text-left text-white">
          QVet
        </h1>
      </div>
      <div className="max-w-[562px] h-[321px]  ml-[60px] gap-[24px] z-30 ">
        <h1 className="w-[562px] h-[231px] font-inter text-[45px] font-bold leading-[77.45px] text-left text-white">
          Manage all your social and work links in one place.
        </h1>
        <p className="w-[420px] h-[66px] opacity-[0,6px] font-inter text-[18px] font-normal leading-[21.78px] text-left text-[#E4DBDB] ">
          Our comprehensive system offers you an unparalleled range of
          efficiency in managing and accessing social/work links and events.
        </p>
      </div>
      <div className="max-w-[580px] h-[224px]  ml-[60px] p-[24px] gap-[16px] rounded-[20px] bg-[#552DCE] z-30 ">
        <p className="max-w-[529px] h-[120px] font-inter text-[16px] font-normal leading-[24px] text-left text-[#F0E6E6] ">
          Rayna has transformed the way our team approaches design. The sheer
          range of components and the seamless integration of the design system
          into our workflow have been game-changers. It's like having a toolkit
          filled with magic that accelerates our projects without compromising
          on quality.
        </p>
        <div className="w-[154px] h-[40px] gap-[12px] flex justify-center items-center mt-2">
          <p className="w-[40px] h-[40px] rounded-[200px] border-[1.5px] bg-[#FFE7CC] "></p>
          <div className="w-[102px] h-[40px] gap-[5px]">
            <h1 className="w-[95px] h-[17px] font-inter text-[14px] font-semibold leading-[16.94px] text-left text-white">
              moyinthegrait
            </h1>
            <p className="w-[102px] h-[18px] opacity-[0.6px] font-inter text-[12px] font-normal leading-[18px] text-left text-white ">
              Creative Designer
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[700px]  rounded-[30px] bg-[#231254] -z-10 absolute top-0"></div>
      <img
        src="/Rectangle.png"
        className="overimg w-[1724px] h-[700px] gap-0 opacity-[0.5] absolute top-0 -z-10 "
        alt=""
      />
    </div>
  );
}

export default About;
