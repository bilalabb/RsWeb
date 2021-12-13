import React from "react"
import Link from "next/link";
import Image from "next/image"

export default function Footer() {

  return (
    <>
      <section className="footer-card-section text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="reative-img">
                <img src="/image/logo white.png" className="img-fluid w-200px" alt="..." />
              </div>
              <div className="card-body bottom-card-body">
                <h5 className="card-title">Islamabad Office

                </h5>
                <p className="card-text-2">1st Floor, Building Number 122, Civic Center, Bahria Town, Phase 4</p>
                <p className="card-text-2 mb-0"> <img src="/image/old-typical-phone.png" className="contact-icon" alt="..." />051-2728822</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="inner-body">
                <h5 className="card-title">Go To</h5>
                <div className="card-list">
                  <ul>
                    <li className="card-list-link">
                      {" "}
                      <a href="#">Home</a></li>
                    <li className="card-list-link">
                      {" "}
                      <a href="#">About Us</a></li>
                    <li className="card-list-link">
                      {" "}
                      <a href="#">Solutions</a></li>
                    <li className="card-list-link">
                      {" "}
                      <a href="#">Contact Us</a></li>
                    <li className="card-list-link">
                      {" "}
                      <a href="#">Support</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-div">
                <h5 className="card-title Stay-Upto">Stay Upto date</h5>
                <form>
                  <span className="email-span">
                    <input type="text" className="form-control-plaintext input" id="staticEmail" placeholder="Enter yuor e-mail address" />
                  </span>
                  <div className="clearfix">
                    <button type="submit" className="btn btn-primary signupbtn">Sign Up</button>
                  </div>
                </form>
                <div className="icon-font">
                  <ul>
                    <li><a href="#"><img src="/image/facebook.png" className="img-fluid icon-font-logo" /></a></li>
                    <li><a href="#"><img src="/image/whatsapp.png" className="img-fluid icon-font-logo" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer col-12">
        <span><i className="far fa-copyright" /></span>
        <h5> 2020 Reactive Space Tech</h5>
        <div className="devider"> <span /></div>
        <h5>All right reserved</h5>
      </div>

    </>
  )
}