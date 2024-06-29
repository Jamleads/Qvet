import React from "react";
import "@/styles/access.css";
import { Link } from "react-router-dom";
function ConfirmMail() {
  return (
    <>
      <div className="acces">
        <div className="mail">
          <h1>Check your inbox</h1>
          <p className="mailp">
            Verify your mail via the link sent to example@gmail.com
          </p>
          <img src="/mail.png" alt="mail_img" className="w-[300px] h-[300px]" />
          <div className="flex flex-col items-center">
            <button className="email">
              <Link to="/selection">
                <p className=" text-white">Continue</p>
              </Link>
            </button>
            <p className="createText">
              Didn’t get a mail?
              <span>Resend</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmMail;
