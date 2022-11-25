import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import AuthenticationContext from "../../pages/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
import styles from "./DashboardStyles/LeftSideBar.module.scss";

export default function LeftSideBar() {
  // const [highlight, setHighlight] = useState(false);

  //useRouet declaration
  const router = useRouter();

  //setting states for window storage to be used inside useEffect
  const [getAdmin, setGetAdmin] = useState("");
  const [getLoggedIn, setGetLoggedIn] = useState();

  useEffect(() => {
    setGetAdmin(window.localStorage.getItem("is_admin"));
    setGetLoggedIn(window.localStorage.getItem("is_loggedIn"));
  }, []);

const checkAdmin = getAdmin === "true"? true : false;
  
  const authctx = useContext(AuthenticationContext);
  const LogOut = () => {
    authctx.logout();
    window.localStorage.clear();
    router.push("/");
  };

  // console.log(authctx.is_admin)

  return (
    <div className={styles.leftSideBar}>
      <div className={styles.menu}>
        <Link href="/">
          <div className={styles.span}>
            <p>
              <i class="fa-solid fa-house-user"></i>
            </p>
            <p>Home</p>
          </div>
        </Link>

        <Link href="/dashboard/WriteBlog">
          <div className={styles.span}>
            <p>
              <i class="fa-regular fa-file-lines icon"></i>
            </p>
            <p>Write Blog</p>
          </div>
        </Link>

        {checkAdmin ? (
          <Link href="/dashboard/posted-blogs">
            <div className={styles.span}>
              <p>
                <i class="fa-regular fa-file-lines icon"></i>
              </p>
              <p>Unpublished Post</p>
            </div>
          </Link>
        ) : (
          <Link href="/dashboard/Posts">
            <div className={styles.span}>
              <p>
                <i class="fa-regular fa-file-lines icon"></i>
              </p>
              <p>Posts</p>
            </div>
          </Link>
        )}
        {checkAdmin ? (
          <Link href="/dashboard/categories">
            <div className={styles.span}>
              <p>
                <i class="fa-regular fa-file-lines icon"></i>
              </p>
              <p>Add Categories</p>
            </div>
          </Link>
        ) : (
          <div className={styles.span}>
            <p>
              <i class="fa-solid fa-file icon"></i>
            </p>
            <p>Pages</p>
          </div>
        )}

        {checkAdmin ? (
          ""
        ) : (
          <Link href="/dashboard/Media">
            <div className={styles.span}>
              <p>
                <i class="fa-regular fa-images icon"></i>
              </p>
              <p>Media</p>
            </div>
          </Link>
        )}

        {checkAdmin ? (
          ""
        ) : (
          <Link href="/dashboard/team">
            <div className={styles.span}>
              <p>
                <i class="fa-solid fa-people-group icon"></i>
              </p>
              <p>Team</p>
            </div>
          </Link>
        )}
        {checkAdmin ? (
          ""
        ) : (
          <Link href="/dashboard/Profile">
            <div className={styles.span}>
              <p>
                <i class="fa-regular fa-circle-user icon"></i>
              </p>
              <p>My Profile</p>
            </div>
          </Link>
        )}
        {checkAdmin ? (
          ""
        ) : (
          <Link href="/dashboard/Terms">
            <div className={styles.span}>
              <p>
                <i class="fa-solid fa-people-group icon"></i>
              </p>
              <p>Terms & Conditions</p>
            </div>
          </Link>
        )}
      </div>
      <div className={styles.span} onClick={LogOut}>
        <p>
          <i class="fa-solid fa-right-from-bracket"></i>
        </p>
        <p>Log Out</p>
      </div>
    </div>
  );
}
