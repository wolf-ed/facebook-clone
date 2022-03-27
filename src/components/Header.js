// rfce: snippet to create components from es7 VS extension by dsznajder
import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt='facebook-logo' />
            </div>
            <div className='header__middle'></div>
            <div className='header__right'></div>

        </div>
    )
}

export default Header;