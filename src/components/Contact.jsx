import { useState } from "react";
import { NavLink } from "react-router-dom";

import { WhatsAppButton } from './WhatsappButton';
import contactImg from '../assets/images/contact.webp';

export const Contact = () => {

    const [consentGiven, setConsentGiven] = useState(false);

    return (
        <div id='contact' className="contact-section mt-5">
            
            <div className="contact-text">
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
                <img src={contactImg} alt="rijinstructeur"></img>
                <p className="mt-1">Neem vrijblijvend contact op om kennis te maken en een proefles in te plannen. Deze kost maar 50 euro en duurt 1 uur.</p>
                <p className="mt-1">Geef daarbij ook aan of je in een automaat of handgeschakelde auto wilt rijden.</p>
            </div>

            <div className="display-flex-row mt-2">
                <WhatsAppButton disabled={!consentGiven} />
                <p className='wpp-text ml-05'>Chat met WhatsApp</p>
            </div>

            <form className="display-flex-column mt-1">
                <label className="consent" htmlFor="consent">
                    <p className="font-size-sm p-1">
                        <input 
                            id="consent" 
                            type="checkbox" 
                            name="consent" 
                            required
                            checked={consentGiven}
                            onChange={(e) => setConsentGiven(e.target.checked)}    
                        />
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="size-check">
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="m4.5 12.75 6 6 9-13.5" 
                                />
                        </svg>
                        Ik ga akkoord met de <NavLink to="/algemenevoorwaarden">Algemene Voorwaarden Rijvolutie</NavLink> en geef toestemming om mijn gegevens op te slaan voor reactiedoeleinden.
                    </p>
                </label>
            </form>
        </div>
    )
}

{/* Created by willemwebdev.com */}