import '../styles/globals.css'
// import "../components/Dashboard/DashboardStyles/WriteBlog.scss";
// import "../components/Dashboard/DashboardStyles/Dashboard.scss";
// import "../components/Dashboard/DashboardStyles/LeftSideBar.scss";
// import "../components/Dashboard/DashboardStyles/RIghtSideBar.scss";



// export const AppUrl = "https://essential.pythonanywhere.com";
// export const AppUrl = "http://192.168.1.131:8000"; 
export const AppUrl = "https://userauth.pythonanywhere.com"; 

import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
