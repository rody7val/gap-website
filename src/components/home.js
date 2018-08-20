import React, { Component } from 'react'
import { Container, CardTitle, CardText, Row, Col } from 'reactstrap';

export default class Home extends Component {

  render() {
    return (
      <div>
        <section className="section cover img-fluid" style={{background: '#384047 url(/laboratorio_banner.png) no-repeat'}}>
          <div className='bodySection'>
            <Container>
              <br/>
              <br/>
              <Row>
                <Col md={6} sm={12}>
                  <h2>Laboratorio de diagnóstico veterinario GAP</h2>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <Container>
          <br/>
          <br/>
          <h2>Servicios</h2>
          <hr/>
          <br/>

          <Row>
            <Col md={5} sm={12}>
              <img className='imgSection imgStudy' src='/microscope.png' alt='microscope'/>
            </Col>
            <Col md={7} sm={12} className='homeText'>
              <CardTitle>Estudio Citopatológico</CardTitle>
              <CardText>Planilla de solicitud requerida</CardText>
              <a className='btn btn-primary' target='blank' rel='nooppener noregerrer' href='https://firebasestorage.googleapis.com/v0/b/gap-web-710bf.appspot.com/o/pdf%2FPLANILLA-SOLICITUD-CITOPATOLOGIA.pdf?alt=media&token=63d931f1-abec-4c0a-83be-8af3e61d2509'>Descargar planilla</a>
            </Col>
          </Row>
          <br/>
          <br/>

          <Row>
            <Col md={5} sm={12}>
              <h1 className='imgSection imgStudy'><i className="fa fa-flask"></i></h1>
            </Col>
            <Col md={7} sm={12} className='homeText'>
              <CardTitle>Estudio General</CardTitle>
              <CardText>Planilla de solicitud requerida</CardText>
              <a className='btn btn-primary' target='blank' rel='nooppener noregerrer' href='https://firebasestorage.googleapis.com/v0/b/gap-web-710bf.appspot.com/o/pdf%2FPLANILLA-SOLICITUD-DE-ESTUDIOS.pdf?alt=media&token=b6ef4c7e-cbe3-4e8f-9c20-6a55dd26eac8'>Descargar planilla</a>
            </Col>
          </Row>
          <br/>
          <br/>

          <h2>Área profesional</h2>
          <hr/>
          <br/>
          <Row>
            <Col md={5}>
              <img id='medic-1' src='/user.jpg' alt='medic-1' className='imgSection imgMedic'/>
              <br/>
            </Col>
            <Col md={7} className='homeText'>
              <h3>Guillermina Puente</h3>
              <p>Médico veterinaria</p>
            </Col>  
          </Row>
          <br/>
          <Row>
            <Col md={5}>
              <img id='medic-2' src='/user.jpg' alt='medic-2' className='imgSection imgMedic'/>
              <br/>
            </Col>
            <Col md={7} className='homeText'>
              <h3>Leonela Wehlls</h3>
              <p>Bioquímica</p>
            </Col>  
          </Row>
          <br/>
          <br/>
        </Container>
      </div>
    )
  }
}
              // <h1 className='grid'><i className="fa fa-flask"></i></h1>