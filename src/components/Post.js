import React from 'react';

import * as helpers from '../js/helpers.js';

// Blog post component (based on Bootstrap panel)
export default class Post extends React.Component {
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">{ this.props.title }</h3>
				</div>
				<div className="panel-body">
					{ this.props.content }
				</div>
				<div className="panel-footer">
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 inverse-margin">
						<p>Posted by { this.props.user }</p>
					</div>
					<div className="text-right">
						<a className="btn btn-danger btn-xs" data-id={ this.props.id } onClick={ this.props.deleteBlogPost } role="button">Delete Post</a>
					</div>
				</div>
			</div>
		)
	};
};