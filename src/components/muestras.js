import React, { Component } from 'react'
import { Container } from 'reactstrap'

export default class Muestras extends Component {
  constructor(props) {
    super()
    this.state = {
      link: null,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(name) {
    console.log(name)
    this.setState({
      link: name
    })
  }

  render() {
    return (
      <div>
        <Container>
          <br/>
          <br/>
          <h1>Muestras</h1>
          <hr/>
          <div>
            <p><b>Hematología:</b> Colocar sangre por las paredes del tubo con EDTA hasta la marca indicada. Invertir suavemente 3-5 veces para evitar la coagulación. Conservar en refrigeración (4ºC).</p>
            <p><b>Hemostasia:</b> Completar el tubo con CITRATO exactamente hasta la flecha indicada. Invertir suavemente 5-10 veces para evitar la coagulación. Conservar en refrigeración (4ºC).</p>
            <p><b>Glucemia:</b> Colocar sangre por las paredes del tubo con EDTA-FLUORURO hasta la flecha indicada. Invertir 3-5 veces para evitar la coagulación. Conservar en refrigeración (4ºC).</p>
            <p><b>Bioquímica sanguínea y Endocrinología:</b> Colocar sangre por las paredes del tubo con GEL o SECO. Esperar la formación del coágulo a temperatura ambiente y luego conservar en refrigeración (4ºC).</p>
          </div>
          <br/>
          <br/>
        </Container>
      </div>
    )
  }
}