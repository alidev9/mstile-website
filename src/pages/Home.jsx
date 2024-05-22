import '../styles/home.css'

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function Home(){
    return (
        <>
            <Header />
            <main>
                <div className="feature-container">
                    <img src="/assets/float-image-1.jpg" alt=""/>
                    <div className="feature-text-wrapper">
                        <h2>
                            Award-Winning Design expertise...
                        </h2>
                            <p>
                                mStile offers a complete  design and installation service for your desired luxury bathroom, that matches your unique preferences and requirements.
                            </p> 
                            <p>
                                With over a decade of experience in our sector, our team of industry leading professionals can help you design a truly bespoke bathroom, that incorporates the highest standards of functionality, and meets all your individual needs and preferences.
                            </p>
                    </div>
                </div>
                <div className="feature-container">
                    <img src="/assets/float-image-2.jpg" alt=""/>
                    <div className="feature-text-wrapper">
                        <h2>
                            Attention to detail...
                        </h2>
                        <p>
                            Our bathroom Installation and renovation service puts your vision first.
                        </p>
                        <p>
                            We will work with you to create a unique and customized look that reflects your personal style and taste, whilst also incorporating the use of the best materials and design processes available.  
                        </p>
                    </div>
                </div>
                <img src="/assets/stretch-ceiling-design-1 1.jpg" alt="Stretch Ceiling Design" className="middle-image"/>
                <div className="feature-container stretch-ceiling">
                    <h2>Introducing Innovation...</h2>
                    <p>
                        Alongside designing and fitting bathrooms, mStile also provides an array of professional tiling options, LVT and Vinyl fitting as well as our 3D illuminated  ceiling confgurations for customers who would like to add something totally different to their home.
                    </p>
                    <img src="/assets/float-image-3.jpg" alt="" className="floating-image-1"/>
                    <p>
                        3D illuminated ceilings, also known as Stretch Ceilings are a smart way to give your bathroom unqiue flare and maxermise the 'wow' effect. Made from highly durable PVC streach material  which gives increased acoustic effect, and is easily washable making an excelelnt addtion to a customised bathroom.
                    </p>
                    <div>
                        If you'd like to find out more about the product in detail please <a href="#">click here</a>.
                    </div>
                    <img src="/assets/acoustic-wall-covering-designer-company 1.jpg" alt="" className="main-banner-1"/>
                    <p>
                        Streach seilings can be applied in all types of rooms in your home as far as your imagination can stretch, from bathrooms, to bedrooms, living rooms, conference rooms, kitchens, garages even a commerical setting; ideal for offices, pub bathrooms, hairdressers, restaurants, spa centres and many more.
                    </p>
                    <div>
                        An interesting feature to impress anyone at either your home or any business place.
                    </div>
                </div>
            </main>
            <Footer />
        </>   
    )
}

export default Home


