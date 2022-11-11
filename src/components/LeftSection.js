import React, { useEffect, useState } from "react";
import Architect from "./Architect";
import Business from "./Business";
import ControlledCarousel from "./Carousel";
// import DetailsLeftSection from "./DetailsLeftSection";
import Fashion from "./Fashion";
import FilterBtns from "./FilterBtn";
import PoliticsScience from "./PoliticsScience";
import Readers from "./Readers";
import StaffPick from "./StaffPick";
import "./styles/leftSection.scss";
import './styles/FilterBtn.scss'

import Tech from "./Tech";
import { AppUrl } from "../App";
import { ThreeDots } from "react-loader-spinner";
// import Travel from "./Travel";



export default function LeftSection() {

  
const [categories, setCategories] = useState([])
const [cat, setCat] = useState()
const [category, setCategory] = useState([])
const [showCategory, setShowCategory] = useState('Sports')
const [loading, setLoading] = useState(false)
const [state, setState] = useState('')


const fetchCategories = async () => {
setLoading(true);
  const result = await fetch(`${AppUrl}/categories/`);
  const data = await result.json();
  setCategories(data);
  // console.log(categories);
  setTimeout(() => {
    setLoading(false)
    },1000); 
};
useEffect(()=>{
fetchCategories()
},[])
// console.log(categories);

const handleBtns =(e)=>{
  setCat(e.target.value);
// console.log(cat);
categories.map(category=>{
  setCategory([category])
  cat === category.name?console.log(category.name, 'category matched'): console.log('unknown');
  // cat === category.name?
  
}

//     console.log(cat);
// // else{
// //   console.log('unknown category');

// // }
// });
)}


// const clickToCategories = (value) => {
//   // console.log(categories);
//   setShowCategory(value)
//   console.log(value);
// }
  return (
    <div className="leftSection">
      <ControlledCarousel />
      <div className="filter-btns"> 
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
        <button value={category.name} onClick={handleBtns} className="filter_btn" key={category.id}>{category.name}</button>

        // <p>{category.name}</p>
    )})}
    </div>
    <Tech/>
{/* <div 
// className={cat==='StaffPick'? 'show':'hide'}
> <StaffPick/></div> */}
     
      {/* <div hidden={showCategory !== "Sports"}><Business /></div>
      <div hidden={showCategory !== "Tech"} ><Tech/></div>
      <div hidden={showCategory !== "Fashion"} ><Fashion/></div>
      <div hidden={showCategory !== "Medicine"} ><Readers/></div>
      <div hidden={showCategory !== "Weather"} ><Architect/></div>
      <div hidden={showCategory !== "Politics"} ><PoliticsScience/></div> */}


      {/* <div className={cat===category.name? 'show':'hide'} ><Tech/></div>
      <div className={cat==='Business'?'show':'hide'}><Business /></div>
      <div className="left_ads">New ADVERTISEMENT
    <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      <div className={cat==='Fashion'? 'show':'hide'}><Fashion/></div>
      <div className={cat==='Readers'? 'show':'hide'} ><Readers/></div>
      <div className={cat==='Architect'? 'show':'hide'} ><Architect/></div>
      <div className={cat==='PoliticsScience'? 'show':'hide'} ><PoliticsScience/></div> */}

<div className="left_ads">New ADVERTISEMENT
    <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      <Business />
    <div className="left_ads">New ADVERTISEMENT
    <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      <Fashion/>
      <Readers/>
      <PoliticsScience/>
      <Architect/>
      {/* <DetailsLeftSection /> */}
    </div>
  );
}
