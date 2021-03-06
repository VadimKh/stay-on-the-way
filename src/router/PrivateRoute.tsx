
import * as React from "react";
import {
  Route,
  Redirect,
  RouteComponentProps
} from "react-router-dom";
import { select } from '@rematch/select'
import { connect } from 'react-redux';

const WrappedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
        return rest.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: rest.redirect,
                state: { from: props.location }
              }}
            />
          )
    }
    }
  />
);

export const PrivateRoute = connect(state => ({
    isAuthenticated: select.user.isAuthenticated(state)
}))(WrappedRoute);

export interface PrivateRouteProps extends RouteComponentProps {
    redirect: string;
}
