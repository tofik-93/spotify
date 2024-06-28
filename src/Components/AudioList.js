import React, { useState, useEffect } from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import { Songs } from "./Songs";
import {MusicPlayer} from "./MusicPlayer";
function AudioList() {
  const [songs, setSongs] = useState(Songs);
  const [activeSongId, setActiveSongId] = useState(Songs[0]?.id);
 const [img, setImage] = useState(Songs[0].imgSrc);
 const [song, setSong] = useState(Songs[0].song);
  useEffect(() => {
    const changeMenuActive = (id) => {
      setActiveSongId(id);
      console.log(songs);
    };

    const songElements = document.querySelectorAll(".songs");
    songElements.forEach((songElement) => {
      const songId = parseInt(songElement.dataset.id);
      songElement.addEventListener("click", () => changeMenuActive(songId));
    });

    return () => {
      songElements.forEach((songElement) => {
        const songId = parseInt(songElement.dataset.id);
        songElement.removeEventListener("click", () => changeMenuActive(songId));
      });
    };
  }, []);

  const changeFav = (id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) => {
        if (song.id === id) {
          return {
            ...song,
            favourite: !song.favourite,
          };
        }
        return song;
      })
    );
  };
 const setMainSong = (songSrc, imgSrc) =>{
  setSong(songSrc);
  setImage(imgSrc)
 }
  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>{`${Songs.length} songs`}</span>
      </h2>
      <div className="songsContainer">
        {songs &&
          songs.map((song, index) => (
            <div className={`songs ${song.id === activeSongId ? 'active' : ''}`} key={song.id} data-id={song.id} onClick ={
              ()=> setMainSong(song?.song, song?.imgSrc)
            }>
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song.songName}
                    <span className="spanArtist">{song.artist}</span>
                  </p>
                  <div className="hits">
                    <div className="hits">
                      <p className="hit">
                        <i><FaHeadphones /></i> 95,490,102
                      </p>
                      <p className="duration">
                        <i><FaRegClock /></i>
                        03.04
                      </p>
                      <div className="favourite" onClick={() => changeFav(song.id)}>
                        {
                          song.favourite ? (<i><FaHeart /></i>) : (
                            <i><FaRegHeart /></i>)
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      < MusicPlayer song={song} imgSrc={img}/>
    </div>
  );
}

export { AudioList };