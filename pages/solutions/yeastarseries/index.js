import Head from "next/head";
import Image from "next/image";
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import React from 'react'
import { Slide } from "react-reveal";
export default function index() {
    return (
        <>
            <section className="yeastar-p-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="">
                            <Bounce>
                            <h1 className="yeastar-series-headings">

                                    YEASTAR P-SERIES PBX SYSTEM
                                </h1>
                                </Bounce>
                                <p>
                                The way companies communicate and engage is continuously changing as a result of technological advancements. The more SMEs are recognizing that their strategic planning process requires more than a PBX. They are looking for a system that breaks through distance constraints and welcomes flexibility and customization in order to stay competitive.
                                </p>
                                <p>
                                Professional, reliable, and customizable PBX systems are required for SMEs with higher demands of a comprehensive communication system. A communication system is less attractive if it lacks efficiency-enhancing features, has a bad user experience, and can't adapt to the fast-paced corporate environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                        <Slide left>
                            <img src="/image/logo/yeastar-pbx-3.png" className="img-fluid" />
                            </Slide>
                        </div>
                        <div className="col-12 col-md-8">
                            <Slide right>
                            <div className="">
                                <h2>
                                    PBX PLUS MORE VALUES AND POSSIBILITIES
                                </h2>
                                <p className="pbx-heading">
                                PBX Plus More" product from Yeastar, highlights the issue by allowing organizations to have continuous conversations at all times in a fully functional system. It offers SMEs more than just a PBX; it also includes call visualization, comprehensive call center tools, unified communications applications, anywhere, anytime access, and everything practical while outperforming across mobiles, desktops, and browsers. P-Series demands a lower total cost of ownership, less training, and fewer management tasks, whether making a Phone System transition or starting from scratch, to balance expenses and future growth.
                                </p>
                            </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </section>
            <section className="table-section">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <Slide left>
                            <div className="">
                                <table className="table tableizer-table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <h4>
                                                    <span>Appliances</span>
                                                </h4>
                                            </th>
                                            <th>
                                                <img src="/image/logo/table1.png" className="img-fluid table-img" />
                                                <p></p>
                                                <h4>P550</h4>
                                            </th>
                                            <th>
                                                <img src="/image/logo/table2.png" className="img-fluid table-img" />
                                                <p className="p-0 m-0"></p>
                                                <h4>P560</h4>
                                            </th>
                                            <th>
                                                <img src="/image/logo/table3.png" className="img-fluid table-img" />
                                                <p className="p-0 m-0"></p>
                                                <h4>P570</h4>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Base Users / Max Users</td>
                                            <td>50</td>
                                            <td>100 / 200</td>
                                            <td>300 / 500</td>
                                        </tr>
                                        <tr>
                                            <td>Max Concurrent Calls</td>
                                            <td>50</td>
                                            <td>100 / 200</td>
                                            <td>300 / 500</td>
                                        </tr>
                                        <tr>
                                            <td>Max FXS Ports</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td>16</td>
                                        </tr>
                                        <tr>
                                            <td>Max FXO/BRI Ports</td>
                                            <td>8</td>
                                            <td>8</td>
                                            <td>16</td>
                                        </tr>
                                        <tr>
                                            <td>Max GSM/3G/4G Ports</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>Max E1/T1/J1 Ports</td>
                                            <td>-</td>
                                            <td>1</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>Expandable D30</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>Transport Protocol</td>
                                            <td>UDP, TCP, TLS, SRTP</td>
                                        </tr>
                                        <tr>
                                            <td>Voice Codec</td>
                                            <td>In-band, RFC4733, RFC2833, SIP INFO</td>
                                        </tr>
                                        <tr>
                                            <td>DTMF</td>
                                            <td>UDP, TCP, TLS, SRTP</td>
                                        </tr>
                                        <tr>
                                            <td>NFC Read/Write</td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                            <td>Yes</td>
                                        </tr>
                                        <tr>
                                            <td>Ethernet Interfaces</td>
                                            <td>2 x (10/100/1000 Mbps)</td>
                                        </tr>
                                        <tr>
                                            <td>Hard Disk</td>
                                            <td>No</td>
                                            <td>1 SATA (Up to 2TB)</td>
                                        </tr>
                                        <tr>
                                            <td>USB</td>
                                            <td>1 (Up to 2TB)</td>
                                        </tr>
                                        <tr>
                                            <td>Power Supply</td>
                                            <td>AC 100-240V 50/60HZ 1.8A max</td>
                                        </tr>
                                        <tr>
                                            <td>Size (L x W x H) (cm)</td>
                                            <td>34 x 21 x 4.4</td>
                                            <td>44 x 25.2 x 4.4</td>
                                            <td>44 x 25.2 x 4.4</td>
                                        </tr>
                                        <tr>
                                            <td>Weight</td>
                                            <td>1.48 KG</td>
                                            <td>2.5 KG</td>
                                            <td>2.6 KG</td>
                                        </tr>
                                        <tr>
                                            <td>Form Factor</td>
                                            <td>1U Rackmount</td>
                                        </tr>
                                        <tr>
                                            <td>Form Factor</td>
                                            <td>
                                                <ul>
                                                    <li>Operation Range: 0°C to 40°C, 32°F to 104°F</li>
                                                    <li>Storage Range: -20°C to 65°C, -4°F to 149°F</li>
                                                    <li>Humidity: 10-90% non-condensing</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Features-section">
                <div className="container-fluid av-content-full">
                    <div className="row">
                        <div className="col-12 text-center Features-section-heading">
                            <Bounce>
                        <h1 className="">Features</h1>
                        </Bounce>
                        </div>
                        <div className="col-12 col-md-3">
                            <Slide left>
                            <div>
                                <h4>Business Features</h4>
                                <ul>
                                    <li>AutoCLIP</li>
                                    <li>BLF Support</li>
                                    <li>Business Hours &amp; Holidays</li>
                                    <li>Call Allow/Block List</li>
                                    <li>Call Recording</li>
                                    <li>Custom Prompts</li>
                                    <li>Distinctive Ringtone</li>
                                    <li>DNIS</li>
                                    <li>Emergency Number</li>
                                    <li>Emergency Notifications</li>
                                    <li>Mobility Extension</li>
                                    <li>Music on Hold</li>
                                    <li>MOH Playlist</li>
                                    <li>Microsoft Teams Integration</li>
                                    <li>PIN List</li>
                                    <li>Remote Extensions</li>
                                    <li>Speed Dial</li>
                                    <li>T.38 Fax</li>
                                    <li>Fax to email</li>
                                    <li>Voicemail</li>
                                    <li>Personal Voicemail Greeting</li>
                                    <li>Voicemail to email</li>
                                </ul>
                            </div>
                            </Slide>
                        </div>
                        <div className="col-12 col-md-3">
                        <Slide left>
                            <div class="">
                                <h4>Telephony Features</h4>
                                <ul>
                                    <li>Call Forwarding</li>
                                    <li>Call Monitoring(Listen/Whisper/Barge-in)</li>
                                    <li>Call Parking</li>
                                    <li>Call Pickup</li>
                                    <li>Call Routing</li>
                                    <li>Call Transfer (Attended &amp; Blind)</li>
                                    <li>Call Waiting</li>
                                    <li>Caller ID</li>
                                    <li>CID-based &amp; DID-based Call Routing</li>
                                    <li>Conference Rooms</li>
                                    <li>Dial by Name</li>
                                    <li>DID (Direct Inward Dialing)</li>
                                    <li>DOD (Direct Outward Dialing)</li>
                                    <li>DND (Do Not Disturb)</li>
                                    <li>DISA</li>
                                    <li>IVR</li>
                                    <li>Queue</li>
                                    <li>Ring Group</li>
                                    <li>Call Detail Records &amp; Reports</li>
                                </ul>

                            </div>
                            </Slide>
                        </div>
                        <div className="col-12 col-md-3">
                        <Slide right>
                            <div class="">
                                <h4>Administration &amp; Security</h4>
                                <ul>
                                    <li>Web-based Management &amp; User Portal</li>
                                    <li>Dashboard</li>
                                    <li>Granular User Role</li>
                                    <li>Extension Bulk Import</li>
                                    <li>Trunk Bulk Import</li>
                                    <li>Extension Group</li>
                                    <li>Built-in SMTP Server</li>
                                    <li>Event Logs</li>
                                    <li>Event Notifications</li>
                                    <li>Network Drive</li>
                                    <li>Backup and Restore</li>
                                    <li>Operation Logs</li>
                                    <li>Secure Communications(SRTP &amp; TLS)</li>
                                    <li>Troubleshooting</li>
                                    <li>Security</li>
                                    <li>Password Policy Enforcement</li>
                                    <li>Auto Defense</li>
                                    <li>Static Defense</li>
                                    <li>IP Blocklist</li>
                                    <li>Security Alerts via Email</li>
                                </ul>
                            </div>
                            </Slide>
                        </div>
                        <div className="col-12 col-md-3">
                            <Slide right>
                            <div class="">
                                <h4>Unified Communications</h4>
                                <ul>
                                    <li>Linkus Mobile Client (iOS &amp; Android)</li>
                                    <li>Linkus Desktop Client(Windows &amp; MacOS)</li>
                                    <li>Linkus Web Client</li>
                                    <li>Click to Call Chrome Extension</li>
                                    <li>Linkus Select &amp; Dial with</li>
                                    <li>Hotkey</li>
                                    <li>Audio Conferencing</li>
                                    <li>Unified Messaging</li>
                                    <li>Operator Panel
                                        <ul>
                                            <li>&nbsp;Dispatch Active Calls(Redirect, Transfer, Hangup, Record, Park, Monitor)</li>
                                            <li>Monitor Call Status (Inbound, Outbound, Extension, Parked Calls, Ring Group, Queue)</li>
                                            <li>Unified Presence</li>
                                            <li>Control Extension Presence Status</li>
                                            <li>Switch Business Hours</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Integrated-section">
                <div className="container">
                    <div className="row">
                        <Slide top>
                        <div className="col-12 text-center">
                        <h1 className="yeastar-series-headings">Integrated Video Conferencing</h1>
                            <h4>Interact and Collaborate in Real time</h4>
                            <p className="pbx-heading">Face-to-face interactions are required not just by huge corporations, but also by SMEs to bring teams and customers closer together, regardless of their geographical location. The P-Series PBX System now includes an integrated web-based video conferencing solution with screen sharing and team chat for SMEs to conduct multi-party virtual meetings in a better way to get things done faster, improve team collaboration, and strengthen business partnerships.</p>
                        </div>
                        </Slide>
                        <Slide left>
                        <div className="col-12 col-md-5 Integrated-discription">
                            <div class="">
                                <ul>
                                    <li>No need for extra software or plugins to start and participate in meetings.</li>
                                    <li>Invite your colleagues and clients via meeting links</li>
                                    <li>In full HD, hear and see other participants.</li>
                                    <li>For a live presentation, share your screen with others.</li>
                                    <li>n the sidebar, you can have a group chat right now.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <img src="/image/logo/video-interact-img1.png" className="img-fluid" />
                        </div>
                        </Slide>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container">
                    <div className="row">

                        <Slide right>
                        <div className="col-12 col-md-5 Integrated-discription">
                            <div class="">
                            <h1 className="yeastar-series-headings">Operator Panel for more efficient call management</h1>
                                <h4>for More Effective Call Handling</h4>
                                <p className="pbx-heading">The Operators Interface is a graphical interface that allows receptionists to swiftly manage incoming calls depending on staff' real-time availability. From your web browser, simply drag and drop calls to extensions, ring groups, and queues. To provide maximum convenience, advanced call controls such as transfer, park, pick up, hang up, monitor, and so on are also enabled. Please see our website for further information.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <img src="/image/logo/ezgif-com-gif-maker.gif" className="img-fluid" />
                        </div>
                        </Slide>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="yeastar-series-headings">Yeastar S Series PBX Systems</h2>
                            <p className="pbx-heading">The S-Series IP PBX, which is simple to use, dependable, and feature-rich, is intended to assist small and medium-sized enterprises in making significant gains in efficiency and cost savings. The unique S-Series unlocks the power of unified communications, offers considerable flexibility with field-upgradable modular design, and connects to traditional lines, VoIP lines, and cellular networks. S-Series is completely future-proof, combining business-enhancing features with free software upgrades to grow with your firm and ensure stability over time.</p>
                        </div>
                       <div className="table-div">
                       <Zoom>
                       <table class="table table-dordred tableizer-table2">
                            <thead>
                                <tr class="tableizer-firstrow">
                                    <th></th>
                                    <th className="text-center">S20
                                        <img class="img-fluid" src="/image/logo/s20.png" alt="S20" /></th>
                                    <th className="text-center">S50
                                        <img class="img-fluid" src="/image/logo/S50-1-3.png" alt="S50" /></th>
                                    <th className="text-center">S100
                                        <img class="img-fluid" src="/image/logo/s100.png" alt="S100" /></th>
                                    <th className="text-center">S300
                                        <img class="img-fluid" src="/image/logo/s300.png" alt="S300" /></th>
                                </tr>
                                <tr>
                                    <td>Users</td>
                                    <td className="text-center">20</td>
                                    <td className="text-center">50</td>
                                    <td className="text-center">100 (up to200)</td>
                                    <td className="text-center">300 (up to 500)</td>
                                </tr>
                                <tr>
                                    <td>Max Concurrent call</td>
                                    <td className="text-center">10</td>
                                    <td className="text-center">25</td>
                                    <td className="text-center">30 (up to 60)</td>
                                    <td>60 (up to120)</td>
                                </tr>
                                <tr>
                                    <td>Max Analog Ports</td>
                                    <td className="text-center">4</td>
                                    <td className="text-center">8</td>
                                    <td className="text-center">16</td>
                                    <td className="text-center">24</td>
                                </tr>
                                <tr>
                                    <td>Max BRI Ports</td>
                                    <td className="text-center" className="text-center">4</td>
                                    <td className="text-center" className="text-center">8</td>
                                    <td className="text-center" className="text-center">16</td>
                                    <td className="text-center" className="text-center">24</td>
                                </tr>
                                <tr>
                                    <td>Max Cellular Ports</td>
                                    <td className="text-center" className="text-center">1</td>
                                    <td className="text-center" className="text-center">4</td>
                                    <td className="text-center" className="text-center">6</td>
                                    <td className="text-center" className="text-center">6</td>
                                </tr>
                                <tr>
                                    <td>Max E1/T1/J1 Ports</td>
                                    <td className="text-center" className="text-center">N/A</td>
                                    <td className="text-center" className="text-center">N/A</td>
                                    <td className="text-center" className="text-center">2</td>
                                    <td className="text-center" className="text-center">3</td>
                                </tr>
                                <tr>
                                    <td>VoIP Trunks</td>
                                    <td className="text-center" className="text-center">20</td>
                                    <td className="text-center" className="text-center">50</td>
                                    <td className="text-center" className="text-center">100</td>
                                    <td className="text-center" className="text-center">100</td>
                                </tr>
                                <tr>
                                    <td>Protocol</td>
                                    <td colspan="4" className="text-center">SIP (RFC3261), IAX2</td>
                                </tr>
                                <tr>
                                    <td>Transport Protocol</td>
                                    <td colspan="4" className="text-center">UDP, TCP, TLS, SRTP</td>
                                </tr>
                                <tr>
                                    <td>Audio Codec</td>
                                    <td colspan="4" className="text-center">G711(alaw/ulaw), G722, G726, G729A, GSM, Speex, ADPCM, iLBC</td>
                                </tr>
                                <tr>
                                    <td>Video Codec</td>
                                    <td colspan="4" className="text-center">H263, H263P, H264, MPEG4</td>
                                </tr>
                                <tr>
                                    <td>IP service</td>
                                    <td colspan="4" className="text-center">Static IP, DHCP, VPN, Firewall, VLAN, DDNS, PPPoE, QoS, Static NAT, STUN</td>
                                </tr>
                                <tr>
                                    <td>Voicemail</td>
                                    <td colspan="2" className="text-center">5000min (expandable)</td>
                                    <td colspan="2" className="text-center">10000min (expandable)</td>
                                </tr>
                                <tr>
                                    <td>Firewall</td>
                                    <td className="text-center">Yes</td>
                                    <td className="text-center">Yes</td>
                                    <td className="text-center">Yes</td>
                                    <td className="text-center">Yes</td>
                                </tr>
                                <tr>
                                    <td className="text-center">T.38</td>
                                    <td className="text-center">Yes</td>
                                    <td className="text-center">Yes</td>
                                    <td className="text-center">Yes</td>
                                    <td className="text-center">Yes</td>
                                </tr>
                            </thead>
                        </table>
                        </Zoom>
                       </div>
                    </div>
                </div>
            </section>
            <section className="robust-feature-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center robust-feature-heading">
                            <Bounce top>
                            <h3 className="yeastar-series-headings">Robust Feature Set for All of Your Calling Needs</h3>
                            </Bounce>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="robust-feature-dicription">
                                <ul>
                                    <li>App Center</li>
                                    <li>AutoCLIP</li>
                                    <li>Auto Provision IP Phones</li>
                                    <li>Automated Attendant (IVR)</li>
                                    <li>Blacklist/Whitelist</li>
                                    <li>Billing App</li>
                                    <li>Call Back</li>
                                    <li>Call Detail Records (CDR)</li>
                                    <li>Call Monitor</li>
                                    <li>Call Recording</li>
                                    <li>Call Routing</li>
                                    <li>Call Transfer</li>
                                    <li>Conference</li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="robust-feature-dicription">
                                <ul>
                                    <li>Distinctive Ringtone</li>
                                    <li>Emergency Number</li>
                                    <li>Event Center</li>
                                    <li>Email to SMS/SMS to Email</li>
                                    <li>Fax to Email</li>
                                    <li>Find Me/Follow Me</li>
                                    <li>Hot Standby</li>
                                    <li>Import/Export Extensions</li>
                                    <li>LDAP Server APP</li>
                                    <li>Mobility Extension</li>
                                    <li>Music on Hold</li>
                                    <li>Queue</li>
                                    <li>Ring Group</li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="robust-feature-dicription">
                                <ul>
                                    <li>Remote Management</li>
                                    <li>SIP Forking</li>
                                    <li>SLA</li>
                                    <li>Speed Dial</li>
                                    <li>Time Condition</li>
                                    <li>User Portal</li>
                                    <li>User Privileges</li>
                                    <li>Video Calls</li>
                                    <li>Voicemail</li>
                                    <li>Voicemail to Email</li>
                                    <li>Music on Hold</li>
                                    <li>VPN Server App</li>
                                    <li><a href="#">
                                        <b>Learn more about features</b>
                                    </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Flexible-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center robust-feature-heading">
                        <Bounce top>
                            <h3 className="">Flexible Modular Design</h3>
                            </Bounce>
                        </div>
                        <div className="col-12 col-md-5">
                            <Zoom>
                            <img src="/image/logo/flexible1.gif" className="img-fluid" />
                            </Zoom>
                        </div>
                        <div className="col-12 col-md-7">
                            <Zoom>
                            <div className="d-flex justify-content-end">
                                <img src="/image/logo/modules.png" className="img-fluid" />
                            </div>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="yeastar-series-headings">Yeastar Gateways</h1>
                            <p className="pbx-heading">Yeastar VoIP Gateways connect FXS, FXO, PRI, BRI, GSM, WCDMA, 4G LTE, and IP networks to minimize operational expenses and provide the convenience of traditional telephony circuits to a variety of manufacturer VoIP phone systems. These gateways are the most effective VOIP solutions in the UAE region.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <Slide left>
                            <div className="gateways-heading">
                                <h2 className="yeastar-series-headings">TA Series FXO VoIP Gateway</h2>
                                <p className="pbx-heading">Yeastar TA FXO VoIP Gateways provide four, eight, or sixteen ports for connecting analogue phone lines or PABX extension interfaces to VoIP networks. For office-to-office voice connectivity in the UAE Africa region, it is a cost-effective and dependable solution.</p>
                            </div>
                            <div className="table-div">
                                <table class="table table-dordred tableizer-table2 tableizer-table3">
                                    <thead>
                                        <tr class="tableizer-firstrow">
                                            <th>Model</th>
                                            <th className="text-center">RJ11 FXS Ports</th>
                                            <th className="text-center">RJ 21 Ports</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>TA410</td>
                                            <td className="text-center">4 Ports</td>
                                            <td className="text-center">N/A</td>
                                        </tr>
                                        <tr>
                                            <td>TA810</td>
                                            <td className="text-center">8 Ports</td>
                                            <td className="text-center">N/A</td>
                                        </tr>
                                        <tr>
                                            <td>TA1610</td>
                                            <td className="text-center">16 Ports</td>
                                            <td className="text-center">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </Slide>
                        </div>
                        <div className="col-12 col-md-6">
                        <Zoom>
                            <div className="">
                                <img src="/image/logo/Yeastar-FXO-Gateway-UAE.png" className="img-fluid" />                        
                            </div>
                            </Zoom>
                        </div>
                        <div className="col-12 col-md-6">
                            <Slide left>
                            <div className="">
                                <img src="/image/logo/yeastar-solution.png" className="img-fluid" />
                            </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gateway2-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Slide left>
                            <div className="">
                                <h2 className="yeastar-series-headings">Yeastar TG Series VOIP Gateway</h2>
                                <p className="pbx-heading">Yeastar TG is a VoIP GSM/3G/4G gateway that connects GSM, 3G WCDMA, or 4G LTE networks directly to VoIP networks and burdens communication: GSM/3G/TG to VoIP or VoIP to GSM/3G/4G. It is the greatest solution for connecting IP-based telephone systems and soft-switches to GSM/3G/4G networks in the UAE, as well as the best fallback solution when the landline goes down.</p>
                            </div>
                            <div className="table-div">
                                <table class="table table-dordred tableizer-table3 tableizer-table2">
                                    <thead>
                                        <tr class="tableizer-firstrow">
                                            <th>Model</th>
                                            <th>Number of SIM Channels</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>TG100:</td>
                                            <td>1 GSM/3G Channel</td>
                                        </tr>
                                        <tr>
                                            <td>TG200:</td>
                                            <td>2 GSM/3G/4G Channels</td>
                                        </tr>
                                        <tr>
                                            <td>TG400:</td>
                                            <td>4 GSM/3G/4G Channels</td>
                                        </tr>
                                        <tr>
                                            <td>TG800:</td>
                                            <td>8 GSM/3G/4G Channels</td>
                                        </tr>
                                        <tr>
                                            <td>TG1600:</td>
                                            <td>16 GSM/3G/4G Channels</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </Slide>
                        </div>
                        <div className="col-12 col-md-6 align-items-end d-flex">
                            <Zoom>
                                 <div className="">
                                <img src="/image/logo/yeatar-gateways2.jpg" className="img-fluid" />
                            </div>
                            </Zoom>
                        </div>

                        <div className="col-12  align-items-center justify-content-center d-flex">
                           <Slide bottom>
                                <div className="gateways2-image">
                                <img src="/image/logo/yeastar-gateways.png" className="img-fluid" />
                            </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </section>
            <section className="yeastar-ta-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                        <Slide left>
                            <div className="">
                                <h2 className="yeastar-series-headings">Yeastar TA Series FXS VoIP Gateway</h2>
                                <p className="pbx-heading">Yeastar TA Analog VoIP Gateways are cutting-edge solutions that connect traditional telephones, fax machines, and PBX systems to IP telephony networks and IP-based PBX systems. TA is suitable for small and medium businesses who want to integrate a traditional phone system into an IP-based system, thanks to its extensive functionality and simple implementation. With the genuine benefits of VoIP, TA assists them in preserving their past investment in conventional telephone systems while drastically lowering communication costs.</p>
                            </div>
                        </Slide>
                        </div>
                        <div className="col-12 col-md-6">
                        <Slide left>
                            <div className="table-div">
                                <table class="table table-dordred tableizer-table3 tableizer-table2">
                                    <thead>
                                        <tr class="tableizer-firstrow">
                                            <th className="text-left"> Model</th>
                                            <th className="text-center">RJ11 FXS Ports</th>
                                            <th className="text-center">RJ 21 Ports</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>TA400</td>
                                            <td className="text-center">4 Ports</td>
                                            <td className="text-center">N/A</td>
                                        </tr>
                                        <tr>
                                            <td>TA800</td>
                                            <td className="text-center">8 Ports</td>
                                            <td className="text-center">N/A</td>
                                        </tr>
                                        <tr>
                                            <td>TA1600</td>
                                            <td className="text-center">16 Ports</td>
                                            <td className="text-center">1</td>
                                        </tr>
                                        <tr>
                                            <td>TA2400</td>
                                            <td className="text-center">24 Ports</td>
                                            <td className="text-center">1</td>
                                        </tr>
                                        <tr>
                                            <td>TA3200</td>
                                            <td className="text-center">32 Ports</td>
                                            <td className="text-center">2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </Slide>
                        </div>
                        <div className="col-12  align-items-center justify-content-center d-flex">
                        <Zoom>
                            <div className="gateways2-image">
                                <img src="/image/logo/yeastar-Gateways-olution.png" className="img-fluid mt-2 mb-2" />
                            </div>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </section>
            <section className="yeastar-ta-section">
                <div className="container">
                    <div className="row">
                    <Slide right>
                        <div className="col-12 col-md-8">
                            <div className="">

                                <h2 className="yeastar-series-headings">E1/T1/PRI VoIP Gateway</h2>
                                <p className="pbx-heading">Up to 30/60 concurrent calls are supported by the TE VoIP E1/T1/J1 gateway (VoIP to E1/T1/J1, and E1/T1/J1 to VoIP). The TE Series provides SMBs with cost-effective upgrades to their existing phone systems, allowing them to reap the full benefits of VoIP in the UAE. ISDN VoIP Gateways from Yeastar give dial tone to most VoIP PBX phone systems, including Yeastar IP PBX, by bridging the gap between classic ISDN telephone connections like common RJ-48c / T1 interfaces.</p>
                            </div>
                            <table class="table table-dordred tableizer-table3 tableizer-table">
                                <thead>
                                    <tr class="tableizer-firstrow">
                                        <th className="text-left"> Model</th>
                                        <th className="text-center">RJ11 FXS Ports</th>
                                        <th className="text-center">CHANNELS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>TE100</td>
                                        <td className="text-center">1 Ports</td>
                                        <td className="text-center">30 Channels*</td>
                                    </tr>
                                    <tr>
                                        <td>TE200</td>
                                        <td className="text-center">2 Ports</td>
                                        <td className="text-center">60 Channels*</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-end">
                            <div className="">
                                <ul>
                                    <li>Software configurable E1/T1/J1 ports</li>
                                    <li>Up to 60 simultaneous VoIP to ISDN calls</li>
                                    <li>Cost-effective call routing</li>
                                    <li>Easy-to-navigate Web GUI</li>
                                    <li>Simple installation and management</li>
                                    <li>Connect existing ISDN PBX to VoIP</li>
                                    <li>Connect VoIP-only system to ISDN</li>
                                    <li>Connect multiple PABX at different sites</li>
                                    <li>Compatible with various ISDN PBX, IP-PBX</li>
                                </ul>
                            </div>                           
                        </div>
                        </Slide>
                        <div className="col-12  align-items-center justify-content-center d-flex">
                            <Zoom>
                            <div className="gateways2-image">
                                <img src="/image/logo/yeastar-Gateways-olution2.jpg" className="img-fluid mt-2 mb-2" />
                            </div>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
