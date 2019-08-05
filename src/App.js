import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Header from './components/Header/Header';
import './App.css';

class App extends React.Component {

	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
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

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
