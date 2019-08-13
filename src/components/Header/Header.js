import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import UserContext from "../../contexts/user/user-context";
import CartContext from "../../contexts/cart/cart-context";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = () => {
    const user = useContext(UserContext);
    const [isHidden, setIsHidden] = useState(true);
    const toggleHidden = () => setIsHidden(!isHidden);

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
                    : <Link to={'/signin'} className='header__option'>sign&nbsp;in</Link>
                }
                <CartContext.Provider value={{
                    isHidden,
                    toggleHidden
                }}>
                    <CartIcon />
                </CartContext.Provider>

            </div>
            {
                !isHidden && <CartDropdown />
            }
        </header>
    )
};

export default Header;
