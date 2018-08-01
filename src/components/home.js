import React, { Component } from 'react'
import firebase from 'firebase'
import Header from './header'
import Footer from './footer'

export default class Home extends Component {
  constructor() {
    super()
    this.state = { 
    	load: false,
      title: undefined,
      subtitle: 'cargando...',
    }
  }

  componentDidMount() {
    const titleRef = firebase.database().ref().child('home').child('title')
    const subtitleRef = firebase.database().ref().child('home').child('subtitle')

    // title
    titleRef.once('value').then(snapshot => {
      this.setState({
        title: snapshot.val()
      })
    })

    // subtitle
    subtitleRef.once('value').then(snapshot => {
      this.setState({
        subtitle: snapshot.val()
      })
    })
  }

  render() {
    return (
      <div>
        <Header url={this.props.url}/>
        <img className="cover img-responsive" src='/laboratorio_banner.png' alt='banner'/>
        <div className="App-content">
        	<h1>{this.state.title}</h1>
          <p className="App-intro">{this.state.subtitle}</p>
          <br/>
        </div>
        <Footer />
      </div>
    )
  }
}