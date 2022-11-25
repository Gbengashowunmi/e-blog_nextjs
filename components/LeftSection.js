import React, { useEffect, useState } from "react";
import Architect from "./Architect";
import Business from "./Business";
import ControlledCarousel from "./Carousel";
import Fashion from "./Fashion";
import FilterBtns from "./FilterBtn";
import PoliticsScience from "./PoliticsScience";
import Readers from "./Readers";
import StaffPick from "./StaffPick";
import styles from "./styles/leftSection.module.scss";

import filterbtnstyles from './styles/FilterBtn.module.scss'

import Tech from "./Tech";
import { ThreeDots } from "react-loader-spinner";
import { AppUrl } from "../pages/_app";
// import Travel from "./Travel";



export default function LeftSection() {

  
const [categories, setCategories] = useState([])
const [cat, setCat] = useState()
const [category, setCategory] = useState([])
const [showCategory, setShowCategory] = useState('Sports')
const [loading, setLoading] = useState(false)
const [state, setState] = useState('')

//fetching button categroies
const fetchCategories = async () => {
setLoading(true);
  const result = await fetch(`${AppUrl}/categories/`);
  const data = await result.json();
  setCategories(data);
  setTimeout(() => {
    setLoading(false)
    },1000); 
};
useEffect(()=>{
fetchCategories()
},[])
//fetching button categroies ends here


const handleBtns =(e)=>{
  setCat(e.target.value);
categories.map(category=>{
  setCategory([category])
  cat === category.name?console.log(category.name, 'category matched'): console.log('unknown');
}
)}


  return (
    <div className={styles.leftSection}>
      <ControlledCarousel />
      <div className={filterbtnstyles.filter_btns}> 
      {loading?<ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#03033a8f" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
           />: 
    categories.map(category=>{
        return ( 
        <button value={category.name} onClick={handleBtns} className={filterbtnstyles.filter_btn} key={category.id}>{category.name}</button>

    )})}
    </div>
    <Tech/>

<div className={styles.left_ads}>New ADVERTISEMENT
    <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      <Business />
    <div className={styles.left_ads}>New ADVERTISEMENT
    <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      {/* <Fashion/> */}
      <Readers/>
      <PoliticsScience/>
      <Architect/>
    </div>
  );
}
