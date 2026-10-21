import { WhatsAppButton } from './WhatsappButton';
import contactImg from '../assets/images/contact.webp';

export const Contact = () => {

    return (
        <section className="contact-section">
            <h3 className="contact-titel">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5"
                    stroke="currentColor" 
                    className="icon">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" 
                        />
                </svg>
                Contact
            </h3>
            <div className='contact-desktop-content'>
                <img className='contact-img' src={contactImg} alt="rijinstructeur"></img>
                <div id='contact' className="contact-wrapper">
                    <div className="contact-text">
                        <p className="mt-2">Neem vrijblijvend contact op om kennis te maken en een proefles in te plannen. Deze kost maar 50 euro en duurt 60 min.</p>
                    </div>
                    <div className='whatsapp-wrapper mt-2'>
                        <span className="hand-point-right emoticons hero-slogan-2-emoji mr-02">&#128073;</span>
                        <div className="whatsapp-contact-div">
                            <WhatsAppButton />
                        </div>
                        <span className="hand-point-left emoticons hero-slogan-2-emoji ml-02">&#128072;</span>
                    </div>
                </div>
            </div>

        </section>

    )
}

{/* Created by willemwebdev.com */}