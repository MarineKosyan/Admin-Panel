import React from 'react';
import Login from './components/Login';
import admin from './components/admin';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path={'/'} component={Login} />
      <Route exact path={'/admin'} component={admin} />
    </Router>

  );
}

export default App;
