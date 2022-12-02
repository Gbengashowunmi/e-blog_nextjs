import React, { useEffect, useState } from "react";
import Architect from "./Architect";
import Business from "./Business";
import ControlledCarousel from "./Carousel";
import Fashion from "./Fashion";
import FilterBtns from "./FilterBtn";
import PoliticsScience from "./PoliticsScience";
import Readers from "./Readers";
import StaffPick from "./StaffPick";
import styles from "./styles/leftSection.module.scss";
import filterbtnstyles from "./styles/FilterBtn.module.scss";
import Tech from "./Tech";
import { ThreeDots } from "react-loader-spinner";
import { AppUrl } from "../pages/_app";
import { useRouter } from "next/router";
import useFetch from "./useFetch";

export default function LeftSection() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  const [showCategory, setShowCategory] = useState("");
  const [loading, setLoading] = useState(false);

  //fetching button categroies
  const fetchCategories = async () => {
    setLoading(true);
    const result = await fetch(`${AppUrl}/categories/`);
    const data = await result.json();
    setCategories(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  //fetching button categroies ends here

  const { data } = useFetch(`${AppUrl}/news/`);
  const handleBtns = (cat) => {
    const filteredNews = data.filter((item) => item.category.name === cat
      );
      // return filteredNews
    setNews(filteredNews)
  };

  return (
    <div className={styles.leftSection}>
      <ControlledCarousel />
      <div className={filterbtnstyles.filter_btns}>
        {loading ? (
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
          categories.map((category) => {
            return (
              <button
                value={category.name}
                onClick={() => handleBtns(category.name)}
                className={filterbtnstyles.filter_btn}
                key={category.id}
              >
                {category.name}
              </button>
            );
          })
        )}
      </div>
      <div >
        <Tech news={news} />
      </div>
      <div className={styles.left_ads}>
        New ADVERTISEMENT
        <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      <div id="Headline">
        <Business />
      </div>
      <div className={styles.left_ads}>
        New ADVERTISEMENT
        <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      {/* <Fashion/> */}

      <div >
        <Readers title="Weather" news={news} />
      </div>

      <div id="Politics">
        <PoliticsScience />
      </div>

      <div id="Sports">
        <Architect />
      </div>
    </div>
  );
}
