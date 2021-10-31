import React from 'react';
import { Carousel } from 'react-bootstrap';
import Bonuspart from './Bonuspart';
import Services from './Services';

const Home = () => {
    return (
        <div>
            
            <Carousel fade>
  <Carousel.Item>
    <img height="500"
      className="d-block  w-100"
      src="https://image.freepik.com/free-photo/medium-shot-man-delivering-box_23-2148767146.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="500"
      className="d-block  w-100"
      src="https://image.freepik.com/free-photo/medium-shot-delivery-woman-wearing-mask_23-2149103433.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="500"
      className="d-block  w-100"
      src="https://image.freepik.com/free-photo/close-up-man-delivering-pack_23-2149103391.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

     <h2>Our ontime delivery foods with discount 5%</h2>
     <Services></Services>

     {/*-------
                  bonus 2 part 
                                --------- */}
     <Bonuspart></Bonuspart>
        </div>
    );
};

export default Home;