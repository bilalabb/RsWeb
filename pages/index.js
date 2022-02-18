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
import Logoslider from "./logoslider/Logoslider";
export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
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
    <>
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
                <div className="carousel-caption d-md-block col-12 col-md-4">
                  <div className="carousel-caption-inner">
                    <div width='40%'>
                      <Slide top>
                        <img src="/image/logo/yeastar-removebg-preview.png"
                          className=""
                          alt="..."
                        />
                      </Slide>x
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

      <section className="section-3">
        <div className="container">
          <div className="row">
            <Slide top>
              <div className="header">
                <h2>
                  Our Three Core Steps{" "}
                  <div className="header-bottom-border" />
                </h2>

              </div>
              <div className="paragaph-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p>
                  The trust and confidence we earn from our employees and customers are crucial to the success of our Company. We establish trust by operating with honesty, integrity and accomplishing business objectives via ethical behavior.{" "}
                </p>
              </div>
            </Slide>
            <Zoom>
              <div className="card-main-div">
                <div className="first-card col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="card-body first-card-body">
                    <div className="icon">
                      <img
                        src="/image/loupe.png"
                        className="img-fluid icon-inner-image"
                      />
                      <img
                        src="/image/logo/search-blue.png"
                        className="img-fluid icon-inner-image2"
                      />
                    </div>
                    <h4>Find out what you need</h4>
                    <p className="card-text">
                      We present you a proposal and discuss all the details
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
                      <img
                        src="/image/logo/settings-blue.png"
                        className="img-fluid icon-inner-image2"
                      />
                    </div>
                    <h4>Work out the details</h4>
                    <p className="card-text">
                      Communication protocols apart from engagement models
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
                      <img
                        src="/image/logo/logo-blue.png"
                        className="img-fluid icon-inner-image2"
                      />
                    </div>
                    <h4>We get to work fast</h4>
                    <p className="card-text">
                      Protocols apart from engage models, pricing billing
                    </p>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="card-about-div col-lg-12 col-md-12">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="card-about">
                  <Slide top>
                    <h2 className="card-title">About us</h2>
                  </Slide>
                  <Slide left>
                    <p className="card-text">
                      RSTECH is the technology arm of Reactive Space.

                      Since 2014, Reactive Space is a UAE-based blockchain development company that has provided high-technology solutions to businesses & Entrepreneurs. Reactive Space is specialized in Blockchain services, Data Science, Artificial Intelligence, Virtual Reality, Augmented Reality, and Business Analytics. After a successful brand building, we have launched our Technology based  IT company in Pakistan "Reactive Space Technology”.
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
                        <a href="#" className="text-white">Read more</a>
                        <FontAwesomeIcon className="ms-2" icon={faChevronRight} />
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </div>
                  </Slide>
                </div>
              </div>
              <div className="card-image col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <Slide right>
                  <img src="/image/36S0N.jpeg" alt="36S0N.jpeg" />
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-categories-section-1">
        <div className="container">
          <div className="row">
            <Slide top>
              <div className="header">
                <h2>
                  Product Categories <div className="header-bottom-border" />
                </h2>
              </div>
              <div className="paragaph-1 col-12">
                <p>
                  We build credibility by keeping our promises, acting with honesty and integrity. We bring you products from one of the finest brands out there{" "}
                </p>
              </div>
            </Slide>
            <div className="second-card col-lg-3 col-md-6 col-12">
              <span className="second-card-img">

                <img src="/image/yealink.jpg"
                  className="card-img-top"
                  alt="" />
              </span>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">Yealink IP phone/video conferencng</a>
                </p>
              </div>
            </div>
            <div className="second-card col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <span className="second-card-img">
                <img
                  src="/image/1-1.png"
                  className="card-img-top"
                  alt=""
                />
              </span>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">Yeastar-PBX System</a>
                </p>
              </div>
            </div>
            <div className="second-card col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <span className="second-card-img">
                <img
                  src="/image/milesight_show.jpg"
                  className="card-img-top"
                  alt="milesight_show.jpg"
                />
              </span>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">Milesight-Surveillance System</a>
                </p>
              </div>
            </div>
            <div className="second-card col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <span className="second-card-img">
                <img
                  src="/image/4-1.png"
                  className="card-img-top"
                  alt="4-1.png"
                />
              </span>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">AKUVOX-Smart Intercom</a>
                </p>
              </div>
            </div>
            <div className="second-card col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <span className="second-card-img">
                <img
                  src="/image/5-1.png"
                  className="card-img-top"
                  alt="5-1.png"
                />
              </span>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">2N-IP Intercom</a>
                </p>
              </div>
            </div>
            <div className="second-card col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <span className="second-card-img">
                <img
                  src="/image/3-1.png"
                  className="card-img-top"
                  alt="3-1.png"
                />
              </span>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">XCALLY-Call Center Solution</a>
                </p>
              </div>
            </div>
            <div className="second-card col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <span className="second-card-img">
                <img
                  src="/image/outdoor-series.png"
                  className="card-img-top"
                  alt="outdoor-series.png"
                />
              </span>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">EnGenius-Wireless Solution</a>
                </p>
              </div>

            </div>
            <div className="second-card col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <span className="second-card-img">
                <img
                  src="/image/draytek-products.png"
                  className="card-img-top "
                  alt="1-1.png"
                />
              </span>
              <div className="card-body">
                <p className="card-text">
                  {" "}
                  <a href="#">Draytek VPN Router</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Upcoming-Products-section">
        <div className="container">
          <div className="row">
            <Slide top>
              <div className="header">
                <h2>
                  Upcoming Products <div className="header-bottom-border" />
                </h2>
              </div>
            </Slide>
            <div className="paragaph-1 col-lg-12 col-md-12 col-sm-12 col-xs-12 m-2How can we help your Business?">
              {/* <p>
                We are a team of astronauts (not literally) who are building
                blockchain-powered solutions to shoot for the moon!{" "}
              </p> */}
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
                  src="/image/MicrosoftTeams-image-1.png"
                  className="d-block camra-2"
                  alt="..."
                />
                <div className="carousel-caption carousel-caption-2  d-md-block">
                  <h3>MILESIGHT CCTV</h3>
                  <p>
                    Some representative placeholder content for the first
                    slide.
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
                  src="/image/af-motorized-mini-dome.png"
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
      <Logoslider />
    </>
  );
}
