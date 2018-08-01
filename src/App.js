import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/home'
import Nosotros from './components/nosotros'
import Muestras from './components/muestras'
import Prestaciones from './components/prestaciones'
import Footer from './components/footer'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={({ match }) => (
              <Home url={match.url}/>
            )} />
            <Route exact path="/nosotros" render={({ match }) => (
              <Nosotros url={match.url} />
            )} />
            <Route exact path="/prestaciones" render={({ match }) => (
              <Prestaciones url={match.url} />
            )} />
            <Route path="/muestras" render={({ match }) => (
              <Muestras url={match.url} />
            )} />
            <Route path="/footer" render={({ match }) => (
              <Footer url={match.url} />
            )} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
