import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'
import registerServiceWorker from './registerServiceWorker'

var config = {
    apiKey: "AIzaSyBU0rScH9MBLDxUFOe44a6Ylpg7hPnTSEY",
    authDomain: "gap-web-710bf.firebaseapp.com",
    databaseURL: "https://gap-web-710bf.firebaseio.com",
    projectId: "gap-web-710bf",
    storageBucket: "gap-web-710bf.appspot.com",
    messagingSenderId: "699369203075"
}
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
