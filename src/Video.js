import Avatar from '@material-ui/core/Avatar'
import React from 'react'
import './Video.css'
function Video({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div className="videocard">
            <img className="thumbnail" src={image} alt=""/>
            <div className="video_info">
                <Avatar className="video_avatar" alt={channelImage} src={channelImage}/>
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video
