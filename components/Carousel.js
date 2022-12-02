import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { ThreeDots } from "react-loader-spinner";
// import { Link } from 'react-router-dom';
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../components/styles/carousel.module.scss";
import { AppUrl } from "./_app";

export default function ControlledCarousel() {
  const router = useRouter();
  const { pid } = router.query;

  // console.log(pid);

  //setting states
  const [index, setIndex] = useState(0);
  const [carouselDetails, setCarouselDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //fetching carousel details
  const fetchCarouselDetails = async () => {
    setLoading(true);
    const result = await fetch(`${AppUrl}/slider/`);
    const data = await result.json();
    setCarouselDetails(data);
  };

  //loading time out
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    fetchCarouselDetails();
  }, []);

  return loading ? (
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
  ) : (
    <>
      <h1>Latest News Around The World</h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className={styles.carousel}
      >
        {carouselDetails.map((carouselDetail) => {
          return (
            <Carousel.Item
              className={styles.carousel_image}
              key={carouselDetail.image}
            >
              <img
                className={`d-block w-100 ${styles.image}`}
                src={`${carouselDetail.image}`}
                alt="Third slide"
              />

              <Carousel.Caption className={styles.caption}>
                <h3 className={styles.title_text}>{carouselDetail.title}</h3>
                <p className={styles.description_text}>
                  {carouselDetail.description.slice(0, 120)}...
                </p>

                <Link
                  href={{
                    pathname: `Details/${carouselDetail.slug}/`,
                    query: { name: "slider" },
                  }}
                >
                  {" "}
                  <button className={styles.read_more}>READ MORE</button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
