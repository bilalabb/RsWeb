import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-whatsapp-widget/dist/index.css'
import '../styles/globals.css'
import React, { Component } from "react";
import { ScrollArea, ScrollTo } from "react-scroll-to";
import Layout from "../components/layout/Layout"
import NextNprogress from "nextjs-progressbar";
import WhatsAppWidget from 'react-whatsapp-widget'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
    <NextNprogress
          color="#18A1FF"
          startPosition={0.3}
          stopDelayMs={200}
          height={6}
        />
    <Component {...pageProps} />
   <WhatsAppWidget phoneNumber='+923336669532' />
   {/* <FontAwesomeIcon icon={faArrowUp} /> */}
   <a href="#top">
			<button
			  className="scroltop icon-up"
			  type="button"
			  style={{ display: "inline-block" }}
			>
			   <FontAwesomeIcon icon={faArrowUp} />
			</button>
		</a>
    <MessengerCustomerChat
    pageId="<PAGE_ID>"
    appId="<APP_ID>"
    htmlRef="<REF_STRING>"
  />,
    </Layout>
    </>
  )
}

export default MyApp
