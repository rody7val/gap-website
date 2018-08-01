import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export default class Header extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="App-menu">
          <li>
          	<Link className={this.props.url === '/' ? 'active' : null} to='/'>INICIO</Link>
          </li>
          <li>
          	<Link className={this.props.url === '/nosotros' ? 'active' : null} to='/nosotros'>NOSOTROS</Link>
          </li>
          <li>
          	<Link className={this.props.url === '/prestaciones' ? 'active' : null} to='/prestaciones'>PRESTACIONES</Link>
          </li>
          <li>
          	<Link className={this.props.url === '/muestras' ? 'active' : null} to='/muestras'>MUESTRAS</Link>
          </li>
        </ul>
      </header>
    );
  }
}