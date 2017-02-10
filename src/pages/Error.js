import React from 'react';

import Header 	from '../components/Header';

// Error page for when user is not logged in.
export default class Error extends React.Component {
	render() {
		return (
			<Header title="Please log in" content="This page can only be viewed when you are logged in. Click the button to go to the log in page" button="Go to log in page" />
		)
	};
};