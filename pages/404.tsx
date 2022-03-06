import type { NextPage } from 'next'
import Head from 'next/head'
import Wrapper from '../components/Wrapper'


const CustomErrorPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ooops! Page not found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <main style={{minHeight : "80vh", display : "flex", justifyContent : "center", alignItems : "center", fontSize : "1.5rem", fontWeight : "500"}}>
            <p>Oops! Looks like this page does not exist</p>
        </main>
      </Wrapper>
      
    </div>
  )
}

export default CustomErrorPage
