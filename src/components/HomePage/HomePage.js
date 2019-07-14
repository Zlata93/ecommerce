import React from 'react';
import './HomePage.scss';

export default function HomePage() {
	return (
		<div className='homepage'>
			<div className='dir-menu'>
				<div className='dir-menu__item'>
					<div className='content'>
						<h1 className='content__title'>hats</h1>
						<div className='content__subtitle'>shop now</div>
					</div>
				</div>
				<div className='dir-menu__item'>
					<div className='content'>
						<h1 className='content__title'>jackets</h1>
						<div className='content__subtitle'>shop now</div>
					</div>
				</div>
				<div className='dir-menu__item'>
					<div className='content'>
						<h1 className='content__title'>sneakers</h1>
						<div className='content__subtitle'>shop now</div>
					</div>
				</div>
				<div className='dir-menu__item'>
					<div className='content'>
						<h1 className='content__title'>womens</h1>
						<div className='content__subtitle'>shop now</div>
					</div>
				</div>
				<div className='dir-menu__item'>
					<div className='content'>
						<h1 className='content__title'>mens</h1>
						<div className='content__subtitle'>shop now</div>
					</div>
				</div>
			</div>
		</div>
	);
}
