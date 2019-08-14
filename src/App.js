import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Homepage from './components/partials/Homepage/Homepage';

function App() {
  return (
      <div>
            <div className="App">
              <Router history={createBrowserHistory({basename:process.env.PUBLIC_URL})}>
                <div className="route">
                    <Route path="/" component={Homepage} />
                </div>
              </Router>
            </div>
      </div>
  );
}

export default App;
