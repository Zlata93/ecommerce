import React from 'react';
import './HomePage.scss';
import MenuItem from '../../components/MenuItem/MenuItem';

export default function HomePage() {
	return (
		<div className='homepage'>
			<div className='dir-menu'>
				<MenuItem title={'hats'}/>
			</div>
		</div>
	);
}
