import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import { CSSProperties, SVGAttributes } from 'react'
import {
} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function UpcomingProduct() {
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
        <section className="Upcoming-Products-section">
        <div className="container">
          <div className="row">
              <div className="header">
                <h2>
                  Upcoming Products <div className="header-bottom-border" />
                </h2>
              </div>
            <div className="paragaph-1 col-lg-12 col-md-12 col-sm-12 col-xs-12 m-2How can we help your Business?">
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
    </div>
  )
}
