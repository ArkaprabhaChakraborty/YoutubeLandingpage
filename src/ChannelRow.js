import { Avatar } from '@material-ui/core'
import { VerifiedUser } from '@material-ui/icons'
import React from 'react'
import './ChannelRow.css'
function ChannelRow({image,channel,subs,noofvideos,description,verified}) {
    return (
        <div className="channelrow">
            <Avatar className="channelrow_logo" alt={image} src={image}/>
            <div className="channelrow_text">
                <h4>
                    {channel} {verified && <VerifiedUser/>}
                </h4>
                <p>
                     {subs} subscribers • {noofvideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
