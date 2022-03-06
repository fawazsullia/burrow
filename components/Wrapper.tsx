import React, { Children } from 'react'
import Footer from './Footer'
import Header from './Header'

const Wrapper = ({children} : any) => {


    return <>
        <Header />
        {children}
        <Footer />
        </>
}

export default Wrapper