import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/dev/Home';
import XanPage from './components/xan/XanPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artist" component={XanPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
