import Link from "next/link";
import React, { useState } from "react";
// import { AppUrl } from "../pages/_app";
import styles from './styles/Modal.module.scss'
import { AppUrl } from "./_app";

export default function Modal({slug,method}) {
    
  const getAdmin = window.localStorage.getItem('is_admin');
  const getLoggedIn = window.localStorage.getItem('is_loggedIn');
    const [cancel, setCancel] = useState(false)
    const [action, setAction] = useState(false)

    const cancelBtn =()=>{
        console.log('cancel');
        setCancel(true)

    }

    const postAction =async(slug, method)=>{
        // console.log('published')
        console.log(method)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Token ${getLoggedIn}`); 
        var formdata = new FormData();
        formdata.append("status", 1)
      
        var requestOptions = {
          method: method,
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
      
        const result = await fetch(`${AppUrl}/adminpost/${slug}/`, requestOptions)
        var data =await result.json()
        console.log(data)  
        setAction(true)
        
setTimeout(() => {
    setCancel(true)

}, 1000);

      }
    //   console.log(slug);
    return(
        <>
       <div className={!cancel&&method==='PUT'? `${styles}.modal_overlay ${styles}.publish`:!cancel&&method==='DELETE'?`${styles}.modal_overlay`: `${styles}.remove`}></div>
      <div className={!cancel? `${styles}.my_modal`:`${styles}.remove`} onClick={cancelBtn}>
      {!action?
        <>
            <p>Are you sure you want to {method==='PUT'? `${styles}.publish`: `${styles}.Delete`} ?</p>
            <form className={styles.confirm_btns}>
                <button className={styles.yes_btn} onClick={()=>postAction(slug, method)}>Yes</button>
                <button className={styles.cancel_btn} onClick={cancelBtn}>Cancel</button>
            </form>
            <Link href={`/detail/${slug}/posts`}><button className={styles.read_again}>Read Post Again</button></Link>
        </>:
            <p>{method==='PUT'? 'PUBLISHED ✔✔✔': 'DELETED ❌❌❌'}</p>
        }
        </div>
        
        </>
    )
}