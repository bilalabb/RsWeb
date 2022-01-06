import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import React from 'react'
export default function index() {
    return (
        <>
            <section className="yeastar-p-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="">
                            <h1 className="yeastar-series-headings">

                            Milesight Surveillance Solutions
                                </h1>
                                <p>
                                As a Milesight Reseller in Pakistan, Reactivespace Technologies provides a wide range of security solutions, including IP-based CCTV security surveillance. The product line includes network cameras and NVRs, as well as video management software ranging from entry-level to high-end, to fulfil a variety of demands and applications.
                                </p>
                                <p>
                                The strength of Milesight's R&D capacity is its fundamental competency. Milesight is able to provide novel products and provide tailored solutions to clients based on strong expertise and years of experience.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-12">
                            <img src="/image/logo/milesight-solution3.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
