import React, { Component } from 'react'
import firebase from 'firebase'
import { Container } from 'reactstrap';

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
          <Container>
            <br/>
            <br/>
            <h2>Que hacemos?</h2>
            <hr/>
            <p className="lead">Los análisis clínicos veterinarios engloban una serie de pruebas que dan información a nuestros veterinarios para ayudar a establecer el diagnóstico y tratamiento de determinadas enfermedades y también su prevención.</p>
            <p className="lead">En nuestro laboratorio te ofrecemos los siguientes análisis clínicos:</p>
            <ul className="left">
              <li>
                <p><b>Análisis coprológico:</b> análisis que se realiza en una muestra de heces. Los más frecuentes son análisis parasitarios, que consisten en la detección de huevos o formas adultas parasitarias en una muestra de heces. En algunos casos conviene derivar la muestra a un laboratorio para realizar otros tipos de estudios más específicos para garantizar un diagnóstico veterinario para tu perro o gato excelente.</p>
              </li>
              <li>
                <p><b>Biopsia:</b> toma de una muestra de tejido para su estudio histopatológico. Esta prueba se realiza en caso de alteraciones cutáneas, así como en alteraciones en diferentes órganos que requieren un análisis en laboratorio que pueda orientarnos o confirmar un diagnóstico determinado.</p>
              </li>
              <li>
                <p><b>Bioquímica sanguínea:</b> estudia la concentración de diferentes sustancias químicas disueltas en la sangre del animal. Nos informa del metabolismo del animal y del funcionamiento de ciertos órganos como el hígado o el riñón, de la concentración de determinadas hormonas (como la tiroidea o el cortisol) concentraciones de fármacos, anticuerpos frente a determinadas enfermedades, etc.</p>
              </li>
              <li>
                <p><b>Citología:</b> estudio microscópico de una muestra tomada del animal. Se puede realizar sobre muestras obtenidas de lesiones cutáneas o subcutáneas, ganglios, piel, líquidos orgánicos, médula ósea, etc. Es una prueba básica, no invasiva, que en muchos casos nos revela información muy útil en el diagnóstico de determinadas patologías en perros y gatos.</p>
              </li>
              <li>
                <p><b>Convenio con laboratorios de alta complejidad para detectar determinadas enfermedades:</b> como la leucemia felina, la inmunodeficiencia felina, la Leishmaniosis y la Parvovirosis.</p>
              </li>
              <li>
                <p><b>Determinación de dermatofitos:</b> es un cultivo realizado a partir de una muestra (pelo o escamas) tomada de una lesión dérmica de un animal que nos indica la presencia o ausencia de hongos en la piel (tiña). Conviene descartar siempre este tipo de procesos ya que en algunos casos pueden transmitirlo a las personas que están en contacto con ellos.</p>
              </li>
              <li>
                <p><b>Hemograma:</b> análisis sanguíneo en el que se hace un recuento de glóbulos rojos, glóbulos blancos y plaquetas, su forma y tamaño y la cantidad de hemoglobina.</p>
              </li>
            </ul>
            <br/>
            <br/>
        	</Container>
      </div>
    )
  }
}