import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender/MessageSender';
import StoryReel from './StoryReel/StoryReel';
import Post from './Post/Post';
import { getRandomImage } from './StoryReel/StoryReel'

const randomImgOrNot = () => {
    let yesOrNo = Math.floor(Math.random() * 2) === 0;
    return yesOrNo ? getRandomImage() : '';
}


const Feed = () => {
    const [users, setUsers] = useState([])
    const random10UserUrl = 'https://randomuser.me/api/?results=10';

    const getRandomUser = async () => {
        // let users = []
        fetch(random10UserUrl)
            .then(response => response.json())
            .then(data => {
                setUsers((data.results).map(user => {
                    return <Post
                        key={user.login.uuid}
                        profilePic={user.picture.large}
                        message='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        timestamp='22/10/22'
                        username={user.login.username}
                        image={randomImgOrNot()}
                    />
                }))
            })

    }

    useEffect(() => {
        getRandomUser()

    }, [])


    return <div className="feed">
        <StoryReel />
        <MessageSender />
        {users}
        {/* <Post 
        key={id}
        profilePic={profilePic}
        message={message}
        timestamp={timestamp}
        username={username}
        image={image}
        /> */}

    </div>
}

export default Feed;