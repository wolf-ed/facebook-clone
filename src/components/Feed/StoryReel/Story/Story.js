import React from "react";
import './Story.css'
import { Avatar } from '@mui/material';


const Story = ({ image, profileImgSrc, title }) => {

    return <div className="story" style={{ backgroundImage: `url(${image})` }}>
        <Avatar className="story__avatar" src={profileImgSrc} />
        <h4>{title}</h4>
    </div>
}

export default Story;