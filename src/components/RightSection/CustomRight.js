import React from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./styles/CustomRight.scss";

export default function CustomRight({
  header,
  src1,
  src2,
  src3,
  src4,
  textContent1,
  textContent2,
  textContent3,
  textContent4,
}) {
  return (
    <div className="card-container">
      <header className="header">{header && header}</header>
      <div className="main-content-container">
<Link to={`detail/news/posts`}>
        <div className="main-content">
          {src1 && <img src={src1} alt="" />}
          <p className="text_content">
            {textContent1} <br />
            <p className="date">
              <AiOutlineClockCircle /> November, 2022
            </p>
          </p>
        </div>
      </Link>
      </div>
      <div className="main-content-container">

<Link to={`detail/news/posts`}>
        <div className="main-content">
          {src2 && <img src={src2} alt="" />}
          <p className="text_content">{textContent2} 
          <br />
            <p className="date">
              <AiOutlineClockCircle /> November, 2022
            </p>
          </p>
        </div>
      </Link>

      </div>
      <div className="main-content-container">
<Link to={`detail/news/posts`}>

        <div className="main-content">
          {src3 && <img src={src3} alt="" />}
          <p className="text_content">{textContent3} <br />
            <p className="date">
              <AiOutlineClockCircle /> November, 2022
            </p>
          </p>
        </div>
      </Link>
      </div>
      <div className="main-content-container">
<Link to={`detail/news/posts`}>
        <div className="main-content">
          {src4 && <img src={src4} alt="" />}
          <p className="text_content">{textContent4} <br />
            <p className="date">
              <AiOutlineClockCircle /> November, 2022
            </p>
          </p>
        </div>
      </Link>

      </div>
    </div>
  );
}
