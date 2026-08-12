import { NavLink } from "react-router-dom";

import { WhatsAppButton } from './WhatsappButton'

export const Contact = () => {

    return (
        <div id='contact' className="contact-section">
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
                <p className="mt-1">Er zijn allerlei mogelijkheden wanneer het om praktijklessen gaat. Ook kun je kiezen voor een snelcursus, opfriscursus of zelfs de 2toDrive methode, waarbij je al op je 16,5 mag beginnen met rijlessen.</p>
                <p className="mt-1">Neem voor meer informatie contact met ons op.</p>
            </div>
            <WhatsAppButton />
            <div className="contact-form">
                <form className="form wd-100" action="https://formsubmit.co/email@email.com" method="POST"> {/* Moet nog worden gemaakt */}
                    
                    <label className="form-label display-flex-row mb-1" htmlFor="name">
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
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
                                />
                        </svg>
                        <strong>Naam:</strong>
                    </label>
                    
                    <input className="input" type="text" id="name" name="name" placeholder="Hier uw naam invullen..." required maxLength="50"/>
                    
                    <label className="form-label display-flex-row mb-1" htmlFor="email">
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
                                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" 
                                />
                        </svg>
                        <strong>Email:</strong>
                    </label>

                    <input className="input" type="email" id="email" name="email" placeholder="Hier uw Email invullen..." required maxLength="60"/>  
                    
                    <label className="form-label display-flex-row mb-1" htmlFor="tel">
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
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" 
                                />
                        </svg>
                        <strong>Telefoonnummer:</strong>
                    </label>

                    <input className="input" type="tel" id="tel" name="tel" placeholder="Hier uw telefoonnummer invullen..." required maxLength="15" onInput={(e) => { {/*Live filtering: remove anything that's not allowed*/} e.target.value = e.target.value.replace(/[^0-9+\s-]/g, '')}}/>  

                    <label className="form-label display-flex-row mb-1" htmlFor="message">
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
                                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" 
                                />
                        </svg>
                        <strong>Message:</strong>
                    </label>
                    
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="8" 
                        cols="20" 
                        placeholder="Hier uw bericht invullen..." 
                        required 
                        maxLength="300"
                        className="text-area mb-1"
                    >
                    </textarea>
                    
                    <label className="consent" htmlFor="consent">
                        <p className="font-size-sm p-1">
                            <input id="consent" type="checkbox" name="consent" required/>
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
                            Ik ga akkoord met het <NavLink to="/privacybeleid">Privacybeleid</NavLink> en geef toestemming om mijn gegevens op te slaan voor reactiedoeleinden.
                        </p>
                    </label>
                    {/* Prevent spam bots */}
                    <input type="hidden" name="_captcha" value="true"/>
                    {/* Redirect after submit */}
                    <div className="nu-boeken display-flex-row">
                        <input type="hidden" name="_next" value="https://www.wiebes-rijschool.nl/hartelijk-dank.html"/>
                        <input className="action-button mt-1" type="submit" value="Verzenden"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

{/* Created by willemwebdev.com */}