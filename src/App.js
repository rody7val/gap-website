import React, { Component } from 'react'
import firebase from 'firebase'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container, Button, Modal, ModalBody } from 'reactstrap'
import Header from './components/header'
import Home from './components/home'
import Nosotros from './components/nosotros'
import Muestras from './components/muestras'
import Prestaciones from './components/prestaciones'
import Footer from './components/footer'
import Admin from './components/admin'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      load: false,
      user: null
    }
  }

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      var myVar;
      myVar = setTimeout(() => {
        firebase.database()
          .ref(`users/list/${user.uid}`)
          .on('value', snapshot => {
              console.log(snapshot.val())
              if (snapshot.val() && snapshot.val().active) {
                this.setState({load: false})
                console.log('clear!')  
                clearTimeout(myVar);
              }
              user.admin = snapshot.val().admin
              user.active = snapshot.val().active
              user.created = snapshot.val().created
              this.setState({ user })
        })
      }, 3000);
    })
  }

  auth = (cb) => {
    this.setState({ load: true })
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(result => {
      this.setState({user: result.user})
      cb()
    })
    .catch(error => {
      this.setState({load: false})
    })
  }

  signout = (cb) => {
    firebase.auth().signOut().then(result => {
      this.setState({user: null})
      cb()
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header signout={this.signout} auth={this.auth} user={this.state.user}/>
            <Switch>
              <Route exact path="/" render={({ match }) => (
                <Home url={match.url} />
              )} />
              <Route exact path="/nosotros" render={({ match }) => (
                <Nosotros url={match.url}/>
              )} />
              <Route exact path="/prestaciones" render={({ match }) => (
                <Prestaciones url={match.url} auth={this.auth} user={this.state.user}/>
              )} />
              <Route path="/muestras" render={({ match }) => (
                <Muestras url={match.url} />
              )} />

              { 
                this.state.user ? 
                <Route path="/admin" render={({match}) => (
                  <Admin match={match} user={this.state.user} />
                )}/> 
                : 
                <Route path="/admin" component={_403} />
              }

              <Route component={_404}/>
            </Switch>

            <Modal isOpen={this.state.load} >
              <ModalBody>
                <p className='lead'>Registrando..</p>
              </ModalBody>
            </Modal>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

const _404 = () => (
  <Container style={{padding: '50px'}}>
    <img src='/_404.png' style={{
      width: '150px',
      display: 'grid',
      margin: '0 auto'
    }} alt='404'/>
    <br/>
    <h1 className='text-center'><code>404</code> - Extraviado</h1>
    <p className='text-center lead'>¿No encuentras lo que estás buscando? <Link to='/'>Ve a la página principal</Link></p>
  </Container>
);

const _403 = () => (
  <Container style={{padding: '50px'}}>
    <img src='/_404.png' style={{
      width: '150px',
      display: 'grid',
      margin: '0 auto'
    }} alt='403'/>
    <br/>
    <h1 className='text-center'><code>403</code> - Acceso denegado</h1>
    <p className='text-center lead'>¿No estas registrado? <Button onclink={this.auth} color='primary'>Rigistrarme</Button></p>
  </Container>
);
