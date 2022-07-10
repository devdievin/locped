import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-WPKSDS9' });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
