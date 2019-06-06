import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';

const container = document.getElementById('app');
function render() {
  ReactDOM.render(<App />, container);
}
render()

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render()
  })
}
