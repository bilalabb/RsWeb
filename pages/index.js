import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
  };
  
  var settings3 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
  };

  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
  };

  return (
    <>
      <section className="slider-section">
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              <div className="carousel-item active">
               
                <div className="carousel-caption  d-md-block">
                  <h1>T3 Series IP Phones</h1>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                  <div className="icon-image-div">
                    <div className="inner-icon-div">
                      <div className="inner-icon">
                        <img
                          src="/image/radio-waves.png"
                          className="img-fluid"
                        />
                      </div>
                      <span>Yealink HD Voice</span>
                    </div>
                    <div className="inner-icon-div">
                      <div className="inner-icon">
                        <img
                          src="/image/day-and-night.png"
                          className="img-fluid"
                        />
                      </div>
                      <span>Yealink Device Management Platform</span>
                    </div>
                    <div className="inner-icon-div">
                      <div className="inner-icon">
                        <img src="/image/hosting.png" className="img-fluid" />
                      </div>
                      <span>Unified firmware</span>
                    </div>
                    <div className="inner-icon-div">
                      <div className="inner-icon">
                        <img src="/image/network.png" className="img-fluid" />
                      </div>
                      <span>5 Way local Conference</span>
                    </div>
                  </div>
                </div>
              
                <img
                  src="/image/T3-series-ip-phone.png"
                  className="d-block"
                  alt="..."
                />
              </div>

              <div className="carousel-item active">
               
                <div className="carousel-caption  d-md-block">
                  <h1>T3 Series IP Phones</h1>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                  <div className="icon-image-div">
                    <div className="inner-icon-div">
                      <div className="inner-icon">
                        <img
                          src="/image/radio-waves.png"
                          className="img-fluid"
                        />
                      </div>
                      <span>Yealink HD Voice</span>
                    </div>
                    <div className="inner-icon-div">
                      <div className="inner-icon">
                        <img
                          src="/image/day-and-night.png"
                          className="img-fluid"
                        />
                      </div>
                      <span>Yealink Device Management Platform</span>
                    </div>
                    <div className="inner-icon-div">
                      <div className="inner-icon">
                        <img src="/image/hosting.png" className="img-fluid" />
                      </div>
                      <span>Unified firmware</span>
                    </div>
                    <div className="inner-icon-div">
                      <div className="inner-icon">
                        <img src="/image/network.png" className="img-fluid" />
                      </div>
                      <span>5 Way local Conference</span>
                    </div>
                  </div>
                </div>
              
                <img
                  src="/image/T3-series-ip-phone.png"
                  className="d-block"
                  alt="..."
                />
              </div>

              <div className="carousel-item active">
               
               <div className="carousel-caption  d-md-block">
                 <h1>T3 Series IP Phones</h1>
                 <p>
                   Some representative placeholder content for the first slide.
                 </p>
                 <div className="icon-image-div">
                   <div className="inner-icon-div">
                     <div className="inner-icon">
                       <img
                         src="/image/radio-waves.png"
                         className="img-fluid"
                       />
                     </div>
                     <span>Yealink HD Voice</span>
                   </div>
                   <div className="inner-icon-div">
                     <div className="inner-icon">
                       <img
                         src="/image/day-and-night.png"
                         className="img-fluid"
                       />
                     </div>
                     <span>Yealink Device Management Platform</span>
                   </div>
                   <div className="inner-icon-div">
                     <div className="inner-icon">
                       <img src="/image/hosting.png" className="img-fluid" />
                     </div>
                     <span>Unified firmware</span>
                   </div>
                   <div className="inner-icon-div">
                     <div className="inner-icon">
                       <img src="/image/network.png" className="img-fluid" />
                     </div>
                     <span>5 Way local Conference</span>
                   </div>
                 </div>
               </div>
             
               <img
                 src="/image/T3-series-ip-phone.png"
                 className="d-block"
                 alt="..."
               />
             </div>
              </Slider>
          </div>
        </div>
      </section>

      <section className="section-3">
        <div className="container">
          <div className="row">
            <div className="header">
              <h2>
                How can we help your Business?{" "}
                <div className="header-bottom-border" />
              </h2>
            </div>
            <div className="paragaph-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p>
                We are a team of astronauts (not literally) who are building
                blockchain-powered solutions to shoot for the moon!{" "}
              </p>
            </div>
            <div className="card-main-div">
              <div className="first-card col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="card-body first-card-body">
                  <div className="icon">
                    <img
                      src="/image/loupe.png"
                      className="img-fluid icon-inner-image"
                    />
                  </div>
                  <h4>Find out what you need</h4>
                  <p className="card-text">
                    We present you a proposal and discuss nitty-grtty like
                  </p>
                </div>
              </div>
              <div className="first-card col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="card-body first-card-body">
                  <div className="icon">
                    <img
                      src="/image/settings.png"
                      className="img-fluid icon-inner-image"
                    />
                  </div>
                  <h4>Work out the details</h4>
                  <p className="card-text">
                    Communication protocols apart from engagment models
                  </p>
                </div>
              </div>
              <div className="first-card col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="card-body first-card-body">
                  <div className="icon">
                    <img
                      src="/image/logo-3.png"
                      className="img-fluid icon-inner-image"
                    />
                  </div>
                  <h4>We get to work fast</h4>
                  <p className="card-text">
                    Protocols apart from engage models,pricing billing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="card-about-div col-lg-12 col-md-12">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="card-about">
                  <h2 className="card-title">About us</h2>
                  <p className="card-text">
                    We are a team of astronauts (not literally) who are building
                    blockchain-powered solutions to shoot for the moon! We can
                    develop white-label solutions with the latest technologies,
                    and as manifested by multiple deployments across the world,
                    we can convert companies and enabling SMEs to fully explore
                    their potential and expand their operations.
                  </p>
                  <p className="card-text card-text-2">
                    Not only that, our white-label solutions are powering
                    startup companies and enabling SMEs to fully explore their
                    potential and expand their operations. Not only that, our
                    white-label solutions are powering startup companies and
                    enabling SMEs to fully explore their potential and expand
                    their operations. Not only that, our white-label solutions
                    are powering startup companies{" "}
                  </p>
                  <div className="read-more">
                    <span>
                      Read more
                      <FontAwesomeIcon className="ms-2" icon={faChevronRight} />
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-image col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img src="/image/36S0N.jpeg" alt="36S0N.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-categories-section-1">
        <div className="container">
          <div className="row">
            <div className="header">
              <h2>
                Product Categories <div className="header-bottom-border" />
              </h2>
            </div>
            <div className="paragaph-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p>
                We are a team of astronauts (not literally) who are building
                blockchain-powered solutions to shoot for the moon!{" "}
              </p>
            </div>

            <div className="card second-card col-md-3 col-sm-12 col-xs-12">
              <img
                src="/image/new_home13-21.png"
                className="img-fluid card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">Home security solutions</a>
                </p>
              </div>
            </div>
            <div className="card second-card col-md-3 col-sm-12 col-xs-12">
              <img
                src="/image/draytek-products.png"
                className="img-fluid card-img-top"
                alt="draytek-products.png"
              />
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">Home security solutions</a>
                </p>
              </div>
            </div>
            <div className="card second-card col-md-3 col-sm-12 col-xs-12">
              <img
                src="/image/3-1.png"
                className="img-fluid card-img-top"
                alt="3-1.png"
              />
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">Home security solutions</a>
                </p>
              </div>
            </div>
            <div className="card second-card col-md-3 col-sm-12 col-xs-12">
              <img
                src="/image/AF-Motorized-Mini-Dome-3.png"
                className="img-fluid card-img-top"
                alt="AF-Motorized-Mini-Dome-3.png"
              />
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">Home security solutions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-categories-section-2">
        <div className="container">
          <div className="row">
            <div className="card second-card col-md-3 col-sm-12 col-xs-12">
              <img
                src="/image/4-1.png"
                className="img-fluid card-img-top"
                alt="4-1.png"
              />
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">Home security solutions</a>
                </p>
              </div>
            </div>
            <div className="card second-card col-md-3 col-sm-12 col-xs-12">
              <img
                src="/image/5-1.png"
                className="img-fluid card-img-top"
                alt="5-1.png"
              />
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">Home security solutions</a>
                </p>
              </div>
            </div>
            <div className="card second-card col-md-3 col-sm-12 col-xs-12">
              <img
                src="/image/2-1.png"
                className="img-fluid card-img-top"
                alt="2-1.png"
              />
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">Home security solutions</a>
                </p>
              </div>
            </div>
            <div className="card second-card col-md-3 col-sm-12 col-xs-12">
              <img
                src="/image/1-1.png"
                className="img-fluid card-img-top "
                alt="1-1.png"
              />
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">Home security solutions</a>
                </p>
              </div>
            </div>

            <div className="View-more-btn">
              <button className="btn btn-primary btn-lg see-more" type="submit">
                View more
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="Upcoming-Products-section">
        <div className="container">
          <div className="row">
            <div className="header">
              <h2>
                Upcoming Products <div className="header-bottom-border" />
              </h2>
            </div>
            <div className="paragaph-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p>
                We are a team of astronauts (not literally) who are building
                blockchain-powered solutions to shoot for the moon!{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="slider-section2">
        <div class="container">
          <div class="row">
            <Slider {...settings3} className="carousel-slider2">
              <div className="carousel-item active">
                <img
                  src="/image/AF-Motorized-Mini-Dome-3.png"
                  className="d-block camra-2"
                  alt="..."
                />
                <div className="carousel-caption carousel-caption-2  d-md-block">
                  <h3>MILESIGHT CCTV</h3>
                  <p>
                    Some representative placeholder content for the first
                    slide.Some representative placeholder content for the first
                    slideSome representative placeholder content for the first
                    slide.Some representative placeholder content for the first
                    slide..
                  </p>
                  <div className="icon-image-div">
                    <div className="inner-icon-span">
                      <div className="inner-icon-2">
                        <img src="/image/4k.png" className="img-fluid" />
                      </div>
                      <span>4K VIDEO RECORDING</span>
                    </div>
                    <div className="inner-icon-span">
                      <div className="inner-icon-2">
                        <img src="/image/mic.png" className="img-fluid" />
                      </div>
                      <span>BUILT-IN MIC</span>
                    </div>
                    <div className="inner-icon-span">
                      <div className="inner-icon-2">
                        <img src="/image/drop.png" className="img-fluid" />
                      </div>
                      <span>WATER PROOF</span>
                    </div>
                    <div className="inner-icon-span">
                      <div className="inner-icon-2">
                        <img src="/image/siren.png" className="img-fluid" />
                      </div>
                      <span>BUILD-IN ALARM</span>
                    </div>
                    <div className="inner-icon-span">
                      <div className="inner-icon-2">
                        <img
                          src="/image/day-and-night.png"
                          className="img-fluid"
                        />
                      </div>
                      <span>DAY/NIGHT MODE</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <img
                  src="/image/AF-Motorized-Mini-Dome-3.png"
                  className="d-block camra-2"
                  alt="..."
                />
                <div className="carousel-caption carousel-caption-2  d-md-block">
                  <h3>MILESIGHT CCTV</h3>
                  <p>
                    Some representative placeholder content for the first
                    slide.Some representative placeholder content for the first
                    slideSome representative placeholder content for the first
                    slide.Some representative placeholder content for the first
                    slide..
                  </p>
                  <div className="icon-image-div">
                    <div className="inner-icon-span">
                      <div className="inner-icon-2">
                        <img src="/image/4k.png" className="img-fluid" />
                      </div>
                      <span>4K VIDEO RECORDING</span>
                    </div>
                    <div className="inner-icon-span">
                      <div className="inner-icon-2">
                        <img src="/image/mic.png" className="img-fluid" />
                      </div>
                      <span>BUILT-IN MIC</span>
                    </div>
                    <div className="inner-icon-span">
                      <div className="inner-icon-2">
                        <img src="/image/drop.png" className="img-fluid" />
                      </div>
                      <span>WATER PROOF</span>
                    </div>
                    <div className="inner-icon-span">
                      <div className="inner-icon-2">
                        <img src="/image/siren.png" className="img-fluid" />
                      </div>
                      <span>BUILD-IN ALARM</span>
                    </div>
                    <div className="inner-icon-span">
                      <div className="inner-icon-2">
                        <img
                          src="/image/day-and-night.png"
                          className="img-fluid"
                        />
                      </div>
                      <span>DAY/NIGHT MODE</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="logo-section">
        <div className="container">
          <div className="row logo-slider">
            <Slider {...settings2} className="">
              <div className="slick-slide">
                <img src="/image/1.jpg" alt="1.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/2.jpg" alt="2.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/3.jpg" alt="3.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/4.jpg" alt="4.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/5.jpg" alt="5.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/6.jpg" alt="6.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/7.jpg" alt="7.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/8.jpg" alt="8.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/9.jpg" alt="9.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/ak.png" alt="ak.png" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
