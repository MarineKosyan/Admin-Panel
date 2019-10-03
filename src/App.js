import React from 'react';
import Login from './components/Login';
import Menu from './components/Menu';
import Reports from './components/Reports';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path={'/'} component={Login} />
      <Route exact path={'/Reports'} component={Reports} />
      <Route exact path={'/users'} component={Menu} />
    </Router>

  );
}

export default App;
