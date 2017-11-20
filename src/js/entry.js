import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*
	Import Components
*/
import NotFound from './components/NotFound';
import Home from './components/Home';
import Page from './components/Page';


ReactDOM.render((
	<Router>
		<Switch>
			<Route path="/page/:pageNumber" component={Page} />
			<Route path="/" component={Home} />
			<Route component={NotFound} />
		</Switch>
	</Router>
), document.querySelector('#app'));
