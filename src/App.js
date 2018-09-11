import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ScrollToTop from './components/utility/ScrollToTop';

import Home from './components/dev/Home';
import XanHome from './components/xan/XanHome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollToTop>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={1000}
                  classNames="fade"
                  onExit={node => {
                    node.style.position = 'fixed';
                    node.style.top = -1 * window.scrollY + 'px';
                  }}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/artist" component={XanHome} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
