import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GloablLayout } from './layouts/GlobalLayout';
import { routes } from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <GloablLayout>
          <Switch>
            {routes.map(({ path, component }) => (
              <Route key={path} path={path} component={component} />
            ))}
          </Switch>
        </GloablLayout>
      </Router>
    </div>
  );
}

export default App;
