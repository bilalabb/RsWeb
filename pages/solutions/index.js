import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Solutions() {
  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
  };
  var settings3 = {
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
      <section className="solutions-section-1">
        <div className="container">
          <div className="row">
            <div className="solutions-heading col-lg-12">
              <div className="div-1 col-lg-6">
                <div className="Yealink-header">
                  <h1>
                    Yealink-Video Conferecing{" "}
                    <div className="Yealink-header-border" />
                  </h1>
                  <p>
                    {" "}
                    When yuo is simply Dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="div-2 col-lg-6">
                <img src="/image/MicrosoftTeams-image-3.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Microsoft-solution-section">
        <div className="container">
          <div className="row">
            <div className="header">
              <h2>
                Microsoft Solution
                <div className="header-bottom-border" />
              </h2>
            </div>
            <div className="paragaph-2">
              <p>
                Yealink high-quality portfolio for Microsoft Teams are
                future-proof, Teams-powered phones and Microsoft Teams Rooms.
                The Teams tailored experience to help our joint customers
                realize the vision of Intelligent Communications backed by a top
                tier one-stop UC endpoint solution provider.
              </p>
              <p>
                Yealink is the first provider offering one-stop audio/video
                certified Microsoft Teams devices, covering scenarios of
                offices, open work space, huddle rooms and large conference
                rooms.
              </p>
            </div>
            <div className="icon-main-div">
              <div className="icon-1">
                <div className="icon">
                  <img
                    src="/image/sound.png"
                    className="img-fluid icon-inner-image"
                  />
                </div>
                <h4>High Quality Audio</h4>
              </div>
              <div className="icon-1">
                <div className="icon">
                  <img
                    src="/image/briefcase.png"
                    className="img-fluid icon-inner-image"
                  />
                </div>
                <h4>Broad ProtFolio</h4>
              </div>
              <div className="icon-1">
                <div className="icon">
                  <img
                    src="/image/plugins.png"
                    className="img-fluid icon-inner-image"
                  />
                </div>
                <h4>Plug n Play Setup</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="high-qualty-section">
        <div className="container">
          <div className="row">
            <div className="high-qualty-main-div">
              <div className="high-qualty-img">
                <div className="high-qualty-image">
                  <img src="/image/MicrosoftTeams-image-3.png" />
                </div>

                <Slider {...settings3} className="logo-slider-2">
                  <div className="slick-image-slide">
                    <img src="/image/CP900-ms-teams.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/cp960-ms-teams.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/T58A-ms-teams.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/T58A-ms-teams2.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/Yealink-VC200.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/Yealink-53P-Dect.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/Yealink-T54w.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/Yealink-T57w.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/Yealink-T58A-Right.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img
                      src="/image/Yelaink-T46S.jpg"
                      alt="Yelaink-T46S.jpg"
                    />
                  </div>
                </Slider>

                {/* <div className="logo-slider-2 width-0">
                  <div className="slick-image-slide">
                    <img src="assets/image/CP900-ms-teams.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="assets/image/cp960-ms-teams.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="assets/image/T58A-ms-teams.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="assets/image/T58A-ms-teams2.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="assets/image/Yealink-VC200.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="assets/image/Yealink-53P-Dect.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="assets/image/Yealink-T54w.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="assets/image/Yealink-T57w.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img src="assets/image/Yealink-T58A-Right.jpg" alt="" />
                  </div>
                  <div className="slick-image-slide">
                    <img
                      src="/image/Yelaink-T46S.jpg"
                      alt="Yelaink-T46S.jpg"
                    />
                  </div>
                </div> */}
              </div>
              <div className="high-qualty-text">
                <div className="Quality-heading">
                  <h2>High Quality</h2>
                  <p>
                    High quality Through Yealink Device Management
                    Platform/Cloud Service, you can remotely manage, monitor,
                    configure, update and diagnose all Yealink audio and video
                    devices peripherals.
                  </p>
                  <div className="high-qualty-border-bottom" />
                </div>
                <div className="Quality-heading">
                  <h2>Easy to Start and Manage</h2>
                  <p>
                    HD audio quality, Yealink noise proof technology, HD optical
                    cameras, offering a better user experience.
                  </p>
                  <div className="high-qualty-border-bottom" />
                </div>
                <div className="Quality-heading">
                  <h2>Premium Audio and Video Meeting Experience</h2>
                  <p>
                    Microsoft Teams certified high quality components,
                    consistent and beautiful product design, backed by No.1 SIP
                    phone provide.
                  </p>
                  <div className="high-qualty-border-bottom" />
                </div>
                <div className="Quality-heading">
                  <h2>Device Management Platform</h2>
                  <p>
                    Integrated consistent Teams-tailored user experience for
                    calling and meeting across all the devices, MVC Series one
                    touch to join the meeting with the touch-control.
                  </p>
                  <div className="high-qualty-border-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="Yealink-iphone-section">
        <div className="container">
          <div className="row">
            <div contextMenu="Yealink-iphone-div">
              <div className="header header-iphone">
                <h2>Yealink IP Phones<div className="header-iphone-border" /></h2>
              </div>
              <div className="Video-conferencing-div">
                <h2> Voice Conferencing System </h2>
                <p>
                  Yealink VoIP phones are affordable, high quality, feature rich solutions for both small and large organisations. Yealink IP Phones can work seamlessly with a vast number of compatible IP PBXs that support Session Initiation Protocol (SIP) and also hosted PBX providers.    
                </p>
                <p>
                  Yealink offers a number of different IP Phone series’s, which includes the T2, T4 and T5 product ranges, all offering different solutions depending on your requirements.
                  For full series of Yealink IP phone for voice solutions please visit our Yealink Website
                </p>
              </div>
              <div className="Video-conferencing-div">
                <h2> Video Conferencing System </h2>
                <p>
                  Yealink IP Video Phone solutions in Dubai is based on open standards, providing excellent compatibility and interoperability with worldwide leading UC platforms in UAE. Fully integrated with Microsoft Teams and cover all the meeting room size, Yealink video device solutions comes with full package devices offer including everything you need for a Microsoft Teams meeting For full series of Yealink IP phone for video solutions please visit our Yealink Website
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="Yealink-iphone-section-2">
        <div className="container">
          <div className="row">
            <div className="header">
              <h2>Yealink IP Phones</h2>
            </div>
            <div className="iphone-main-div col-lg-12">
              <div className="iphone-image col-lg-3"><img src="/image/Yelaink-T46S.jpg" /></div>
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-VP49G.jpg" /></div>
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-T58AEXP50.jpg" /></div>
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-T58A-Right.jpg" /></div>
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-T58A-Front.jpg" /></div>
            </div>
            <div className="iphone-main-div col-lg-12">
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-T57w.jpg" /></div>
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-T54w.jpg" /></div>
              <div className="iphone-image col-lg-3"><img src="/image/T58A-ms-teams2.jpg" /></div>
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-T42S.jpg" /></div>
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-T48S.jpg" /></div>
            </div>
            <div className="iphone-main-div col-lg-12">
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-VC800.jpg" /></div>
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-VC500.jpg" /></div>
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-w56P-Dect.jpg" /></div>
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-VC200.jpg" /></div>
              <div className="iphone-image col-lg-3"><img src="/image/Yealink-W80-Dect.jpg" /></div>
            </div>
            <div className="View-more-btn">
              <button className="btn btn-primary btn-lg see-more see-more-2" type="submit">View more
              </button></div>
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
            <div className="paragaph-1">
              <p>
                We are a team of astronauts (not literally) who are building
                blockchain-powered solutions to shoot for the moon!{" "}
              </p>
            </div>
            <div className="card-main-div">
              <div className="card first-card col-sm-12 col-xs-12">
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
              <div className="card first-card col-sm-12 col-xs-12">
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
              <div className="card first-card col-sm-12 col-xs-12">
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
