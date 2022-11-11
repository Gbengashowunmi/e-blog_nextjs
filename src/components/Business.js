import React from "react";
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineRight } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

import './styles/business.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
AOS.init();

export default function Business(){
   
    return (
            <div className="businessSection" >
            <header>
                <h3>BUSINESS</h3>
        <Link to="/post">

                <p>VIEW ALL <AiOutlineRight /> </p>
        </Link>
            </header>
        <div className="business">
            
            <div className="leftBusiness"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false">
                <div className="image">
                    <img src="https://3.bp.blogspot.com/-jklMpLEIDso/VZCtVKWiqcI/AAAAAAAAKow/UHLsIAf2xFk/s1600/business_short-interview_75K.jpg" alt="business"/>
                </div>
                <div className="caption">
                    <p>Katie Diekman, 22, is looking forward to a "gap" year after graduating with a bachelor's degree from the University of Michigan in May. Convallis phe</p>
                   <span><p><FaComment/> 5</p> <p><AiOutlineClockCircle /> Oct 07, 2022</p></span> 
                </div>

            </div>
            <div className="rightBusiness"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false">
                <div className="right">
                    <button>PEOPLE</button>
                    <h5>Save '£700' a year by outsourcing your household bills</h5>
                </div>
                <div className="right">
                    <button>PEOPLE</button>
                    <h5>Save '£700' a year by outsourcing your household bills</h5>
                </div>
                <div className="right">
                    <button>PEOPLE</button>
                    <h5>Save '£700' a year by outsourcing your household bills</h5>
                </div>
               
               
                
                
            </div>
        </div>
            </div>
    )
}