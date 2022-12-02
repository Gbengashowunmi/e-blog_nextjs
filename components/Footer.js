import React, { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
// import { Link } from "react-router-dom";
import Link from "next/link";

import styles from "./styles/Footer.module.scss";
import { AppUrl } from "./_app";
export default function Footer() {
  const [input, setInput] = useState({
    email: "",
  });

  const postSubscribeEmail = async () => {
    const response = await fetch(`${AppUrl}/newsletter/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(input),
    });
    const data = await response.json(input);

    // console.log(data);
  };

  const HandleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // console.log(input);

  return (
    <div className={styles.footer}>
      <div className={styles.footer_name}>
        <h2>ESSENTIAL</h2>
        <p>2022 Essential</p>
        <p>All rights reserved.</p>
      </div>

      <ul className={styles.ul}>
        <Link href="about">
          <li>About</li>
        </Link>
        <Link href="/abou">
          {" "}
          <li>Contact</li>
        </Link>
        <Link href="/abo">
          {" "}
          <li>Forum</li>
        </Link>
        <Link href="/abow">
          {" "}
          <li>Policy</li>
        </Link>
        <Link href="/abe">
          {" "}
          <li>FAQ</li>
        </Link>
        <Link href="/abwe">
          <li>Shop</li>
        </Link>
      </ul>
      <div className={styles.form_section}>
        <div className={styles.contact_icons}>
          <AiOutlineTwitter className={styles.icon} />
          <AiFillLinkedin className={styles.icon} />
          <AiFillYoutube className={styles.icon} />
          <AiFillFacebook className={styles.icon} />
        </div>

        <form className={styles.form} onSubmit={postSubscribeEmail}>
          <input
            name="email"
            placeholder="Enter Email"
            onChange={HandleInput}
            type="email"
          />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
}
