// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div className="carousel-container" style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Slider {...settings}>

        <div className="carousel-slide">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5a2311ff9e965a96.jpeg?q=20"
            alt="Slide 1"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className="carousel-slide">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/739ed527dbf977fe.jpg?q=20"
            alt="Slide 2"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className="carousel-slide">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/80ae161ffae1cfdd.jpg?q=20"
            alt="Slide 3"
            style={{ width: '100%', height: 'auto' }}
          />
        </div> 
        
        <div className="carousel-slide">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/3f1e054070b976e3.jpg?q=20"
            alt="Slide 3"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        
        <div className="carousel-slide">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d30ddbd5cb0fc865.jpg?q=20"
            alt="Slide 3"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

      </Slider>
    </div>
  );
};

export default Carousel;
