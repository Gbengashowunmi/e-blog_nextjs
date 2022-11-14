import React from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import Link from "next/link";
import styles from "./styles/Reader.module.scss";

export default function Readers() {
  return (
    <div className={styles.reader}>
      <span className={styles.span}>
        <h3>BY READERS</h3>

        <Link href="/post">

        <p>
          VIEW ALL
          <AiOutlineRight />
        </p>

        </Link>

      </span>
      {/* <div className={styles.reader-container"> */}
      <div className={styles.read}>
        <img
          src="https://1.bp.blogspot.com/-t-isWbt0HiU/VZD4HBdDm_I/AAAAAAAAKrw/kBXCm3ocTBM/w337-rw/f07d4ca4faca5577e79a77cb6d5ea57b.webp"
          alt=""
        />
        <div className={styles.read_info}>
          <p>Guest Posts, Busines</p>
          <h3>A Little Start-Up Entertains, One Story at a Time</h3>
          <span>
            <p>Tien Nugyen</p> <p><FaComment/>  2</p>
            <p>
              <AiOutlineClockCircle /> May 21, 2015
            </p>
          </span>
          <p>
            At a time when literary writing seems like a dying art, when little
            magazines are folding left and right, when publishers bemoan the
            sinking bottom li..
          </p>
        </div>
        {/* </div> */}
      </div>
      <div className={styles.read}>
        <img
          src="https://1.bp.blogspot.com/-t-isWbt0HiU/VZD4HBdDm_I/AAAAAAAAKrw/kBXCm3ocTBM/w337-rw/f07d4ca4faca5577e79a77cb6d5ea57b.webp"
          alt=""
        />
        <div className={styles.read_info}>
          <p>Guest Posts, Busines</p>
          <h3>A Little Start-Up Entertains, One Story at a Time</h3>
          <span>
            <p>Tien Nugyen</p> <p><FaComment/> 2</p>
            <p>
              <AiOutlineClockCircle />
              May 21, 2015
            </p>
          </span>
          <p>
            At a time when literary writing seems like a dying art, when little
            magazines are folding left and right, when publishers bemoan the
            sinking bottom li..
          </p>
        </div>
        {/* </div> */}
      </div>
      <div className={styles.read}>
        <img
          src="https://1.bp.blogspot.com/-t-isWbt0HiU/VZD4HBdDm_I/AAAAAAAAKrw/kBXCm3ocTBM/w337-rw/f07d4ca4faca5577e79a77cb6d5ea57b.webp"
          alt=""
        />
        <div className={styles.read_info}>
          <p>Guest Posts, Busines</p>
          <h3>A Little Start-Up Entertains, One Story at a Time</h3>
          <span>
            <p>Tien Nugyen</p> <p><FaComment/> 2</p>
            <p>
              <AiOutlineClockCircle />
              May 21, 2015
            </p>
          </span>
          <p>
            At a time when literary writing seems like a dying art, when little
            magazines are folding left and right, when publishers bemoan the
            sinking bottom li..
          </p>
        </div>
      </div>
    </div>
  );
}
