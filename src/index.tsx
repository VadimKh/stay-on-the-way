import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import './index.scss';

import store from './store';

const Root = () => {
  return <Provider store={store}>
    <h1>SuperTest 123</h1>
  </Provider>
};


ReactDOM.render(
  <Root/>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
