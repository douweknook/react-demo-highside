import React from 'react';

import * as helpers from '../js/helpers';

import Error from './Error';
import Post  from '../components/Post';

export default class Blog extends React.Component {
	constructor(props) {
		super(props);
		// Set the data to empty array
		this.state = {
			data: []
		};
		this.getBlogPosts 	= this.getBlogPosts.bind(this);
		this.deleteBlogPost = this.deleteBlogPost.bind(this);
	};

	// Function to fetch data from server
	getBlogPosts() {
		helpers.makeRequest(
			'GET',
			'/blog/posts/?method=get',
			{ authToken: this.props.token },
			(response) => {
				console.log(response);
				this.setState({
					data: response.data.data
				});
			}
		);
	};

	deleteBlogPost(e) {
		// Function to delete post and communicate this to API
		e.preventDefault();
		let post_id = e.target.dataset.id;
		helpers.makeRequest(
			'POST', 
			'/blog/posts/' + post_id + '/?method=remove',
			{ authToken: this.props.token },
			(response) => {
				this.getBlogPosts()
			}
		);
	};

	// Fetch data directly when component mounts
	componentDidMount() {
		this.getBlogPosts();
	};

	render() {
		let data = this.state.data;

		// Check if user is logged in
		if (!this.props.loggedIn) 
			return <Error/>

		return (
			<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2">
				<div className="row">
					{ data.map( post => {
						return <Post 
							key={ post.post_id } 
							id={ post.post_id } 
							title={ post.title } 
							content={ post.body } 
							user={ post.fname+' '+post.lname } 
							deleteBlogPost={ this.deleteBlogPost }
						/>
					}) } 
				</div>
			</div>
		)
	};
};