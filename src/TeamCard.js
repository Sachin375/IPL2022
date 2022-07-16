import React from 'react'
import teamData from './TeamData'
import Card from './Card'
import "./TeamCard.css";
function TeamCard() {
  
  return (<>


    <div className='CardDiv'>

    {
      teamData.map((item, index)=>{
        return <Card 
        image = {item.imagSrc} 
        name = {item.teamName} 
        bgColor = {item.bgColor} 
        key = {index} 
        index = {index}
        owner = {item.owner}
        captain = {item.captain}
        path = {`players/${item.code}`}
        className = "card"
        />
        
      })
    }
    
    </div>
    </>
  )
}

export default TeamCard