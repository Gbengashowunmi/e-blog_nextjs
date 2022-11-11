import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { AppUrl } from '../App';
import './styles/Carousel.scss'

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [carouselDetails, setCarouselDetails] = useState([])
  const [loading, setLoading] = useState(false)


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const fetchCarouselDetails = async()=> {
setLoading(true);

    const result = await fetch(`${AppUrl}/slider/`)
    const data = await result.json()
    setCarouselDetails(data)
    // console.log(data)
  }
  
  setTimeout(() => {
    setLoading(false)
    },1500);

  useEffect(()=>{
    fetchCarouselDetails();
  },[])
  return (loading?<ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="#03033a8f" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
     />:
     <>
     <h1>Latest News Around The World</h1>
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
      {carouselDetails.map((carouselDetail)=>{
      return(
<Carousel.Item className='carousel-image' key={carouselDetail.image} >
        <img
          className="d-block w-100"
          src={`${carouselDetail.image}`}
          alt="Third slide"
        />

        <Carousel.Caption className="caption">
          <h3 className="title_text">{carouselDetail.title}</h3>
          <p className="description_text">
            {carouselDetail.description.slice(0,120)}...
          </p>
          <Link to={`/detail/${carouselDetail.slug}/slider`} state={{data:'slider'}}  >
          <button className="read-more">READ MORE</button>
          </Link>

        </Carousel.Caption>
      </Carousel.Item>
      )
      })}

    </Carousel>
    </>
  );
}
