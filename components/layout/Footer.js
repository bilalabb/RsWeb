import React from "react"
import Link from "next/link";
import Image from "next/image"

export default function Footer() {

    return (
        <>
           <section className="footer-card-section">
          <div className="container">
            <div className="row">
              <div className="footer-card">
                <div className="card-group">
                  <div className="card card-bottom">
                    <div className="reative-img">
                      <img src="/image/logo white.png" className="img-fluid w-200px" alt="..." />
                    </div>
                    <div className="card-body bottom-card-body">
                      <h5 className="card-title">About</h5>
                      <p className="card-text-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                  <div className="card card-bottom">
                    <div className="card-body bottom-card-body">
                      <div className="inner-body">
                        <h5 className="card-title">Go To</h5>
                        <div className="card-list">
                          <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>solutions</li>
                            <li>Contact Us</li>
                            <li>Support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-bottom">					  
                    <div className="card-body bottom-card-body">
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
                            <li><a href="#"><i className="fab fa-facebook-square" /></a></li>
                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                            <li><a href="#"><i className="fab fa-youtube" /></a></li>
                          </ul>
                        </div>	
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="footer">
          <span><i className="far fa-copyright" /></span>
          <h5> 2020 Reactive Space Tech</h5>
          <div className="devider"> <span /></div>
          <h5>All right reserved</h5>
        </div>
      
        </>
    )
}