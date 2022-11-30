import React from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import Link from "next/link";
// import { Link } from "react-router-dom";
import CustomCard from "./CustomCard";
import styles from "./styles/Architect.module.scss";
import useFetch from "./useFetch";
import { AppUrl } from "../pages/_app";
export default function Architect() {
  const { data } = useFetch(`${AppUrl}/posts/`)
  return (
    <div className={styles.architect_container}>
      <span>
        <h3>ARCHITECT</h3>
        {/* <Link href="/post">
          <p>
            VIEW ALL
            <AiOutlineRight />
          </p>
        </Link> */}
      </span>
      {data.map((eachNews) => {
          if (eachNews.category.name === "Architect") {
            return (
      <CustomCard src={eachNews.image} key={eachNews.title} author={eachNews.owner} title={eachNews.title} desfontSize=".8rem"
      titlefontSize="32px" dateCreated ={eachNews.created} />
            )
          }
        })}
    </div>
  );
}
