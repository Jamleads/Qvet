import React from "react";
import "@/styles/editprofile.css";
import { Link } from "react-router-dom";
function EditProfile() {
  return (
    <div className="editprofile">
      <div className="head ">
        <img src="/Union.png" alt="Qvet_logo" className="w-[40px] h-[40px]" />
        <button>
          <p>Skip</p>
        </button>
      </div>
      <div className="form">
        <h1>Profile information</h1>
        <div className="inner">
          <div className="top">
            <div>
              <img
                src="/Image.png"
                className="w-[24px] h-[24px]"
                alt="add_image_icon"
              />
            </div>
            <input type="text" placeholder="Name" />
          </div>
          <input type="text" placeholder="Profile title" />
          <textarea
            name="bio"
            id="bio"
            cols="30"
            rows="10"
            placeholder="bio description..."
          ></textarea>
        </div>
      </div>
      <button>
        <Link to="/homelink">
          <p>Finish up</p>
        </Link>
      </button>
    </div>
  );
}

export default EditProfile;
