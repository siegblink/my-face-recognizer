import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Spinner from './Spinner'

import './index.css'
import App from './App'
import 'tachyons'
import * as serviceWorker from './serviceWorker'

function Root() {
  const [isLoading] = useState(false)
  return isLoading ? <Spinner /> : <App />
}

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
