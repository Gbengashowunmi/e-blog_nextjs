import React from "react";
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineRight } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

import styles from './styles/business.module.scss'
import AOS from 'aos';
// import 'aos/dist/aos.css';
import Link from "next/link";
import useFetch from "./useFetch";
import { AppUrl } from "../pages/_app";
// AOS.init();

export default function Business(){
  const { data } = useFetch(`${AppUrl}/posts/`)

    return (
            <div className={styles.businessSection} >
            <header>
                <h3>Fashion</h3>
        {/* <Link href="/post">

                <p>VIEW ALL <AiOutlineRight /> </p>
        </Link> */}
            </header>
        <div className={styles.business}>
            
            <div className={styles.leftBusiness}
                    // data-aos="fade-up"
                    // data-aos-offset="200"
                    // data-aos-delay="50"
                    // data-aos-duration="1000"
                    // data-aos-easing="ease-in-out"
                    // data-aos-once="false"
                    >
                <div className={styles.image}>
                    <img src="https://3.bp.blogspot.com/-jklMpLEIDso/VZCtVKWiqcI/AAAAAAAAKow/UHLsIAf2xFk/s1600/business_short-interview_75K.jpg" alt="business"/>
                </div>
                <div className={styles.caption}>
                    <p>Katie Diekman, 22, is looking forward to a &quot;gap&quot; year after graduating with a bachelor&apos;s degree from the University of Michigan in May. Convallis phe</p>
                   <span><p><FaComment/> 5</p> <p><AiOutlineClockCircle /> Oct 07, 2022</p></span> 
                </div>

            </div>
            <div className={styles.rightBusiness}
                    // data-aos="fade-up"
                    // data-aos-offset="200"
                    // data-aos-delay="50"
                    // data-aos-duration="1000"
                    // data-aos-easing="ease-in-out"
                    // data-aos-once="false"
                    >
                <div className={styles.right}>
                    <button>PEOPLE</button>
                    <h5>Save &apos;£700&apos; a year by outsourcing your household bills</h5>
                </div>
                <div className={styles.right}>
                    <button>PEOPLE</button>
                    <h5>Save &apos;£700&apos; a year by outsourcing your household bills</h5>
                </div>
                <div className={styles.right}>
                    <button>PEOPLE</button>
                    <h5>Save &apos;£700&apos; a year by outsourcing your household bills</h5>
                </div>
            </div>
        </div>
            </div>
    )
}