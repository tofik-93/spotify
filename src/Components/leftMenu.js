import React from 'react'
import "../Style/leftMenu.css"
import {FaSpotify, FaEllipsisH} from "react-icons/fa"
import {BiSearchAlt } from 'react-icons/bi'
import { MenuList } from './MenuList'
import { Menu } from './Menu'
import { MenuPlaylist } from './MenuPlaylist'
import { TrackList } from './TrackList'
function LeftMenu() {
  return (
    <div className='leftMenu'>
      <div className ="logoContainer">
        <i><FaSpotify/></i>
        <h2>Spotify</h2>
        <i><FaEllipsisH/></i>
        </div>
        <div className="searchBox">
        
        <input type = "text" placeholder="Search.."/>
        <i className="searchIcon"><BiSearchAlt/></i>
        
      </div>
    <Menu titie={"Menu"}  menuObject={MenuList}/>
    <MenuPlaylist />
    <TrackList />
    </div>
  )
}

export { LeftMenu};