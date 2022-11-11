import React, { useEffect, useState } from 'react'
import { AppUrl } from '../../App'
import Dashboard from './Dashboard'
import './DashboardStyles/Categories.scss'


export default function Categories() {
const [categories, setCategories] = useState([])
const [inputCategory, setInputCategory] = useState();


const handleInput = (e)=>{
  setInputCategory(e.target.value)
  // console.log(inputCategory);
}

const addCategory = async (e)=>{
  e.preventDefault()
  const formdata = new FormData();
  formdata.append("name", inputCategory);
  // formdata.append("post", id);
  
  const requestOptions = {
    method: "POST",
body: formdata,
};
  const response = await fetch(`${AppUrl}/categories/`, requestOptions)
      const data = await response.json();
// console.log(data);
      
     
}


const fetchCategories = async () => {
  
  const result = await fetch(`${AppUrl}/categories/`);
  const data = await result.json();
  setCategories(data);
  // console.log(data); 

};
useEffect(()=>{
fetchCategories()
},[])

  return (
    <Dashboard>
    <div>

      <h3>List of Categories</h3>
      <div className='categories'>
        {categories.map(category=>{
          return (
            <div className='category' key={category.id}>
        <p>{category.name}</p>
        </div>
          )
        })}
      </div>

      <form onSubmit={addCategory}>
        <input placeholder='enter Category' onChange={handleInput}/>
        <button className='add_category'>Add category +</button>
      </form>
    </div>
    </Dashboard>
  )
}
