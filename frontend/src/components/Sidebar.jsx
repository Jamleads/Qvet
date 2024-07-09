import React from "react";
// border-right: 1px solid #78788052
function Sidebar() {
  return (
    <div className=" hidden md:block">
      <div className="side w-[350px] h-[1024px] p-[120px_16px_120px_16px] gap-[105px] border bg-[#F9F9F9]  ">
        <div className="top w-[282px] h-[583px] gap-[40px] ">
          <div className="title w-[272px] h-[55px] p-[8px_16px_8px_16px] rounded-[4px] gap-[4px]">
            <div className=" w-[120px] h-[39px] gap-[16px] flex">
              <img src="Union.png" className="w-[32px] h-[32px]" alt="" />
              <h1 className=" w-[72px] h-[39px] text-[32px] font-normal leading-[38.73px] text-left text-black">
                Qvet
              </h1>
            </div>
          </div>
          <div className="main w-[282px] h-[488px] gap-[20px] ">
            <div className=" w-[282px] h-[488px] gap-[24px] ">
              <div className="upper w-[282px] h-[168px] ">
                <div className=" w-[282px] h-[56px] p-1 gap-[10px] border bg-[#DDD5F6] flex items-center rounded-[0px_12px_12px_0px]">
                  <p className=" w-[4px] h-[56px] bg-[#896DDF] "></p>
                  <div className=" w-[115px] h-[24px] gap-2 flex items-center ">
                    <img
                      src="CirclesThreePlus.png"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className=" w-[83px] h-[24px] text-[16px] font-normal leading-[24px] ">
                      Dashboard
                    </p>
                  </div>
                </div>
                <div className=" w-[282px] h-[56px] p-4 gap-[10px] rounded-[0px_0px_14px_14px] bg-[#F9F9F9] ">
                  <div className=" w-[83px] h-[24px] gap-[8px] flex items-center ">
                    <img
                      src="Ticket.png"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className="w-[51px] h-[24px] text-[16px] font-normal leading-[24px]">
                      Events
                    </p>
                  </div>
                </div>
                <div className=" w-[282px] h-[56px] p-4 gap-[10px] bg-[#F9F9F9] ">
                  <div className=" w-[101px] h-[24px] gap-[8px] flex items-center ">
                    <img
                      src="ChartBarHorizontal.png"
                      className="w-[24px] h-[24px"
                      alt=""
                    />
                    <p className=" w-[69px] h-[24px] text-[16px] font-normal leading-[24px] ">
                      Analytics
                    </p>
                  </div>
                </div>
              </div>
              <p className=" w-[282px] h-[1px] border border-solid border-[#78788052] mt-3 "></p>
              <div className="middle w-[282px] h-[168px] ">
                <div className=" w-[282px] h-[56px] p-[16px] gap-[10px] rounded-[14px_14px_0px_0px] bg-[#F9F9F9] ">
                  <div className=" w-[95px] h-[24px] gap-[8px] flex items-center ">
                    <img
                      src="GearSix.png"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className=" w-[63px] h-[24px] text-[16px] font-normal leading-[24px] ">
                      Settings
                    </p>
                  </div>
                </div>
                <div className=" w-[282px] h-[56px] p-4 gap-[10px] bg-[#F9F9F9] ">
                  <div className="w-[134px] h-[24px] flex items-center">
                    <img
                      src="Headset.png"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className=" w-[102px] h-[24px] text-[16px] font-normal leading-[24px] ">
                      Help/Support
                    </p>
                  </div>
                </div>
                <div className=" w-[282px] h-[56px] p-4 gap-[10px] rounded-[0px_0px_14px_14px] bg-[#F9F9F9] ">
                  <div className=" w-[106px] h-[24px] gap-[8px] flex items-center ">
                    <img
                      src="ArrowsClockwise.png"
                      className="w-[24px] h-[24px]"
                      alt=""
                    />
                    <p className=" w-[74px] h-[24px] text-[16px] font-normal leading-[24px] ">
                      Feedback
                    </p>
                  </div>
                </div>
              </div>
              <p className=" w-[282px] h-[1px] border border-solid border-[#78788052] mt-3 "></p>
              <div className="lower w-[282px] h-[56px] p-[16px_24px_16px_24px] gap-[10px] rounded-[14px] bg-[#F9F9F9] mt-8 ">
                <div className=" w-[234px] h-[24px] gap-[8px] flex items-center ">
                  <img src="SignOut.png" className="w-[24px] h-[24px" alt="" />
                  <p className=" w-[63px] h-[24px] text-[16px] font-normal leading-[24px] ">
                    Sign out
                  </p>
                </div>
              </div>
              <div className="user w-[272px] h-[80px] p-[8px_0px_8px_0px] ">
                <div className="w-[272px] h-[64px] p-[12px_8px_12px_8px] gap-[4px] rounded-[4px] ">
                  <div className=" w-[221px] h-[40px] gap-[12px] flex items-center ">
                    <div className="w-[40px] h-[40px] relative">
                      <div className=" w-[40px] h-[40px] rounded-[200px] border-[1.5px] border-solid border-white bg-[#FFE7CC]"></div>
                      <div className=" w-[10px] h-[10px] absolute top-[28px] left-[30px] rounded-[10px] border-[1.5px] bg-[#04802E] "></div>
                    </div>
                    <div className=" w-[169px] h-[40px] gap-[2px] flex flex-col ">
                      <h1 className=" w-[132px] h-[17px] text-[14px] font-semibold leading-[16.94px] ">
                        moyinthegrait
                      </h1>
                      <p className=" w-[169px] h-[21px] text-[14px] font-normal leading-[21px] text-[#787880] ">
                        moyinadedeji@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
