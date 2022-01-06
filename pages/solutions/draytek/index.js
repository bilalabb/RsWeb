import Head from "next/head";
import Image from "next/image";
import React from 'react'
export default function index() {
    return (
        <>
            <section className="draytek-products-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img src="/image/draytek-products.png" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-7 draytek-products">
                            <div>
                                <h3>DrayTek Channel Champ 2019</h3>
                                <p>
                                    Draytek's Channel Champs campaign encourages local system integrators, resellers and retailers to attain the best sales output to win the annual Channel Champion award. The three-and-a-half-month-long event is annually organized by DrayTek in partnership with DVCOM Technology to focus on the System Integrators and Network Solutions Providers in the MEA region. Every year, DrayTek identifies its best associates to nurture and encourage through this event while providing all participating entities with opportunities to transform their business modules and find value-added partners and enterprising associates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="multipal-icon-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center multipal-icon-heading">
                                <h1 className="yeastar-series-headings">
                                    Main Reasons to Choose DrayTek
                                </h1>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className="drayTek-image">
                                <li>
                                    <img src="/image/logo/staty-conected.png" className="" />
                                    <div>
                                        <h4>
                                            Stay Connected
                                        </h4>
                                        <p>
                                            Our mid-size business solution offers multi-WAN or dual-WAN interface for the redundancy/load-balancing to ensure the stable Internet access. The USB 2.0 port(s) can use 3G/4G LTE USB mobile as another access backup option.</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/image/logo/business-growth.png" className="" />

                                    <div>
                                        <h4>
                                            Business Growth
                                        </h4>
                                        <p>
                                            Powerful CPE to handle the ultra high-speed bandwidth would become the fundamental requirement. As choosing the multi-WAN models, the organization can add more WAN links to increase the bandwidth scalability for business growth needs.</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/image/logo/byod.png" className="" />
                                    <div>
                                        <h4>
                                            Bring Your Own Device (BYOD)
                                        </h4>
                                        <p>
                                            BYOD increases the productivity of employees according to recent survey. In addition to the policy enforcement, you also need a secure and efficient Wi-Fi office environment for all their network connected devices.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className="drayTek-image">
                                <li>
                                    <img src="/image/logo/squirty-network.png" className="" />
                                    <div>
                                        <h4>
                                            Secured Network
                                        </h4>
                                        <p>
                                            Operation in the secured network prevents considerable lost caused by outside attacks. With the robust firewall policies, IT can even establish a productive workplace to lower the management efforts.</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/image/logo/disaster-recovery.png" className="" />

                                    <div>
                                        <h4>
                                            Disaster Recovery
                                        </h4>
                                        <p>
                                            To prevent the nightmare of gateway temporary out-of-service, IT would require the disaster recovery feature available for the ideal solution. The backup gateway needs to take care of all routing services seamlessly and immediately.</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/image/logo/inter-office.png" className="" />
                                    <div>
                                        <h4>
                                            Inter-office / Remote Access
                                        </h4>
                                        <p>
                                            Your organization gets better collaboration among employees in different physical locations. Employees are capable to work anytime in anywhere to enhance the work-life balance.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="logo-img-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="">
                                <ul className="logo-images">
                                    <li>
                                        <span><img src="/image/logo/vpn-data-protect.png" className="img-fluid" /></span>
                                        <p>VPN</p>
                                    </li>
                                    <li>
                                        <span><img src="/image/logo/vdsl2.png" className="img-fluid" /></span>
                                        <p>VDSL2</p>
                                    </li>
                                    <li>
                                        <span><img src="/image/logo/fire-wall.png" className="img-fluid" /></span>
                                        <p>Firewall & Content Filter</p>
                                    </li>
                                    <li>
                                        <span><img src="/image/logo/web-potal.png" className="img-fluid" /></span>
                                        <p>web-potal.png</p>
                                    </li>
                                    <li>
                                        <span><img src="/image/logo/free-cloud.png" className="img-fluid" /></span>
                                        <p>FREE DDNS service</p>
                                    </li>
                                    <li>
                                        <span><img src="/image/logo/bandwidth.png" className="img-fluid" /></span>
                                        <p>Bandwidth Management</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
