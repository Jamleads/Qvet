import React from "react";
import "@/styles/links.css";
import { Link } from "react-router-dom";
function EnterLinks() {
  return (
    <>
      <div className="head ">
        <img src="/Union.png" alt="Qvet_logo" className="w-[40px] h-[40px]" />
        <button>
          <p>Skip</p>
        </button>
      </div>
      <div className="top">
        <h1 className="ml-2">Enter links</h1>
        <div className="links">
          <div>
            <div className="img">
              <img
                src="/behance.png"
                className="w-[43px] h-[43px]"
                alt="behance_logo"
              />
              <input type="text" placeholder="Behance portfolio link" />
            </div>
          </div>
          <div>
            <div className="img">
              <img
                src="/insta.png"
                className="w-[64px] h-[64px]"
                alt="instagram_logo"
              />
              <input type="text" placeholder="Instagram profile link" />
            </div>
          </div>
          <div>
            <div className="img">
              <img
                src="/tiktok.png"
                className="w-[31.4px] h-[29.58px]"
                alt="tiktok_logo"
              />
              <input type="text" placeholder="TikTok profile link" />
            </div>
          </div>
        </div>
      </div>
      <p className="middleline"></p>
      <div className="lower">
        <div className="top">
          <h1 className="ml-2">Others</h1>
          <p>See all</p>
        </div>
        <div className="links">
          <div>
            <div className="img">
              <img src="/x.png" className="w-[38px] h-[38px]" alt="x_logo" />
              <input type="text" placeholder="X profile link" />
            </div>
          </div>
          <div>
            <div className="img">
              <img
                src="/website.png"
                className="w-[38px] h-[38px]"
                alt="website_logo"
              />
              <input type="text" placeholder="Title label  |  Website URL" />
            </div>
          </div>
        </div>
      </div>
      <button className="enterlinksContinue">
        <Link to="/editprofile">
          <p>Continue</p>
        </Link>
      </button>
    </>
  );
}

export default EnterLinks;
