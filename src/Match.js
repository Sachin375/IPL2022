import React from 'react'
import match from "./match.jpeg"
function Match() {
  return (
    <div>
    <h1 style={{backgroundColor:"Black", color: "White", width:"100%",height:"40px", paddingTop: "60px", paddingBottom: "10px"}}>UPCOMING MATCHES</h1>
    <img style={{width:"60%"}} src={match}></img>
    </div>
  )
}

export default Match