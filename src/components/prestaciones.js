import React, { Component } from 'react'
import firebase from 'firebase'
import Header from './header'
import Footer from './footer'

import '../table.css'

export default class Presentaciones extends Component {
  constructor(props) {
    super()
    this.state = {
      title: undefined,
      table: []
    }
  }

  componentDidMount () {
  	const titleRef = firebase.database().ref().child('presentaciones').child('title')
  	const tableRef = firebase.database().ref().child('presentaciones').child('table')

    // title
    titleRef.once('value').then(snapshot => {
      this.setState({
        title: snapshot.val()
      })
    })

    // table
    tableRef.once('value').then(snapshot => {
    	snapshot.forEach(data => {
      	this.setState({
      	  table: this.state.table.concat(data.val())
      	})
      })
    })
  }

  render() {
    return (
      <div>
        <Header url={this.props.url}/>
        <div className="App-content">
        	<h1>{this.state.title}</h1>
      		<table className="table">
	    		  <thead>
	    		    <tr>
	  						<th>Prestación</th>
	  						<th>Tipo de muestra</th>
	  						<th>Resultado</th>
	  					</tr>
	  				</thead>
	  				<tbody>
	  				{
	  					this.state.table.length ? (
	  						this.state.table.map( (data, index) => (
	  							<tr key={index}>
	  								<td>{data.name}</td>
	  								<td>{data.type}</td>
	  								<td>{data.result}</td>
	  							</tr>
	  						))
	  					) : (
	  						<tr>
	  							<td></td>
	  							<td rowspan={3}>cargando...</td>
	  							<td></td>
	  						</tr>
	  					)
	  				}
	  				</tbody>
	  			</table>
          <br/>
        </div>
        <Footer />
      </div>
    )
  }
}