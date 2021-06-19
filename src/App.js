
import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import {getAccessToken} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useStateProviderValue} from './StateProvider';
import Player from './components/Player.js';


const spotify=new SpotifyWebApi();

function App() {
 const [{token},dispatch] =useStateProviderValue();
 useEffect(()=>{
   const hash=getAccessToken();
   window.location.hash="";
   const _token=hash.access_token;
   if(_token)
   {
     dispatch({
       type:"SET_TOKEN",
       token:_token
     })
     spotify.setAccessToken(_token);
     spotify.getMe().then(user => {
       dispatch({
         type:"SET_USER",
         user:user
       })
     }
    )
    
    spotify.getUserPlaylists().then(playlists=>{
      dispatch({
        type:"SET_PLAYLIST",
        playlists:playlists
      
    })})
     ;
     spotify.getPlaylist('4GpBODwgLjOwL6JcBunQcr').then(res=>{
       dispatch({
         type:"SET_WEEKLY",
         weekly_playlist:res
       })
     })
   }

 },[dispatch])
 
  return (
    <div className="App">
    {
      token ? <Player spotify={spotify} />:<Login/>
    }

    
      
    </div>
  );
}

export default App;
