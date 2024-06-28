import React , {useEffect} from 'react'
import { Banner } from './Banner'
import '../Style/mainContainer.css'
import { FaUser } from 'react-icons/fa'
import { AudioList } from './AudioList'
function MainContainer() {
  useEffect(() => {
    const allLi= document.querySelector(".menuList").querySelectorAll("li");
    
function changeMenuActive(){
allLi.forEach(n => n.classList.remove("active"));
this.classList.add("active")
}
    allLi.forEach(n => n.addEventListener('click' , changeMenuActive))
}, [])
  return (
    <div className='MainContainer'>
       <Banner/>
      <div className='menuList'>
     <ul>
      <li><a href="#">popular</a></li>
       <li><a href="#">Albums</a></li>
        <li><a href="#">Songs</a></li>
        <li><a href="#">Fans</a></li>
         <li><a href="#">About</a></li>

     </ul>
     <p><i><FaUser/>12.3M <span>Followers</span></i></p>
        
      </div>
      <AudioList/>
   </div>
  )
}

export{ MainContainer}