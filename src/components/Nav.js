import React from 'react';
import { Link } from 'react-router';

// Navbar component (shown options depend on user loggin)
export default class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">ReactBlogDemo</Link>
					</div>
					{ this.props.loggedIn ? (
						<div>
							<ul className="nav navbar-nav">
								<li><Link to="/">Home</Link></li>
								<li><Link to="blog">All Blog Posts</Link></li>
								<li><Link to="newpost">New Blog Post</Link></li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li><Link to="/" onClick={ this.props.handleLogout }>Log Out</Link></li>
							</ul>
						</div>
					) : (
						<ul className="nav navbar-nav">
							<li><Link to="/">Home</Link></li>
						</ul>
					)}
				</div>
			</nav>
		)
	};
};