import '../styles/base-styles.css'
import '../styles/faq.css'
import ContactForm from '../components/ContactForm.jsx'
import { v4 as uuidv4 } from 'uuid'

const faqData = [
    {
        id: uuidv4(),
        question: 'What services does mStile offer?',
        answer: 'mStile provides a full range of bathroom design services, including design consultations, space planning, product selection, installation, and project management. We specialize in creating custom bathrooms that are both stylish and functional.'
    },
    {
        id: uuidv4(),
        question: 'What type of products do you carry?',
        answer: 'We carry a wide range of high-end products, including vanities, toilets, showers, tubs, faucets, and accessories. We also offer various tile, flooring, and wall treatments to complete the look of your bathroom.'
    },
    {
        id: uuidv4(),
        question: 'Do you offer installation services?',
        answer: 'Yes, we offer installation services for all of the products that we carry. Our team of experienced professionals can help you with your project from start to finish.'
    },
    {
        id: uuidv4(),
        question: 'What kind of warranty does mStile offer?',
        answer: 'mStile offers a comprehensive 3-year warranty on all our products and services.'
    },
    {
        id: uuidv4(),
        question: 'Does mStile offer a design service?',
        answer: 'Yes, we offer a comprehensive design service to help you create the perfect bathroom for your home. Our team of experienced designers will work with you to develop a design that meets your needs and budget.'
    },
    {
        id: uuidv4(),
        question: 'How long does a typical project take?',
        answer: 'The length of a project will depend on the complexity of the design, the materials chosen, and the availability of products. On average, a project will take between 1-2 weeks to complete.'
    }
]

function FAQ(){
    return (
        <main>
            <h1>Frequently Asked Questions</h1>
            <div className="faq-list-container">
                {faqData.map((faqItem) => {
                    return (
                        <div key={faqItem.id} className="faq-item-container">
                                <h2>{faqItem.question}</h2>
                                <p>{faqItem.answer}</p>
                        </div>
                    )
                })}
            </div>
            <ContactForm />
        </main>
    )
}

export default FAQ