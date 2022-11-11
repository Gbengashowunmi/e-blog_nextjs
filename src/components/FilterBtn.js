import React, { useEffect, useState } from "react";
import { AppUrl } from "../App";
import Architect from "./Architect";
import Business from "./Business";
import Fashion from "./Fashion";
import PoliticsScience from "./PoliticsScience";
import Readers from "./Readers";
import StaffPick from "./StaffPick";
import './styles/FilterBtn.scss'
import Tech from "./Tech";

export default function FilterBtns(){

   

    //   const filterCategory = ()=>{
    //     categories.map(category=>{
    //         category.filter(category.name=== )
    //     })
    //   }


   


    return(
    
        {/* <div>
            <div hidden={showCategory !== "Sports "}><StaffPick /></div>
            <div hidden={showCategory !== "Headline"}><Business /></div>
            <div hidden={showCategory !== "Tech"}><Tech /></div>
            <div hidden={showCategory !== "Fashion"}><Fashion /></div>
            <div hidden={showCategory !== "Weather"}><Readers /></div>
            <div hidden={showCategory !== "Medicine"}><Architect /></div>
            <div hidden={showCategory !== "Politics"}><PoliticsScience /></div>
            <div></div>
            <div></div>
            <div></div>
        </div> */}
    
    )
}