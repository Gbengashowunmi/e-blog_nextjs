import React from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import Link from "next/link";
import styles from "./styles/Reader.module.scss";
import useFetch from "./useFetch";
import { AppUrl } from "../pages/_app";

export default function Readers() {
  const { data } = useFetch(`${AppUrl}/posts/`)

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
      {data.map((eachNews) => {
          if(eachNews.category.name === 'Tech'){
          return (
      <div className={styles.read} key={eachNews.title}>
        <img
          src={eachNews.image}
          alt={eachNews.owner}
        />
        <div className={styles.read_info}>
          <p>Guest Posts, {eachNews.category.name}</p>
          <h3>{eachNews.title}</h3>
          <span>
            <p>{eachNews.owner}</p> <p><FaComment/>  2</p>
            <p>
              <AiOutlineClockCircle />{eachNews.created}
            </p>
          </span>
          <p>
            {eachNews.description.substring(0,100)}
          </p>
        </div>
      </div>
          )
          }
        })}
    </div>
  );
}
