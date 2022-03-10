  import Head from "next/head";
  import Image from "next/image";
  import Slider from "react-slick";
  import Zoom from 'react-reveal/Zoom';
  import Slide from 'react-reveal/Slide';
  import { fadeIn } from 'react-animations'
  import { CSSProperties, SVGAttributes } from 'react'
  import {
  } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faChevronRight,
    faChevronLeft,
  } from "@fortawesome/free-solid-svg-icons";
export default function Slider1() 
    {
        var settings = {
          dots: true,
          infinite: true,
          autoplay: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
          prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
        };
      
        var settings3 = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        };
  return (
    <div>
        <section className="slider-section">
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              <div className="carousel-item active">
                <div className="carousel-caption d-md-block col-12 col-md-4">
                  <div className="carousel-caption-inner">
                    <div>
                      <Slide top>
                        <img src="/image/logo/794-engenius_logo-removebg-preview.png"
                          className="img-fluid"
                          alt="..."
                        />
                      </Slide>
                      <Slide left>
                        <p>
                          EnGenius access points and cloud solutions are user-friendly amenities in modern life
                        </p>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="slider-top-img col-12 col-md-8">
                  <div>
                    <Zoom>
                      <img
                        src="/image/slider-top-img/outdoor-series.png"
                        className="d-block"
                        alt="..."
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="carousel-caption d-md-block col-12 col-md-4">
                  <div className="carousel-caption-inner">
                    <div>
                      <Slide top>
                        <img src="/image/logo/yealink-1-removebg-preview.png"
                          className="img-fluid"
                          alt="..."
                        />
                      </Slide>
                      <Slide left>
                        <p>
                          Yealink's communication devices are some of the world's top leading products in the market
                        </p>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="slider-top-img col-12 col-md-8">
                  <div>
                    <Zoom>
                      <img
                        src="/image/slider-top-img/1-removebg-preview.png"
                        className="d-block"
                        alt="..."
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="carousel-caption d-md-block col-6  col-md-4">
                  <div className="carousel-caption-inner">
                    <div width='40%'>
                      <Slide top>
                        <img src="/image/logo/yeastar-removebg-preview.png"
                          className=""
                          alt="..."
                        />
                      </Slide>
                      <Slide left>
                        <p>
                          Yeastar's Topnotch PBX system and Gateways in the modern-day market
                        </p>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="slider-top-img col-12 col-md-8">
                  <div>
                    <Zoom>
                      <img
                        src="/image/slider-top-img/111.png"
                        className="d-block"
                        alt="..."
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="carousel-caption d-md-block col-12 col-md-4">
                  <div className="carousel-caption-inner">
                    <div>
                      <Zoom><img src="/image/logo/milight-removebg-preview.png"
                        className="img-fluid"
                        alt="..."
                      />
                      </Zoom>
                      <Slide left><p>
                        Milesight's Unmatchable Surveillance systems in the market with their unbeatable features
                      </p>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="slider-top-img col-12 col-md-8">
                  <div>
                    <Zoom>
                      <img
                        src="/image/slider-top-img/MicrosoftTeams-image__4_-removebg-preview.png"
                        className="d-block"
                        alt="..."
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="carousel-caption d-md-block col-12 col-md-4">
                  <div className="carousel-caption-inner">
                    <div>
                      <Slide top>
                        <img src="/image/logo/Akuvox-removebg-preview.png"
                          className="img-fluid"
                          alt="..."
                        />
                      </Slide>
                      <Slide left>
                        <p>
                          Smart intercoms from Akuvox is essential to a luxurious lifestyle
                        </p>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="slider-top-img col-12 col-md-8">
                  <div>
                    <Zoom>
                      <img
                        src="/image/slider-top-img/MicrosoftTeams-image__5_-removebg-preview.png"
                        className="d-block"
                        alt="..."
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="carousel-caption d-md-block col-12 col-md-4">
                  <div className="carousel-caption-inner">
                    <div>
                      <Slide left>
                        <img src="/image/logo/2n-telekomunikace-a-s-logo-vector-removebg-preview.png"
                          className="img-fluid logo-2n"
                          alt="..."
                        />
                      </Slide>
                      <Slide bottom>
                        <p>
                          2N's intercoms are equipped with the top-notch technology available and an addition to your premium living
                        </p>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="slider-top-img col-12 col-md-8">
                  <div>
                    <Zoom>
                      <img
                        src="/image/slider-top-img/MicrosoftTe-ms-image.png"
                        className="d-block"
                        alt="..."
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="carousel-caption d-md-block col-12 col-md-4">
                  <div className="carousel-caption-inner">
                    <div>
                      <Slide top>
                        <img src="/image/logo/DrayTek_logo-removebg-preview.png"
                          className="img-fluid"
                          alt="..."
                        />
                      </Slide>
                      <Slide left>
                        <p>
                          DrayTekFrom ISDN, VDSL to LTE, DrayTek has always been striving to provide SMBs and professional with reliable, fast and secure connections.
                        </p>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="slider-top-img col-12 col-md-8">
                  <div>
                    <Slide right>
                      <img
                        src="/image/slider-top-img/MicrosoftTeams-image drytek.png"
                        className="d-block"
                        alt="..."
                      />
                    </Slide>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="carousel-caption d-md-block col-12 col-md-4">
                  <div className="carousel-caption-inner">
                    <div>
                      <Slide top>
                        <img src="/image/logo/xcally-removebg-preview.png"
                          className="img-fluid"
                          alt="..."
                        />
                      </Slide>
                      <Slide left>
                        <p>
                          XCALLY provides highly dependable and scalable call center solutions
                        </p>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="slider-top-img col-12 col-md-8">
                  <div>
                    <Zoom>
                      <img
                        src="/image/slider-top-img/xca.png"
                        className="d-block"
                        alt="..."
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}
