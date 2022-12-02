import React, { useContext, useEffect } from "react";
import styles from "../components/styles/MainSection.module.scss";
// import { Outlet } from "react-router";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import AuthenticationContext from "./AuthContext";
import RightSection from "./RightSection/RightSection";
import LeftSection from "./LeftSection";
import Headers from "./Header";

export default function MainSection() {
  const authctx = useContext(AuthenticationContext);

  // const scrollUp = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // };
  useEffect(() => {
    // window.addEventListener("scroll", isSticky);
    // return () => {
    //     window.removeEventListener('scroll', isSticky);
    // };
  });
  /* Method that will fix header after a specific scrollable */
  // const isSticky = (e) => {
  //   const rightSection = document.querySelector(".right-section");
  //   const scrollTop = window.scrollY;
  //   // console.log(window.scrollY);
  //   scrollTop >= 60
  //     ? rightSection.classList.add("stick")
  //     : rightSection.classList.remove("stick");
  //   const ads = document.querySelector(".ads");
  //   scrollTop >= 300
  //     ? ads.classList.add("show_ads")
  //     : ads.classList.remove("show_ads");
  // };

  const cancelBtn = () => {
    const ads = document.querySelector(".ads");
    ads.classList.remove("show_ads");
  };
  return (
    <>
      <Headers />
      <div className={styles.mainSection}>
        {/* <div className='advert'>Advert Placement</div> */}
        {/* <div className="left_right_wrapper"> */}
        <div className={styles.leftSection}>
          <LeftSection />
        </div>
        {/* <div className="ads_vertical"></div> */}
        <div className={styles.rightSection}>
          <RightSection />
        </div>
        {/* </div> */}
        {/* <button onClick={scrollUp} className="up-btn">
          <i className="fa-solid fa-circle-up"></i>
        </button> */}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      {/* <div  className="ads">ADVERTISEMENT
    <i className="fa-solid fa-xmark cancel_btn" onClick={cancelBtn}></i>
    </div> */}
    </>
  );
}
