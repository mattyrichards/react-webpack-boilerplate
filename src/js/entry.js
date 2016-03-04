import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

/*
	Import Components
*/
import NotFound from './components/NotFound';
import App from './components/App';

/*
	Routes
*/
const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
