import React from "react";
import { Link } from "react-router-dom";
import About2 from "../components/About2";
function EditProfile() {
  return (
    <div className="flex p-4 items-center">
      <div className="editprofile md:w-[600px] md:h-[500px] ">
        <div className="head w-full flex justify-between p-5 md:hidden md:p-5">
          <img src="/Union.png" alt="Qvet_logo" className="w-[40px] h-[40px]" />
          <button className="w-[81px] h-[44px] p-[10px] px-[24px] gap-[8px] rounded-[16px]  bg-[#7474801a]">
            <p className="w-[33px] h-[24px] gap-0  font-inter text-[16px] font-normal leading-[24px] text-left text-black">
              Skip
            </p>
          </button>
        </div>
        <div className="form w-[382px] h-[391px] top-[178px] left-[24px] gap-[24px]  mt-[20px] ml-[10px]">
          <h1 className=" h-[39px] gap-0  font-inter text-[32px] font-bold leading-[38.73px] text-left text-black">
            Profile information
          </h1>
          <div className="inner w-[382px] h-[328px] gap-[16px] ">
            <div className="top w-[382px] h-[100px] gap-[16px]  flex justify-around items-center px-[10px]">
              <div className="w-[80px] h-[80px] gap-0 rounded-full border border-solid border-[#78788052] bg-[#f2f2f7] flex justify-center items-center ">
                <img
                  src="/Image.png"
                  className="w-[24px] h-[24px]"
                  alt="add_image_icon"
                />
              </div>
              <input
                type="text"
                placeholder="Name"
                className="w-[266px] h-[56px] p-[17px] gap-0 rounded-[12px]  bg-[#f2f2f7]"
              />
            </div>
            <input
              type="text"
              placeholder="Profile title"
              className="w-[370px] h-[56px] p-[17px] gap-0 rounded-[12px]  bg-[#f2f2f7] pl-[30px] pr-[30px]"
            />
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="10"
              placeholder="bio description..."
              className="w-[370px] h-[140px] gap-0 rounded-[12px]  bg-[#f2f2f7] mt-[20px] p-[10px]"
            ></textarea>
          </div>
        </div>
        <button className="w-[382px] h-[64px] top-[792px] left-[24px] p-[20px] px-[40px] gap-[8px] rounded-[24px]  bg-gradient-to-br from-[#552dce] via-[#7d4cda] to-[#896ddf] flex justify-center items-center">
          <Link to="/homelink">
            <p className="w-[68px] h-[24px] gap-0  font-inter text-[16px] font-normal leading-[24px] text-left text-white">
              Finish up
            </p>
          </Link>
        </button>
      </div>
      <About2 />
    </div>
  );
}

export default EditProfile;
