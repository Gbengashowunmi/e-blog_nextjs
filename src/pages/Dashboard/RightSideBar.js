import React, { useContext } from "react";
import AuthenticationContext from "../Login/AuthContext";
import "./DashboardStyles/RightSideBar.scss";



export default function RightSideBar() {

  const authctx = useContext(AuthenticationContext)
  const getFirstName = window.localStorage.getItem('first_name');
   
  return (
    <div className="rightSdieBar">
      <form className="form">
        <div className="author">
          <p>Author</p>
          <div className="user">
            <div className="user-image">
              <img src="https://2.bp.blogspot.com/-c44zyXSkI_k/U4gCFGyzluI/AAAAAAAALMo/1_za8Y2XbzU/s35/MTavatar.png" alt="" />
            </div>
            <p className="username">{getFirstName}</p>
          </div>
        </div>

        <label for="category">
          <p>Category</p>
        </label>
        <select
          name="category"
          id="language"
          form="categoryform"
          className="select-cat"
        >
          <option value="Politics">Politics</option>
          <option value="sport">Sport</option>
          <option value="music">Music</option>
          <option value="others">others</option>
        </select>

        <button type="submit" className="publish">
          Publish Post
        </button>
      </form>
    </div>
  );
}
