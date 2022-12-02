import '../styles/globals.css'


// export const AppUrl = "https://essential.pythonanywhere.com";
export const AppUrl = "https://userauth.pythonanywhere.com";
// export const AppUrl = "http://192.168.1.131:8000"; 

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
