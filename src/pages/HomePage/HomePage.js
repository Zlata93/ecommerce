import React  from 'react';
import Goods from '../../components/Goods/Goods';
import useHideCart from "../../hooks/useHideCart";
import './HomePage.scss';

const HomePage = () => {
	useHideCart();

	return (
		<div className='homepage'>
			<Goods />
		</div>
	);
};

export default HomePage;
