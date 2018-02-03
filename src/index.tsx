import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/SignIn';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

ReactDOM.render(
  <div style={{width: '400px', margin: '0 auto'}}><App /></div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
