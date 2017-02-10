import React from 'react';

import Input from './Input';

// Login form component
export default class Login extends React.Component {
	render() {
		return (
			<div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3">
				{ this.props.status.type && this.props.status.message && 
					<div className={ "alert alert-"+this.props.status.type } role="alert">
						{ this.props.status.message }
					</div>
				}
				<h1>Log In</h1>
				<form>
					<Input label="Username" type="text" id="user_login" placeholder="Username" />
					<Input label="Password" type="password" id="user_pwd" placeholder="Password" />
					<button type="submit" onClick={ this.props.handleLogin } className="btn btn-default">Submit</button>
				</form>
			</div>
		)
	};
};