
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineRight } from 'react-icons/ai';
import './styles/Travel.scss'

function Travel() {
  return (
    <div className='travelSection'>
        <header>
                <h3>TRAVEL</h3>
                <p>VIEW ALL <AiOutlineRight /> </p>
            </header>
    <Carousel className='travel-carousel'>
      <Carousel.Item className='item-container'>
        <div className='container1'>
        <img
          className="d-block w-100"
          src="https://4.bp.blogspot.com/-JLbuo7MjGPg/VZC3_4GHsRI/AAAAAAAAKpM/KkSOqRmqLQs/s1600/travel_afternoon-flight_59K.jpg"
          alt="First slide1"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </div>
        <div className='container2'>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide2"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item className='item-container'>
        <div className='container1'>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="Second slide1"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </div>
        <div className='container2'>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="Second slide2"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
    </div>
  );
}

export default Travel;