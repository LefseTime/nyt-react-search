import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact component={Home} />
        </Switch>
    </div>
  </Router>
);

export default App;
