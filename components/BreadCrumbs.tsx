import React from 'react'
import Link from 'next/link'

const BreadCrumbs = ({slug} : {slug : string}) => {
  return (<div style={{fontStyle : "italic", fontSize : "0.8rem", marginTop : "20px"}}>
    <span><Link href="/">Home/</Link></span>
    <span><Link href="/blog">Blog/</Link></span>
    <span style={{color : "blue"}}><Link href={`/blog/${slug}`}>{slug}</Link></span>
    </div>
  )
}

export default BreadCrumbs