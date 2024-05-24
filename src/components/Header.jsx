function Header(){
    return (
        <header>
            <img src="/mstile-logo.png" alt="mStile Logo"/>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/frequently-asked-questions">FAQ</a></li>
                    <li><a href="/services">Services</a></li>
                </ul>
            </nav>
            <div className="header-banner">
                <h1>Affordable Luxury Bathrooms</h1>
                <div>Get in touch today, to get a free quote for your dream bathroom...</div>
            </div>
        </header>
    )
}

export default Header
