import React, { useEffect, useState } from "react";
import { AiOutlineRight, AiTwotoneCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AppUrl } from "../App";
import "./styles/Tech.scss";
import "aos/dist/aos.css";
import Aos from "aos";
// import { useLocation } from '@reach/router';

Aos.init({
  offset: 120,
});

export default function Tech({category}) {
  const [techNews, setTechNews] = useState([]);

  const fetchPost = async () => {
    const response = await fetch(`${AppUrl}/posts/`);
    const data = await response.json();
    setTechNews(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  // console.log(techNews[0].title);

  return (
    <div
      className="tech"
      // category={category}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="90"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <span>
        <h3>TECH</h3>
        <Link to="/post">
          <p>
          VIEW ALL
          <AiOutlineRight />
        </p>
        </Link>
      </span>
      <div className="tech-items">
        {techNews.map((eachNews) => {
          // console.log(eachNews);
          return (
            <>
              <div className="tech-item" key={eachNews.id}>
                {/* <Link to={`detail/${eachNews.id}`}> <div className='image-container'> */}

                <Link
                  to={`detail/${eachNews.slug}/posts`}
                  state={{ data: "posts" }}
                >
                  {/* <div className='overlay'></div> */}

                  <div className="image-container">
                    <img src={eachNews.image} alt="" />
                    <div className="button">
                      <button>Future</button>
                      <h5>{eachNews.title}</h5>
                    </div>
                  </div>

                  <div className="tech-details">
                    <p className="description" dangerouslySetInnerHTML={{__html:eachNews.description.substring(0,154)}}>
                      {/* {eachNews.description.substring(0, 154)} */}
                    </p>
                    <p>
                      <AiTwotoneCalendar /> {eachNews.created}
                    </p>
                  </div>
                </Link>
                {/* <div className='advert'>Place Your Advert here</div> */}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
