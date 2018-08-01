import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      email: '',
      text: '',
      submited: false
    }

    this.contact = this.contact.bind(this);
    this.change = this.change.bind(this);
  }
  
  change(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  contact(event) {
    event.preventDefault();
    this.setState({ submited: true });

    const data = {
      name: this.state.name,
      email: this.state.email,
      text: this.state.text
    }

    fetch('https://us-central1-gap-web-710bf.cloudfunctions.net/api/email', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => { return res.json() })
    .then(data => {
      alert(data.message);
      this.setState({ submited: false });

      if (data.success) {
        return this.setState({
          name: '',
          email: '',
          text: ''
        })
      }
    })
  }

  render() {
    return (
      <div>
        <form className="contacto" onSubmit={this.contact}>
        	<h3 className='titleFooter'>Contacto</h3>
		      <input type='text' onChange={this.change} placeholder='Nombre' name="name" value={this.state.name} required/>
		      <input type='email' onChange={this.change} placeholder='Email' name="email" value={this.state.email} required/>
		      <textarea onChange={this.change} placeholder='Cuéntanos...' name="text" value={this.state.text} required></textarea>
          {
            this.state.submited ? (
              <input type='submit' value='Enviando...' disabled className='submited'/>
            ) : (
              <input type='submit' value='Enviar'/>
            )
          }
        </form>
      </div>
    );
  }
}
          // <div className="g-recaptcha" data-sitekey="6Lf-VWcUAAAAACdhrclCc_8qjdHjLO1MQ-WqkuAm"></div>