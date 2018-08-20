import React, { Component } from 'react'
import firebase from 'firebase'
import { Table, Container, Button } from 'reactstrap'

import '../table.css'

export default class Prestaciones extends Component {
  constructor(props) {
    super()
    this.state = {
      table: []
    }
  }

  componentDidMount () {
  	const tableRef = firebase.database().ref().child('presentaciones').child('table')

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
    const { auth, user } = this.props

    return (
      <div>
      {
        !user ? (
          <div className='register'>
            <Container>
              <br/>
              <p className='lead'><i className="fa fa-exclamation"></i>{' '}Regístrate para ver los precios</p>
              <Button onClick={auth} color='primary'>Rigistrarme</Button>
              <br/>
              <br/>
            </Container>
          </div>
        ) : null
      }
        <Container>
          <br/>
          <br/>
        	<h2>Prestaciones</h2>
          <hr/>
          <p className='lead'>Listado de prestaciones:</p>
          <br/>
      		<Table hover>
	    		  <thead>
	    		    <tr>
                <th>#</th>
	  						<th>Prestación</th>
	  						<th>Tipo de muestra</th>
                {
                  user ? (
                    <th className='text-right'>ARS</th>
                  ) : null
                }
	  					</tr>
	  				</thead>
	  				<tbody>
	  				{
	  					this.state.table.length ? (
	  						this.state.table.map( (data, index) => (
	  							<tr key={index}>
                    <td><b>{index+1}</b></td>
	  								<td>{data.name}</td>
	  								<td>{data.type}</td>
                    {
                      user ? (
                        <th className='text-right'>
                          {data.value ? `$${data.value}` : null}
                        </th>
                      ) : null
                    }
	  							</tr>
	  						))
	  					) : (
	  						<tr>
	  							<td className='text-center' rowspan={3}>cargando...</td>
	  						</tr>
	  					)
	  				}
	  				</tbody>
	  			</Table>
          <br/>
          <p className='lead'><small>(* Determinaciones que se derivan)</small></p>
          <br/>
          <br/>
          <h2>Perfiles</h2>
          <hr/>
          <br/>
          <h5>PERFIL GENERAL COMPLETO:</h5>
          <ul>  
            <li>HEMOGRAMA</li>
            <li>HEPATOGRAMA</li>
            <li>UREA</li>
            <li>CREATININA</li>
            <li>GLUCOSA</li>
            <li>ORINA COMPLETA</li>
          </ul>
          <h5>PERFIL RENAL:</h5>
          <ul>  
            <li>HEMOGRAMA</li>
            <li>UREA</li>
            <li>CREATININA</li>
            <li>ALBUMINA</li>
            <li>ORINA COMPLETA</li>
          </ul>
          <h5>PERFIL PANCREATICO:</h5>
          <ul>
            <li>HEMOGRAMA</li>
            <li>AMILASA</li>
            <li>FOSFATASA ALCALINA</li>
            <li>COLESTEROL</li>
            <li>TRIGLICERIDOS</li>
          </ul>
          <h5>PERFIL HEPATICO:</h5>
          <ul>
            <li>HEMOGRAMA</li>
            <li>TGO</li>
            <li>TGP</li>
            <li>FOSFATASA ALCALINA</li>
            <li>BILIRRUBINA</li>
            <li>PROTEINAS TOTALES</li>
            <li>ALBUMINA</li>
          </ul>
          <h5>PERFIL PREQUIRURGICO:</h5>
          <ul>
            <li>HEMOGRAMA</li>
            <li>TP (TIEMPO DE PROTROMBINA)</li>
            <li>KPTT ( TIEMPO PARCIAL DE TROMBOPLASTINA) </li>
            <li>UREA</li>
            <li>CREATININA</li>
            <li>GLUCOSA</li>
            <li>HEPATOGRAMA</li>
          </ul>
          <h5>PERFIL DIARREICO:</h5>
          <ul>
            <li>COPROPARASITOLOGICO</li>
            <li>PARVOVIRUS</li>
            <li>GIARDAS</li>
            <li>MOQUILLO </li>
          </ul>
          <br/>
          <br/>
        </Container>
      </div>
    )
  }
}