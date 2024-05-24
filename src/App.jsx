import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import FAQ from './pages/FAQ.jsx'
import Services from './pages/Services.jsx'
import Footer from './components/Footer.jsx'
import { Link, Routes, Route} from 'react-router-dom'

function App(){
    return (
        <>
            <header>
                <img src="/mstile-website/mstile-logo.png" alt="mStile Logo"/>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                        <li><Link to='/frequently-asked-questions'>FAQ</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                    </ul>
                </nav>
                <div className="header-banner">
                    <h1>Affordable Luxury Bathrooms</h1>
                    <div>Get in touch today, to get a free quote for your dream bathroom...</div>
                </div>
            </header>
            <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/about-us' element={<AboutUs />} />
                  <Route path='/frequently-asked-questions' element={<FAQ />} />
                  <Route path='/services' element={<Services />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App