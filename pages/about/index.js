import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";


export default function About() {


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
     
     <section className="About-page-section">
        <div className="header-about">
          <h1>About Us</h1>
          <div className="bottom-border" />
          <p>
            When yuo is simply Dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="overly" />
      </section>
     

      <section className="paragraph2-section">
        <div className="container">
          <div className="row">
            <div className="paragraph2">
              <p>We are a team of astronauts (not literally) who are building blockchain-powered solutions to shoot for the moon! We can develop white-label solutions with the latest technologies, and as manifested by multiple deployments across the world, we can convert companies and enabling SMEs to fully explore their potential and expand their operationsexpand their operations.</p>
              <p>We are a team of astronauts (not literally) who are building blockchain-powered solutions to shoot for the moon! We can develop white-label solutions with the latest technologies, and as manifested by multiple deployments across the world, we can convert companies and enabling SMEs to fully explore their potential and expand their operations.expand their operations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shake-hand-section">
        <div className="shake-hand-maindiv col-lg-12">
          <div className="col-lg-6 col-12 paragraph-one">
            <h3>Our Work &amp; Ethics</h3>
            <p>We are a team of astronauts (not literally) who are building blockchain-powered solutions to shoot for the moon! We can develop white-label solutions with the latest technologies, and as manifested by multiple deployments across the world, we can convert companies and enabling SMEs to fully explore their potential and expand their operations.expand their operations</p>
            <p>We are a team of astronauts (not literally) who are building blockchain-powered solutions to shoot for the moon! We can develop white-label solutions with the latest technologies, and as manifested by multiple deployments across the world, we can convert companies and enabling SMEs to fully explore their potential and expand their operations.expand their operations</p>
          </div>
          <div className="col-lg-6 col-12 ">
            <img src="/image/shake-hand.jpg" />
          </div>
        </div>
      </section>

      <section className="paragraph2-section">
        <div className="container">
          <div className="row">
            <div className="paragraph2">
              <h2>Customer Service Experience <div className="header-bottom-border" /></h2>
              <p>We are a team of astronauts (not literally) who are building blockchain-powered solutions to shoot for the moon! We can develop white-label solutions with the latest technologies, and as manifested by multiple deployments across the world, we can convert companies and enabling SMEs to fully explore their potential and expand their operationsexpand their operations.</p>
              <p>We are a team of astronauts (not literally) who are building blockchain-powered solutions to shoot for the moon! We can develop white-label solutions with the latest technologies, and as manifested by multiple deployments across the world, we can convert companies and enabling SMEs to fully explore their potential and expand their operations.expand their operations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shake-hand-section">
        <div className="shake-hand-maindiv col-lg-12">
          <div className="col-lg-6 col-12 ">
            <img src="/image/36S0N.jpeg" />
          </div>
          <div className="col-lg-6  col-12 paragraph-two">
            <h3>
              Our Staff
            </h3>
            <p>We are a team of astronauts (not literally) who are building blockchain-powered solutions to shoot for the moon! We can develop white-label solutions with the latest technologies, and as manifested by multiple deployments across the world, we can convert companies and enabling SMEs to fully explore their potential and expand their operations.expand their operations</p>
            <p>We are a team of astronauts (not literally) who are building blockchain-powered solutions to shoot for the moon! We can develop white-label solutions with the latest technologies, and as manifested by multiple deployments across the world, we can convert companies and enabling SMEs to fully explore their potential and expand their operations.expand their operations</p>
          </div>
        </div>
      </section>

      <section className="section-3">
        <div className="container">
          <div className="row">
            <div className="header">
              <h2>How can we help your Business? <div className="header-bottom-border" /></h2>
            </div>
            <div className="paragaph-1">
              <p>We are a team of astronauts (not literally) who are building blockchain-powered solutions to shoot for the moon! </p>
            </div>
            <div className="card-main-div">
              <div className="card first-card col-sm-12 col-xs-12">			
                <div className="card-body first-card-body">
                  <div className="icon">
                    <img src="/image/loupe.png" className="img-fluid icon-inner-image" />
                  </div>
                  <h4>Find out what you need</h4>
                  <p className="card-text">We present you a proposal and discuss nitty-grtty like</p>
                </div>
              </div>
              <div className="card first-card col-sm-12 col-xs-12">			
                <div className="card-body first-card-body">
                  <div className="icon">						
                    <img src="/image/settings.png" className="img-fluid icon-inner-image" />
                  </div>
                  <h4>Work out the details</h4>
                  <p className="card-text">Communication protocols apart from engagment models</p>
                </div>
              </div>
              <div className="card first-card col-sm-12 col-xs-12">			
                <div className="card-body first-card-body">
                  <div className="icon">
                    <img src="/image/logo-3.png" className="img-fluid icon-inner-image" />
                  </div>
                  <h4>We get to work fast</h4>
                  <p className="card-text">Protocols apart from engage models,pricing billing</p>
                </div>
              </div>
            </div>
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
