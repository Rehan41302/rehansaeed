import { Fragment, useEffect} from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// import PreLoader from "../src/layout/PreLoader";
import "../styles/glitch.css";
import "../styles/globals.css";

import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  // const [load, setLoad] = useState(false);
  const router = useRouter()

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoad(false);
  //   }, 1000);
  // }, []);

  // Handling logs for Google Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Fragment>
      <Head>
        <title>Rehan - Full stack Developer</title>
        <meta name="description" content="I am a Full stack Software Engineer, modern web applications, web services and online stores."></meta>
      </Head>
      {/* {load && <PreLoader />} */}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
