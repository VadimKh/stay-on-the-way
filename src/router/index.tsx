
import * as React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { AuthView } from '../views/AuthView';

const MainRouter = () => (
  <Router>
      <div>
        <Route path="/public" component={Public} />
        <Route path="/login" component={AuthView} />
        <PrivateRoute path="/" exact component={Protected} />
      </div>
  </Router>
);

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

export default MainRouter;
