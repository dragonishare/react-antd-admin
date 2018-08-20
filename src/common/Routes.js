import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../pages/App/App';
import Admin from '../pages/Admin/Admin';
import Login from '../pages/Login/Login';
import Buttons from '../pages/UI/Buttons';
import NotFound from '../components/NotFound/NotFound';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route component={NotFound} />
              </Admin>
            )}
          />
        </App>
      </Router>
    );
  }
}
