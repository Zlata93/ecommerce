import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';
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
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					this.setState({
						user: {
							id: snapshot.id,
							...snapshot.data()
						}
					}, () => { console.log(this.state.user)});
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
		const { user } = this.state;
		return (
			<div>
				<Header user={user} />
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
