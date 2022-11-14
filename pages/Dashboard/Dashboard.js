import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
// import Headers from '../components/Header'
import './DashboardStyles/Dashboard.scss'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

 
export default function Dashboard({children}) {

  const [navClick, setNavclick] = useState(false);
  const [profileClick, setProfileclick] = useState(true);
  const HandleNav = () => {
    setNavclick((prev) => !prev);
  };
  const HandleProfile = () => {
    // console.log('clicked');
    setProfileclick((prev) => !prev);
    // console.log(profileClick);
  };

  return (
    <div className='dashboard'>
      <div className={navClick? "overlay" : "hide_overlay"} onClick={HandleNav}></div>
      <div className={!profileClick? "overlay" : "hide_overlay"} onClick={HandleProfile}></div>

      <div className='dropdown-menus'>
        <div className='nav-menu' onClick={HandleNav}><AiOutlineMenu /></div>
        <div className='profile-menu' onClick={HandleProfile}><i class="fa-regular fa-circle-user"></i></div>
      </div>
      <div className={navClick? 'left_layout show-sidebar':'left_layout'}><LeftSideBar/></div>
      <div className='center_layout'>{children}</div>
      <div className={profileClick?'right_layout show-rightbar':'right_layout'}><RightSideBar/></div>
    </div>
  )
}
