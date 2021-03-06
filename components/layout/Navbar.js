import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faFolder, faHome, faLifeRing, faLightbulb, faUser } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [navShowHandler, setNavShowHandler] = useState("");

  const navhideHandler = () => {
    setNavShowHandler("");
  };

  const navBtn = () => {
    if (navShowHandler == "show") {
      setNavShowHandler("");
    } else {
      setNavShowHandler("show");
    }
  };

  return (
    <>
      <section className="nav-section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light col-lg-12">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="/image/MicrosoftTeams-image.png"
                  className="img-fluid logo"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={navBtn}
              >
                <span className="" /> 
                <span className="" />
                <span className="" />
              </button>
              <div
                className={`${navShowHandler} collapse navbar-collapse`}
                id="navbarSupportedContent"
              >
                
                <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <a className="navbar-brand d-lg-none" href="#">
                  <img
                    src="/image/MicrosoftTeams-image.png"
                    className="img-fluid logo"
                  />
                </a>
                  </li> */}
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link active Home" aria-current="page" onClick={navhideHandler}>
                        <FontAwesomeIcon icon={faHome} />
                        <span className=""> Home</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about">
                      <a className="nav-link support-icon" onClick={navhideHandler}>
                        <FontAwesomeIcon icon={faUser} />
                        <span className=""> About Us</span>
                      </a>
                    </Link>
                  </li>
                  <li class="nav-item dropdown dropdown-menu-costam">
                    <Link href="/solutions/yealinkconference">
                      <a class="nav-link support-icon" onClick={navhideHandler}>
                        <FontAwesomeIcon icon={faLightbulb} />
                        <span> Solutions</span>
                        <span>
                          <img src="/image/arrow+right.png" className="img-fluid sub-arrow" />
                        </span>
                      </a>
                    </Link>
                    <ul class="dropdown-menu">
                      <li>
                        <Link href="/solutions/yealinkconference">
                          <a class="dropdown-item" onClick={navhideHandler}>Yealink-Video<br />Conferecing</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/yeastarseries">
                          <a class="dropdown-item" onClick={navhideHandler}> Yeastar-PBX <br />System</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/milesight">
                          <a class="dropdown-item" onClick={navhideHandler}>Milesight-Surveillance <br />System</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/xcally">
                          <a class="dropdown-item" onClick={navhideHandler}>XCALLY-Call Center<br /> Solution</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/draytek">
                          <a class="dropdown-item" onClick={navhideHandler}>Draytek VPN Router</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/contactus">
                      <a className="nav-link" onClick={navhideHandler}>
                        <FontAwesomeIcon icon={faAddressCard} />
                        <span> Contact Us</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="">
                      <a className="nav-link" onClick={navhideHandler}>
                        <FontAwesomeIcon icon={faProductHunt} />
                        <span> Products</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="">
                      <a className="nav-link" onClick={navhideHandler}>
                        <FontAwesomeIcon icon={faLifeRing} />
                        <span> Support</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </div>
      </section>
    </>
  );
}
