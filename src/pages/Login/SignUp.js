import React, { useContext, useState } from "react";
import { Oval } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import InputPassword from "./InputPassword";
// import AuthenticationContext from "./AuthContext";
import "../Login/Styleslogin_signup/Login.scss";
// import Modal from "./ModalComponent";
import ModalComponent from "./ModalComponent";
import { AppUrl } from "../../App";

export default function SignUp() {
  // const authctx = useContext(AuthenticationContext);
  const [modalShow, setModalShow] = useState(false);

  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [see, setSee] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formValid, setFormValid] = useState(false);

  const HandleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  console.log({ ...input });

  const HandleSee = () => {
    // console.log("show password");
    setSee((prev) => !prev);
    setVisibility((prev) => !prev);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    if (
      input.first_name === "" ||
      input.last_name === "" ||
      input.email === "" ||
      input.password === "" ||
      input.confirmPassword === ""
    ) {
      setError("All field must be filled");
      // setLoading(false);
    } else if (input.password !== input.confirmPassword) {
      setError("Password Mismatch");
      // setLoading(false);
    }

    if (
      input.first_name !== "" &&
      input.last_name !== "" &&
      input.email !== "" &&
      input.password !== "" &&
      input.confirmPassword !== "" &&
      input.password === input.confirmPassword
    ) {
      setFormValid(true);
      setError("");
      setLoading(true);
    }

    // console.log(authctx.isLoggedIn)

    if (formValid) { 
      // setLoading(true);

      const response = await fetch(`${AppUrl}/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(input),
      });
      setLoading(false);

      const data = await response.json();
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else if (data.sucess) {
        setModalShow(true);
        console.log("succesful sign up");
      }
      // console.log(input);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="form-container">
      <button onClick={() => navigate("/")} className="home-btn">
        Go Home
      </button>

       {!modalShow ?
       <form className="login-form" onSubmit={HandleSubmit}>
        <h3>Sign Up Here</h3>
        <p style={{ color: "tomato" }}>{error}</p>

        <div className="Fname">
          {/* <label for="Fname">
          <p>First Name:</p>
        </label> */}
          <br />
          <input
            name="first_name"
            onChange={HandleInput}
            className="input"
            placeholder="Enter First Name"
            type="text"
          />
        </div>
        <div className="Lname">
          {/* <label for="Lname">
          <p>last Name:</p>
        </label> */}
          <br />
          <input
            name="last_name"
            onChange={HandleInput}
            className="input"
            placeholder="Enter Last Name"
            type="text"
          />
        </div>
        <div className="email">
          {/* <label for="email">
          <p>Email:</p>
        </label> */}
          <br />
          <input
            name="email"
            onChange={HandleInput}
            className="input"
            placeholder="Enter Email"
            type="email"
          />
        </div>

        <InputPassword
          name="password"
          type={visibility ? "text" : "password"}
          placeholder="Enter Password"
          inputHead="Password:"
          onChange={HandleInput}
          icon={
            <i
              className={
                see ? "fa-solid fa-eye eye" : "fa-solid fa-eye-slash eye"
              }
              onClick={HandleSee}
            ></i>
          }
        />

        <InputPassword
          name="confirmPassword"
          type={visibility ? "text" : "password"}
          placeholder="Confirm Password"
          inputHead="Confirm Password:"
          onChange={HandleInput}
          icon={
            <i
              className={
                see ? "fa-solid fa-eye eye" : "fa-solid fa-eye-slash eye"
              }
              onClick={HandleSee}
            ></i>
          }
        />

        <button className="login-btn" type="submit">
          {loading ? (
            <Oval
              height={30}
              width={30}
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
            "Sign Up"
          )}
        </button>
        <span>
          <p>
            have an account? <Link to="/login">Log in</Link>
          </p>
        </span>
      </form> : 
      <form className="login-form">
        <ModalComponent/>
      </form>
       }
      
    </div>
  );
}
