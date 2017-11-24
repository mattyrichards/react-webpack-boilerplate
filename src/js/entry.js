import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Import reducers
import rootReducer from "./reducers";

// Import components/containers
import NotFound from './components/NotFound';
import Home from './components/Home';
import Page from './components/Page';
import Redux from './containers/Redux';

// Create Redux store, apply middlewares etc
const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(promise)
	)
);

ReactDOM.render((
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/page/:pageNumber" component={Page} />
				<Route path="/redux" component={Redux} />
				<Route path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</Provider>
), document.querySelector('#app'));
