import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Watchlist from './components/Watchlist'
import Watched from './components/Watched'
import Add from './components/Add'

import { MoviesGlobalContextProvider } from './context/MoviesGlobalContext'

const App = () => {
  return (
    <Router>
      <MoviesGlobalContextProvider>
        <div className="app">
          <div className="app-wrap">
            <Nav />
            <Switch>
              <Route path="/" exact component={Watchlist} />
              <Route path="/Watched" component={Watched} />
              <Route path="/Add" component={Add} />
            </Switch>
          </div>
          <footer className="footer"></footer>
        </div>
      </MoviesGlobalContextProvider>
    </Router>
  );
}

export default App;
