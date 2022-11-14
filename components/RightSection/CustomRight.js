import React from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";
// import { Link } from "react-router-dom";
import Link from "next/link";
import styles from "./styles/CustomRight.module.scss";

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
    <div className={styles.card_container}>
      <header className="header">{header && header}</header>
      <div className={styles.main_content_container}>
<Link href={`detail/news/posts`}>
        <div className={styles.main_content}>
          {src1 && <img src={src1} alt="" />}
          <p className={styles.text_content}>
            {textContent1} <br />
            <p className={styles.date}>
              <AiOutlineClockCircle /> November, 2022
            </p>
          </p>
        </div>
      </Link>
      </div>
      <div className={styles.main_content_container}>

<Link href={`detail/news/posts`}>
        <div className={styles.main_content}>
          {src2 && <img src={src2} alt="" />}
          <p className={styles.text_content}>{textContent2} 
          <br />
            <p className={styles.date}>
              <AiOutlineClockCircle /> November, 2022
            </p>
          </p>
        </div>
      </Link>

      </div>
      <div className={styles.main_content_container}>
<Link href={`detail/news/posts`}>

        <div className={styles.main_content}>
          {src3 && <img src={src3} alt="" />}
          <p className={styles.text_content}>{textContent3} <br />
            <p className={styles.date}>
              <AiOutlineClockCircle /> November, 2022
            </p>
          </p>
        </div>
      </Link>
      </div>
      <div className={styles.main_content_container}>
<Link href={`detail/news/posts`}>
        <div className={styles.main_content}>
          {src4 && <img src={src4} alt="" />}
          <p className={styles.text_content}>{textContent4} <br />
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
