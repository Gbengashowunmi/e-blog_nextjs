
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClockCircle, AiOutlineRight } from "react-icons/ai";
import Dashboard from "./Dashboard";
import "../../components/styles/Reader.scss";
import './DashboardStyles/Post.scss'

import { AppUrl } from "../../App";
import AuthenticationContext from "../Login/AuthContext";
import { ThreeCircles, ThreeDots } from "react-loader-spinner";

export default function UserPosts() {

  const authctx = useContext(AuthenticationContext)
  const [userPosts, setUserPosts] = useState([])
  const [loading, setLoading] = useState(false)

  
  const getAdmin = window.localStorage.getItem('is_admin');
  const getLoggedIn = window.localStorage.getItem('is_loggedIn');


  const fetchPostDetails = async()=> {
setLoading(true);

    const result = await fetch(`${AppUrl}/posts/`, {
      headers: {
        "Authorization": `Token ${getLoggedIn}`
      },
    })
    const data = await result.json()
    setUserPosts(data)


    // setLoading(false);
    setTimeout(() => {
    setLoading(false)
      
    },1500);
    console.log(data)
  }
  // const data = await response.json();
  useEffect(()=>{
    fetchPostDetails();
    
  },[])



  return (
    <Dashboard>
    <div className="reader">
    <span className="span">
        <h3>My Posts</h3>
        {/* <p>
          VIEW ALL
          <AiOutlineRight />
        </p> */}
      </span>

      {
        userPosts.map(userPost =>{
          return( loading?<ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#03033a8f" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
             />:

            <div className="read" >
            <img
              src={userPost.image}
              alt=""
            />
            <div className="read-info">
              <p>Guest Posts, Busines</p>
              <h3>Title: {userPost.title}</h3>
              <span>
                <p>{userPost.owner}</p> <p>2</p>
                <p>
                  <AiOutlineClockCircle /> {userPost.created}
                </p>
              </span>
              <p className="description" dangerouslySetInnerHTML={{__html:userPost.description}}>
                {/* {userPost.description.substring(0, 120)} */}
              </p>
            </div>
            {/* </div> */}
          </div>
          )
        })
      }

      {/* <div className="reader-container"> */}

      
    </div>
    </Dashboard>
  );
}
 