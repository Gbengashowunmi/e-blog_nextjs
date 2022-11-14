import React, { useContext, useEffect, useState } from "react";
import {
  AiFillCaretDown,
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineMenu,
} from "react-icons/ai";
// import Link from "next/link";
import Link from "next/link";
import AuthenticationContext from "../pages/AuthContext";

import styles from "./styles/Header.module.scss";

export default function Headers() {
  //setting states for window storage to be used inside useEffect
  const [getAdmin, setGetAdmin] = useState("");
  const [checkAdmin, setCheckAdmin] = useState("");
  const [getLoggedIn, setGetLoggedIn] = useState("");
  const [sticky, setSticky] = useState("");
  const authctx = useContext(AuthenticationContext);

  useEffect(() => {
    setGetAdmin(window.localStorage.getItem("is_admin"));
    setCheckAdmin(getAdmin === "true" ? true : false);
    setGetLoggedIn(window.localStorage.getItem("is_loggedIn"));
  }, []);

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  // /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const scrollTop = window.scrollY;
    // console.log(window.scrollY);
    scrollTop >= 60 ? setSticky("styles.is_Sticky") : setSticky("");
    // console.log(sticky);
  };

  useEffect(() => {
    isSticky(), [];
  });

  const [menuClick, setMenuclick] = useState(false);
  const HandleClick = () => {
    setMenuclick((prev) => !prev);
  };

  return (
    <div
      className={
        menuClick
          ? `${styles.header} ${styles.shownavlist} ${sticky}`
          : `${styles.header} ${sticky}`
      }
    >
      <div
        className={
          menuClick ? `${styles.header_overlay}` : `${styles.hide_overlay}`
        }
        onClick={HandleClick}
      ></div>

      <div className={styles.wrapper}>
        <div className={styles.leftNav}>
          <div className={styles.menu} onClick={HandleClick}>
            <AiOutlineMenu />
            <p className={styles.menu_text}>MENU</p>
          </div>
          <Link href="/" className={styles.logo}>
            ESSENTIAL
          </Link>
        </div>
        <div className={styles.rightNav}>
          <div className={styles.facebook}>
            <AiFillFacebook className={styles.icon} />
          </div>
          <div className={styles.google}>
            <AiFillGoogleCircle className={styles.icon} />
          </div>
          <div className={styles.twitter}>
            <AiFillTwitterCircle className={styles.icon} />
          </div>
          <div className={styles.youtube}>
            <AiFillYoutube className={styles.icon} />
          </div>
          <div className={styles.facebook}>
            <AiFillFacebook className={styles.icon} />
          </div>
          {!getLoggedIn ? (
            <div className={styles.sign_in}>
              <Link href="mike">
                <button className={styles.login_btn}>Login</button>
              </Link>
              {/* <Link href="signup">
                <button className={styles.signup_btn}>Sign up</button>
              </Link> */}
            </div>
          ) : (
            <div className={styles.sign_in}>
              {/* <p>Welcome back {authctx.first_name}</p> */}
              <Link
                href={
                  checkAdmin
                    ? "dashboard/posted-blogs"
                    : "dashboard/create-post"
                }
              >
                <button className={styles.signup_btn}>My Dashboard</button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className={styles.navList} onClick={HandleClick}>
        <ul className={styles.navList_ul}>
          <Link href="/">
            {/* <AiFillCaretUp className={styles.home-arrow'/> */}
            <li>Home </li>
          </Link>
          <Link href={"/"}>
            <li>
              Domes <AiFillCaretDown />
            </li>
          </Link>
          <Link href={"/"}>
            <li>
              Drop Down <AiFillCaretDown id="arrow-down" />
            </li>
          </Link>
          <Link href={"/"}>
            <li>
              Mega Links <AiFillCaretDown />
            </li>
          </Link>
          <Link href={"/"}>
            <li>
              Mega Label <AiFillCaretDown />
            </li>
          </Link>
          <Link href={"/"}>
            <li>
              ComplexMega <AiFillCaretDown />
            </li>
          </Link>
          <Link href={"/"}>
            <li>
              Shortcode <AiFillCaretDown />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
