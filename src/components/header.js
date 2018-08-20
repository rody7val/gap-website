import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container } from 'reactstrap';

export default class Header extends Component {
  constructor(props) {
    super()
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  login = () => {
    this.props.auth(() => {
      console.log('login')
    })
  }

  logout = () => {
    this.props.signout(() => {
      console.log('logout')
    })
  }

  render() {
    const { user } = this.props

    return (
      <Navbar color='dark' dark expand='md'>
        <Container>
          <Link className={'navbar-brand'} to='/'><img src={logo} className="App-logo" alt="logo" style={{height: '80px'}} />GAP</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} className='homeText' navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className={window.location.pathname === '/nosotros' ? 'nav-link active' : 'nav-link'} to='/nosotros'>NOSOTROS</Link>
              </NavItem>
              <NavItem>
                <Link className={window.location.pathname === '/prestaciones' ? 'nav-link active' : 'nav-link'} to='/prestaciones'>PRESTACIONES</Link>
              </NavItem>
              <NavItem>
                <Link className={window.location.pathname === '/muestras' ? 'nav-link active' : 'nav-link'} to='/muestras'>MUESTRAS</Link>
              </NavItem>
              {
                !user ? (
                  <NavItem>
                    <NavLink onClick={this.login} style={{cursor: 'pointer'}}>ACCEDER</NavLink>
                  </NavItem>
                ) : (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      <img src={user.photoURL} alt='user-img' className='imgUser' />
                    </DropdownToggle>
                    <DropdownMenu right className='backgroundDark'>
                      <DropdownItem className='backgroundDark'>
                        {
                          user.admin ? <Link className='nav-link' to={'/admin'}>Administración</Link>
                          : <Link className='nav-link' to={`/admin/users/${user.uid}`}>Mi perfil</Link>
                        }
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem className='backgroundDark' style={{cursor: 'pointer'}} onClick={this.logout}>
                        <NavLink>Salir</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}