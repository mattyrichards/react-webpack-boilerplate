import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

/*
	Import Components
*/
import NotFound from './components/NotFound';
import Home from './components/Home';
import Page from './components/Page';

// ES6 style stateless function
const App = (props) =>
	<div>{props.children}</div>;

App.propTypes = {
  children: React.PropTypes.node,
};

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/page/:pageNumber" component={Page} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
), document.querySelector('#app'));
