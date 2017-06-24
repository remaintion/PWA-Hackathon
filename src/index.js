import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from './App';
import store, { history } from './redux/storeConfigure'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const target = document.getElementById('root')
ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}>
    <div>
      <App />
    </div>
  </ConnectedRouter>
</Provider>, target);
registerServiceWorker();
