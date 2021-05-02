import React,{useState, useRef } from 'react';
// adding Components
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './data';
import './components/library';
import Library from './components/library';
import Nav from './components/Nav';


function App() {

//state
const [libraryStatus, setLibraryStatus] = useState(false);
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0])
const [isPlaying, setIsPlaying] = useState(false);
const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0
});


//ref
  const audioRef = useRef(null);

//functions
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo, currentTime: current, duration}
   )};

const songEndedHandler = async () => {
 let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
 await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
 if(isPlaying) audioRef.current.play();
};
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
    <Nav 
    libraryStatus = {libraryStatus}
    setLibraryStatus = {setLibraryStatus}
    />
    <Song currentSong = {currentSong} />
    <Player 
    setSongs = {setSongs}
    songs ={songs}
    audioRef ={audioRef}
    currentSong = {currentSong} 
    isPlaying = {isPlaying}
    setIsPlaying = {setIsPlaying}
    songInfo = {songInfo}
    setSongInfo = {setSongInfo}
    setCurrentSong = {setCurrentSong}
    />     
    <Library
    libraryStatus = {libraryStatus}
    setSongs = {setSongs} 
    isPlaying = {isPlaying}
    audioRef = {audioRef}
    songs={songs} 
    setCurrentSong={setCurrentSong} 
    /> 
    <audio 
          onLoadedMetadata = {timeUpdateHandler}
          onTimeUpdate = {timeUpdateHandler} 
          ref = {audioRef} src= {currentSong.audio} 
          onEnded = {songEndedHandler}
          ></audio>
    </div>
  );
}

export default App;
