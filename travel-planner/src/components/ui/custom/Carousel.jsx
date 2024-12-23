// Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';  // Import the CSS file into your component

const Carousel = () => {
  const settings = {
    dots: true,               
    infinite: true,           // Infinite loop
    speed: 500,               // Transition speed
    slidesToShow: 1,          // Number of slides to show
    slidesToScroll: 1,        // Number of slides to scroll at once
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 1500,      // Delay between auto slides in ms
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
      
        <div>
          <img className="carousel-image" src='/imag1.jpg' alt="Slide 1" />
        </div>

        <div>
          <img className="carousel-image" src='/img2.jpg' alt="Slide 2" />
        </div>
        
        <div>
          <img className="carousel-image" src='/img3.jpg' alt="Slide 3" />
        </div>
     
        <div>
          <img className="carousel-image"  src='/img4.jpg' alt="Slide 4" />
        </div>
        
        <div>
          <img className="carousel-image" src='/img5.jpg' alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
