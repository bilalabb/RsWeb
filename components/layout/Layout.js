import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="facebook-domain-verification" content="1schhta107zh2c8wlml6tq6g9qllhf" />
        <title>RS Tech</title>
        <link rel="icon" href="/favicon.png" />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>

        <script dangerouslySetInnerHTML={{__html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '251403817006005');
fbq('track', 'PageView')` }} >

        </script>

        
<noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style={{display:"none"}}
src="https://www.facebook.com/tr?id=251403817006005&ev=PageView&noscript=1"/>` }}
    >
      </noscript>

      </Head>

      <Navbar />
      <div className="main-rapper-col">{children}</div>
      <Footer />
    </>
  );
}
