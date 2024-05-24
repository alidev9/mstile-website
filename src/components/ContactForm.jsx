import '../styles/contact-form.css'

function CompanyContactData({icon, alt, data}){
    return (
        <div className="company-detail">
            <img src={icon} alt={alt} />
            <span>{data}</span>
        </div>
    )
}

function UserInput({label, id, type, placeholder}){
    let formField
    type === 'textarea' 
    ? formField = <textarea name={id} id={id} placeholder={placeholder}></textarea>
    : formField = <input name={id} id={id} type={type} placeholder={placeholder}/>
    return (
        <div className="form-element">
            <label htmlFor={id}>{label}</label>
            {formField}
        </div>
    )
}

function ContactForm(){
    return (
        <div className="contact-form">
            <div className="contact-details-company">
                <img src="/mstile-website/mstile-logo.png" alt="mStile Logo" />

                <div className="company-contact-data-container">
                    <CompanyContactData icon={'/mstile-website/icons/phone-icon.svg'}
                    alt={'Phone Number'} data={'+1 254 8547 956'}/>
                    <CompanyContactData icon={'/mstile-website/icons/email-icon.svg'}
                    alt={'E-mail'} data={'info@mStile.com'}/>
                    <CompanyContactData icon={'/mstile-website/icons/map-icon.svg'}
                    alt={'Location'} data={'California 62639'}/>
                </div>
            </div>
            <form action="#" className="contact-details-client">
                <div className="form-header-container">
                    <h2>Get In Touch</h2>
                    <div>Any question or remarks? Let us know!</div>
                </div>
                <div className="form-element-container">
                    <UserInput label={'Name'} id={'name'} type={'text'} placeholder={'John Doe'}/>
                    <UserInput label={'Email'} id={'email'} type={'text'} placeholder={'john@example.com'}/>
                    <UserInput label={'Message'} id={'message'} type={'textarea'} placeholder={'Type your message here'}/>
                </div>
            </form>
        </div>
    )
}

export default ContactForm