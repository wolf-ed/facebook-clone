// rfce: snippet to create components from es7 VS extension by dsznajder
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow/SidebarRow'
import FlagIcon from '@mui/icons-material/Flag';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat'; import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { userImg } from '../Header/Header';



function Sidebar() {
    return (
        <div className='sidebar'>

            <SidebarRow src={userImg} title='Elona Musk' />

            <SidebarRow Icon={FlagIcon} title='Pages' />
            <SidebarRow Icon={PeopleAltIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />


        </div>
    )
}

export default Sidebar;