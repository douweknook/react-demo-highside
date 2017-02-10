import React from 'react';

// Fixed footer component
export default class Footer extends React.Component {
	render() {
		return (
			<div className="row">
				<footer className="navbar navbar-default navbar-fixed-bottom">
					<div className="container">
						<p className="text-muted vert-align-footer">A React Blog Demo made by Douwe Knook for High Side</p>
					</div>
				</footer>
			</div>
		)
	};
};