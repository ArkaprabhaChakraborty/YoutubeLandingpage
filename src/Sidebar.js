import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from'@material-ui/icons/Home'
import { ExpandMoreRounded, History, OndemandVideo, Subscriptions, ThumbUpAltRounded, VideoLibrary, WatchLater, Whatshot } from '@material-ui/icons'
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected title="Home" Icon={HomeIcon}/>
            <SidebarRow selected={false} title="Trending" Icon={Whatshot}/>
            <SidebarRow selected={false} title="Subscriptions" Icon={Subscriptions}/>
            <hr/>
            <SidebarRow title="Library" Icon={VideoLibrary}/>
            <SidebarRow title="History" Icon={History}/>
            <SidebarRow title="Your videos" Icon={OndemandVideo}/>
            <SidebarRow title="Watch Later" Icon={WatchLater}/>
            <SidebarRow title="Liked videos" Icon={ThumbUpAltRounded}/>
            <SidebarRow title="Show more" Icon={ExpandMoreRounded}/>
            <hr/>        
        </div>
    )
}

export default Sidebar
