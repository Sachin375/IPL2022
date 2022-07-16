import React, { useState } from 'react'
import { useParams } from "react-router";
import teamPlayer from './TeamList';
import { useRef } from 'react';
import "./PlayerCard.css"
import "./Player.css"
var i;
function Player() {

  const { team } = useParams();
  const currentTeam = teamPlayer[team];
  console.log(currentTeam);
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(currentTeam.player);
  const [toggle, setToggle] = useState(false);
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log("e.target.innerHTML");
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems[dragItem.current] = copyListItems[dragOverItem.current];
    copyListItems[dragOverItem.current] = dragItemContent;

    setList(copyListItems);
  };

  return (
    <>

      <div className='player_container'>
        <div>
          <h1 className='playing11'>Playing 11 Team</h1>
          <div className='curr_player'>
            {
              list.map((element, index) => {
                if (index < 11) {
                  return (
                    <div style={{ background: currentTeam.teamColor, margin: "10px" }} className="player_card"
                      onDragStart={(e) => dragStart(e, index)}
                      onDragEnter={(e) => dragEnter(e, index)}
                      onDragEnd={drop}
                      key={index}
                      draggable
                    >
                      <div><img src={`${element.profile}`} className="image_profile"></img></div>
                      <div className='name'>{element.playerName}</div>
                      <div>
                        <div className='details'>
                          <p>Role</p>
                          <p>{element.role}</p>
                        </div>
                        <div className='details'>
                          <p>Matches</p>
                          <p>{element.matches}</p>
                        </div>
                        <div className='details'>
                          <p>Runs</p>
                          <p>{element.run}</p>
                        </div>
                        <div className='details'>
                          <p>Wickets</p>
                          <p>{element.wickets}</p>
                        </div>

                      </div>
                      <button className='btn' onClick={() => {
                        i = index;

                        setToggle(!toggle)
                      }}>more</button>
                      {toggle && index === i ? <div><h3>Details</h3><p style={{width:"230px", textAlign:"left", marginLeft:"20px"}}>{element.details}</p></div> : ""}
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        <div className='extra_playerDiv'>
          <h1 className='extra'>Extra Players</h1>
          <div className='extra_player'>
            {
              list.map((element, index) => {
                if (index > 10) {
                  return (
                    <div style={{ background: currentTeam.teamColor, margin: "10px" }} className="player_card"

                      onDragStart={(e) => dragStart(e, index)}
                      onDragEnter={(e) => dragEnter(e, index)}
                      onDragEnd={drop}
                      key={index}
                      draggable
                    >
                      <div><img src={`${element.profile}`} className="image_profile"></img></div>
                      <div className='name'>{element.playerName}</div>
                      <div>
                        <div className='details'>
                          <p>Role</p>
                          <p>{element.role}</p>
                        </div>
                        <div className='details'>
                          <p>Matches</p>
                          <p>{element.matches}</p>
                        </div>
                        <div className='details'>
                          <p>Runs</p>
                          <p>{element.run}</p>
                        </div>
                        <div className='details'>
                          <p>Wickets</p>
                          <p>{element.wickets}</p>
                        </div>

                      </div>
                      <button className='btn' onClick={() => {
                        i = index;
                        setToggle(!toggle)
                      }}>more</button>
                      {toggle && index === i ? <div><h3>Details</h3><p style={{width:"230px", textAlign:"left", marginLeft:"20px"}}>{element.details}</p></div> : ""}
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </div>


    </>
  )
}

export default Player