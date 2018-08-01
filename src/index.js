import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

var config = {
	apiKey: "<REPLACE ME>",
	authDomain: "<REPLACE ME>",
	databaseURL: "<REPLACE ME>",
	projectId: "<REPLACE ME>",
	storageBucket: "<REPLACE ME>",
	messagingSenderId: "<REPLACE ME>"
}
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
