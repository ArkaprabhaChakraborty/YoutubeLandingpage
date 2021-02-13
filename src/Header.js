import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from'@material-ui/icons/VideoCall'
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar/Avatar"
import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt=""/>
            </div>
            <div className="header_input">
                <input placeholder="Search" type="text"/>
                <SearchIcon className="header_inputbutton"/>
            </div>
            <div className="header_right">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar className="header_icon"/>
            </div>
            </div>
    )
}

export default Header
