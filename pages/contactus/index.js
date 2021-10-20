import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
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
      <section className="contact-section">
        <div className="contact-image">
          {/* <img src="assets/image/Layer.png"> */}
          <div className="header-contact">
            <h1>Contact Us</h1>
            <div className="bottom-border" />
            <p>
              When yuo is simply Dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          {/* <div className="overly" /> */}
        </div>
      </section>

      <section className="user-detail">
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
            <div className="input-user">
              <div className="name-input">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                />
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="First Name*"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                />
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Last Name*"
                />
              </div>
              <div className="Email-phone">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                />
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone*"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                />
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email*"
                />
              </div>
              <div className="text-area-div">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                />
                <textarea
                  className="form-control text-area"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Message*"
                  defaultValue={""}
                />
              </div>
              <div className="col-auto submit-button">
                <button type="submit" className="btn btn-primary send-btn">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="map-section">
        <div class="map">
          <div
            class="tab-pane fade show active"
            id="MAP"
            role="tabpanel"
            aria-labelledby="home-tab"
            style={{height: "100%"}}
          >
            <iframe
            style={{width:"100%",
            height:"100%",
            border:"0px"}}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.118669593902!2d73.12176591511005!3d33.5502929514616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed04d81818a1%3A0xecfa8857f30563f7!2sCivic%20Center%20Bahria%20Town%20Civic%20Center%20Bahria%20Town%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1634296286184!5m2!1sen!2s"
              
              allowfullscreen=""
              loading="lazy"
            />
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
