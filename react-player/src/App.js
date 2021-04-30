import React,{useState, useRef } from 'react';
// adding Components
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './util';
import './components/library';
import Library from './components/library';


function App() {

//state
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
   )}
  return (
    <div className="App">
    <Song currentSong = {currentSong} />
    <Player 
    audioRef ={audioRef}
    currentSong = {currentSong} 
    isPlaying = {isPlaying}
    setIsPlaying = {setIsPlaying}
    songInfo = {songInfo}
    setSongInfo = {setSongInfo}
    />     
    <Library
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
          ></audio>
    </div>
  );
}

export default App;
