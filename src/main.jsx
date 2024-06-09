import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//styles
import './styles/base-styles.css'
import './styles/home.css'
import './styles/secondary-page-styles.css'
import './styles/carousel-animation.css'
import './styles/contact-form.css'

import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
  </React.StrictMode>
)
