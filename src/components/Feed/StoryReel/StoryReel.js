import React from "react";
import './StoryReel.css';
import Story from "./Story/Story";

const StoryReel = () => {

    const getRandomUserImg = () => {
        return `${(Math.floor(Math.random() * 2) === 0 ? 'women' : 'men')}/${Math.floor(Math.random() * 99)}`
    }

    const unsplashURL = 'https://source.unsplash.com/random/'

    const getRandomNumber = () => {
        return (Math.floor(Math.random() * 10) + 400)
    }

    const getRandomSize = () => {
        return (`${getRandomNumber()}x${getRandomNumber()}`)
    }

    return <div className="storyReel">
        <Story
            image={`${unsplashURL}${getRandomSize()}`}
            profileImgSrc={`https://randomuser.me/api/portraits/${getRandomUserImg()}.jpg`}
            title='Snowy Johnny' />
        <Story
            image={`${unsplashURL}${getRandomSize()}`}
            profileImgSrc={`https://randomuser.me/api/portraits/${getRandomUserImg()}.jpg`}
            title='Targaryen Danny' />
        <Story
            image={`${unsplashURL}${getRandomSize()}`}
            profileImgSrc={`https://randomuser.me/api/portraits/${getRandomUserImg()}.jpg`}
            title='Kwnobi Ovi Wan' />
        <Story
            image={`${unsplashURL}${getRandomSize()}`}
            profileImgSrc={`https://randomuser.me/api/portraits/${getRandomUserImg()}.jpg`}
            title='Aragorn II' />
        <Story
            image={`${unsplashURL}${getRandomSize()}`}
            profileImgSrc={`https://randomuser.me/api/portraits/${getRandomUserImg()}.jpg`}
            title='Peter Parker' />
    </div>
}

export default StoryReel;