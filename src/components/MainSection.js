import React, { useContext, useEffect } from "react";
// import LeftSection from "./LeftSection";
import "./styles/MainSection.scss";
import RightSection from "./RightSection/RightSection";
// import DetailsLeftSection from "./DetailsLeftSection";
import { Outlet } from "react-router";
import Headers from "./Header";
import {Helmet} from "react-helmet";

import Footer from "./Footer";
import AuthenticationContext from "../pages/Login/AuthContext";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import AuthenticationContext from "./Login_Signup/Store/AuthContext";

export default function MainSection() {

  const authctx = useContext(AuthenticationContext)
  
        const scrollUp =()=>{
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'
        })}
        useEffect(() => {
          window.addEventListener('scroll', isSticky);
          // return () => {
          //     window.removeEventListener('scroll', isSticky);
          // };
        });
        /* Method that will fix header after a specific scrollable */
             const isSticky = (e) => {
                  const rightSection = document.querySelector('.right-section');
                  const scrollTop = window.scrollY;
                  // console.log(window.scrollY);
                  scrollTop >= 60 ? rightSection.classList.add('stick') : rightSection.classList.remove('stick');
                  const ads = document.querySelector('.ads');
                  scrollTop >= 300 ? ads.classList.add('show_ads') : ads.classList.remove('show_ads');
              };

              const cancelBtn = ()=>{
                const ads = document.querySelector('.ads');
               ads.classList.remove('show_ads');
              }
            //  const displayAds = (e) => {
            //       const ads = document.querySelector('.ads');
            //       const scrollTop = window.scrollY;
            //       // console.log(window.scrollY);
            //       scrollTop >= 150 ? ads.classList.add('show_ads') : ads.classList.add('ads');
            //   };
        
        // console.log(authctx.isLoggedIn);

        // window.localStorage.setItem('is_loggedIn', count);

        
  return (

    <>
    <Headers/>
    <div className="mainSection">
    {/* <div className='advert'>Advert Placement</div> */}
{/* <div className="left_right_wrapper"> */}
      <div className="leftSection">
        <Outlet />
      </div>
      {/* <div className="ads_vertical"></div> */}
      <div className="rightSection">
        <RightSection />
      </div>
      {/* </div> */}
      <button  onClick= {scrollUp} className="up-btn"><i className="fa-solid fa-circle-up"></i></button>
    </div>
    <div className="footer">

    <Footer /> 
    </div>
    {/* <div  className="ads">ADVERTISEMENT
    <i className="fa-solid fa-xmark cancel_btn" onClick={cancelBtn}></i>
    </div> */}
    </>
  );
}
