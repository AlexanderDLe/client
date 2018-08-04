import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './components/pages/Landing';
import Portfolio from './components/pages/Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
