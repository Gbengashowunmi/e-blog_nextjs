import React, { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import styles from '../../components/Dashboard//DashboardStyles/Profile.module.scss'
import Link from "next/link";
import { AppUrl } from "../../components/_app";
// import { AppUrl } from "../_app";

const Profile = () => {

    const [first_name, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
  const [username, setUsername] = useState("");
  const [getUserId, setGetUserId] = useState("");


    useEffect(() => {
      setFirstName(window.localStorage.getItem('first_name'));
      setGetUserId(window.localStorage.getItem('user_id'));
  }, []);
  // const getUserId = window.localStorage.getItem("user_id");
  // const getEmail = window.localStorage.getItem("email");

  const fetchUserDetails = async () => {
    const result = await fetch(`${AppUrl}/users/${getUserId}`);
    const data = await result.json();
    console.log(data);
    setFirstName(data.first_name);
    setLastName(data.profile.last_name);
    setImage(data.profile.image);
    setEmail(data.email);
    setUsername(data.profile.username);

    // setName(data.first_name);
  };

  useEffect(() => {
    fetchUserDetails()
 
  }, [])
  

  return (
    <Dashboard>
      <div className={styles.profile}>
        <div className={styles.image}><img src={image} alt="user"/></div>
        <h5>Username: {username}</h5>
        {/* <h6>First name:  {first_Name}</h6> */}
        <h6>last name:  {lastName}</h6>
        <hr />
        <p>Email: {email}</p>

        <Link href="/dashboard/edit_profile">   <button>Edit Profile</button></Link>
      </div>
    </Dashboard>
  );
};

export default Profile;
