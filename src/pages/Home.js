import React from 'react';

import Header 	from '../components/Header';
import Login 	from '../components/Login';

export default class Home extends React.Component {
	render() {
		// Check if user is logged in. If not, show login form
		let login;
		if (this.props.loggedIn === false)
			login = <Login handleLogin={ this.props.handleLogin } status={ this.props.status }/>;
		
		return (
			<div>
				<Header title="Welcome"/>
				{ login }
			</div>
		)
	};
};