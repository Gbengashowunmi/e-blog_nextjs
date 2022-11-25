import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
// import "./styles/Architect.scss";
import styles from "./styles/CustomCard.module.scss";

export default function CustomCard({
  title,
  src,
  author,
  dateCreated,
  // imageHeight = "32px",
  desfontSize = "14px",
  datefontSize = "14px",
  titlefontSize = "32px",
  authorIcon,
}) {
  return (
    <div className={styles.custom_architect}>
      <div className={styles.image_container}>
        <img src={src && src} alt="" 
        // style={{ height: imageHeight }}
         />
        <div className={styles.button}>
          <button style={{ fontSize: datefontSize }}>Future</button>
          <h5 style={{ fontSize: titlefontSize }}>{title && title}</h5>
        </div>
      </div>
      <div className={styles.architect_details}>
        <span>
        <p style={{ fontSize: datefontSize }}>{author && author}</p>

          <p>{authorIcon && authorIcon}</p> <p><FaComment/> 2</p>
          <p style={{ fontSize: datefontSize }}>
            <AiOutlineClockCircle />{dateCreated && dateCreated}
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
