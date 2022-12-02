import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AppUrl } from "../../pages/_app";
import useFetch from "../useFetch";
import CustomRight from "./CustomRight";
import styles from "./styles/RightSection.module.scss";
import customStyles from "./styles/CustomRight.module.scss";
import { ThreeDots } from "react-loader-spinner";

export default function RightSection() {

  const { data, loading } = useFetch(`${AppUrl}/news/`);



  return (
    <div className={styles.rightSection}>
      {/* TRENDING NEWS */}
      <div className={customStyles.card_container}>
        <header className="header"><strong>TRENDING</strong></header>
        <div className={customStyles.main_content_container}>
          {data.map((eachNews) => {
            if (eachNews.category.name === "Trending") {
              return (loading ? 
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#03033a8f"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
               : 
                <Link
                  href={{
                    pathname: `/Details/${eachNews.slug}/`,
                    query: { name: "news" },
                  }}
                >
                  <div className={customStyles.main_content}>
                    <img src={eachNews.image} alt={eachNews.owner} />
                    <p className={customStyles.text_content}>
                      {eachNews.description.substring(0, 50)}
                      <br />
                      <p className={customStyles.date}>
                        <AiOutlineClockCircle /> {eachNews.created}
                      </p>
                    </p>
                  </div>
                </Link>
              )
            }
          })}
        </div>
      </div>
      <div className={styles.right_ads}>
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      {/* FEATURED POSTS */}
      <div className={customStyles.card_container}>
        <header className="header"><strong>FEATURED</strong></header>
        <div className={customStyles.main_content_container}>
          {data.map((eachNews) => {
            if (eachNews.category.name === "Featured") {
              return (
                <Link key={eachNews.title}
                  href={{
                    pathname: `/Details/${eachNews.slug}/`,
                    query: { name: "news" },
                  }}
                >
                  <div className={customStyles.main_content}>
                    <img src={eachNews.image} alt={eachNews.owner} />
                    <p className={customStyles.text_content}>
                      {" "}
                      {eachNews.description.substring(0, 50)}
                      <br />
                      <p className={customStyles.date}>
                        <AiOutlineClockCircle /> {eachNews.created}
                      </p>
                    </p>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.right_ads}>
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      {/* LIFESTYLE POSTS */}
      <div className={customStyles.card_container}>
        <header className="header"><strong>LIFESTYLE</strong></header>
        <div className={customStyles.main_content_container}>
          {data.map((eachNews) => {
            if (eachNews.category.name === "Lifestyle") {
              return (
                <Link key={eachNews.title}
                  href={{
                    pathname: `/Details/${eachNews.slug}/`,
                    query: { name: "news" },
                  }}
                >
                  <div className={customStyles.main_content}>
                    <img src={eachNews.image} alt={eachNews.owner} />
                    <p className={customStyles.text_content}>
                      {" "}
                      {eachNews.description.substring(0, 50)}
                      <br />
                      <p className={customStyles.date}>
                        <AiOutlineClockCircle /> {eachNews.created}
                      </p>
                    </p>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.right_ads}>
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <br />
        New ADVERTISEMENT
        <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      {/* LIFESTYLE POSTS */}
      <div className={customStyles.card_container}>
        <header className="header"><strong>SPORTS</strong></header>
        <div className={customStyles.main_content_container}>
          {data.slice(0,10).map((eachNews) => {
            if (eachNews.category.name === "Sports") {
              return (
                <Link key={eachNews.title}
                  href={{
                    pathname: `/Details/${eachNews.slug}/`,
                    query: { name: "news" },
                  }}
                >
                  <div className={customStyles.main_content}>
                    <img src={eachNews.image} alt={eachNews.owner} />
                    <p className={customStyles.text_content}>
                      {" "}
                      {eachNews.description.substring(0, 50)}
                      <br />
                      <p className={customStyles.date}>
                        <AiOutlineClockCircle /> {eachNews.created}
                      </p>
                    </p>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.right_ads}>
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <br />
        New ADVERTISEMENT
        <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>

      <div className={styles.right_ads}>
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <br />
        New ADVERTISEMENT
        <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
    </div>
  );
}
