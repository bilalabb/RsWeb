import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import Layout from "../components/layout/Layout"
import NextNprogress from "nextjs-progressbar";

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
    </Layout>
    </>
  )
}

export default MyApp
