import React from 'react'
import "./Songrow.css";

function Songrow({track , playSong}) {
    return (
        <div className="songrow" onClick={() => playSong(track.id)}>
        <img className="songrow__album" src={track?.album.images[0]?.url} alt="songlogo"></img>
        <div className="songrow__info">
        <h1>{track.name}</h1>
        <p>
        {track.artists.map(artist =>artist.name).join(", ")}
        </p>
        </div>
            
        </div>
    )
}

export default Songrow
