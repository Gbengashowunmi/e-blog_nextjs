import React from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import Link from "next/link";
import CustomCard from "./CustomCard";
import styles from "./styles/Architect.module.scss";
import useFetch from "./useFetch";
import { AppUrl } from "./_app";
export default function Architect() {
  const { data } = useFetch(`${AppUrl}/posts/`);
  return (
    <div className={styles.architect_container}>
      <span>
        <h3>Sports</h3>
      </span>
      {data.map((eachNews) => {
        if (eachNews.category.name === "Sports") {
          return (
            <Link
              key={eachNews.title}
              href={{
                pathname: `Details/${eachNews.slug}/`,
                query: { name: "news" },
              }}
            >
              <CustomCard
                src={eachNews.image}
                key={eachNews.title}
                author={eachNews.owner}
                title={eachNews.title}
                desfontSize=".8rem"
                titlefontSize="32px"
                dateCreated={eachNews.created}
              />
            </Link>
          );
        }
      })}
    </div>
  );
}
