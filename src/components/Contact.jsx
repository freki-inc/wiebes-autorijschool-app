import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

export const Contact = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="contact-section wd-100 psection">
            <div className="contact-text">
                <h3 className="contact-titel display-flex-row"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>En hoe nu verder?</h3>
                <p className="mt-1">Er zijn allerlei mogelijkheden wanneer het om praktijklessen gaat. Ook kun je kiezen voor een snelcursus, opfrscursus of zelfs de 2toDrive methode, waarbij je al op je 16,5 mag beginnen met rijlessen.</p>
                <p className="mt-1">Neem voor meer informatie contact met ons op.</p>
            </div>
            <div className="contact-form">
                <form className="form wd-100" action="https://formsubmit.co/email@email.com" method="POST"> {/* Moet nog worden gemaakt */}
                    <label className="form-label display-flex-row mb-1" for="name"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg><strong>Naam:</strong></label>
                    <input className="input" type="text" id="name" name="name" placeholder="Hier uw naam invullen..." required maxlength="50"/>
                    <label className="form-label display-flex-row mb-1" for="email"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" /></svg><strong>Email:</strong></label>
                    <input className="input" type="email" id="email" name="email" placeholder="Hier uw Email invullen..." required maxlength="60"/>  
                    <label className="form-label display-flex-row mb-1" for="tel"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg><strong>Telefoonnummer:</strong></label>
                    <input className="input" type="tel" id="tel" name="tel" placeholder="Hier uw telefoonnummer invullen..." required maxlength="15" onInput={(e) => { {/*Live filtering: remove anything that's not allowed*/} e.target.value = e.target.value.replace(/[^0-9+\s-]/g, '')}}/>  
                    <label className="form-label display-flex-row mb-1" for="datum"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg><strong>Datum proefles:</strong></label>
                    <Flatpickr
                        id="datum"
                        name="datum"
                        className="input"
                        value={selectedDate}
                        onChange={([date]) => setSelectedDate(date)}
                        options={{
                            dateFormat: "Y-m-d H:i",   // Year, month, day hour min
                            enableTime: true,
                            time_24hr: true,
                            minDate: "today",           // optional: prevent past dates
                            placeholder: "Kies een datum...",
                        }}
                        // Form submission
                        inputprops={{
                            required: true,
                            readOnly: true,   // prevents manual typing
                        }}
                    />
                    <label className="form-label display-flex-row mb-1" for="message"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg><strong>Kies een optie:</strong></label>
                    <div className="radio-wrapper">
                        <label className="radio"><input type="radio" id="keuze-basispakket" name="message" required/>Basispakket</label>
                        <label className="radio"><input type="radio" id="keuze-snelcursus" name="message" required/>Snelcursus</label>
                        <label className="radio"><input type="radio" id="keuze-opfriscursus" name="message" required/>Opfriscursus</label>
                        <label className="radio"><input type="radio" id="keuze-2todrive" name="message" required/>2toDrive</label>
                    </div>
                    <label className="consent" for="consent"><p className="ml-05"><input id="consent" type="checkbox" name="consent" required/><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-check"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>Ik ga akkoord met het <a className="privacy" href="https://www.termsfeed.com/live/7331e395-ec08-4e87-aa1c-0513a0a50794" target="_blank">Privacybeleid</a> en geef toestemming om mijn gegevens op te slaan voor reactiedoeleinden.</p></label>
                    {/* Prevent spam bots */}
                    <input type="hidden" name="_captcha" value="true"/>
                    {/* Redirect after submit */}
                    <div className="nu-boeken display-flex-row">
                        <input type="hidden" name="_next" value="https://www.wiebes-rijschool.nl/hartelijk-dank.html"/>
                        <input className="tarief-button mt-1" type="submit" value="Verzenden"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

{/* Created by willemwebdev.com */}