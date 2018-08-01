import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

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
    const Topic = ({ match }) => (
      <div className='container left'>
        {(() => {
          switch(match.params.topicId) {
            case 'toma-de-muestras':
              return (<div>
                <p><b>Hematología:</b> Colocar sangre por las paredes del tubo con EDTA hasta la marca indicada. Invertir suavemente 3-5 veces para evitar la coagulación. Conservar en refrigeración (4ºC).</p><p><b>Hemostasia:</b> Completar el tubo con CITRATO exactamente hasta la flecha indicada. Invertir suavemente 5-10 veces para evitar la coagulación. Conservar en refrigeración (4ºC).</p><p><b>Glucemia:</b> Colocar sangre por las paredes del tubo con EDTA-FLUORURO hasta la flecha indicada. Invertir 3-5 veces para evitar la coagulación. Conservar en refrigeración (4ºC).</p><p><b>Bioquímica sanguínea y Endocrinología:</b> Colocar sangre por las paredes del tubo con GEL o SECO. Esperar la formación del coágulo a temperatura ambiente y luego conservar en refrigeración (4ºC).</p>
              </div>)
            case 'instrucciones-generales':
              return (<div>
                <h3>Area profesional</h3><p>011-4242-5489/0570</p><p>ATENCIÓN DE LUNES A VIERNES DE 9 A 17 hs.</p><p>Consultoría técnica y científica</p><p>Asesoramiento diagnóstico</p><p>Consulta con especialistas</p><p>Investigación</p><p>Toma de muestras en el laboratorio: Únicamente tras solicitar turno telefónico y con prescripción del médico clínico.</p>
              </div>)
            default:
              return <p className="App-intro"><small>Seleccione una opción</small></p>;
          }
        })()}
      </div>
    );
    
    return (
      <div>
        <Header url={this.props.url}/>
        <div className="App-content">
          <h1>Muestras</h1>
          <ul className='nav center nav-tabs'>
            <li>
              <Link onClick={() => this.handleClick('toma-de-muestras')}
                className={this.state.link === 'toma-de-muestras' ? 'nav-link active' : 'nav-link'}
                to={`${this.props.url}/toma-de-muestras`}>Toma de muestras</Link>
            </li>
            <li>
              <Link onClick={() => this.handleClick('instrucciones-generales')}
                className={this.state.link === 'instrucciones-generales' ? 'nav-link active' : 'nav-link'}
                to={`${this.props.url}/instrucciones-generales`}>Instrucciones generales</Link>
            </li>
          </ul>

          <Route path={`${this.props.url}/:topicId`} component={Topic} />
          <Route
            exact
            path={this.props.url}
            render={() => <p className="App-intro"><small>Seleccione una opción</small></p>}/>
        </div>
        <Footer />
      </div>
    )
  }
}