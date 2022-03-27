import React from "react";
import './Post.css';
import { Avatar } from '@mui/material';

const Post = ({ profilePic, image, username, timestamp, message }) => {
    // console.log(new Date(timestamp?.toDate()).toUTCString())
    return <div className="post">
        <div className="post__top">
            <Avatar src={profilePic} className='post__avatar' />
            <div className="post__topInfo">
                <h3>{username}</h3>
                <p>Timestamp</p>
            </div>
        </div>

        <div className="post__bottom">
            <p>{message}</p>
        </div>

        {image && <div className="post__image">
            <img src={image} alt='post' />
        </div>}
    </div>
}

export default Post;