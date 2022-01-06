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
          RSTECH is the technology arm of Reactive Space.
          </p>
        </div>
        <div className="overly" />
      </section>
     

      <section className="paragraph2-section">
        <div className="container">
          <div className="row">
            <div className="paragraph2">
              <p>
Since 2014, Reactive Space is a UAE-based blockchain development company that has provided high-technology solutions to businesses & Entrepreneurs. Reactive Space is specialized in Blockchain services, Data Science, Artificial Intelligence, Virtual Reality, Augmented Reality, and Business Analytics. After a successful brand building, we have launched our Technology based  IT company in Pakistan "Reactive Space Technology”.</p>
              <p>RS Technology is a Pakistan-based specialized value-added reseller. We aim to provide the best technology in Pakistan. We are ideally positioned to serve Pakistan’s technology market as a VAR of products and solutions. Our respected partners are Yealink, DrayTek, Yeastar, Milesight, 2N, Akuvox, XCALLY, Engenius.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shake-hand-section">
        <div className="shake-hand-maindiv col-md-12">
          <div className="col-md-6 col-12 paragraph-one">
            <h1>Mission & Vision:</h1>
          <h3>Our Mission</h3>

            <p>As our goal is “COMPLEX CONNECTION, SIMPLE SOLUTION”, our mission is to bring user-friendly technology to Pakistan. At RS technology, the trust and confidence we acquire from our workers and customers are critical to our business's success.</p>
          <h3>Our Vision</h3>

            <p>At RS Technology, We aim to build credibility by keeping our promises, acting with honesty and integrity, and achieving corporate goals only via ethical behavior. RS Technology is devoted to establishing an atmosphere of dignity and respect.</p>
          </div>
          <div className="col-md-6 col-12 ">
            <img src="/image/shake-hand.jpg" />
          </div>
        </div>
      </section>

      <section className="paragraph2-section">
        <div className="container">
          <div className="row">
            <div className="paragraph2">
              <h2> Customer Services.<div className="header-bottom-border" /></h2>
              <p>We cultivate and maintain excellent working relationships with our clients in order to fully comprehend their business requirements and build a solid basis for product matching through our technology. Our client service is our greatest asset. We are in a unique position to provide a wide range of services to assist our customers with corporate solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shake-hand-section">
        <div className="shake-hand-maindiv col-md-12">
          <div className="col-md-6 col-12 ">
            <img src="/image/36S0N.jpeg" />
          </div>
          <div className="col-md-6  col-12 paragraph-two">
            <h3>
            OUR Staff
            </h3>
            <p>To maintain a portfolio of excellent professionals, we continue to recruit suitable technology experts. Our staff is made up of the best individuals accessible in our industry. Our screening methods are designed to discover each candidate's unique qualifications and match them to the demands of our clients. We provide flexibility and choice, as well as remove the element of risk from the recruiting process.</p>            
          </div>
        </div>
      </section>

      {/* <section className="section-3">
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
      </section> */}
      

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
                <img src="/image/5.jpg" alt="5.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/6.jpg" alt="6.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/8.jpg" alt="8.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/ak.png" alt="ak.png" />
              </div>
              <div className="slick-slide">
                <img src="/image/11.jpg" alt="11.jpg" />
              </div>
              <div className="slick-slide">
                <img src="/image/engenius-logo.svg" alt="engenius-logo.svg" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
