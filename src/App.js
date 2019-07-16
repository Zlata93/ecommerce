import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage}/>
				<Route exact path='/hats' component={HomePage}/>
			</Switch>
		</div>
	);
}

export default App;
