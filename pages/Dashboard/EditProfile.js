import React, { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import TextField from "@mui/material/TextField";
import styles from "../../components/Dashboard/DashboardStyles/EditProfile.module.scss";
import Fab from "@mui/material/Fab";
import { AppUrl } from "../_app";

const EditProfile = () => {
  const [first_name, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [getLoggedIn, setGetLoggedin] = useState("");
  const [getUserId, setGetUserId] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [Edittedimage, setEdittedimage] = useState(null);
  const [id, setId] = useState("");

useEffect(() => {
  setGetLoggedin(window.localStorage.getItem("is_loggedIn"))
  setFirstName(window.localStorage.getItem("first_name"))
  setGetUserId(window.localStorage.getItem("user_id"))
  setEmail(window.localStorage.getItem("email"))

}, [])



  const fetchUserDetails = async () => {
    const result = await fetch(`${AppUrl}/users/${getUserId}`);
    const data = await result.json();
    console.log(data);
    setFirstName(data.first_name);
    setLastName(data.profile.last_name);
    setImage(data.profile.image);
    setEmail(data.email);
    setId(data.profile.id);
    setUsername(data.profile.username);
    // setName(data.first_name);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${getLoggedIn}`);
    var formdata = new FormData();
    formdata.append("image", Edittedimage);
    formdata.append("username", username);
    formdata.append("user", getUserId);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formdata,
    };

    // setLoading(true)

    fetch(`${AppUrl}/userprofile/${id}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // toast.success('Details Updated')
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const HandleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  };
  const HandleLastName = (e) => {
    setLastName(e.target.value);
  };
  const HandleEmail = (e) => {
    setEmail(e.target.value);
  };
  const HandleUsername = (e) => {
    setUsername(e.target.value);
    // console.log(username);
  };

  const changeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    setEdittedimage(e.target.files[0]);
  };
  return (
    <Dashboard>
      <form className={styles.edit_profile} onSubmit={submitHandler}>
        <div className={styles.left_sect}>
          <div className={styles.image}>
            <img src={image} />
            <button>
              <input onChange={changeImage} type="file" />
            </button>
            <p>click to change image</p>
          </div>
          <h5>username: {username}</h5>
        </div>
        <div className={styles.right_sect}>
          <h3>Profile Settings</h3>
          <div className={styles.form}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              className={styles.input}
              onChange={HandleFirstNameInput}
              value={first_name}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              className={styles.input}
              onChange={HandleLastName}
              value={lastName}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              //   disabled
              variant="outlined"
              className={styles.input}
              onChange={HandleEmail}
              value={email}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-basic"
              label="username"
              variant="outlined"
              className={styles.input}
              onChange={HandleUsername}
              value={username}
            />
            <Fab variant="extended" className={styles.btn} type="submit">
              Update Profile
            </Fab>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

export default EditProfile;
