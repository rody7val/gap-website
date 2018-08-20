import React from 'react';
import { Row, Col } from 'reactstrap';

export default class User extends React.Component {

render() {
  const { user } = this.props

  return (
    <Row>
      <Col md={4}>
        <img src={user.photoURL} style={{
          maxWidth: '100%',
          borderRadius: '50%'
        }} alt='img-user'/>
      </Col>
      <Col md={8}>
        <p className='lead'>{user.displayName}</p>
        <p className='lead'><b>{user.email}</b></p>
      </Col>
      <br/>
    </Row>
    );
  }
}