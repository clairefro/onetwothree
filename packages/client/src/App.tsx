import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { GloablLayout } from './layouts/GlobalLayout';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <GloablLayout>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </GloablLayout>
      </Router>
    </div>
  );
}

export default App;
