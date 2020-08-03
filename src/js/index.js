import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

class App extends React.Component {
	render() {
		return <div>Hello {this.props.name}</div>;
	}
}

// eslint-disable-next-line no-unused-vars
const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name='Dude' />, mountNode);
