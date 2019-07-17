import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ user }) => {
    return (
        <header className='header'>
            <Link to={'/'} className='header__logo-container'>
                <Logo className='header__logo' />
            </Link>
            <div className='header__options'>
                <Link to='/shop' className='header__option'>
                    Shop
                </Link>
                <Link to='/shop' className='header__option'>
                    Contact
                </Link>
                {
                    user
                    ? <div className='header__option' onClick={() => auth.signOut()}>sign out</div>
                    : <Link to={'/signin'} className='header__option'>sign in</Link>
                }
            </div>
        </header>
    )
};

export default Header;
