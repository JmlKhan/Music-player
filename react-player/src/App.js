import React,{useState } from 'react';
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
  
  return (
    <div className="App">
    <Song currentSong = {currentSong} />
    <Player 
    currentSong = {currentSong} 
    isPlaying = {isPlaying}
    setIsPlaying = {setIsPlaying}
    />     
    <Library songs={songs} setCurrentSong={setCurrentSong} /> 
    </div>
  );
}

export default App;
