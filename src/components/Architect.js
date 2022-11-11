import React from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomCard from "./CustomCard";
import "./styles/Architect.scss";
export default function Architect() {
  return (
    <div className="architect-container">
      <span>
        <h3>ARCHITECT</h3>
        <Link to="/post">

        <p>
          VIEW ALL
          <AiOutlineRight />
        </p>

        </Link>

      </span>
      <div className="architect">
        <div className="image-container">
          <img
            src="https://3.bp.blogspot.com/-OfTnEDq22WM/VZDuM5yGGZI/AAAAAAAAKrE/2bgsYN5u9Gk/s450-rw/fasion_hijab-collection_75K.webp"
            alt=""
          />
          <div className="button">
            <button>Future</button>
            <h5>Take a look into the future of technology</h5>
          </div>
        </div>
        <div className="architect-details">
          <span>
            <p>Tien Nugyen</p> <p><FaComment/> 2</p>
            <p>
              <AiOutlineClockCircle /> May 21, 2015
            </p>
          </span>
          <p>
            Hi everyone! This is my architectural concept. I wanted to get snowy
            atmosphere. That is quick matte painting sketch. I hope you enjoy
            it! Iphone dolo... Read more
          </p>
        </div>
      </div>
      <CustomCard src="https://2.bp.blogspot.com/-l8TdL2AWfGk/VZEAICSEAmI/AAAAAAAAKss/-UI-Jm2udIM/w728-rw/architecture_on-wheels_142K.webp" />
      
      <CustomCard src="https://1.bp.blogspot.com/-t-isWbt0HiU/VZD4HBdDm_I/AAAAAAAAKrw/kBXCm3ocTBM/w337-rw/f07d4ca4faca5577e79a77cb6d5ea57b.webp" />
      <CustomCard src="https://2.bp.blogspot.com/-l8TdL2AWfGk/VZEAICSEAmI/AAAAAAAAKss/-UI-Jm2udIM/w728-rw/architecture_on-wheels_142K.webp" />
    </div>
  );
}
