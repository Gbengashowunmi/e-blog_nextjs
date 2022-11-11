import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationContext from "../Login/AuthContext";
import "./DashboardStyles/LeftSideBar.scss";

export default function LeftSideBar() {
  // const [highlight, setHighlight] = useState(false);

  const getAdmin = window.localStorage.getItem("is_admin");
  const getLoggedIn = window.localStorage.getItem("is_loggedIn");
  const checkAdmin = getAdmin === "true" ? true : false;

  // const handleClick = () => {
  //   setHighlight(prev => !prev);
  // };
  const authctx = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const LogOut = () => {
    authctx.logout();
    navigate("/");
    window.localStorage.clear();
  };

  // console.log(authctx.is_admin)

  return (
    <div className="leftSideBar">
      <div className="menu">
        <Link to="/">
          <div className="span">
            <p>
              <i class="fa-solid fa-house-user"></i>
            </p>
            <p>Home</p>
          </div>
        </Link>

        <Link to="/dashboard/create-post">
          <div className="span">
            <p>
              <i class="fa-regular fa-file-lines icon"></i>
            </p>
            <p>Write Blog</p>
          </div>
        </Link>

        {checkAdmin ? (
          <Link to="/dashboard/posted-blogs">
            <div className="span">
              <p>
                <i class="fa-regular fa-file-lines icon"></i>
              </p>
              <p>Unpublished Post</p>
            </div>
          </Link>
        ) : (
          <Link to="/dashboard/user-posts">
            <div className="span">
              <p>
                <i class="fa-regular fa-file-lines icon"></i>
              </p>
              <p>Posts</p>
            </div>
          </Link>
        )}
        {checkAdmin ? (
          <Link to="/dashboard/categories">
            <div className="span">
              <p>
                <i class="fa-regular fa-file-lines icon"></i>
              </p>
              <p>Add Categories</p>
            </div>
          </Link>
        ) : (
          <div className="span">
            <p>
              <i class="fa-solid fa-file icon"></i>
            </p>
            <p>Pages</p>
          </div>
        )}

        {checkAdmin ? (
          ""
        ) : (
          <Link to="/dashboard/media">
            <div className="span">
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
          <Link to="/dashboard/team">
            <div className="span">
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
          <Link to="/dashboard/profile">
            <div className="span">
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
          <Link to="/dashboard/terms">
            <div className="span">
              <p>
                <i class="fa-solid fa-people-group icon"></i>
              </p>
              <p>Terms & Conditions</p>
            </div>
          </Link>
        )}
      </div>
      <div className="span" onClick={LogOut}>
        <p>
          <i class="fa-solid fa-right-from-bracket"></i>
        </p>
        <p>Log Out</p>
      </div>
    </div>
  );
}
