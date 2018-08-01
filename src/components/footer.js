import React, { Component } from 'react'
import Contact from './contact'
import Muestra from './muestra'

export default class Footer extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <footer className="App-footer">
		<div className='container'>
			<div className='row'>
				<div className='col-4 left'>
					<Muestra />
				</div>
				<div className='col-4 social'>
					<h3 className='titleFooter'>Social</h3>
					<a className='linkFooter' target='blank' rel='nooppener noregerrer' href='http://www.facebook.com'>> FACEBOOK</a>
					<a className='linkFooter' target='blank' rel='nooppener noregerrer' href='http://www.instagram.com'>> INSTAGRAM</a>
				</div>
				<div className='col-4 left'>
					<Contact />
				</div>
			</div>
		</div>
      </footer>
    );
  }
}