import React, { Component } from 'react'

export default class Muestra extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
      	<h3 className='titleFooter'>Muestras</h3>
				<fieldset>
					<legend>Formuario de solicitud</legend>
					<a className='linkFooter' target='blank' rel='nooppener noregerrer' href='https://firebasestorage.googleapis.com/v0/b/gap-web-710bf.appspot.com/o/formulario_muestra.pdf?alt=media&token=53798a4b-5f12-4133-bb25-c94fb5b2b763'>
						<img src='/formulario_muestra.jpg' alt='formulario_muestra'/>
						<p style={{margin: '0px'}}>> DESCARGAR</p>
					</a>
				</fieldset>
      </div>
    );
  }
}