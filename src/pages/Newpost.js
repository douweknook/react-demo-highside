import React from 'react';

import * as helpers from '../js/helpers';

import Error 	from './Error';
import Newpostform 	from '../components/Newpostform';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: '',
			message: ''
		};
		this.createNewPost = this.createNewPost.bind(this);
	};

	// Function to handle sending new posts to API
	createNewPost(e) {
		e.preventDefault();
		
		// Get data from form
		let data = {
			authToken: 	this.props.token,
			title: 		document.getElementById('title').value,
			excerpt: 	document.getElementById('excerpt').value,
			body: 		document.getElementById('content').value
		};

		helpers.makeRequest(
			'POST',
			'/blog/posts/?method=create',
			data,
			(response) => {
				this.setState({
					type: 'success',
					message: 'New post was succesfully created!'
				});
			},
			() => {
				this.setState({
					type: 'danger',
					message: 'Something went wrong. Please try again.'
				});
			}
		);
	};

	render() {
		// Check if user is logged in
		if (!this.props.loggedIn)
			return <Error />

		return (
			<div className="col-xs-12 col-sm-10 col-md-8 col-lg-8 col-sm-offset-1 col-md-offset-2 col-lg-offset-2">
				{ this.state.type && this.state.message && 
					<div className={ "alert alert-"+this.state.type } role="alert">
						{ this.state.message }
					</div>
				}
				<Newpostform createNewPost={ this.createNewPost } />
			</div>
		)
	};
};