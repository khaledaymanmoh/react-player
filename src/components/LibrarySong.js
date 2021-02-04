import React from "react";
import { playAudio } from "../util"
const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {

  const songSelectHandler = () => {
    setCurrentSong(song)
    //Add active state
    const newSongs = songs.map(s => {
      if (s === song) {
        return { ...s, active: true }
      } else {
        return { ...s, active: false }
      }
    });

    setSongs(newSongs);
    playAudio(isPlaying, audioRef);



    // if (isPlaying) {
    //   const playPromise = audioRef.current.play();
    //   if (playPromise !== undefined) {
    //     playPromise.then((audio) => {
    //       audioRef.current.play();
    //     })
    //   }
    // }
  }


  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? "selected" : ""}`}>
      <img alt={song.name} src={song.cover}></img>
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
