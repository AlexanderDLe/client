import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from './components/dev/Home';
import XanPage from './components/xan/XanPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/artist" component={XanPage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
