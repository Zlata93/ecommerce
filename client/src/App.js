import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';
import Header from './components/Header/Header';
import './App.scss';
import Spinner from "./components/Spinner/Spinner";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));

const App = ({ checkUserSession, user }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div className='app'>
			<Header />
			<Switch>
				<Suspense fallback={<Spinner />}>
					<Route exact path='/' component={HomePage}/>
					<Route path='/shop' component={ShopPage}/>
					<Route exact path='/checkout' component={CheckoutPage}/>
					<Route exact path='/signin' render={() => user ? <Redirect to='/' /> : <SignInPage />}/>
				</Suspense>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
