import '../styles/secondary-page-styles.css'
import '../styles/carousel-animation.css'
import ContactForm from '../components/ContactForm.jsx'

function Services(){
    return (
        <main>
            <h1>Services</h1>
            <div className="info-container">
                <p>Our most provided service within our company is our full bathroom installations.</p>
                <div className="carousel-container image-block">
                    <div className="carousel">
                        <img src="/mstile-website/homepage-images/stretch-ceiling-design-1 1.jpg" alt="" />
                        <img src="/mstile-website/services-images/mstile-bathroom-gallery-8.png" alt=""/>
                        <img src="/mstile-website/services-images/white-tiles-bathroom.jpg" alt="" />
                        <img src="/mstile-website/homepage-images/stretch-ceiling-design-1 1.jpg" alt="" />
                    </div>
                </div>
                <p>Wether you are after a full bathroom renovation or simply a small tiling job, we are here to help with any of the services required above.</p>
                <div className="services-image-container image-block">
                    <img src="/mstile-website/services-images/black-white-hexagon-tiling.png" alt="" />
                    <div className="services-image-column">
                        <img src="/mstile-website/services-images/ceiling-service-painting.png" alt="" />
                        <img src="/mstile-website/services-images/sdb-particulierbai01.png" alt="" />
                    </div>
                    <img src="/mstile-website/services-images/image-group-5.png" alt="" />
                </div>
                <p>For any questions or a free quatotation for your project, we are excited to hear from you, so go ahead and fill in the contact form below to get in touch with us today, making another step closer to turning your dream project into a reality.</p>
            </div>
            <ContactForm />
        </main>
    )
}

export default Services