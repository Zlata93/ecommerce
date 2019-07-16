import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Header from './components/Header/Header';
import { auth } from './firebase/firebase';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null
		};
	}

	unsubscribeFromAuth = () => {};

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header/>
				<Switch>
					<Route exact path='/' component={HomePage}/>
					<Route exact path='/shop' component={ShopPage}/>
					<Route exact path='/signin' component={SignInPage}/>
				</Switch>
			</div>
		);
	}
}

export default App;
