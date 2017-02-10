import React from 'react';

// A header component based on Bootstrap's Jumbotron
export default class Header extends React.Component {
	render() {
		// Let user set header content or use lorem ipsum as default
		let content = this.props.content || 
			`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
		// Check if header should be rendered with button or not
		let button = this.props.button ? <p><a className="btn btn-default btn-lg" href="#" role="button">{ this.props.button }</a></p> : null;
		
		return (
			<div className="jumbotron">
				<h1>{ this.props.title }</h1>
				<p>{ content }</p>
				{ button }
			</div>
		)
	};
};