import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core'
import {useStateProviderValue} from '../StateProvider';
import "./Header.css"
function Header() {

    const [{user},dispatch]=useStateProviderValue();
    return (
        <div className="header">
        <div className="header__left">
            <SearchIcon></SearchIcon>
            <input type="text" placeholder="Search for your song"></input>
        </div>
        <div className="header__right">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
            <h4>{user?.display_name}</h4>
        </div>
        </div>
    )
}

export default Header
