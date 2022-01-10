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
    autoplay:true,
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
  var settings3 = {
    dots: false,
    infinite: true,
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
      },
      {
        breakpoint: 320,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

]
  };
  return (
    <>
      <section className="solutions-section-1">
        <div className="container">
          <div className="row">
              <div className="div-1 col-lg-6 col-md-6 yealink-header-div col-12">
                <div className="Yealink-header">
                  <h1>
                    Yealink-Video Conferecing{" "}
                  </h1>
                </div>
              </div>
              <div className="div-2 col-lg-6 col-12 col-md-6">
                <img src="/image/MicrosoftTeams-image-3.png" className="img-fluid"/>
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
               Yealink excellent portfolio for Microsoft Teams is future-evidence, with Teams-controlled telephones and Microsoft Teams Rooms. The Teams fitted experience to assist our joint clients with understanding the vision of Intelligent Communications upheld by a top-level one-stop UC endpoint arrangement supplier.
              </p>
              <p>
              Yealink is the principal supplier offering one-stop sound/video ensured Microsoft Teams gadgets, covering situations of workplaces, open work areas, group rooms and enormous gathering rooms.
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
                <h4>Brand Portfolio</h4>
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
              <div className="col-12 col-md-6 high-qualty-img">
                <div className="high-qualty-image">
                  <img src="/image/MicrosoftTeams-image-3.png" />
                </div>

                <Slider {...settings2} className="logo-slider-2">
                  <div className="slick-image-slide">
                    <img src="/image/CP900-ms-teams.jpg" alt=""  className="logo-slider3-image"/>
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/cp960-ms-teams.jpg" alt=""  className="logo-slider3-image"/>
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/T58A-ms-teams.jpg" alt=""  className="logo-slider3-image"/>
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/T58A-ms-teams2.jpg" alt=""  className="logo-slider3-image"/>
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/Yealink-VC200.jpg" alt=""  className="logo-slider3-image"/>
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/Yealink-53P-Dect.jpg" alt=""  className="logo-slider3-image"/>
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/Yealink-T54w.jpg" alt=""  className="logo-slider3-image"/>
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/Yealink-T57w.jpg" alt=""  className="logo-slider3-image"/>
                  </div>
                  <div className="slick-image-slide">
                    <img src="/image/Yealink-T58A-Right.jpg" alt=""  className="logo-slider3-image"/>
                  </div>
                  <div className="slick-image-slide">
                    <img
                      src="/image/Yelaink-T46S.jpg"
                      alt="Yelaink-T46S.jpg"  className="logo-slider3-image"
                    />
                  </div>
                </Slider>
              </div>
              <div className="col-12 col-md-6 high-qualty-text">
                <div className="Quality-heading">
                  <h2>High Quality</h2>
                  <p>
                   Superior grade Through Yealink Device Management Platform/Cloud Service, you can remotely make due, screen, arrange, update and analyze all Yealink sound and video gadgets peripherals.
                  </p>
                  <div className="high-qualty-border-bottom" />
                </div>
                <div className="Quality-heading">
                  <h2>Easy to Start and Manage</h2>
                  <p>
                  HD sound quality, Yealink clamor verification innovation, HD optical cameras, offering a superior client experience.
                  </p>
                  <div className="high-qualty-border-bottom" />
                </div>
                <div className="Quality-heading">
                  <h2>Premium Audio and Video Meeting Experience</h2>
                  <p>
                  Microsoft Teams confirmed top notch parts, reliable and lovely item configuration, upheld by No.1 SIP telephone give.
                  </p>
                  <div className="high-qualty-border-bottom" />
                </div>
                <div className="Quality-heading">
                  <h2>Device Management Platform</h2>
                  <p>
                  Coordinated reliable Teams-customized client experience for assembling and conference across every one of the gadgets, MVC Series one touch to get the gathering together with the touch-control.
                  </p>
                  <div className="high-qualty-border-bottom" />
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
                Yealink VoIP telephones are reasonable, top notch, include rich answers for both little and enormous associations. Yealink IP Phones can work consistently with an immense number of viable IP PBXs that help Session Initiation Protocol (SIP) and furthermore facilitated PBX suppliers.  
                </p>
                <p>
                Yealink offers various diverse IP Phone series, which incorporate the T3, T4, and T5 item goes, all contributing various arrangements relying upon your necessities. For full series of Yealink IP telephones for voice arrangements if it's not too much trouble, visit our Yealink Website.
                </p>
              </div>
              <div className="Video-conferencing-div">
                <h2> Video Conferencing System </h2>
                <p>
                Yealink IP Video Phone arrangements in Pakistan depend on open principles, furnishing brilliant similarity and interoperability with overall driving UC stages in Pakistan. Completely incorporated with Microsoft Teams and cover all the gathering room sizes, Yealink video gadget arrangements accompany full bundle gadgets offer including all that you really want for a Microsoft Teams meeting For full series of Yealink IP telephones for video arrangements kindly visit our Yealink Website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>    
      <section className="Yealink-iphone-section-2">
        <div className="container">
        <div className="row">
            <div className="col-12 header">
              <h2>Yealink IP Phones</h2>
            </div>
            </div>
          <div className="row">
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yelaink-T46S.jpg" className="img-fluid"/></div>
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-VP49G.jpg" className="img-fluid"/></div>
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-T58AEXP50.jpg" className="img-fluid"/></div>
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-T58A-Right.jpg" className="img-fluid"/></div>
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-T58A-Front.jpg" className="img-fluid"/></div>
          </div>
            <div className="row">
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-T57w.jpg" className="img-fluid" /></div>
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-T54w.jpg" className="img-fluid" /></div>
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/T58A-ms-teams2.jpg" className="img-fluid" /></div>
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-T42S.jpg" className="img-fluid" /></div>
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-T48S.jpg" className="img-fluid" /></div>
            </div>
            <div className="row">
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-VC800.jpg" className="img-fluid" /></div>
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-VC500.jpg" className="img-fluid" /></div>
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-w56P-Dect.jpg" className="img-fluid" /></div>
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-VC200.jpg" className="img-fluid" /></div>
              <div className="iphone-image col-lg-3 col-md-2.4"><img src="/image/Yealink-W80-Dect.jpg" className="img-fluid" /></div>
            </div>
          </div>
      </section>
      <section className="logo-section">
        <div className="container">
          <div className="row logo-slider">
            <Slider {...settings2} className="">
              <div className="slick-slide">
                <img src="/image/1.jpg" alt="1.jpg" className="slick-slide-image" />
              </div>
              <div className="slick-slide">
                <img src="/image/2.jpg" alt="2.jpg" className="slick-slide-image"/>
              </div>
              <div className="slick-slide">
                <img src="/image/5.jpg" alt="5.jpg" className="slick-slide-image"/>
              </div>
              <div className="slick-slide">
                <img src="/image/6.jpg" alt="6.jpg" className="slick-slide-image"/>
              </div>
              <div className="slick-slide">
                <img src="/image/8.jpg" alt="8.jpg" className="slick-slide-image"/>
              </div>
              <div className="slick-slide">
                <img src="/image/ak.png" alt="ak.png" className="slick-slide-image"/>
              </div>
              <div className="slick-slide">
                <img src="/image/11.jpg" alt="11.jpg" className="slick-slide-image"/>
              </div>
              <div className="slick-slide">
                <img src="/image/engenius-logo.svg" alt="engenius-logo.svg" className="slick-slide-image"/>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
