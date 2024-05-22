import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/base-styles.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
//import Home from './Home.jsx'
import FAQ from './pages/FAQ.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Header />
      <FAQ />
      <Footer />
    </>
  </React.StrictMode>
)
