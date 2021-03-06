import React from "react";


const LibrarySong = ({ song, songs, setCurrentSong, 
    id, audioRef, isPlaying, setSongs}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);

        //Add Active state
        const newSong = songs.map((song) => {
            if(song.id === id){
                return {
                    ...song,
                    Active: true,
                };
            }else{
                return {
                    ...song,
                    Active: false,
                };
            };
        });
            setSongs(newSong);
        //check if the song is playing
        if(isPlaying) audioRef.current.play();
        
   
   
        // if(isPlaying) {
    //     const playPromise = audioRef.current.play();
    //     if (playPromise !== undefined ){
    //         playPromise.then((audio) => {
    //             audioRef.current.play();
    //         });
    //     }
    // }
    };

    return (
        <div onClick = {songSelectHandler} className={`library-song  ${song.Active ? "selected" : ""}`}>
            <img alt = {song.name} 
            src={song.cover} ></img>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
};

export default LibrarySong;