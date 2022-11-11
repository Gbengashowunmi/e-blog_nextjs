import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppUrl } from "../App";
import './styles/Modal.scss'

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
       <div className={!cancel&&method==='PUT'? "modal_overlay publish":!cancel&&method==='DELETE'?"modal_overlay": 'remove'}></div>
      <div className={!cancel? "my_modal":'remove'} onClick={cancelBtn}>
      {!action?
        <>
            <p>Are you sure you want to {method==='PUT'? 'publish': 'Delete'} ?</p>
            <form className="confirm_btns">
                <button className="yes_btn" onClick={()=>postAction(slug, method)}>Yes</button>
                <button className="cancel_btn" onClick={cancelBtn}>Cancel</button>
            </form>
            <Link to={`/detail/${slug}/posts`}><button className="read_again">Read Post Again</button></Link>
        </>:
            <p>{method==='PUT'? 'PUBLISHED ✔✔✔': 'DELETED ❌❌❌'}</p>
        }
        </div>
        
        </>
    )
}