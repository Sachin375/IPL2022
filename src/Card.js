import React from 'react'
import { Link } from 'react-router-dom';
import "./Card.css";
function Card(props) {
  return (
<Link to = {props.path} id={`${props.index}`} className = "Link">
    <div className='card' style={{background: `${props.bgColor}`}} >
        <div className='card_image'>
        <img src={`${props.image}`}></img>
        </div>
        <div className='card_title'>
        <h2>{props.name}</h2>
        <p>{props.owner}</p>
        <p>{props.captain}</p>
            
        </div>
    </div>
    </Link>
  
  )
}

export default Card