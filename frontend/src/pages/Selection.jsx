import React from "react";
import "@/styles/selection.css";
import { Link } from "react-router-dom";
function Selection() {
  return (
    <>
      <div className="head ">
        <img src="/Union.png" alt="Qvet_logo" className="w-[40px] h-[40px]" />
        <button>
          <p>Skip</p>
        </button>
      </div>
      <div className="select">
        <h1>Make you selection</h1>
        <p>Pick as many as you like. You can add more later.</p>
      </div>
      <div className="grid">
        <div className="item">
          <div className="img">
            <img
              src="/behance.png"
              className="w-[72px] h-[72px]"
              alt="Be_logo"
            />
          </div>
          <p>Behance</p>
        </div>
        <div className="item">
          <div className="img">
            <img
              src="/github.png"
              className="w-[80px] h-[80px]"
              alt="github_logo"
            />
          </div>
          <p>GitHub</p>
        </div>
        <div className="item">
          <div className="img">
            <img
              src="/youtube.png"
              className="w-[80px] h-[80px]"
              alt="youtube_logo"
            />
          </div>
          <p>YouTube</p>
        </div>
        <div className="item">
          <div className="img">
            <img src="/x.png" className="w-[64px] h-[64px]" alt="x_logo" />
          </div>
          <p>X</p>
        </div>
        <div className="item">
          <div className="img">
            <img
              src="/insta.png"
              className="w-[103px] h-[103px]"
              alt="instagram_logo"
            />
          </div>
          <p>Instagram</p>
        </div>
        <div className="item">
          <div className="img">
            <img
              src="/tiktok.png"
              className="w-[52px] h-[49px]"
              alt="tiktok_logo"
            />
          </div>
          <p>TikTok</p>
        </div>
        <div className="item">
          <div className="img">
            <img
              src="/whatsapp.png"
              className="w-[64px] h-[64px]"
              alt="whatsapp_logo"
            />
          </div>
          <p>WhatsApp</p>
        </div>
        <div className="item">
          <div className="img">
            <img
              src="/website.png"
              className="w-[64px] h-[64px]"
              alt="website_logo"
            />
          </div>
          <p>Website</p>
        </div>
        <div className="item">
          <div className="img">
            <img
              src="/amazon.png"
              className="w-[77px] h-[77px]"
              alt="amazon_logo"
            />
          </div>
          <p>Amazon</p>
        </div>
      </div>
      <button className="selectCont">
        <Link to="/enterlinks">
          <p>Continue</p>
        </Link>
      </button>
    </>
  );
}

export default Selection;
