import '../styles/tailwind.css'
import '../styles/globals.css'
import Layout from '../components/layout'
import { AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
    </AnimateSharedLayout>
  )
}

export default MyApp
