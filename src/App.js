import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/dev/Home';
import Xan_Page from './components/xan/Xan_Page';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/artist" component={Xan_Page} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
