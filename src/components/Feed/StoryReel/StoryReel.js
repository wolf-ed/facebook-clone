import React from "react";
import './StoryReel.css';
import Story from "./Story/Story";


const getRandomUserImg = () => {
    return `${(Math.floor(Math.random() * 2) === 0 ? 'women' : 'men')}/${Math.floor(Math.random() * 99)}`
    // return `https://randomuser.me/api/portraits/${(Math.floor(Math.random() * 2) === 0 ? 'women' : 'men')}/${Math.floor(Math.random() * 99)}.jpg`
}

const unsplashURL = 'https://source.unsplash.com/random/'

const getRandomNumber = () => {
    return (Math.floor(Math.random() * 10) + 400)
}

const getRandomSize = () => {
    return (`${getRandomNumber()}x${getRandomNumber()}`)
}

export const getRandomImage = () => {
    return `${unsplashURL}${getRandomSize()}`
}

const StoryReel = () => {



    return <div className="storyReel">
        <Story
            image={getRandomImage()}
            profileImgSrc={`https://randomuser.me/api/portraits/${getRandomUserImg()}.jpg`}
            title='Snowy Johnny' />
        <Story
            image={getRandomImage()}
            profileImgSrc={`https://randomuser.me/api/portraits/${getRandomUserImg()}.jpg`}
            title='Targaryen Danny' />
        <Story
            image={getRandomImage()}
            profileImgSrc={`https://randomuser.me/api/portraits/${getRandomUserImg()}.jpg`}
            title='Kwnobi Ovi Wan' />
        <Story
            image={getRandomImage()}
            profileImgSrc={`https://randomuser.me/api/portraits/${getRandomUserImg()}.jpg`}
            title='Aragorn II' />
        <Story
            image={getRandomImage()}
            profileImgSrc={`https://randomuser.me/api/portraits/${getRandomUserImg()}.jpg`}
            title='Peter Parker' />
    </div>
}

export default StoryReel;