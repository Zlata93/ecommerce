import React, { useEffect, useContext } from 'react';
import Goods from '../../components/Goods/Goods';
import { CartContext } from '../../providers/cart/cart-provider';
import './HomePage.scss';

const HomePage = () => {
	const { isHidden, hideCart } = useContext(CartContext);

	useEffect(() => {
		(function() {
			if ("ontouchstart" in document.documentElement) {
				const collectionPage = document.querySelector('.collection-page');
				if (collectionPage) collectionPage.className += " no-hover";
			}

			if (!isHidden) {
				hideCart();
			}

			window.scrollTo(0,0);
		})()
	}, []);

	return (
		<div className='homepage'>
			<Goods />
		</div>
	);
};

export default HomePage;
