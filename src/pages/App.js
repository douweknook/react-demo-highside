import React from 'react';
import { Link, hashHistory } from 'react-router';

import * as helpers from '../js/helpers'

import Footer 	from '../components/Footer';
import Nav 		from '../components/Nav';

export default class App extends React.Component {
	// Construct the general app
	constructor(props) {
		super(props);
		// Set states to keep track of user login
		this.state = {
			loggedIn: false,
			token: 	  '',
			data: 	  {},
			status: {
				type: '',
				message: ''
			}	
		};
		// Bind login and logout handlers to top level component
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	};

	// Function to handle user login
	handleLogin(e) {
		e.preventDefault();
		// Get login form data
		let data = {
			user_login: document.getElementById('user_login').value,
			user_pwd:  	document.getElementById('user_pwd').value
		};

		// Make request to API to get auth token
		helpers.makeRequest(
			'POST',
			'/public/login?method=create',
			data,
			(response) => {
				this.setState({
					loggedIn: true,
					token: response.data.authToken,
					status: {
						type: 'success',
						message: 'Log in successful!'
					}
				});
			},
			() => {
				this.setState({
					status: {
						type: 'danger',
						message: 'Something went wrong. Please try again.'
					}
				})
			}
		);
	};

	// Function to handle user logout
	handleLogout() {
		// Send logout request to API
		helpers.makeRequest(
			'POST',
			'/logout',
			null,
			() => {
				// Update state
				this.setState({
					loggedIn: false,
					token: '',
					status: {
						type: 'success',
						message: 'Log out successful!'
					}
				});
			}
		);
	};

	render() {
		return (
			<div>
				<Nav loggedIn={ this.state.loggedIn } handleLogout={ this.handleLogout } />
				<div className="container">
					{ React.cloneElement(this.props.children, { 
						loggedIn: 	 this.state.loggedIn,
						token: 		 this.state.token,
						status: 	 this.state.status,
						handleLogin: this.handleLogin
					}) }
				</div>
				<Footer />
			</div>

		)
	};
};