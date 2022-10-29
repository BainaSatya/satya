import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React from "react";
import "../Services/Services.css";
import img1 from "../../assets/slider1.jpg";
import img2 from "../../assets/slider2.gif";
import img3 from "../../assets/slider3.gif";
import img4 from "../../assets/slider4.webp";
import img5 from "../../assets/slider5.jpg";
import img6 from "../../assets/slider6.jpg";
import img7 from "../../assets/slider7.jpg";
import img8 from "../../assets/slider8.webp";
import img9 from "../../assets/slider9.jpg";

const Services = () => {
  const images = [img2, img6, img3, img4, img5, img1, img7, img9, img8];

  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  return (
    <>
      <h1 className="heading">SERVICES</h1>
      <section className="services">
        <Slider {...settings}>
          {images.map((image) => {
            return (
              <div key={image}>
                <img src={image} id="slider" alt=""/>
              </div>
            );
          })}

          {/* ----------------------------------------------- */}
          {/* <div>
          <img src={img2} id="slider2"/>
          </div>
          <div>
          <img src={img6} id="slider6"/>
          </div>
          <div>
          <img src={img3} id="slider3"/>
          </div>
          <div>
          <img src={img4} id="slider4"/>
          </div>
          <div>
          <img src={img5} id="slider5"/>
          </div>
          <div>
          <img src={img1} id="slider1"/>
          </div>
          <div>
          <img src={img7} id="slider7"/>
          </div>
          <div>
          <img src={img9} id="slider9"/>
          </div>
          <div>
          <img src={img8} id="slider8"/>
          </div> */}
          {/* ------------------------------------------------------ */}
        </Slider>
      </section>
    </>
  );
};

export default Services;
