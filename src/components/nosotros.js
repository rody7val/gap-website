import React, { Component } from 'react'
import firebase from 'firebase'
import Header from './header'
import Footer from './footer'

export default class Nosotros extends Component {
  constructor(props) {
    super()
    this.state = {
      title: undefined,
      desc: 'cargando...',
      list: []
    }
  }

  componentDidMount () {
  	const titleRef = firebase.database().ref().child('nosotros').child('title')
    const descRef = firebase.database().ref().child('nosotros').child('desc')
    const listRef = firebase.database().ref().child('nosotros').child('list')

    // title
    titleRef.once('value').then(snapshot => {
      this.setState({
        title: snapshot.val()
      })
    })

    // desc
    descRef.once('value').then(snapshot => {
      this.setState({
        desc: snapshot.val()
      })
    })

    // list
    listRef.once('value').then(snapshot => {
      snapshot.forEach(data => {
        this.setState({
          list: this.state.list.concat(data.val())
        })
      })
    })
  }

  render() {
    return (
      <div>
        <Header url={this.props.url}/>
        <div className="App-content">
					<div>
        		<h1>{this.state.title}</h1>
          	<p className="App-intro left">{this.state.desc}</p>
            <ul className="left">
            {
              this.state.list.length ? (
                this.state.list.map( (data, index) => (
                  <li>
                    <p>{data.li}</p>
                  </li>
                ))
              ) : null
            }
            </ul>
        	</div>
        </div>
        <Footer />
      </div>
    )
  }
}