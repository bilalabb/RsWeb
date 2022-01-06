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
                                <h2>DrayTek Solutions</h2>
                                <p>
                                    DrayTek, a leading developer of cutting-edge firmware and high-quality equipment, is a reliable provider of cutting-edge networking and telecommunications for SOHO and SMB. DrayTek's solutions, which range from enterprise-level firewalls to mission-critical bandwidth management, complete VPN services, and triple play routers, can currently satisfy market demand and exceed customer expectations.
                                    DrayTek also provides centralised management software for Vigor Routers and VigorAPs. This is an integrated solution that allows you to configure, monitor, and maintain numerous Vigor devices from a single location.</p>
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
                                Why Choose DrayTek
                                </h1>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className="drayTek-image">
                                <li>
                                    <img src="/image/logo/staty-conected.png" className="" />
                                    <div>
                                        <h4>
                                        Keep in Touch
                                        </h4>
                                        <p>
                                        content: Our mid-sized company solution includes a multi-WAN or dual-WAN interface for redundancy and load balancing, ensuring reliable Internet connectivity. As a backup access option, the USB 2.0 port(s) can be used with a 3G/4G LTE USB mobile.</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/image/logo/business-growth.png" className="" />

                                    <div>
                                        <h4>
                                        Business Development
                                        </h4>
                                        <p>
                                        Content: A powerful CPE capable of handling ultra-high-speed bandwidth would become a must-have. When using multi-WAN models, the company may add extra WAN lines to boost bandwidth scalability for future business demands.

</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/image/logo/byod.png" className="" />
                                    <div>
                                        <h4>
                                        Bring Your Own Device (BYOD)
                                        </h4>
                                        <p>
                                        Content: According to a recent report, bringing your own device enhances staff productivity. You'll also need a safe and efficient Wi-Fi office environment for all of their network-connected devices in addition to policy enforcement.
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
                                        Protected Network
                                        </h4>
                                        <p>
                                        Content: The operation of the network in a secure environment eliminates significant losses caused by external threats. IT may even develop a productive workplace to reduce management efforts thanks to the comprehensive firewall restrictions.

</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/image/logo/disaster-recovery.png" className="" />

                                    <div>
                                        <h4>
                                        Recovering from a disaster
                                        </h4>
                                        <p>
                                        Content: To avoid the horror of a gateway going offline for an extended period of time, IT would need the appropriate solution's disaster recovery functionality. All routing services must be handled effortlessly and instantly by the backup gateway.</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="/image/logo/inter-office.png" className="" />
                                    <div>
                                        <h4>
                                        Remote Access / Inter-office
                                        </h4>
                                        <p>
                                        Content: Employees at various physical locations collaborate more effectively in your company. Employees may work from anywhere at any time to improve their work-life balance.
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
