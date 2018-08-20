import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import firebase from 'firebase'
import { Link } from 'react-router-dom'
import MenuAdmin from './menuAdmin'
import MenuUser from './menuUser'
import userView from './userView'
import { Container, Row, Col, ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardText  } from 'reactstrap'

export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount = () => {
    firebase.database()
      .ref('users/list/')
      .on('value', snapshot => {
      	snapshot.forEach( user => {
      		// console.log(user)
        	this.setState({ users: this.state.users.concat(user.val()) })
      	})
    })
  }

  render() {
    const { match, user } = this.props

    const Usuarios = () => (
      <div>
        <h2>Listado de usuarios</h2>
        <ListGroup>
         {
           this.state.users.length ? this.state.users.map((user, index) => (
             <ListGroupItem key={index}>
               <Row>
                <Link className='btn btn-link listUser' to={`${match.url}/user/${user.uid}`}>
                 <Col md={2}>
                   <img src={user.photoURL} style={{
                     maxWidth: '40px',
                     borderRadius: '50%'
                   }} alt='img-user'/>
                 </Col>
                 <Col md={10}>
                   <p className='lead'>{user.displayName}</p>
                 </Col>
                </Link>
               </Row>
             </ListGroupItem>
           )) : <p className='lead'>cargando...</p>
         }
        </ListGroup>
      </div>
    )

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
                    <Route path={`${match.url}/users`} component={Usuarios} />
                    <Route exact path={`${match.url}/user/${user.uid}`} render={() => (
                      <userView user={user} />
                    )} />
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
                    <Route exact path={`${match.url}/user/${user.uid}`} render={() => (
                      <userView user={user} />
                    )} />
                  </div>
                ) : (
                  <p>Su cuenta de usuario esta bloqueada!</p>
                )
              }
            </div>
          )
        }

      </Container>
    );
  }
}

const Dashboard = () => (
  <p>dashboard</p>
)
