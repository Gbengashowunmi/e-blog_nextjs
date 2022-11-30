import React from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";
// import { Link } from "react-router-dom";
import Link from "next/link";
import styles from "./styles/CustomRight.module.scss";

export default function CustomRight({
  header,
  src1,
  textContent1,
}) {
  return (
    <div className={styles.card_container}>
      <header className="header">{header && header}</header>
      <div className={styles.main_content_container}>
<Link href={`detail/news/posts`}>
        <div className={styles.main_content}>
          {src1 && <img src={src1} alt="news display" />}
          <p className={styles.text_content}>
            {textContent1} <br />
            <p className={styles.date}>
              <AiOutlineClockCircle /> November, 2022
            </p>
          </p>
        </div>
      </Link>
      </div>
    
   
   
    </div> 
  );
}
