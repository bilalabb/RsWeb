import React from 'react'
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
export default function Logoslider() {
    
  var settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }

    ]
  };
  return (
    <div>
        <section className="logo-section">
        <div className="container">
          <div className="row logo-slider">
            <Slider {...settings2} className="">
              <div className="slick-slide">
                <img src="/image/1.jpg" alt="1.jpg" className="slick-slide-image" />
              </div>
              <div className="slick-slide">
                <img src="/image/2.jpg" alt="2.jpg" className="slick-slide-image" />
              </div>
              <div className="slick-slide">
                <img src="/image/5.jpg" alt="5.jpg" className="slick-slide-image" />
              </div>
              <div className="slick-slide">
                <img src="/image/6.jpg" alt="6.jpg" className="slick-slide-image" />
              </div>
              <div className="slick-slide">
                <img src="/image/8.jpg" alt="8.jpg" className="slick-slide-image" />
              </div>
              <div className="slick-slide">
                <img src="/image/ak.png" alt="ak.png" className="slick-slide-image" />
              </div>
              <div className="slick-slide">
                <img src="/image/11.jpg" alt="11.jpg" className="slick-slide-image" />
              </div>
              <div className="slick-slide">
                <img src="/image/engenius-logo.svg" alt="engenius-logo.svg" className="slick-slide-image" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}
