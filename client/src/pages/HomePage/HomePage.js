import React from 'react';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { hideCart } from '../../redux/cart/cart-actions';
import Goods from '../../components/Goods/Goods';
import './HomePage.scss';
import useHideCart from "../../hooks/useHideCart";


const HomePage = ({ isHidden, hideCart }) => {

	useHideCart(isHidden, hideCart);

	return (
		<div className='homepage'>
			<Goods />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isHidden: selectCartHidden(state)
});

const mapDispatchToProps = (dispatch) => ({
	hideCart: () => dispatch(hideCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
