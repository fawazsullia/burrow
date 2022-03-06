import type { NextPage } from 'next'
import Head from 'next/head'
import Wrapper from '../components/Wrapper'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import config from '../config'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{config.meta.homeTitle}</title>
        <meta name="description" content={config.meta.homeDescription}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <main className={styles .main}>
        <p>This is the home page</p>
        </main>
      </Wrapper>
      
    </div>
  )
}

export default Home
