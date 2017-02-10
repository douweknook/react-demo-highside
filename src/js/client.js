import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import App 		from '../pages/App';
import Home 	from '../pages/Home';
import Blog 	from '../pages/Blog';
import Newpost 	from '../pages/Newpost';

// Render routes with React Router and connect to components
ReactDOM.render(
	<Router history={ hashHistory }>
		<Route path='/' component={ App }> 
			<IndexRoute component={ Home }></IndexRoute>
			<Route path="blog" component={ Blog }></Route>
			<Route path="newpost" component={ Newpost }></Route>
		</Route> 
	</Router>, 
	document.getElementById('app')
);