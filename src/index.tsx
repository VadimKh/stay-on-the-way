import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import './index.scss';

import store from './store';

const Header = (props) => (
  <h1>{props.name}</h1>
)

const HeaderContainer = connect((state) => {
  console.log(state)
  return {
    name: state.user.name
  }
})(Header);

const Root = () => {
  return <Provider store={store}>
    <HeaderContainer />
  </Provider>
};


ReactDOM.render(
  <Root/>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
