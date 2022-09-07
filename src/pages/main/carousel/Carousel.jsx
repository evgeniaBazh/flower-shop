import { useState } from 'react';
import { carousel } from '../../../services/api.service';
import classes from '../carousel/Carousel.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    
  };
  return (
    <Slider {...settings}>
      {carousel.map((item, index) => (
        <div className={classes.item} key={index}>
            <img className={classes.photo} src={item.img} alt="" />
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;