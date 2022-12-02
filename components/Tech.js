import React, { useEffect, useState } from "react";
import { AiOutlineRight, AiTwotoneCalendar } from "react-icons/ai";
import Link from "next/link";
import styles from "./styles/Tech.module.scss";
import "aos/dist/aos.css";
import Aos from "aos";
import { AppUrl } from "../pages/_app";
import useFetch from "./useFetch";
// import { useLocation } from '@reach/router';

// Aos.init({
//   offset: 120,
// });

export default function Tech() {
  const {data} = useFetch(`${AppUrl}/news/`)

  return (
    <div
      className={styles.tech}
      // category={category}
      // data-aos="fade-up"
      // data-aos-offset="200"
      // data-aos-delay="90"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      // data-aos-once="false"
    >
      <span>
        <h3>TECH</h3>

      </span>
      <div className={styles.tech_items}>
        {data.map((eachNews) => {
          if(eachNews.category.name === 'Tech'){
          return (
            <>
              <div className={styles.tech_item} key={eachNews.id}>
                {/* <Link href={`detail/${eachNews.id}`}> <div className={styles.image-container'> */}
                <Link
                  href={{pathname:`Details/${eachNews.slug}/`, query:{name:'news'}}}
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
                    <p className={styles.description} dangerouslySetInnerHTML={{__html:eachNews.description.substring(0,154)}}>
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
          )
          }
        })}
      </div>
    </div>
  );
}
