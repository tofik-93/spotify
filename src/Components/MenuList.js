import {BsFillHouseFill, BsFillHousesFill, BsJournalAlbum} from "react-icons/bs";
import {FaBroadcastTower, FaMicrophoneAlt, FaPodcast} from "react-icons/fa";
import {BiPlus} from "react-icons/bi";


const MenuList = [
  {
    id:1,
    icon:<BsFillHouseFill/>,
    name:"Home"
  },
 
  {
    id:2,
    icon:<BiPlus/>,
    name:"Discover"
  },
  {
    id:3,
    icon:<FaBroadcastTower/>,
    name:"Radio"
  },
  {
    id:4,
    icon:<FaMicrophoneAlt/>,
    name:"Artist"
  },
  {
    id:5,
    icon:<BsJournalAlbum/>,
    name:"Album"
  },
  {
    id:6,
    icon:<FaPodcast/>,
    name:"podcast"
  },
  
]

export {MenuList}