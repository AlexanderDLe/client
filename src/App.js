import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Portfolio from './components/pages/Portfolio';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
