// rfce: snippet to create components from es7 VS extension by dsznajder
import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' alt='facebook-logo' />
                <div className='header__input'>
                    <SearchIcon />
                    <input type='text'>

                    </input>
                </div>
            </div>
            <div className='header__middle'>
                <div className='header__option'>
                    <HomeIcon />
                </div>
            </div>
            <div className='header__right'></div>

        </div>
    )
}

export default Header;