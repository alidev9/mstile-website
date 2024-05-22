import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/base-styles.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
//import Home from './pages/Home.jsx'
//import FAQ from './pages/FAQ.jsx'
import AboutUs from './pages/AboutUs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Header />
      <AboutUs />
      <Footer />
    </>
  </React.StrictMode>
)
