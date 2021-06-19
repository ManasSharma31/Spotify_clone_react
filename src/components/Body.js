import React from 'react'
import {useStateProviderValue} from '../StateProvider.js';
import "./Body.css"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Header from "./Header.js"
import Songrow from './Songrow.js';
function Body({spotify}) {
    const [{ user, weekly_playlist},dispatch]=useStateProviderValue();
    console.log(weekly_playlist.tracks?.items);
    const playPlaylist = (id) => {
        spotify.play({
            context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((res) => {
              dispatch({
                type: "SET_ITEM",
                item: res.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    return (
        <div className="body">
            <Header/>
            <div className="body__baner">
                <img src={user?.images[0]?.url} alt="weekly"/>
            
            
                <div className="body__banerText">
                <strong>PLAYLIST</strong>
                <h2>Discover: Weekly Discovery ....</h2>
                <p>{weekly_playlist?.description}</p>
                </div>
            </div>
     <div className="body__songs">
     <div className="body__icons">
          <PlayCircleFilledIcon
            className="play"
            onClick={playPlaylist}
          />
          <FavoriteBorderIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
       
        {
            weekly_playlist.tracks?.items.map(item =>(
                <Songrow track={item.track}  playSong={playSong}/>
            ))
        }

         </div>
            
            </div>
    
    )
}

export default Body
