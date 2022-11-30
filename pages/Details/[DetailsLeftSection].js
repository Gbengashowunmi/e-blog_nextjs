import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineClockCircle,
  AiOutlineRight,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import styles from "../../components/styles/DetailsLeft.module.scss";
import AuthenticationContext from "../AuthContext";
import RightSection from "../../components/RightSection/RightSection";
import Footer from "../../components/Footer";
import Headers from "../../components/Header";
import { AppUrl } from "../_app";
import Link from "next/link";

// export async function getStaticProps() {
//   const router = useRouter();
//   const slug = router.query.DetailsLeftSection;

//   const result = await fetch(`${AppUrl}/${router.query.name}/${slug}/`);
//   const data = await result.json();

//   console.log("im a" + data);

//   return {
//     props: { data: data },
//   };
// }

export default function DetailsLeftSection() {
  const router = useRouter();
  const slug = router.query.DetailsLeftSection;
  // console.log(router.query.name);

  //states declaration
  const [getLoggedIn, setGetLoggedIn] = useState("");
  const [getAdmin, setGetAdmin] = useState("");
  // const [checkAdmin, setCheckAdmin] = useState('');
  const [getUserId, setGetUserId] = useState("");
  // const [form, setForm] = useState(false);
  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const [userComments, setUserComments] = useState("");
  const authctx = useContext(AuthenticationContext);

  //get data from local storage
  useEffect(() => {
    setGetLoggedIn(window.localStorage.getItem("is_loggedIn"));
    setGetAdmin(window.localStorage.getItem("is_admin"));
    setGetUserId(window.localStorage.getItem("user_id"));
  }, []);
  const checkAdmin = getAdmin === "true" ? true : false;

  const handleInput = (e) => {
    setUserComments(e.target.value);
    // console.log(userComments);
  };

  //fetching comments
  const fetchComments = async () => {
    const result = await fetch(`${AppUrl}/comments/`);
    const data = await result.json();
    setComments(data);
  };

  //fetched details for
  const fetchDetails = async () => {
    const result = await fetch(`${AppUrl}/${router.query.name}/${slug}/`);
    const data = await result.json();
    setDetails(data);
    // console.log(data);
  };

  //post comments
  const postComment = (e) => {
    e.preventDefault();

    setComments([
      ...comments,
      {
        body: userComments,
        owner: authctx.first_name,
        post: +details.id,
        owner_id: authctx.userId,
      },
    ]);

    let all = comments.filter((comment) => comment.post === +details.id);

    let alltwo = comments.map((comment) => comment.post === +details.id);
    // console.log(+details.id)

    // console.log(comments);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${getLoggedIn}`);
    const formdata = new FormData();
    formdata.append("body", userComments);
    formdata.append("post", details.id);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    getLoggedIn
      ? fetch(`${AppUrl}/comments/`, requestOptions)
          .then((response) => response.text())
          // .then((result) => console.log(result))

          .catch((error) => console.log("error", error))
      : alert("please log in to comment");
    setUserComments("");
  };

  useEffect(() => {
    fetchDetails();
    fetchComments();
  }, [slug]);

  //DELETE COMMENT FUNCTION

  const deleteComment = async (id) => {
    const response = await fetch(`${AppUrl}/comments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${getLoggedIn}`,
      },
      body: JSON.stringify(details.id),
    });
    const data = await response.json();
  };

  const deletePost = async () => {
    const response = await fetch(`${AppUrl}/posts/${details.slug}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${getLoggedIn}`,
      },
      body: JSON.stringify(details.slug),
    });
    const data = await response.json();

    // console.log(data);

    setShowModal(true);
  };

  const [cancel, setCancel] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const cancelBtn = () => {
    console.log("cancel");
    setCancel(true);
  };

  // const [edit, setEdit] = useState(false)
  const editPost = async () => {
    const response = await fetch(`${AppUrl}/posts/${details.slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${getLoggedIn}`,
      },
      // body: JSON.stringify(details.slug)
    });
    const data = await response.json();
    // detailsEdit(data)
    // setEdit(true)
    // console.log(data);
  };
  return (
    <>
      <Headers />
      <div className={styles.mainSection}>
        <div className={styles.leftSection}>
          <div className={styles.detailsLeftSection}>
            <Helmet>
              <title> category</title>
              <meta name={details.description} content="Helmet application" />
            </Helmet>
            <div className={styles.headline}>
              <img src={details?.image} alt="details-img" />
              <div className={styles.navigate}>
                <Link href="/">
                  <p>Home</p>
                </Link>
                <AiOutlineRight />
                <Link href="/">
                  <p>Fashion</p>
                </Link>
                <AiOutlineRight />
                <Link href="/">
                  <p>Photoraphy</p>
                </Link>
              </div>
              <h1>{details?.title}</h1>
              <div className={styles.comment}>
                <p>0</p>
                <p> {details.owner}</p>
                <p>
                  <AiOutlineClockCircle /> {details.created}
                </p>
              </div>
            </div>
            <div className={styles.content}>
              <p>{details.description}</p>
            </div>
            <div className={styles.share_container}>
              <div className={styles.share}>
                <AiOutlineShareAlt />
                <p> SHARE:</p>
                <Link href='/twitter.com'><AiFillTwitterSquare style={{ height: "50px", width:"50px", color:'blue'
               }} /></Link>
                <Link href='/facebook.com'><AiFillFacebook style={{ height: "50px", width:"50px" , color:'blue'
               }} /></Link>
               <Link href='/whatsapp.com'> <FaWhatsappSquare style={{ height: "50px", width:"50px", color:'green'
               }}/></Link>
              </div>
              <input placeholder="https://magonedemo.blogspot.com/2015/06/neque-adipiscing-varius-peo" />
            </div>
            <div className={styles.comment_section}>
              <span className={styles.comment_section_header}>
                <h4>
                  <i class="fa-solid fa-comments"></i> COMMENTS
                </h4>
              </span>

              {comments.map((comment) => {
                if (comment.post === +details.id) {
                  return (
                    <div className={styles.comments} key={comment.id}>
                      <div className={styles.avi}>
                        <img
                          src="https://2.bp.blogspot.com/-c44zyXSkI_k/U4gCFGyzluI/AAAAAAAALMo/1_za8Y2XbzU/s35/MTavatar.png"
                          alt=""
                        />
                      </div>

                      <div className={styles.comment_details}>
                        <span className={styles.username_date}>
                          <p className={styles.bold}>{comment.owner}</p>
                          {/* <p className="date pointer">{comment.created_at}</p> */}
                        </span>

                        <p className={styles.comment}>{comment.body}</p>
                        {/* <p className="comment">{userComments}</p> */}

                        <span>
                          {+getUserId === comment.owner_id ||
                          getUserId === comment.owner_id ? (
                            <div className={edit_delete}>
                              <p
                                className={styles.del_comment}
                                onClick={() => deleteComment(comment.id)}
                              >
                                Delete
                                <i class="fa-sharp fa-solid fa-trash"></i>
                              </p>
                              <p className={styles.edit_comment}>
                                Edit <i class="fa-solid fa-pen-to-square"></i>
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </div>
                  );
                }
              })}

              <div className={styles.input_comment}>
                <h3>Enter Comment</h3>
                <form className={styles.comment_form} onSubmit={postComment}>
                  <div className={styles.input}>
                    <img
                      src="https://2.bp.blogspot.com/-c44zyXSkI_k/U4gCFGyzluI/AAAAAAAALMo/1_za8Y2XbzU/s35/MTavatar.png"
                      alt=""
                      className={styles.user_avi}
                    />
                    <input
                      placeholder="comment"
                      onChange={handleInput}
                      value={userComments}
                    />
                  </div>
                  <button>Post</button>
                </form>
              </div>

              {+getUserId === details.owner_id ||
              getUserId === details.owner_id ? (
                <div className={styles.edit_delete}>
                  <p className={styles.del_comment} onClick={deletePost}>
                    Delete Post
                    <i class="fa-sharp fa-solid fa-trash"></i>
                  </p>
                  <Link to={`/dashboard/edit-post/${details.slug}`}>
                    <p
                      className={styles.edit_comment}
                      // onClick={editPost}
                    >
                      Edit Post<i class="fa-solid fa-pen-to-square"></i>
                    </p>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* <>
       <div className={showModal? "modal_overlay": 'remove'}></div>
      <div className={showModal? "my_modal":'remove'} onClick={cancelBtn}>
      {
        <>
            <form className="confirm_btns"> 
                <button className="yes_btn" onClick={deletePost}>Yes</button>
                <button className="cancel_btn" onClick={cancelBtn}>Cancel</button>
            </form>
        </>
            // <p>{method==='PUT'? 'PUBLISHED ✔✔✔': 'DELETED ❌❌❌'}</p>
        }
        </div>
        
        </> */}
          </div>
        </div>

        <div className={styles.rightSection}>
          <RightSection />
        </div>

        <div className={styles.footer}></div>
      </div>
      <Footer />
    </>
  );
}
