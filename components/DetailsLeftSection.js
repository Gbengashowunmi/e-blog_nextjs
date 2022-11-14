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
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { AppUrl } from "../App";
import AuthenticationContext from "../pages/Login/AuthContext";

import "./styles/DetailsLeft.scss";

export default function DetailsLeftSection() {
  const location = useLocation();
  const getLoggedIn = window.localStorage.getItem("is_loggedIn");
  const getAdmin = window.localStorage.getItem("is_admin");
  const checkAdmin = getAdmin === "true" ? true : false;
  const getUserId = window.localStorage.getItem("user_id");

  // const [form, setForm] = useState(false);
  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const [userComments, setUserComments] = useState("");
  const authctx = useContext(AuthenticationContext);

  const handleInput = (e) => {
    setUserComments(e.target.value);
    console.log(userComments);
  };
  // console.log(logged);
  const params = useParams();
  const fetchComments = async () => {
    const result = await fetch(`${AppUrl}/comments/`);
    const data = await result.json();
    setComments(data);
    // console.log(data);
  };

  const id = params.id;
  const name = params.name;
  // console.log(name);
  const fetchDetails = async () => {
    const result = await fetch(`${AppUrl}/${name}/${id}/`);
    const data = await result.json();
    setDetails(data);
    console.log(data);
  };

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

    console.log(comments);
    // console.log(userComments);

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
          .then((result) => console.log(result))

          // console.log(comments);

          .catch((error) => console.log("error", error))
      : alert("please log in to comment");
    setUserComments("");
  };

  useEffect(() => {
    fetchDetails();
    fetchComments();
  }, []);

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
    // console.log(data);

    // window.reload();
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

    console.log(data);

    setShowModal(true);
  };

  const [cancel, setCancel] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const cancelBtn = () => {
    console.log("cancel");
    setCancel(true);
  };

  // const [edit, setEdit] = useState(false)

  // let {detailsEdit} = useContext(AuthenticationContext)

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
    console.log(data);
  };
  return (
    <div className="detailsLeftSection">
      <Helmet>
        <title> category</title>
        <meta name={details.description} content="Helmet application" />
      </Helmet>
      <div className="headline">
        <img src={details?.image} alt="details-img" />
        <div className="navigate">
          <a href="/">
            <p>Home</p>
          </a>{" "}
          <AiOutlineRight />
          <a href="/">
            <p>Fashion</p>
          </a>{" "}
          <AiOutlineRight />
          <a href="/">
            <p>Photoraphy</p>
          </a>
        </div>
        <h1>{details?.title}</h1>
        <div className="comment">
          <p>0</p>
          <p> {details.owner}</p>
          <p>
            <AiOutlineClockCircle /> {details.created}
          </p>
        </div>
      </div>
      <div className="content">
        <p>
          {details?.description}
          <br /> <br />
          Aenean donec nisi da ukraine joan senectus lander gotze vel. History
          molestie morgan turpis vel iniesta da searches. Global athletes
          feugiat fusce rivers pellentesque cowell. Aenean donald rhoncus watch
          eget, germany sagittis convallis. Walking egestas chile searches
          phelps mi ut searches rodriguez et watching. Bucket cube vestibulum
          temple act ridiculus wurst vel. Schumacher ipad gabriel interdum
          conchita wurst enim mi bowl. Air curabitur consequat love portugal
          etiam berlin winter watch. Brazil plus suarez moto phelps sapien
          imperdiet world fames. Neque videos cowell malaysia puppy cras
          tristique, battles amal vestibulum.
        </p>
        {/* <div className="img-to-left"> */}
        <p className="img-to-left">
          <img
            src="https://3.bp.blogspot.com/-DrQcd8h-Mz4/VLuu5jKseHI/AAAAAAAAJMw/Linw83uBvo4/s1600/travel_lost-memory-of-childhood_159K.jpg"
            alt=""
          />
          Nisl nibh watching lectus one kardashian global penatibus. Nisi philip
          donec mi nec ligula gravida robotic fames blandit fusce. Fringilla
          athletes talent bibendum, kiss ante giant. Joan adipiscing maecenas
          nexus while vestibulum urna enim. Budweiser mcconaughey audrey
          maecenas integer lorem amal quam. Integer sherman lawrence
          pellentesque jules, vel duis neque. Schumacher matthew proin, day air
          rap rubik lawrence loss ochoa. Cursus venenatis alamuddin love
          pharetra, vitae blind football. rap rubik lawrence loss ochoa. Cursus
          venenatis alamuddin love pharetra, vitae blind football. rap rubik
          lawrence loss ochoa. Cursus venenatis alamuddin love pharetra, vitae
          blind football.
        </p>
        <br />
        <p>
          Porttitor venenatis lorem sagittis mauris lander mutant. Feugiat the
          jared golden consectetur ante sodales integer nexus enim. Ridiculus
          facilisis quis molestie libero videos rooney trial while. Baby galaxy
          sapien brazil consequat lectus mauris facilisis sed nokia. Silva sochi
          malaysia love away euismod world electronics aliquam.
        </p>{" "}
        <br />
        <p className="img-to-right">
          <img
            src="https://2.bp.blogspot.com/-WpLeRc2UJdk/VLuudjzKBPI/AAAAAAAAJH8/w9VT4M0E1uM/s1600/fashion_accident-in-love_054K.jpg"
            alt=""
          />
          Mi donec blind suspendisse more seymour cristina mcconaughey. Rubik
          scotish ac gabriel world placerat jared pharetra wardega goku.
          Vulputate rodriguez quis bibendum proin fringilla phasellus.
          Commercial placerat bucket lorem malesuada sem note venenatis. Rooney
          challenge cube ipsum one gaza potenti joan praesent day commercial.
          Winner id pistorius is integer shirley tristique more francisco.
          History fusce rivers renee euismod attack news erat attack ultrices.
          Fermentum ferguson eget urna super praesent massa leto suscipit.
        </p>
        <p>
          Richard robin mutant suor audrey superman ullamcorper ramis nunc nunc.
          Montes lander maya ipsum rap joan gravida enim suor. Crimea test jared
          santos suspendisse lorem loss sociis commercial. Watch tortor
          ridiculus gabriel nunc scotish vestibulum doodles berlin. Samsung nam
          airlines consectetur fringilla leto iniesta facilisi maecenas.
          Facilisi molestie orci rubik proin hepburn rap sem argentina bucket
          pistorius. Guillermo pharetra eros nascetur vulputate als spider act
          blandit.
        </p>
        <img
          src="https://3.bp.blogspot.com/-95W5_fJloi0/VLuuO9DEb_I/AAAAAAAAJFs/wSt9rh64j-4/s1600/archi_kitchen-combine-multi-spaces_183K.jpg"
          alt=""
        />
        <p>
          Bend nokia natoque blandit donec, natoque consectetur pretium. Fusce
          ibrahimovic penatibus dapibus luis leo sa richard consectetur diam.
          Fusce cristina dictum lorem phelps ligula duis leo lauren hepburn da.
          Suarez football ice while israel parturient, bars germany duis da.
          Tempus augue shirley mandela sit porta, justo ac boss.
        </p>
      </div>
      <div className="share-container">
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <div>
            <AiOutlineShareAlt />
          </div>
          <div>
            <p style={{ marginBottom: 0 }}> SHARE:</p>
          </div>
          <div>
            <AiFillTwitterSquare style={{ height: "20px" }} />
          </div>
          <div>
            <AiFillFacebook />
          </div>
          <div>
            <FaWhatsappSquare />
          </div>
        </div>
        <input placeholder="https://magonedemo.blogspot.com/2015/06/neque-adipiscing-varius-peo" />
      </div>
      <div className="comment-section">
        <span className="comment-section-header">
          <h4>
            <i class="fa-solid fa-comments"></i> COMMENTS
          </h4>
        </span>

        {comments.map((comment) => {
          if (comment.post === +details.id) {
            return (
              <div className="comments" key={comment.id}>
                <div className="avi">
                  <img
                    src="https://2.bp.blogspot.com/-c44zyXSkI_k/U4gCFGyzluI/AAAAAAAALMo/1_za8Y2XbzU/s35/MTavatar.png"
                    alt=""
                  />
                </div>

                <div className="comment-details">
                  <span className="username-date">
                    <p className="bold pointer">{comment.owner}</p>
                    {/* <p className="date pointer">{comment.created_at}</p> */}
                  </span>

                  <p className="comment">{comment.body}</p>
                  {/* <p className="comment">{userComments}</p> */}

                  <span>
                    {+getUserId === comment.owner_id ||
                    getUserId === comment.owner_id ? (
                      <div className="edit_delete">
                        <p
                          className="del-comment"
                          onClick={() => deleteComment(comment.id)}
                        >
                          Delete
                          <i class="fa-sharp fa-solid fa-trash"></i>
                        </p>
                        <p className="edit_comment">
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

        <div className="input-comment">
          <h3>Enter Comment</h3>
          <form className="comment-form" onSubmit={postComment}>
            <div className="input">
              <img
                src="https://2.bp.blogspot.com/-c44zyXSkI_k/U4gCFGyzluI/AAAAAAAALMo/1_za8Y2XbzU/s35/MTavatar.png"
                alt=""
                className="user-avi"
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

        {+getUserId === details.owner_id || getUserId === details.owner_id ? (
          <div className="edit_delete">
            <p className="del_comment" onClick={deletePost}>
              Delete Post
              <i class="fa-sharp fa-solid fa-trash"></i>
            </p>
            <Link to={`/dashboard/edit-post/${details.slug}`}>
              <p
                className="edit_comment"
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
  );
}
