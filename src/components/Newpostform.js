import React from 'react';

import * as helpers from '../js/helpers'
import Input from './Input';

// Form component to create new post
export default class Newpostform extends React.Component {
	render() {
		return (
			<div>
				<h1>Create new blog post</h1>
				<Input label="Title" type="text" id="title" placeholder="Add a title" />
				<Input label="Excerpt" type="text" id="excerpt" placeholder="Add a short excerpt" />
				<div className="form-group">
					<label>Content</label>
					<textarea className="form-control" rows="5" id="content" placeholder="Write your post here"></textarea>
				</div>	
				<button type="submit" className="btn btn-default" onClick={ this.props.createNewPost }>Create new blog post</button>
			</div>
		)
	};
};