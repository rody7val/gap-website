import React from 'react';
import {Link} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';

	export default class MenuAdmin extends React.Component {

  render() {
  	const { url } = this.props

    return (
      <div>
        <Nav className='shadow' style={{backgroundColor: '#007bff'}} tabs>
          <NavItem>
            <Link className='nav-link' to={`${url}`}>Dashboard</Link>
          </NavItem>

          <NavItem>
            <Link className='nav-link' to={`${url}/users`}>Usuarios</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}