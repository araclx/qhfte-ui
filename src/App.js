// PACKAGES //
import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";

// COMPONENTS //
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
        <Route path='/' exact component={Home}/>
        {/* space for other routes */}
        <Redirect to='/'/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
