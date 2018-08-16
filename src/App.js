import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";


const App = () => (
  <Router>
    <div>
        <Route exact component={Home} />
    </div>
  </Router>
);

export default App;
