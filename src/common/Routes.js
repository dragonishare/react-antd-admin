import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../pages/App/App';
import Login from '../pages/Login/Login';
import Admin from '../pages/Admin/Admin';
import Buttons from '../pages/UI/Buttons';
import Modals from '../pages/UI/Modals';
import Loadings from '../pages/UI/Loadings';
import Notice from '../pages/UI/Notice';
import Messages from '../pages/UI/Messages';
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
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route path="/admin/ui/loadings" component={Loadings} />
                  <Route path="/admin/ui/notification" component={Notice} />
                  <Route path="/admin/ui/messages" component={Messages} />
                  <Route component={NotFound} />
                </Switch>
              </Admin>
            )}
          />
        </App>
      </Router>
    );
  }
}
