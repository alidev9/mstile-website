import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/base-styles.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import FAQ from './pages/FAQ.jsx'
import Services from './pages/Services.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about-us',
    element: <AboutUs />
  },
  {
    path: '/frequently-asked-questions',
    element: <FAQ />
  },
  {
    path: '/services',
    element: <Services />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Header />
      <RouterProvider router={router}/>
      <Footer />
    </>
  </React.StrictMode>
)
