import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Aboutus from './components/about'
import Contact from './components/contact'
import Destinations from './components/destinations'
import HomePage from './components/homePage'
import Services from './components/services'
import Subscription from './components/subscription'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Explore</title>
        <meta name="description" content="Explore the world with us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <HomePage />
      <Aboutus />
      <Services />
      <Destinations />
      <Subscription />
      <Contact />
    </div>
  )
}
