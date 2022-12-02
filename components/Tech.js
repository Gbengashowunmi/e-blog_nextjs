import React, { useEffect, useState } from "react";
import { AiOutlineRight, AiTwotoneCalendar } from "react-icons/ai";
import Link from "next/link";
import styles from "./styles/Tech.module.scss";
import "aos/dist/aos.css";
import { AppUrl } from "../pages/_app";
import useFetch from "./useFetch";



const Tech = () => {
  const { data } = useFetch(`${AppUrl}/news/`);
  return (
    <div
      className={styles.tech}
    >

      <span>
        <h3>TECH</h3>
      </span>
      <div className={styles.tech_items}>
        {data.map((eachNews) => {
          if (eachNews.category.name === "Tech") {
            return (
              <>
                <div className={styles.tech_item} key={eachNews.id}>
                  <Link
                    href={{
                      pathname: `Details/${eachNews.slug}/`,
                      query: { name: "news" },
                    }}
                    // state={{ data: "posts" }}
                  >
                    {/* <div className={styles.overlay'></div> */}
                    <div className={styles.image_container}>
                      <img src={eachNews.image} alt="" />
                      <div className={styles.button}>
                        <button>Future</button>
                        <h5>{eachNews.title}</h5>
                      </div>
                    </div>

                    <div className={styles.tech_details}>
                      <p
                        className={styles.description}
                        dangerouslySetInnerHTML={{
                          __html: eachNews.description.substring(0, 154),
                        }}
                      >
                        {/* {eachNews.description.substring(0, 154)} */}
                      </p>
                      <p>
                        <AiTwotoneCalendar /> {eachNews.created}
                      </p>
                    </div>
                  </Link>
                  {/* <div className={styles.advert}>Place Your Advert here</div> */}
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Tech;
