import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { hideCart } from '../../redux/cart/cart-actions';
import { onPageNav } from '../../utils/helpers';
import Goods from '../../components/Goods/Goods';
import './HomePage.scss';


const HomePage = ({ isHidden, hideCart }) => {

	useEffect(() => {
		onPageNav(isHidden, hideCart);
	}, [hideCart]);

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
