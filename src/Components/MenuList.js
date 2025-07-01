import { BiPlus } from "react-icons/bi";
import { BsFillHouseFill, BsJournalAlbum, BsMusicNoteList } from "react-icons/bs";
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from "react-icons/fa";

interface MenuItem {
  id: number;
  icon: JSX.Element;
  name: string;
  description: string;
}

const MenuList: MenuItem[] = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
    description: "Go to the homepage",
  },
  {
    id: 2,
    icon: <BiPlus />,
    name: "Discover",
    description: "Explore new music and content",
  },
  {
    id: 3,
    icon: <FaBroadcastTower />,
    name: "Radio",
    description: "Listen to live radio stations",
  },
  {
    id: 4,
    icon: <FaMicrophoneAlt />,
    name: "Artist",
    description: "Browse artists and their music",
  },
  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: "Album",
    description: "View albums and tracklists",
  },
  {
    id: 6,
    icon: <FaPodcast />,
    name: "Podcast",
    description: "Access podcasts and episodes",
  },
  {
    id: 7,
    icon: <BsMusicNoteList />,
    name: "Playlists",
    description: "Manage and explore playlists",
  },
];

export { MenuList };
