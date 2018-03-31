import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import './index.scss';

import store from './store';
import Router from './router';

const Root = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(
  <Root/>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
