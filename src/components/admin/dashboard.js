import React from 'react';
import {Link} from 'react-router-dom'
import firebase from 'firebase'
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: undefined
    }
  }

  componentDidMount = () => {
    firebase.database()
      .ref('users/count')
      .once('value')
      .then(snapshot => {
        this.setState({ count: snapshot.val() })
    	})
  }
  render() {
  	const { match } = this.props

    return (
  <Row>
    <Col md={3} sm={12}>
      <Link to={`${match.url}/users`}>
        <Card className='shadowHover' inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardBody>
            <Row>
              <Col md={4} sm={4} xs={4} className='text-left'>
                <i className='fa fa-user' style={{fontSize: '50px'}}></i>
              </Col>
              <Col md={8} sm={8} xs={8} className='text-right'>
                <CardTitle tag="h1">{this.state.count}</CardTitle>
              </Col>
            </Row>
            <Row>
              <Col md={12} className='text-right'>
                <CardText>Usuarios</CardText>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Link>
      <br/>
    </Col>
  </Row>
    );
  }
}
