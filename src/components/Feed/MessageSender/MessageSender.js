import React, { useState } from "react";
import './MessageSender.css';
import { Avatar } from '@mui/material';
import { userImg } from '../../Header/Header';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const MessageSender = () => {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('submited')

        setInput('');
        setImageUrl('');
    }

    return <div className="messageSender">
        <div className="messageSender__top">
            <Avatar src={userImg} />
            <form>
                <input
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }}
                    className="messageSender__input"
                    placeholder="What's on your mind..." />
                <input
                    value={imageUrl}
                    onChange={(e) => { setImageUrl(e.target.value) }}
                    placeholder="Image URL (Optional)" />
                <button onClick={handleSubmit} type="submit">
                    Hidden submit
                </button>
            </form>
        </div>

        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <VideocamIcon style={{ color: 'red' }} />
                <h3>Live Video</h3>

            </div>
            <div className="messageSender__option">
                <PhotoLibraryIcon style={{ color: 'green' }} />
                <h3>Photo/Video</h3>

            </div><div className="messageSender__option">
                <InsertEmoticonIcon style={{ color: 'orange' }} />
                <h3>Feeling/Activity</h3>

            </div>

        </div>

    </div>
}

export default MessageSender;