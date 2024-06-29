import React from "react";
import "@/styles/homelink.css";
import { Link } from "react-router-dom";
function HomeLink() {
  return (
    <div className="homelink">
      <div className="head ">
        <img src="/Union.png" alt="Qvet_logo" className="w-[24px] h-[24px]" />
        <img src="/nav.png" className="w-[24px] h-[24px]" alt="" />
      </div>
      <p className="w-full h-[1px] bg-gray-400"></p>
      <div className="main">
        <div className="homelinktop">
          <h1>Lorem ipsum</h1>
          <p className="flex">
            <div>
              <img src="/LinkSimple.png" className="w-[24px] h-[24px]" alt="" />
            </div>
            <div className="ml-4">
              <img src="/QrCode.png" className="w-[24px] h-[24px]" alt="" />
            </div>
          </p>
        </div>
        <div className="homelinklower">
          <div className="homelinklowerouter">
            <div className="homelinklowerinner">
              <div className="homelinklowerinnerone1">
                <img
                  src="/behance.png"
                  className="w-[43px] h-[43px]"
                  alt="behance_logo"
                />
              </div>
              <div className="homelinklowerinnertwo">
                <h1>Behance</h1>
                <p>moyinthegrait</p>
              </div>
            </div>
            <img
              src="/PencilSimple.png"
              className="w-[24px] h-[24px]"
              alt="pencil_image"
            />
          </div>
          <div className="homelinklowerouter">
            <div className="homelinklowerinner">
              <div className="homelinklowerinnerone2">
                <img
                  src="/insta.png"
                  className="w-[64px] h-[64px]"
                  alt="instagram_logo"
                />
              </div>
              <div className="homelinklowerinnertwo">
                <h1>Instagram</h1>
                <p>moyinthegrait</p>
              </div>
            </div>
            <img
              src="/PencilSimple.png"
              className="w-[24px] h-[24px]"
              alt="pencil_image"
            />
          </div>
          <div className="homelinklowerouter">
            <div className="homelinklowerinner">
              <div className="homelinklowerinnerone3">
                <img
                  src="/tiktok.png"
                  className="w-[31px] h-[29px]"
                  alt="tiktok_logo"
                />
              </div>
              <div className="homelinklowerinnertwo">
                <h1>TikTok</h1>
                <p>moyinthegrait</p>
              </div>
            </div>
            <img
              src="/PencilSimple.png"
              className="w-[24px] h-[24px]"
              alt="pencil_image"
            />
          </div>
          <div className="homelinklowerouter">
            <div className="homelinklowerinner">
              <div className="homelinklowerinnerone4">
                <img
                  src="/website.png"
                  className="w-[38px] h-[38px]"
                  alt="website_icon"
                />
              </div>
              <div className="homelinklowerinnertwo">
                <h1>Website</h1>
                <p>https://moyinthegrait/fr...</p>
              </div>
            </div>
            <img
              src="/PencilSimple.png"
              className="w-[24px] h-[24px]"
              alt="pencil_image"
            />
          </div>
          <div className="homelinklowerouter">
            <div className="homelinklowerinner">
              <div className="homelinklowerinnerone5">
                <h1 className="text-white">M</h1>
              </div>
              <div className="homelinklowerinnertwo">
                <h1>My Portfolio</h1>
                <p>https://moyinthegrait/fr...</p>
              </div>
            </div>
            <img
              src="/PencilSimple.png"
              className="w-[24px] h-[24px]"
              alt="pencil_image"
            />
          </div>
        </div>
        <button className="addmore">
          <img src="/Plus.png" className="w-[24px] h-[24px]" alt="plus_img" />
          <p>Add more</p>
        </button>
        <div className="linktoggle">
          <div className="linktoggleinner">
            <div className="linktoggleinnerlink">
              <img
                src="LinkSimple2.png"
                className="w-[24px] h-[24px]"
                alt="link_icon"
              />
              <p>Links</p>
            </div>
            <div className="linktoggleinnerevent">
              <img
                src="/Ticket.png"
                className="w-[24px] h-[24px]"
                alt="ticket_img"
              />
              <Link to="/homeevents">
                <p>Events</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLink;
