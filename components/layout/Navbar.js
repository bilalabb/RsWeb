import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

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
          <nav className="navbar navbar-expand-lg navbar-light bg-light col-lg-12">
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
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link active Home" aria-current="page">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about">
                      <a className="nav-link">About Us</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/solutions">
                      <a className="nav-link" >
                        Solutions
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contactus">
                      <a className="nav-link" >
                        Contact Us
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="">
                      <a className="nav-link" href="#">
                        Support
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
