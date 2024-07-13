import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
function SignUp() {
  return (
    <div className="md:flex  md:items-center md:p-6 md:px-10 md:justify-between">
      <About />

      <div className="h-[784px] w-screen  flex flex-col items-center justify-center">
        <div className="w-[382px] h-[493px] top-[151px] left-[24px] gap-16  flex flex-col items-center pl-4 pr-4 ">
          <div className="w-72 h-42 gap-6  flex flex-col items-center justify-between">
            <img
              src="/Union.png"
              className="w-[120px] h-[120px]"
              alt="Qvet_logo"
            />
            <p className="h-8 opacity-80 font-switzer text-2xl font-semibold leading-tight text-left text-[#090909]">
              Join QVet for free!
            </p>
          </div>
          <div className="flex flex-col">
            <button className="w-full h-[64px] p-[20px_93.07px_19px_92.5px] gap-0 rounded-[24px] border border-[#78788052]  bg-[#050505] flex justify-center items-center">
              <img
                src="/google.png"
                className="w-[24.43px] h-[25px]"
                alt="google_logo"
              />
              <p className="w-[164px] h-[24px]  font-inter text-base font-normal leading-6 text-center text-white">
                Continue with Google
              </p>
            </button>
            <div className="flex items-center justify-center mt-3 mb-3">
              <p className=" w-[150px] bg-gray-400 h-[1px] "></p>
              <p className="p">Or</p>
              <p className=" w-[150px] bg-gray-400 h-[1px] "></p>
            </div>
            <Link to="/email">
              <button className="flex justify-center items-center w-[382px] h-[64px] p-[20px_40px] gap-2 rounded-[24px]  bg-gradient-to-br from-[#552dce] to-[#896ddf]">
                <p className="w-[150px] h-[24px]  font-inter text-base font-normal leading-6 text-white">
                  Continue with Email
                </p>
              </button>
            </Link>
            {/* <button className="phone">
              <p>Continue with phone number</p>
            </button> */}
          </div>
        </div>
        <p className=" w-[400px] bg-gray-400 h-[1px] mb-5 "></p>
        <p className="w-full h-6 top-[742px] left-[94px]  font-inter text-base font-normal leading-6 text-center">
          Already have an account?{" "}
          <span className="font-inter text-base font-normal leading-6 text-center text-[#896ddf]">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
