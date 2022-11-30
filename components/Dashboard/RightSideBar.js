import React, { useContext, useEffect, useState } from "react";
import AuthenticationContext from "../../pages/AuthContext";
import styles from "./DashboardStyles/RightSideBar.module.scss";

export default function RightSideBar() {
  const authctx = useContext(AuthenticationContext);

  //setting states for window storage to be used inside useEffect
  const [getFirstName, setGetFirstName] = useState("");

  useEffect(() => {
    setGetFirstName(window.localStorage.getItem("first_name"));
  }, []);

  return (
    <div className={styles.rightSdieBar}>
      <form className={styles.form}>
        <div className={styles.author}>
          <p>Author</p>
          <div className={styles.user}>
            <div className={styles.user_image}>
              <img
                src="https://2.bp.blogspot.com/-c44zyXSkI_k/U4gCFGyzluI/AAAAAAAALMo/1_za8Y2XbzU/s35/MTavatar.png"
                alt=""
              />
            </div>
            <p className={styles.username}>{getFirstName}</p>
          </div>
        </div>

        <label for="category">
          <p>Category</p>
        </label>
        <select
          name="category"
          id="language"
          form="categoryform"
          className={styles.select_cat}
        >
          <option value="Politics">Politics</option>
          <option value="sport">Sport</option>
          <option value="music">Music</option>
          <option value="others">others</option>
        </select>

        <button type="submit" className={styles.publish}>
          Publish Post
        </button>
      </form>
    </div>
  );
}
