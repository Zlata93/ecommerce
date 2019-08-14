import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';
import UserContext from "./contexts/user/user-context";
import './App.css';

const App = () => {
	const [user, setUser] = useState(null);

	let unsubscribeFromAuth = () => {};

	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					setUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			} else {
				setUser(null);
			}
		});

		return unsubscribeFromAuth();
	}, []);

	return (
		<div className='app'>
			<UserContext.Provider value={user}>
				<Header />
			</UserContext.Provider>
			<Switch>
				<Route exact path='/' component={HomePage}/>
				<Route path='/shop' component={ShopPage}/>
				<Route exact path='/checkout' component={CheckoutPage}/>
				<Route exact path='/signin' render={() => user ? <Redirect to='/' /> : <SignInPage />}/>
			</Switch>
		</div>
	);
};

export default App;
