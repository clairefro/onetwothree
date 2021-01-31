import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppContext, defaultContext } from './context/AppContext';
import { GloablLayout } from './layouts/GlobalLayout';
import { routes } from './routes';

export type UserState = User | null;

function App() {
  const [user, setUser] = useState<UserState>(null);
  const context = { ...defaultContext, user, setUser };

  return (
    <div className="App">
      <AppContext.Provider value={context}>
        <Router>
          <GloablLayout>
            <Switch>
              {routes.map(({ path, component }) => (
                <Route key={path} path={path} component={component} />
              ))}
            </Switch>
          </GloablLayout>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
