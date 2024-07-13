import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
function SignEmail() {
  return (
    <div className="md:flex md:items-center md:p-6 md:px-10 md:justify-between">
      <About />

      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <div className="w-[382px] h-[493px]  gap-16  flex flex-col items-center ">
          <div className="flex flex-col items-center justify-between">
            <img
              src="/Union.png"
              className="w-[120px] h-[120px] mb-4"
              alt="Qvet_logo"
            />
            <p className="h-8 opacity-80 font-switzer text-2xl font-semibold leading-tight text-left text-[#090909]">
              Join QVet for free!
            </p>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Email"
              className="w-[382px] h-[56px] p-[17px] rounded-[12px]  bg-[#f2f2f7] mb-[20px]"
            />
            <div className="relative flex items-center justify-between">
              <input
                type="password"
                placeholder="Password"
                className="w-[382px] h-[56px] p-[17px] rounded-[12px]  bg-[#f2f2f7] mb-[20px]"
              />
              <img
                src="/EyeClosed.png"
                className="w-[24px] h-[24px] absolute right-0 mr-3"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <button className="flex justify-center items-center w-[382px] h-[64px] p-[20px_40px] gap-2 rounded-[24px]  bg-gradient-to-br from-[#552dce] to-[#896ddf]">
                <Link to="/selection">
                  <p className="w-[150px] h-[24px]  font-inter text-base font-normal leading-6 text-white">
                    Create Account
                  </p>
                </Link>
              </button>
              <p className="w-[283px] h-[63px] opacity-80 font-inter text-sm font-normal leading-[21px] text-center mt-[20px]">
                By clicking Create account, you agree to Q-Vet’s{" "}
                <span className="text-[#896ddf]">Terms and Conditions</span> and
                confirm you have read our{" "}
                <span className="text-[#896ddf]">Privacy Notice</span>.
              </p>
            </div>
          </div>
        </div>
        <p className=" w-[400px] bg-gray-400 h-[1px] mb-5 mt-14"></p>
        <p className="w-full h-6  font-inter text-base font-normal leading-6 text-center ">
          Already have an account?{" "}
          <span className="font-inter text-base font-normal leading-6 text-center text-[#896ddf]">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignEmail;
