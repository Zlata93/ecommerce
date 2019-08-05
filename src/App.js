import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Header from './components/Header/Header';
import './App.css';

class App extends React.Component {

	unsubscribeFromAuth = () => {};

	componentDidMount() {

		// this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		// 	if (userAuth) {
		// 		const userRef = await createUserProfileDocument(userAuth);
		//
		// 		userRef.onSnapshot(snapshot => {
		// 			setCurrentUser({
		// 				id: snapshot.id,
		// 				...snapshot.data()
		// 			});
		// 		});
		// 	} else {
		// 		setCurrentUser(userAuth);
		// 	}
		// });
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='app'>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage}/>
					<Route path='/shop' component={ShopPage}/>
					<Route exact path='/checkout' component={CheckoutPage}/>
					<Route exact path='/signin' render={() => this.props.user ? <Redirect to='/' /> : <SignInPage />}/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	user: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
