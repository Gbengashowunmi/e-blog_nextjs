import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

import "./styles/staffpick.scss";

export default function StaffPick() {


  return (
    <div className="staffSection" id="Tech">
      <header>
        <h3>STAFF PICK</h3>
        <p>
          VIEW ALL <AiOutlineRight />{" "}
        </p>
      </header>
      <div className="staffPick">
        <div className="leftStaff">
          <Link to="details" className="image">
            <img
              src="https://4.bp.blogspot.com/-ILdnakrXmJ8/VZEYRwNXFFI/AAAAAAAAKtc/ZTIeOp6AFoQ/s1600/Kiplinger%2BSunday%2BBusiness6871393885813.jpg"
              alt="staff"
            />
          </Link>
          <div className="caption">
            <p>
              I decided to quit my jobs immediately when I see that magazine
              template. My millionaire story is pretty simple, and you can do it
              by yourself with tim...
            </p>
          </div>
        </div>
        <div className="rightStaff">
          <div className="right">
            <img
              src="https://1.bp.blogspot.com/-AdcsF86gBo4/VZEdQnmg64I/AAAAAAAAKts/RiX0YsQOtq8/s1600/tech_new-keyboard_84.jpg"
              alt=""
            />

            <div className="button-info">
              <button>Phones</button>
              <h5>Best Mobile Device Portable Accessory</h5>
            </div>
          </div>
          <div className="right">
            <img
              src="https://1.bp.blogspot.com/-AdcsF86gBo4/VZEdQnmg64I/AAAAAAAAKts/RiX0YsQOtq8/s1600/tech_new-keyboard_84.jpg"
              alt=""
            />

            <div className="button-info">
              <button>Phones</button>
              <h5>Best Mobile Device Portable Accessory</h5>
            </div>
          </div>
          <div className="right">
            <img
              src="https://1.bp.blogspot.com/-AdcsF86gBo4/VZEdQnmg64I/AAAAAAAAKts/RiX0YsQOtq8/s1600/tech_new-keyboard_84.jpg"
              alt=""
            />

            <div className="button-info">
              <button>Phones</button>
              <h5>Best Mobile Device Portable Accessory</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
