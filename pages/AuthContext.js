import React, { createContext, useState } from "react";

const AuthenticationContext = createContext({
    token:'',
    userId:'',
    first_name:'',
    email:'',
    isLoggedIn: false,
    is_admin:false,
    login: function (token){
        
    },
    logout: function(){},

})

export const AuthenticationContextProvider = (props) =>{
    const [token, setToken] = useState()
    const [firsName, setFirstName] = useState()
    const [email, setEmail] = useState()
    const [userId, setUserId] = useState()
    const [admin, setAdmin] = useState(false)
    // const [editData, setEditData] = useState(null)

    const loginHandler = (token,first_name, userId, admin, email)=>{
        setToken(token)
        setFirstName(first_name)
        setUserId(userId)
        admin?setAdmin(true):setAdmin(false)
        setEmail(email)
    } 
    const logoutHandler = ()=>{
        setToken(null)
    }


    // const detailsEdit = (details) => {
    //     setEditData(details);
    //     console.log(editData)
    // }

    // function tokenCheck (){
    //     if()
    // }
    const userIsLoggedIn = token
    const contextValue ={

        token: token,
        isLoggedIn: userIsLoggedIn,
        first_name:firsName,
        userId:userId,
        email:email,
        // detailsEdit,
        // editData,
        login:loginHandler,
        logout:logoutHandler,
        is_admin:admin

    }

    return (<AuthenticationContext.Provider value={contextValue}>
{props.children}
    </AuthenticationContext.Provider>)
}

export default AuthenticationContext