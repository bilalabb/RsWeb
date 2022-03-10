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
import Logoslider from "./logoslider/Logoslider";
import Slider1 from "./home/Slider1";
import Products from "./home/Products";
import UpcomingProduct from "./home/UpcomingProduct";
export default function Home() {


  return (
    <>
    <Slider1 />
      <section className="section-3">
        <div className="container">
          <div className="row">
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
                    {/* <div className="read-more">
                      <span>
                        <a className="text-white">Read more</a>
                        <FontAwesomeIcon className="ms-2" icon={faChevronRight} />
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </div> */}
                 
                </div>
              </div>
              <div className="card-image col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <img src="/image/36S0N.jpeg" alt="36S0N.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Products />
      {/* <UpcomingProduct /> */}
      <Logoslider />
    </>
  );
}
