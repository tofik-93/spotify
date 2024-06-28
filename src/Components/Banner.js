import React from 'react'
import Artist from "../img/sit.jpg";
import Check from "../img/star2.jpeg";
import {} from 'react-icons/fa'
import { FaEllipsisH,FaHeadphones,FaCheck } from 'react-icons/fa';


function Banner() {
  return (
    <div className='banner'>
      <img src={Artist} alt='' className='bannerImg'/>
      <div className="content">
        <div className='breakCrump'>
          <p>
            Home <span>/Popular Artist</span>
            </p>
          <i><FaEllipsisH/></i>
        </div>
        <div className='artsit'>
          <div className="left">
          <div className="name">
            <h2>A-Ha  </h2>
          <img src={Check} alt='' />
          </div>
   <p><i><FaHeadphones/></i>11,184,1811 <span>Monthly listeners</span></p>
          </div>
          <div className="right">
            <a href='#'>Play</a>
            <a href='#'>
              <i><FaCheck/>
              </i> Following
            </a>
          </div>

        </div>
      </div>
      <div className='bottomLayer'></div>
    </div>
  )
}

export  {Banner}