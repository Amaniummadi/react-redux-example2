import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 useParams
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Posts from './components/Posts';
import Singlepost from './components/Singlepost';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
       <Route path="/posts"  exact>
            <Posts />
          </Route>
          <Route path="/:id/newposts"  exact>
            <Singlepost />
          </Route>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/newposts">
          <Singlepost />
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
