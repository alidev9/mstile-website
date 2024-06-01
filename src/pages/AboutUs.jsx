import '../mobile-first-styles/secondary-page-styles.css'
import ContactForm from '../components/ContactForm.jsx'

function AboutUs(){
    return(
        <main className='secondary-page'>
            <h1>About Us</h1>
            <div className="info-container">
                <p>mStile is a proffesional bathroom fitting company based in the South West area covering the whole of South West and Central London. After many years of providing outstanding bathroom fitting services.</p>
                <p>We are proud to announce that very soon we will be opening an offcial showroom. Such a showroom will deliver a unqiue face to face consultation experience about all  the products that we offer and give cleints an idea of the best mixes bretween desgin elegance and optimal funactioanlity. Along with free home surveys to help you design and budget for your ideal project.</p>
                <div className="aboutus-image-container image-block">
                    <img src="/mstile-website/about-us-images/harmony-suites-monte-carlo-sunny-beach-8.png" alt="" />
                    <img src="/mstile-website/about-us-images/image-5.png" alt="" />
                </div>
                <p>We have been helping customers transform their bathrooms into comfortable, unique, and inviting spaces. Our team of experienced designers and installers are passionate about creating beautiful bathrooms for our customers and we are excited to share our story with you.</p>
                <img src="/mstile-website/about-us-images/mstile-bathroom-gallery-9.png" alt="" className="image-block"/>
                <p>Our attention to detail, passion for quality, and expertise in the latest trends will make your remodeling project a pleasure from start to finish. Whether you're looking to create a modern, traditional, or contemporary bathroom, we'll make sure it's one that you'll love for years to come.</p>
            </div>
            <ContactForm />
        </main>
    )
}

export default AboutUs