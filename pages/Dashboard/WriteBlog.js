import React, { useContext, useEffect, useState } from "react";
import styles from "../../components/Dashboard/DashboardStyles/WriteBlog.module.scss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import Dashboard from "../../components/Dashboard/Dashboard";
// import { useParams } from "react-router";
import { AppUrl } from "../../pages";
import AuthenticationContext from "../AuthContext";
//using quill editor in next js
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WriteBlog() {
  const authctx = useContext(AuthenticationContext);
  //setting states for window storage to be used inside useEffect
  const [getAdmin, setGetAdmin] = useState("");
  const [getLoggedIn, setGetLoggedIn] = useState("");

  useEffect(() => {
    setGetAdmin(window.localStorage.getItem("is_admin"));
    setGetLoggedIn(window.localStorage.getItem("is_loggedIn"));
  }, []);

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const modules = {
    toolbar: [
      ["bold", "underline", "italic"],
      ["code-block", "blockquote"],
      [{ header: [1, 2, 3, 4, 5] }],
      [{ list: "ordered" }],
      [{ list: "bullet" }],
      ["link", "image"],
    ],
  };
  const [image, setImage] = useState(null);

  const HandleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const HandleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${getLoggedIn}`);
    var formdata = new FormData();
    formdata.append("image", image);
    formdata.append("description", value);
    formdata.append("title", input.title);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    setLoading(true);

    fetch(`${AppUrl}/posts/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        toast.success("post sent for approval");
      })
      .catch((error) => {
        console.log("error", error);
      });

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <Dashboard>
      <div className={styles.writeBlog}>
        <h3 className={styles.header}>Write Your Blog here</h3>
        <form className={styles.blogpreview}>
          <div className={styles.setPost}>
            <button className={styles.preview}>Preview</button>
            <button type="submit" className={styles.save}>
              Save
            </button>
          </div>
        </form>

        <form
          className={styles.text_area}
          onSubmit={submitHandler}
          method="post"
          encType="multipart/form-data"
        >
          <label>Title:</label>
          <input
            name="title"
            placeholder="Enter Title"
            onChange={HandleInput}
            className={styles.title}
          />
          <label>Description:</label>
          <ReactQuill
            theme="snow"
            onChange={setValue}
            modules={modules}
            className={styles.editorr}
            placeholder="write your blog here"
          />
          <label>Image:</label>
          <input name="file" type="file" onChange={HandleImage} />
          <button type="submit" className={styles.submit_btn}>
            {" "}
            {loading ? (
              <Oval
                height={20}
                width={20}
                color="white"
                margin="auto"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="white"
                strokeWidth={2}
              />
            ) : (
              "Post"
            )}
          </button>
        </form>
      </div>
    </Dashboard>
  );
}
