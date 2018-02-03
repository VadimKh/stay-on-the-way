import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

ReactDOM.render(
  <div style={{width: '400px', margin: '0 auto'}}><h1>TEST</h1></div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
