import React, {  } from "react";
import styles from "../Login/InputPassword.module.scss";
// import "../Login/Styleslogin_signup/Login.scss";
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
    <div className={styles.inputPassword}>
   
      <br />
      <div className={styles.input}>
        <input name={name && name} className={styles.input} placeholder={placeholder} type={type && type} onChange={onChange && onChange}/>
        {icon && icon}
      </div>
    </div>
  );
}
 