import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { signOutStart } from '../../redux/user/user-actions';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ user, isHidden, signOutStart }) => {
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
                    ? <div className='header__option' onClick={signOutStart}>sign&nbsp;out</div>
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
    user: selectCurrentUser,
    isHidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
