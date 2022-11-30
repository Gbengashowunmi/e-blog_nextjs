import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";
// import "../../components/styles/Reader.module.scss";
import styles from "../../components/Dashboard/DashboardStyles/Post.module.scss";
import { ProgressBar, ThreeDots } from "react-loader-spinner";
import Modal from "../../components/Modal";
import Dashboard from "../../components/Dashboard/Dashboard";
import { AppUrl } from "../_app";
import AuthenticationContext from "../AuthContext";
import Link from "next/link";
// import Modal from "../../components/Modal";

export default function Posts() {
  const authctx = useContext(AuthenticationContext);
  const [adminPosts, setAdminPosts] = useState([]);
  const [slug, setSlug] = useState("");
  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [publish, setPublish] = useState(false);
  const [reject, setReject] = useState(false);
  const [getAdmin, setGetAdmin] = useState(false);
  const [getLoggedIn, setGetLoggedIn] = useState("");

  useEffect(() => {
    setGetAdmin(window.localStorage.getItem("is_admin"));
    setGetLoggedIn(window.localStorage.getItem("is_loggedIn"));
  }, []);

  // console.log(getLoggedIn);
  const fetchPostDetails = async () => {
    setLoading(true);

    const result = await fetch(`${AppUrl}/adminpost/`, {
      headers: {
        Authorization: `Token ${getLoggedIn}`,
      },
    });
    const data = await result.json();
    setAdminPosts(data);
    console.log(data);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  // const data = await response.json();
  useEffect(() => {
    fetchPostDetails();
  }, []);

  // const handleReject =()=>{
  //   console.log('clicked');
  //   // setCheck(true)
  //     setPublish(prev => !prev)

  // }

  const handleAction = (slug, method) => {
    setReject((prev) => !prev);
    setSlug(slug);
    setMethod(method);
    // console.log(slug);
  };

  return (
    <Dashboard>
      {publish || reject ? <Modal slug={slug} method={method} /> : ""}

      <div className={styles.reader}>
        <span className="span">
          <h3>Unpublished Posts</h3>

          {/* <p>
          VIEW ALL
          <AiOutlineRight />
        </p> */}
        </span>

        {adminPosts.map((adminPost) => {
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
            <div className={styles.read}>
              <img src={adminPost.image} alt="" />
              <div className={styles.read_info}>
                <p>Guest Posts, Business</p>
                <h3>Title: {adminPost.title}</h3>
                <span>
                  <p>{adminPost.owner}</p> <p>2</p>
                  <p>
                    <AiOutlineClockCircle /> {adminPost.created}
                  </p>
                </span>
                <p
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: adminPost.description }}
                >
                  {/* {adminPost.description.substring(0, 120)} */}
                </p>
                <span className={styles.pub_btns}>
                  <Link href={`/detail/${adminPost.slug}/posts`}>
                    <button>Read Post</button>
                  </Link>
                  <button
                    className={styles.approve}
                    onClick={() => handleAction(adminPost.slug, "PUT")}
                  >
                    Publish
                    {/* {!publish? 'Publish' :<i class="fa-solid fa-check-double"></i>} */}
                  </button>
                  <button
                    className={styles.reject}
                    onClick={() => handleAction(adminPost.slug, "DELETE")}
                  >
                    Reject
                    {/* {!reject? 'Reject' :<i class="fa-solid fa-xmark"></i>} */}
                  </button>
                </span>
              </div>
              {/* </div> */}
            </div>
          );
        })}

        {/* <div className="reader-container"> */}
      </div>
    </Dashboard>
  );
}
