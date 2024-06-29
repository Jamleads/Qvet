import React from "react";
import "@/styles/homeevents.css";
import { Link } from "react-router-dom";
function HomeEvents() {
  return (
    <div className="homeevents">
      <div className="head ">
        <img src="/Union.png" alt="Qvet_logo" className="w-[24px] h-[24px]" />
        <img src="/nav.png" className="w-[24px] h-[24px]" alt="" />
      </div>
      <p className="w-full h-[1px] bg-gray-400"></p>
      <div className="homeeventtop">
        <h1>Available Events</h1>
        <button className="homeeventtopbutton">
          <img
            src="/small-button-neutral-icon.png"
            className="w-[24px] h-[24px]"
            alt=""
          />
        </button>
      </div>
      <div className="homeeventsearch">
        <img src="/MagnifyingGlass.png" className="w-[24px] h-[24px]" alt="" />
        <input type="text" placeholder="Search events" />
      </div>
      <div className="homeeventbody">
        <div className="homeeventbody1">
          <img
            src="Frame 1000005388.png"
            className="w-full h-[64px]"
            alt="blank_img_background"
          />
          <div className="homeeventbody1inner">
            <div className="left">
              <h1>Google I/O</h1>
              <p>123 Street, City, ST 12345</p>
              <div className="homeeventbody1innerbutton">
                <button className="homeeventbody1innerbutton1">
                  <p>Upcoming</p>
                </button>
                <button className="homeeventbody1innerbutton2">
                  <p>Paid</p>
                </button>
              </div>
            </div>
            <div className="right">
              <p>24/07/2024</p>
              <button>
                <p>RSVP</p>
              </button>
            </div>
          </div>
        </div>
        <div className="homeeventbody2"></div>
      </div>
    </div>
  );
}

export default HomeEvents;
