import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import './index.css';

import App from './App';

// Start MSW mocked backend in dev environment
if (process.env.NODE_ENV === 'development') {
	const { worker } = require('./mocks/browser');
	worker.start();
}

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
	document.getElementById('root')
);
