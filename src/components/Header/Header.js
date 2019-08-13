import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import UserContext from "../../contexts/user/user-context";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ isHidden }) => {
    const user = useContext(UserContext);
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
                <CartIcon />
            </div>
            {
                !isHidden && <CartDropdown />
            }
        </header>
    )
};

const mapStateToProps = createStructuredSelector({
    isHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
