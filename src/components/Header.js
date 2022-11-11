import React, { useContext, useEffect, useState } from "react";
import {
  AiFillCaretDown,
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import AuthenticationContext from "../pages/Login/AuthContext";
// import { logged } from "./DetailsLeftSection";

import "./styles/Header.scss";
  


export default function Headers() {
  const authctx = useContext(AuthenticationContext);
  const getAdmin = window.localStorage.getItem('is_admin');
  const checkAdmin = getAdmin==='true'?true:false
  const getLoggedIn = window.localStorage.getItem('is_loggedIn');

  
   // Sticky Menu Area
   useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.header');
            const scrollTop = window.scrollY;
            // console.log(window.scrollY);
            scrollTop >= 60 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };
  
  const [menuClick, setMenuclick] = useState(false);
  const HandleClick = () => {
    setMenuclick((prev) => !prev);
  };


  return (
    <div className={menuClick ? "header shownavlist" : "header"} >
      <div className={menuClick ? "header_overlay" : "hide_overlay"} onClick={HandleClick}></div>

      <div className="wrapper" >
        <div className="leftNav">
          <div className="menu" onClick={HandleClick}>
            <AiOutlineMenu />
            <p className="menu_text">MENU</p>
          </div>
          <Link to="/" className="logo">
            ESSENTIAL
          </Link>
        </div>
        <div className="rightNav">
          <div className="facebook">
            <AiFillFacebook className="icon" />
          </div>
          <div className="google">
            <AiFillGoogleCircle className="icon" />
          </div>
          <div className="twitter">
            <AiFillTwitterCircle className="icon" />
          </div>
          <div className="youtube">
            <AiFillYoutube className="icon" />
          </div>
          <div className="facebook">
            <AiFillFacebook className="icon" />
          </div>
          {!getLoggedIn ? (
            <div className="sign-in">
              <Link to="login">
                <button className="login-btn">Login</button>
              </Link>
              {/* <Link to="signup">
                <button className="signup-btn">Sign up</button>
              </Link> */}
            </div>
          ) : (
            <div className="sign-in">
              {/* <p>Welcome back {authctx.first_name}</p> */}
              <Link to= {checkAdmin? "dashboard/posted-blogs": "dashboard/create-post"}>
                <button className="signup-btn">My Dashboard</button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="navList"  onClick={HandleClick}>
        <ul className="navList-ul">
          <Link to="/">
            {/* <AiFillCaretUp className='home-arrow'/> */}
            <li>Home </li>
          </Link>
          <Link to={"/"}>
            <li>
              Domes <AiFillCaretDown />
            </li>
          </Link>
          <Link to={"/"}>
            <li>
              Drop Down <AiFillCaretDown id="arrow-down" />
            </li>
          </Link>
          <Link to={"/"}>
            <li>
              Mega Links <AiFillCaretDown />
            </li>
          </Link>
          <Link to={"/"}>
            <li>
              Mega Label <AiFillCaretDown />
            </li>
          </Link>
          <Link to={"/"}>
            <li>
              ComplexMega <AiFillCaretDown />
            </li>
          </Link>
          <Link to={"/"}>
            <li>
              Shortcode <AiFillCaretDown />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
