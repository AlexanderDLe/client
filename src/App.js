import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Nav from './components/Nav/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
