
"use client"

import Slider from "react-slick";

function CenterMode() {
  const settings = {
    autoplay:true,
    lazyLoad: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div  id="1">
          <img src="/images/SliderImg1.png" alt="" />
        </div>
        <div id="2">
          <img src="/images/SliderImg2.png" alt="" />
        </div>
        <div>
        <img src="/images/SliderImg3.png" alt="" />
        </div>
        <div>
        <img src="/images/SliderImg4.png" alt="" />
        </div>
        <div>
        <img src="/images/SliderImg5.png" alt="" />
        </div>
        <div>
        <img src="/images/SliderImg6.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;