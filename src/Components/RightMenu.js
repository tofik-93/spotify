import React from 'react'
import '../Style/RightMenu.css'
import Profile from '../img/blue.png'
import {FaBell,FaSun, FaCogs, FaCrown, FaRegHeart } from "react-icons/fa";

function RightMenu() {
  return (
    <div className='rightMenu'>
         <div className='goPro'>
          <i>
            <FaCrown/>Go
            <p><span>Pro</span>
            </p>
          </i>
          <i>
            <FaBell/>
          </i>
          <i>
            <FaRegHeart/>
          </i>
          </div>
          <div className='profile'>
            <i><FaSun/> </i>
            <i><FaCogs/> </i>
            <div className='profileImage'>
          <img src={Profile} alt=""/>
            </div>
             </div>
          </div>
  )
}

export {RightMenu}