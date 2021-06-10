import * as React from 'react';
import { Switch } from 'react-router-dom';
// Using a 'routes' file as single source of truth for route strings
import { HOME, USERHOME } from '../../config/routes';
// Wrapper components to handle redirects and access to routes that need auth
import { PrivateRoute, PublicRoute } from '../routes';
import TopNavBar from '../TopNavBar';
import HomePage from '../HomePage';
// 404 page
import NotFound from '../NotFound';

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <div className="App">
      <TopNavBar onLogin={setIsAuthenticated} isAuthenticated={isAuthenticated} />
      <Switch>
        <PublicRoute
          exact
          path={HOME}
          component={HomePage}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path={USERHOME}
          component={HomePage}
          isAuthenticated={isAuthenticated}
        />
        <PublicRoute path="*" component={NotFound} isAuthenticated={isAuthenticated} />
      </Switch>
    </div>
  );
}

export default App;
