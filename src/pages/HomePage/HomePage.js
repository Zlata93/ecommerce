import React from 'react';
import { useEffect } from 'react';
import './HomePage.scss';
import Goods from '../../components/Goods/Goods';

const HomePage = ({ isHidden, hideCart }) => {

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
