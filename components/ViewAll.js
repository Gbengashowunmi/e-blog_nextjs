import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { AppUrl } from "../App";
import "./styles/ViewAll.scss";

export default function ViewAll() {
  //state for fetched posts

  const [posts, setPosts] = useState();
  //fetch all post
  const fetchPosts = async () => {
    const result = await fetch(`${AppUrl}/posts/`);
    const data = await result.json();
    setPosts(data);
    // posts.map(post=> console.log(post))

    // let answer = posts.filter(post=> post.category.name === 'headline')

    //     console.log(answer) ;
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="view_all">
      <div className="top_section">
        <div className="left">
            <div className="image_container">

          <img
            src="https://i0.wp.com/www.arise.tv/batman/2022/10/Tinubu-Mocks-Atiku.jpeg?resize=350%2C250&ssl=1"
            alt=""
          />
          <div className="button">
            <button>Future</button>
            <h5>Take a look into the future of technology</h5>
          </div>
            </div>
        </div>
        <div className="right">
          <div className="top_right">
            
          </div>
          <div className="bottom">
            <div className="b1"></div>
            <div className="b2"></div>
          </div>
        </div>
      </div>
      <div className="naviagte">
        <p>Home</p> <p>Category</p>
      </div>
      <div>
        <h3>Category</h3>
        <div className="read">
          <img
            src="https://1.bp.blogspot.com/-t-isWbt0HiU/VZD4HBdDm_I/AAAAAAAAKrw/kBXCm3ocTBM/w337-rw/f07d4ca4faca5577e79a77cb6d5ea57b.webp"
            alt=""
          />
          <div className="read-info">
            <h3>A Little Start-Up Entertains, One Story at a Time</h3>
            <span>
              <p>Tien Nugyen</p>{" "}
              <p>
                <FaComment /> 2
              </p>
              <p>
                <AiOutlineClockCircle /> May 21, 2015
              </p>
            </span>
            <p>
              At a time when literary writing seems like a dying art, when
              little magazines are folding left and right, when publishers
              bemoan the sinking bottom li..
            </p>
          </div>
          {/* </div> */}
        </div>
        <div className="read">
          <img
            src="https://1.bp.blogspot.com/-t-isWbt0HiU/VZD4HBdDm_I/AAAAAAAAKrw/kBXCm3ocTBM/w337-rw/f07d4ca4faca5577e79a77cb6d5ea57b.webp"
            alt=""
          />
          <div className="read-info">
            <h3>A Little Start-Up Entertains, One Story at a Time</h3>
            <span>
              <p>Tien Nugyen</p>{" "}
              <p>
                <FaComment /> 2
              </p>
              <p>
                <AiOutlineClockCircle /> May 21, 2015
              </p>
            </span>
            <p>
              At a time when literary writing seems like a dying art, when
              little magazines are folding left and right, when publishers
              bemoan the sinking bottom li..
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
