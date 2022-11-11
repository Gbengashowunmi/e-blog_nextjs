import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
// import "./styles/Architect.scss";
import "./styles/CustomCard.scss";

export default function CustomCard({
  title,
  src,
  author,
  desfontSize = "14px",
  datefontSize = "14px",
  authorIcon,
}) {
  return (
    <div className="custom_architect">
      <div className="image-container">
        <img src={src && src} alt="" />
        <div className="button">
          <button style={{ fontSize: datefontSize }}>Future</button>
          <h5 style={{ fontSize: datefontSize }}>{title && title}</h5>
          <p style={{ fontSize: datefontSize }}>{author && author}</p>
        </div>
      </div>
      <div className="architect-details">
        <span>
          <p>{authorIcon && authorIcon}</p> <p><FaComment/> 2</p>
          <p style={{ fontSize: datefontSize }}>
            <AiOutlineClockCircle /> May 21, 2015
          </p>
        </span>
        <p style={{ fontSize: desfontSize }}>
          Hi everyone! This is my architectural concept. I wanted to get snowy
          atmosphere. That is quick matte painting sketch. I hope you enjoy it!
          Iphone dolo... Read more
        </p>
      </div>
    </div>
  );
}
