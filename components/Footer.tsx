import React from 'react'
import config from '../config'

const Footer = () => {

const style : any = {
    container : {
        justifyContent : "center",
        height : "10vh",
        backgroundColor : "black",
        color : "white",
        display : "flex",
        alignItems : "center"
    }
}

  return (
    <footer style={style.container}>
        <p>{config.credits}</p>
    </footer>
  )
}

export default Footer