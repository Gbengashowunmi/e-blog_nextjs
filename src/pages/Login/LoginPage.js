import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputPassword from "./InputPassword";
import "../Login/Styleslogin_signup/Login.scss";
import { Oval } from  'react-loader-spinner'
import AuthenticationContext from "./AuthContext";
import { AppUrl } from "../../App";
// import { Formik } from "formik";
// import schema from "./Validator";
import { toast } from 'react-toastify'

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const authctx = useContext(AuthenticationContext);

  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  //set password visibility state
  // const [see, setSee] = useState(false)

  const HandleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    // console.log(input);
  };

  //set password visibility state
  const [visibility, setVisibility] = useState(false);
  const HandleSee = () => {
    console.log("show password");
    // setSee(prev => !prev)
    setVisibility((prev) => !prev);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    // console.log(error)
    if (input.email==="" || input.password==="") {
      setError("Email or Password field cannot be Empty");
    }

    // else if()
    // window.navigtor.onLine? alert('online'): alert('offline')
    if (input.email!=="" && input.password !=="") {
      // setError("Email or Password field cannot be Empty");
      setLoading(true)
      const response = await fetch(`${AppUrl}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(input),
      });
      const data = await response.json();


          // setLoading(false)
console.log(data);
if (data.failure) {
  setError(data.failure);
  toast.error('error')

}
// console.log(error);
// data.respone?

if (data.token) {
  authctx.login(data.token, data.first_name, data.id, data.is_admin, data.email);
  window.localStorage.setItem('is_loggedIn', data.token);
  window.localStorage.setItem('is_admin', data.is_admin);
  window.localStorage.setItem('first_name', data.first_name);
  window.localStorage.setItem('user_id', data.id);
  window.localStorage.setItem('email', data.email);
  const firstName = window.localStorage.getItem('first_name');
  toast.success(`Welcome back ${firstName}😀`)
  navigate("/");
}
// console.log(data, data.token);
// console.log(input);
    }
      };

  return (
    <div className="form-container">
      <button onClick={() => navigate("/")} className="home-btn">
        Go Home
      </button>

      {/* <Formik
        initialValues={{ email: "", password: "", name:"" }}
        validateSchema={schema} 
        onSubmit={HandleSubmit}
      > */}
        
          <form className="login-form" onSubmit={HandleSubmit}>
            <h3>Log Here</h3>
            <p style={{color:"tomato"}}>{error}</p>
            <div className="username">
              {/* <p>Username</p> */}
              <input
                name="email"
                className="input"
                placeholder="Email or Phone"
                type="text"
                onChange={HandleInput}
              />
            </div>
            <div className="password">
              <InputPassword
                name="password"
                onChange={HandleInput}
                type={visibility ? "text" : "password"}
                placeholder=" Password"
                icon={
                  <i
                    className={
                      visibility
                        ? "fa-solid fa-eye eye"
                        : "fa-solid fa-eye-slash eye"
                    }
                    onClick={HandleSee}
                  ></i>
                }
              />
            </div>

            <button className="login-btn">
              {loading? <Oval  height={30} width={30} color="white" margin="auto"  wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel='oval-loading' secondaryColor="white" strokeWidth={2} />: 'Login'}
            </button>

            <span>
              <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </span>
          </form>
      {/* </Formik> */}
    </div>
  );
}
