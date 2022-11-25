import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
// import Headers from '../components/Header'
import styles from './DashboardStyles/Dashboard.module.scss'
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
    <div className={styles.dashboard}>
      <div className={navClick? styles.overlay : styles.hide_overlay} onClick={HandleNav}></div>
      <div className={!profileClick? styles.overlay : styles.hide_overlay} onClick={HandleProfile}></div>

      <div className={styles.dropdown_menus}>
        <div className={styles.nav_menu} onClick={HandleNav}><AiOutlineMenu /></div>
        <div className={styles.profile_menu} onClick={HandleProfile}><i class="fa-regular fa-circle-user">new</i></div>
      </div>
      <div className={navClick? `${styles.left_layout} ${styles.show_sidebar}`:`${styles.left_layout}`}><LeftSideBar/></div>
      <div className={styles.center_layout}>{children}</div>
      <div className={profileClick?`${styles.right_layout} ${styles.show_rightbar}`: `${styles.right_layout}`}><RightSideBar/></div>
    </div>
  )
}
