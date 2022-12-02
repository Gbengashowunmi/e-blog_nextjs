import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import styles from "./styles/Fashion.module.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import useFetch from "./useFetch";
import { AppUrl } from "./_app";
// AOS.init({
//   offset: 120
// });
export default function Fashion() {
  const { data } = useFetch(`${AppUrl}/posts/`);

  // console.log(data);
  const tech = data.map((eachNews) => {
    if (eachNews.category.name === "Tech") return eachNews.category.name;
  });
  console.log(tech);

  return (
    <div className={styles.fashion_container}>
      <span>
        <h3>FASHION</h3>
        {/* <Link href="/post">
          <p>
            VIEW ALL
            <AiOutlineRight />
          </p>
        </Link> */}
      </span>

      <div className={styles.containers}>
        <div
          className={styles.left_container}
          // data-aos="fade-up"
          // data-aos-offset="200"
          // data-aos-delay="90"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-out"
          // data-aos-once="false"
        >
          {/* news 1 */}
          {data.map((eachNews) => {
            if (eachNews.category.name === "Tech") {
              return (
                <div className={styles.left_cont1} key={eachNews.title}>
                  <div className={styles.image_container}>
                    <img src={eachNews[0]?.image} alt={eachNews[0]?.owner} />
                    <div className={styles.button}>
                      <button>Future</button>
                      <h5>{eachNews[0]?.title}</h5>
                    </div>
                  </div>
                </div>
              );
            }
          })}

          {/* news 2 */}
          {/* {data.map((eachNews) => {
            if (eachNews.category.name === "Tech") {
              return (
                <div className={styles.left_cont3}>
                  <div className={styles.image_container}>
                    <img src={eachNews[1].image} alt={eachNews[1].owner} />
                    <div className={styles.button}>
                      <button>Future</button>
                      <h5>{eachNews[1].title}</h5>
                    </div>
                  </div>
                </div>
              );
            }
          })} */}
        </div>
        <div
          className={styles.right_container}
          // data-aos="fade-up"
          // data-aos-offset="200"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-out"
          // data-aos-once="false"
        >
          {/* news 3 */}
          {/* {data.map((eachNews) => {
            if (eachNews.category.name === "Tech") {
              return (
                <div className={styles.right_cont1}>
                  <div className={styles.image_container}>
                    <img src={eachNews[2].image} alt={eachNews[2].owner} />
                    <div className={styles.button}>
                      <button>Future</button>
                      <h5>{eachNews[2].title}</h5>
                    </div>
                  </div>
                </div>
              );
            }
          })} */}

          {/* news 4 */}
          {/* {data.map((eachNews) => {
            if (eachNews.category.name === "Tech") {
              return (
                <div className={styles.right_cont2}>
                  <div className={styles.image_container}>
                    <img src={eachNews[3].image} alt={eachNews[3].owner} />
                    <div className={styles.button}>
                      <button>Future</button>
                      <h5>{eachNews[3].title}</h5>
                    </div>
                  </div>
                </div>
              );
            }
          })} */}
        </div>
      </div>
    </div>
  );
}
