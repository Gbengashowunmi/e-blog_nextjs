import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomCard from "./CustomCard";
import "./styles/PoliticsScience.scss";

export default function PoliticsScience() {
  return (
    <div className="politics-science">
      <span>  
        <h3>POLITICS</h3>
        <Link to="/post">


        <p>
          VIEW ALL
          <AiOutlineRight />
        </p>
        </Link>

      </span>
      <div className="politics">
        <CustomCard
          title="New rules instruct medics to admit mistakes"
          src="https://1.bp.blogspot.com/-CV6Z0MIhats/VZEEaYNMM1I/AAAAAAAAKs4/loKUsfdGAL0/w377-rw/politics_where-is-position_74K.webp"
          desfontSize=".8rem"
          author="By Tien Nguyen"
        />
        <CustomCard
          title="Spaceship with 50000 mph of speed in vacuum"
          src="https://4.bp.blogspot.com/-5VnYt1TInpE/VZEGQjLWMrI/AAAAAAAAKtE/IXC4Lfn3DFs/w377-rw/science_space-ship_59K.webp"
          author="By Tien Nguyen"
          desfontSize=".8rem" datefontSize=".8rem"
        />
      </div>
      {/* <div className="science"></div> */}
    </div>
  );
}
