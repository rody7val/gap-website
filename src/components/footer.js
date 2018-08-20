import React, { Component } from 'react'
import Contact from './contact'
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment'
import logo from '../logo.svg'

export default class Footer extends Component {

  render() {
    return (
    <div>
      <div className='time'>
        <Container>
          <br/>
          <br/>
          <h4><i className="fa fa-calendar"></i> Horario de atención</h4>
          <p className='lead'>Lunes a viernes de 9 a 11 hs y de 15 a 17 hs</p>
          <br/>
          <br/>
        </Container>
      </div>
      <footer className="footerTop">
      	<br/>
      	<br/>
				<Container>
					<Row>
						<Col md={3} sm={12}>
							<h6 className='footerTitle'>Empresa</h6>
							<p><img src={logo} className="App-logo" alt='logo' /> {moment().format('YYYY')} © GAP, Inc. </p>
						</Col>
						<br/>
						<br/>
						<Col md={3} sm={12} style={{marginBottom: '20px'}}>
							<h6 className='footerTitle'>Social</h6>
								<p onMouseEnter={this.hoverInFace} onMouseLeave={this.hoverOutFace}>
									<a className='ease linkFooter' target='blank' rel='nooppener noregerrer' href='http://www.facebook.com'>
										<i className='fa fa-facebook-f footerActive'></i>{' '}
										Facebook
									</a>
								</p>
								<p onMouseEnter={this.hoverInInsta} onMouseLeave={this.hoverOutInsta}>
    		      		<a className='ease linkFooter' target='blank' rel='nooppener noregerrer' href='http://www.instagram.com'>
    		      			<i className='fa fa-instagram footerActive'></i>{' '}
    		      			Instagram
    		      		</a>
    		      	</p>
						</Col>
						<br/>
						<br/>
						<Col md={6} sm={12}>
							<Contact />
						</Col>
						<br/>
						<br/>
					</Row>
				</Container>
				<br/>
				<br/>
      </footer>
    </div>
    );
  }
}