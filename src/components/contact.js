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

    // this.contact = this.contact.bind(this);
    // this.change = this.change.bind(this);
  }
  
  // change(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  // contact(event) {
  //   event.preventDefault();
  //   this.setState({ submited: true });

  //   const data = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     text: this.state.text
  //   }

  //   fetch('https://us-central1-gap-web-710bf.cloudfunctions.net/api/email', {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: "POST",
  //     body: JSON.stringify(data)
  //   })
  //   .then(res => { return res.json() })
  //   .then(data => {
  //     alert(data.message);
  //     this.setState({ submited: false });

  //     if (data.success) {
  //       return this.setState({
  //         name: '',
  //         email: '',
  //         text: ''
  //       })
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <form className="contacto" onSubmit={this.contact}>
        	<h6 className='footerTitle'>Contacto</h6>
            <p title='Email'>
              <a className='ease linkFooter' target='blank' rel='nooppener noreferrer' href='mailto:laboratorioveterinariogap@gmail.com'>
                <i className='fa fa-envelope footerActive'></i>{' '}
                laboratorioveterinariogap@gmail.com
              </a>
            </p>
            <p title='Teléfono'>
              <a className='ease linkFooter' target='blank' rel='nooppener noreferrer' href='tel:2923-654239'>
                <i className='fa fa-phone footerActive'></i>{' '}
                2923-654239
              </a>
            </p>
            <p title='Celular'>
              <a className='ease linkFooter' target='blank' rel='nooppener noreferrer' href='tel:249-4621157'>
                <i className='fa fa-mobile footerActive'></i>{' '}
                249-4621157
              </a>
            </p>
            <p title='Ciudad'>
              <a className='ease linkFooter' target='blank' rel='nooppener noreferrer' href='https://www.google.com/maps/place/pigue, AR'>
                <i className='fa fa-map-marker footerActive'></i>{' '}
                Pigüé, Buenos Aires, AR
              </a>
            </p>
            <p title='Dirección'>
              <i className='fa fa-address-card footerActive'></i>{' '}
              <small>25 de Mayo, 208, <b>CP:</b> 8170</small>
            </p>
        </form>
      </div>
    );
  }
}
          // <div className="g-recaptcha" data-sitekey="6Lf-VWcUAAAAACdhrclCc_8qjdHjLO1MQ-WqkuAm"></div>
		      // <input type='text' onChange={this.change} placeholder='Nombre' name="name" value={this.state.name} required/>
		      // <input type='email' onChange={this.change} placeholder='Email' name="email" value={this.state.email} required/>
		      // <textarea onChange={this.change} placeholder='Cuéntanos...' name="text" value={this.state.text} required></textarea>
        //   {
        //     this.state.submited ? (
        //       <input type='submit' value='Enviando...' disabled className='submited'/>
        //     ) : (
        //       <input type='submit' value='Enviar'/>
        //     )
        //   }