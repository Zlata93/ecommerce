import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { default as HomePage } from "./pages/HomePage/HomePageContainer";
import ShopPage from './pages/ShopPage/ShopPage';
import { default as CheckoutPage } from "./pages/CheckoutPage/CheckoutPageContainer";
import { default as SignInPage } from "./pages/SignInPage/SigninPageContainer";
import { default as Header } from "./components/Header/HeaderContainer";
import { auth, createUserProfileDocument } from './firebase/firebase';
import './App.css';

class App extends React.Component {

	unsubscribeFromAuth = () => {};

	componentDidMount() {
		const { setUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					setUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			} else {
				setUser(userAuth);
			}
		});
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

export default App;
