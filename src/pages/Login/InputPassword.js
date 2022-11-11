import React, {  } from "react";
import "../Login/Styleslogin_signup/InputPassword.scss";
import "../Login/Styleslogin_signup/Login.scss";
export default function InputPassword({
  type,placeholder, icon, name, inputHead, onChange
}) {

  
    // const [see, setSee] = useState(false)
    // const [visibility, setVisibility] = useState(true)

//     const HandleSee = ()=>{
//         console.log('show password');
//         setSee(prev => !prev)
// setVisibility(prev=> !prev)
//     }
  return (
    <div className="inputPassword">
      {/* <label for="confirmpass">
        <p>{inputHead}</p>
      </label> */}
      <br />
      <div className="input">
        <input name={name && name} className="input" placeholder={placeholder} type={type && type} onChange={onChange && onChange}/>
        {icon && icon}
      </div>
    </div>
  );
}
 