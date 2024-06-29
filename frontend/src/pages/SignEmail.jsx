import React from "react";
import "@/styles/access.css";
import { Link } from "react-router-dom";
function SignEmail() {
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
            <input type="text" placeholder="Email" />
            <div className="pass relative flex items-center justify-between">
              <input type="password" placeholder="Password" />
              <img
                src="/EyeClosed.png"
                className="w-[24px] h-[24px] absolute right-0 mr-3"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center">
              <button className="email">
                <Link to="/selection">
                  <p>Create Account</p>
                </Link>
              </button>
              <p className="createText">
                By clicking Create account, you agree to Q-Vet’s{" "}
                <span>Terms and Conditions</span> and confirm you have read our{" "}
                <span>Privacy Notice</span>.
              </p>
            </div>
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

export default SignEmail;
