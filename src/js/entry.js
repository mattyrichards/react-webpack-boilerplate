import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Import reducers
import rootReducer from './reducers';

// Import components
import App from './components/App';

// Create Redux store, apply middlewares etc
const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(promise)
	)
);

// Create a function which will render a component to our DOM
const render = (Component) => {
	ReactDOM.render(
		<Provider store={store}>
			<Component />
		</Provider>, 
		document.querySelector('#app')
	);
};

// Render the application
render(App);

// React HOT/HMR
if (module.hot) {
  module.hot.accept('./components/App', () => { 
		const NextApp = require('./components/App').default
		render(NextApp);
	})
}

// const render = (Component) => {
//   ReactDOM.render(<AppContainer>
//     <Provider store={store}>
//       <Component />
//     </Provider>
//   </AppContainer>,
//     document.getElementById('root')
//   );
// };

// render(RootApp);

// module.hot.accept('./RootApp', () => {
//   render(RootApp)
// });
