import React from 'react'
import {BsFillVolumeUpFill, BsMusicNoteList} from 'react-icons/bs'
import {FaDesktop} from 'react-icons/fa'
import Track from "../img/girl.jpg";

import { ParentComponernt } from '../Style/testing';
function TrackList() {
  return (
    <div className="trackList">

 <div className="top">
    <img src ={Track} alt="" className="imagss" />
    <p className="trackName">
      Sample Name  <span className="trackSpan">Artist</span></p>

 </div>
 {/* <ParentComponernt/> */}
 <div className="bottom">
    <i><BsFillVolumeUpFill/></i>
    <input type= "range" />
    <i><BsMusicNoteList/></i>
    
    <i><FaDesktop/></i>

 </div>
    </div>
  )
}

export {TrackList};