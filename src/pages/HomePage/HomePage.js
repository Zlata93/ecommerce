import React from 'react';
import './HomePage.scss';
import Goods from '../../components/Goods/Goods';
import useHideCart from "../../hooks/useHideCart";

const HomePage = ({ isHidden, hideCart }) => {

	useHideCart(isHidden, hideCart);

	return (
		<div className='homepage'>
			<Goods />
		</div>
	);
};

export default HomePage;
