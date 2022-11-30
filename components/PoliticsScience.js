import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import CustomCard from "./CustomCard";
import styles from "./styles/PoliticsScience.module.scss";
import useFetch from "./useFetch";
import { AppUrl } from "../pages/_app";
export default function PoliticsScience() {
  const { data } = useFetch(`${AppUrl}/news/`);
  // console.log(data);
  const poli = data.filter((each) => each.category.name === "Politics");
  // console.log(poli);
  return (
    <div className={styles.politics_science}>
      <span>
        <h3>POLITICS</h3>
       
      </span>
      <div className={styles.politics}>
        {data.map((eachNews) => {
          if (eachNews.category.name === "Politics") {
            return (
              <Link key={eachNews.title}
              href={{pathname:`Details/${eachNews.slug}/`, query:{name:'news'}}}
            >
              <CustomCard
              key={eachNews.title}
                title={eachNews.title}
                src={eachNews.image}
                desfontSize=".8rem"
                titlefontSize="20px"
                author={eachNews.owner}
                dateCreated ={eachNews.created}
                description ={eachNews.description.substring(0,150)}
              />
              </Link>
            );
          }
        })}
      </div>
      {/* <div className={styles.science}></div> */}
    </div>
  );
}
