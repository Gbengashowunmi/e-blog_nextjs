import React, { useEffect, useState } from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AppUrl } from "../App";
import './styles/Footer.scss'
export default function Footer() {

  const [input, setInput] = useState({
    email:''
  });

const postSubscribeEmail = async ()=>{
  const response = await fetch(`${AppUrl}/newsletter/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(input),
  });
  const data = await response.json(input);

  // console.log(data);
}

const HandleInput = (e) => {
  setInput({...input, [e.target.name]:e.target.value});
};

// console.log(input);

  return (
    <div className="footer">
      <div className="footer-name">
        <h2>ESSENTIAL</h2> 
        <p>2022 Essential</p>
        <p>All rights reserved.</p>
      </div>

      <ul className="ul">
       <Link to="about"><li>About</li></Link>
       <Link to="/abou"> <li>Contact</li></Link>
       <Link to="/abo"> <li>Forum</li></Link>
       <Link to="/abow"> <li>Policy</li></Link>
        <Link to="/abe"> <li>FAQ</li></Link>
        <Link to="/abwe"><li>Shop</li></Link>
      </ul>
      <div className="form-section">
        <div className="contact-icons">
          <AiOutlineTwitter className="icon" />
          <AiFillLinkedin className="icon" />
          <AiFillYoutube className="icon" />
          <AiFillFacebook className="icon" />
        </div>

        <form className="form" onSubmit={postSubscribeEmail}>
            <input name="email" placeholder="Enter Email" onChange={HandleInput} type='email' />
            <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
}
