import React from 'react';
import {Link} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';

	export default class MenuUser extends React.Component {


  render() {
  	const { url, user } = this.props

    return (
      <div>
        <Nav className='shadow' style={{backgroundColor: '#007bff'}} tabs>
          <NavItem>
            <Link className='nav-link' to={`${url}/user/${user.uid}`}>Mi perfil</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}