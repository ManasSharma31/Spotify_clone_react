import React from 'react'
import "./Sidebar.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SidebarOptions from './SidebarOptions';
import {useStateProviderValue} from '../StateProvider.js';
function Sidebar() {
    const [{playlists},dispatch]=useStateProviderValue();
    return (
        <div className="sidebar">
        <img className="sidebar__logo" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo"/>
        <SidebarOptions Icon={HomeIcon} title="Home"/>
        <SidebarOptions Icon={SearchIcon} title="Search"/>
        <SidebarOptions Icon={PlayCircleFilledIcon} title="Play"/>
        <br/>
        <strong className="sidebar__title">PLAYLISTS</strong>

        <hr/>
        {playlists?.items?.map(song=>(
            <SidebarOptions title={song.name}/>
        ))}
        </div>
    )
}

export default Sidebar
