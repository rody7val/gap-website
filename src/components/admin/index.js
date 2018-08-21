import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import MenuAdmin from './menuAdmin'
import MenuUser from './menuUser'
import userView from './userView'
import userList from './userList'
import Dashboard from './dashboard'

export default class Admin extends Component {
  render() {
    const { match, user } = this.props

    return (
		  <Container>
        {
          user.admin ? (
            <div>
              {
                user.active ? (
                  <div>   
                    <MenuAdmin url={match.url} user={user}/>
                    <br/>
                    <Route exact path={match.url} component={Dashboard} />
                    <Route exact path={`${match.url}/users`} component={userList} />
                    <Route path={`${match.url}/users/:uid`} component={userView} />
                  </div>
                ) : (
                  <p>Tu cuenta de administrador esta bloqueada!</p>
                )
              }
            </div>
          ) : (
            <div>
              {
                user.active ? (
                  <div>
                    <MenuUser url={match.url} user={user}/>
                    <br/>
                    <Route path={`${match.url}/users/:uid`} component={userView} />
                  </div>
                ) : (
                  <p>Su cuenta de usuario esta bloqueada!</p>
                )
              }
            </div>
          )
        }
        <br/>
      </Container>
    );
  }
}