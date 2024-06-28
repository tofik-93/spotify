import React, {useState, useRef, useEffect} from 'react'
import '../Style/Musicplayer.css'
import { FaHeart, FaRegHeart, FaStepBackward,FaBackward, FaPause, FaPlay, FaForward ,FaStepForward, FaShareAlt} from "react-icons/fa"
import{ BsDownload} from "react-icons/bs"
function MusicPlayer({song,imgSrc}) {
   
    const [isLove, setLove] = useState(false);
    const [isPlaying, setPlaying ]= useState(false);
    const [duration, setDuration ]= useState(0);
  const   [currentTime, setCurrtime] = useState(0)

    const audioPlayer = useRef(); // OUt audio tage
    const progressBar = useRef();  // our progress bar
    const animationRef= useRef();
    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds)
    }, [
        audioPlayer?.current?.loadedmetadata,
        audioPlayer?.current?.readyState,

    ])
    const CalculteTime = (sec) => {
        const minutes = Math.floor(sec/ 60);
        const returnMin = minutes < 10 ? `0${minutes}` :`${minutes}`
        const seconds = Math.floor(sec % 60);
        const returnSec = seconds < 10 ? `0${seconds}` :`${seconds}`
   return `${returnMin}:${returnSec}`
    }
     const changePlayPause = () =>{
        const prevalue = isPlaying;
        if (!prevalue){
            audioPlayer.current.play();
            animationRef.current= requestAnimationFrame(whilePlaying)
        }else{
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current)
        }
    
        setPlaying(!prevalue);
    }
    const whilePlaying = () => {
        progressBar.current.value= audioPlayer.current.currentTime;
        changeCurrentTime();
       animationRef.current = requestAnimationFrame(whilePlaying)
    }
    const changeCurrentTime = () =>{
        progressBar.current.style.setProperty('--player-played',
        `${(progressBar.current.value/duration) *100}%`)
          setCurrtime(progressBar.current.value);

    }
    const changeProgress = () =>{
        audioPlayer.current.currentTime =
         progressBar.current.value;
        changeCurrentTime();
        
    }
   
   const changeLoved = ()=>{
    setLove(!isLove)
   
   }
 return (
    <div className='musicPlayer'>
<div className='songImage'>
    <img src={imgSrc} alt=""/>
</div>
<div className="songAttributes">
    <audio src={song} preload="metadata" ref={audioPlayer}/> {/*Rest of the componet*/}
    <div className="top">
    <div className="left">
        <div className="loved" onClick={changeLoved}>
            
        {isLove ? <i><FaHeart/> </i>: <i><FaRegHeart/></i>}

        </div>
         </div>
         <div className="download" /*onClick={chadown}*/>
            <i><BsDownload/></i>
         </div>
    <div className="middle"> 
    <div className="middle"> </div>
    <div className="back">
        <i><FaStepBackward/></i>
        <i><FaBackward/></i>

         </div>
    <div className="playPause" onClick={changePlayPause}> 
    {isPlaying ? <i><FaPause/></i>:<i><FaPlay/></i>}
    </div>
    <div className="forward">
    <i><FaForward/></i> 
    <i><FaStepForward/></i>
    </div>

    </div>
    <div className="right"> 
    <i><FaShareAlt/></i>

    </div>
    </div>
    <div className='bottom'>
     <div className='Time'>{CalculteTime(currentTime)}</div>
     <input type="range" className='progressBar' ref={progressBar} onChange={changeProgress}/>
     <div className='duration'>{(duration && !isNaN(duration)&& CalculteTime(duration)) ?
      CalculteTime(duration):'00:00'}
   
     </div>
    </div>
        </div>
        </div>
 )
}

export { MusicPlayer};