import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';
import UserContext from "./contexts/user/user-context";
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null
		}
	}

	unsubscribeFromAuth = () => {};

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					this.setState({
					user: {
						id: snapshot.id,
						...snapshot.data()
					}});
				});
			} else {
				this.setState({ user: null });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='app'>
				<UserContext.Provider value={this.state.user}>
					<Header />
				</UserContext.Provider>
				<Switch>
					<Route exact path='/' component={HomePage}/>
					<Route path='/shop' component={ShopPage}/>
					<Route exact path='/checkout' component={CheckoutPage}/>
					<Route exact path='/signin' render={() => this.state.user ? <Redirect to='/' /> : <SignInPage />}/>
				</Switch>
			</div>
		);
	}
}

export default App;
