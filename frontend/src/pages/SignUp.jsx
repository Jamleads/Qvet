import React from "react";
import "@/styles/access.css";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <>
      <div className="acces">
        <div className="container">
          <div className="logo">
            <img
              src="/Union.png"
              className="w-[120px] h-[120px]"
              alt="Qvet_logo"
            />
            <p>Join QVet for free!</p>
          </div>
          <div className="link">
            <button className="google">
              <img
                src="/google.png"
                className="w-[24.43px] h-[25px]"
                alt="google_logo"
              />
              <p>Continue with Google</p>
            </button>
            <div className="line">
              <p className=" w-[133px] bg-gray-400 h-[1px] "></p>
              <p className="p">Or</p>
              <p className=" w-[133px] bg-gray-400 h-[1px] "></p>
            </div>
            <Link to="/email">
              <button className="email">
                <p>Continue with Email</p>
              </button>
            </Link>
            <button className="phone">
              <p>Continue with phone number</p>
            </button>
          </div>
        </div>
        <p className=" w-[400px] bg-gray-400 h-[1px] mb-5 mt-14"></p>
        <p className="account">
          Already have an account?{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </>
  );
}

export default SignUp;
