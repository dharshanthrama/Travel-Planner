import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';  

const Carousel = () => {
  const settings = {
    dots: true,               
    infinite: true,           
    speed: 1000,              
    slidesToShow: 1,          
    slidesToScroll: 1,        
    autoplay: true,           
    autoplaySpeed: 1500,      
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
      
        <div>
          <img className="carousel-image" src="https://wallpaperaccess.com/full/119619.jpg" alt="Slide 1" />
        </div>

        <div>
          <img className="carousel-image" src="https://wallpaperaccess.com/full/2442554.jpg" alt="Slide 2" />
        </div>
        
        <div>
          <img className="carousel-image" src="https://wallpaperaccess.com/full/119628.jpg" alt="Slide 3" />
        </div>
     
        <div>
          <img className="carousel-image"  src="https://wallpaperaccess.com/full/1616130.jpg" alt="Slide 4" />
        </div>
        
        <div>
          <img className="carousel-image" src="https://wallpaperaccess.com/full/119649.jpg" alt="Slide 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
