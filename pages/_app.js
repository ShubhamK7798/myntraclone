import Layout from '../components/Layout'
import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Provider} from 'react-redux'
import {store,persistor} from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }) {

  return <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
     </PersistGate>
      </Provider>

  
}

export default MyApp
