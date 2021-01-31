import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import { GloablLayout } from './layouts/GlobalLayout';
import { routes } from './routes';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const login = (u: User) => setUser(u);
  const logout = () => setUser(null);
  const context = { user, login, logout };
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
