import React from "react";

function RsvpForm() {
  return (
    <div>
      <div className="head w-[382px] h-[76px] p-[16px] border-b-[1px] flex items-center justify-between bg-white border-b-[#78788052]">
        <div className="w-[132px] h-[44px] p-[10px_24px_10px_16px] gap-[8px] bg-[#7474801A] rounded-[16px] flex items-center justify-center">
          <img src="Eye.png" className="w-[24px] h-[24px]" alt="Preview Icon" />
          <p className="w-[60px] h-[24px] text-[16px] font-normal leading-[24px]">
            Preview
          </p>
        </div>
        <img
          src="nav.png"
          className="w-[24px] h-[24px]"
          alt="Navigation Icon"
        />
      </div>
      <div className="formbody w-[382px] h-[914px] gap-[24px] mt-5 ml-2 md:flex">
        <div>
          <div className="title w-[382px] h-[71px] gap-[8px] flex flex-col">
            <h1 className="w-[281px] h-[39px] text-[32px] font-bold leading-[38.73px]">
              Create RSVP form
            </h1>
            <p className="w-[382px] h-[24px] opacity-[60%] text-[16px] font-normal leading-[24px]">
              Invitees and attendees can RSVP for the event.
            </p>
          </div>
          <div className="upload w-[370px] h-[149px] p-[24px_16px_24px_16px] gap-[12px] rounded-[24px] border bg-white border-solid border-[#78788052] mt-5">
            <div className="w-[350px] h-[101px] gap-[12px] flex flex-col">
              <img src="" alt="" />
              <div className="w-[350px] h-[41px] gap-[2px] flex flex-col">
                <p className="w-[350px] h-[21px] gap-[4px] text-center">
                  <span className="text-purple-700 mr-1">Click to upload</span>
                  or drag and drop
                </p>
                <p className="w-[350px] h-[18px] text-[12px] font-normal leading-[18px] text-[#787880] text-center">
                  PNG, JPG or GIF (max. 25mb)
                </p>
              </div>
            </div>
          </div>
          <div className="eventtitle w-[370px] mt-4 h-[186px] rounded-[24px] border bg-white border-solid border-[#78788052] p-4 flex flex-col">
            <h1 className="w-[91px] h-[22px] text-[18px] font-normal leading-[21.78px]">
              Event Title
            </h1>
            <p className="w-[100%] h-[1px] border border-solid border-[#78788052] mt-4 mb-5"></p>
            <p className="w-[334px] h-[36px] text-[12px] font-normal leading-[18px] opacity-[80%] mb-5">
              Event Address: 123 Street, City, ST 12345 Contact us at +(234)
              000-7890 or no_reply@example.com
            </p>
            <div className="w-[334px] h-[24px] flex justify-between">
              <p className="w-[93px] h-[21px] text-[14px] font-normal leading-[21px]">
                Collect Emails
              </p>
              <input
                type="checkbox"
                className="w-[24px] h-[24px] p-[4px] gap-[8px]"
              />
            </div>
          </div>
          <div className="eventattend w-[370px] mt-5 h-[206px] p-[24px_16px_16px_16px] rounded-[24px] bg-white border border-solid border-[#78788052]">
            <div className="w-[350px] h-[166px] gap-[24px] relative">
              <div className="w-[196px] h-[102px] p-[0px_8px_0px_8px] gap-[24px] flex flex-col">
                <h1 className="w-[154px] h-[22px] text-[18px] font-normal leading-[21.78px]">
                  Can you attend?{" "}
                  <span className="text-[18px] leading-[21.78px] text-red-500">
                    *
                  </span>
                </h1>
                <div className="w-[180px] h-[56px] gap-[8px] flex flex-col">
                  <div className="w-[151px] h-[24px] gap-[16px] flex justify-between">
                    <input
                      type="checkbox"
                      className="w-[16px] h-[16px] border border-solid border-[#787880] rounded-[200px]"
                    />
                    <p className="w-[119px] h-[24px] opacity-[80%] text-[16px] font-normal leading-[24px]">
                      Yes, I’ll be there
                    </p>
                  </div>
                  <div className="h-[24px] gap-[16px] flex justify-between">
                    <input
                      type="checkbox"
                      className="w-[16px] h-[16px] border border-solid border-[#787880] rounded-[200px]"
                    />
                    <p className="h-[24px] opacity-[80%] text-[16px] font-normal leading-[24px]">
                      Sorry, I can’t attend
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-[40px] h-[40px] p-2 gap-2 rounded-[12px] bg-[#F2F2F7] absolute right-1 top-[-10px] ">
                <img
                  src="Menu Vertical.png"
                  className=" w-[24px] h-[24px]  "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="namefield w-[370px] mt-5 h-[206px] p-[24px_16px_16px_16px] rounded-[24px] border bg-white border-solid border-[#78788052] ">
            <div className=" w-[350px] h-[166px] gap-[24px] relative ">
              <div className=" w-[350px] h-[102px] p-[0px_8px_0px_8px] gap-[24px] flex flex-col mb-4 ">
                <h1 className=" w-[105px] h-[22px] text-[18px] font-normal leading-[21.78px] ">
                  Your name{" "}
                  <span className=" text-[18px] font-normal leading-[21.78px] text-red-500 ">
                    *
                  </span>
                </h1>
                <input
                  type="text"
                  placeholder="John Doe"
                  className=" w-[334px] h-[56px] p-[17px] rounded-[12px] bg-[#F2F2F7] "
                />
              </div>
              <div className=" w-[350px] h-[40px] gap-[16px] ">
                <p className=" w-[100%] mb-4 h-[1px] border border-solid bg-[##78788052] "></p>
                <div className=" w-[334px] h-[24px] flex justify-between ">
                  <h1 className=" w-[92px] h-[21px] text-[14px] font-normal leading-[21px] ">
                    Required field
                  </h1>
                  <input
                    type="checkbox"
                    className=" w-[24px] h-[24px] p-1 gap-2 "
                  />
                </div>
              </div>
              <div className=" w-[40px] h-[40px] p-2 gap-2 rounded-[12px] bg-[#F2F2F7] absolute right-1 top-[-10px] ">
                <img
                  src="Menu Vertical.png"
                  className=" w-[24px] h-[24px]  "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RsvpForm;
