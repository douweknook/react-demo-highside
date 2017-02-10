import React from 'react';

// Input component for forms
export default class Input extends React.Component {
	render() {
		return (
			<div className="form-group">
				<label>{ this.props.label }</label>
				<input type={ this.props.type } className="form-control" id={ this.props.id } placeholder={ this.props.placeholder }/>
			</div>
		)
	};
};