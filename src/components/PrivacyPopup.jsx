import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.webp";

const STORAGE_KEY = 'privacyAndTermsAccepted6'; // if terms are updated, change this key

export const PrivacyPopup = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem(STORAGE_KEY);
        if (!accepted) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(STORAGE_KEY, 'true');
        setVisible(false);
    };

    if (!visible) return null;

    return (

        <div className="popup-overlay">
            <div className='popup-border'>
                <div className="popup-modal">
                    <img
                        src={logo} 
                        alt="Wiebe’s Autorijschool"
                        width="180rem"
                        draggable={false}
                        className="logo mb-1">
                    </img>
                    <p className='popup-text mb-1-5'>
                        Wij gebruiken cookies om onze website en onze service te optimaliseren.
                        Om deze site te gebruiken, klik op accepteren.
                    </p>
                    <div className="popup-actions mb-1-5">
                        <button className='secondary-button' onClick={handleAccept}>Accepteren</button>
                    </div>
                    <div className='popup-link-div'>
                        <Link to="/cookiebeleid"><span className="privacy-policy-link mr-1">Cookiebeleid</span></Link>
                        <Link to="/privacybeleid"><span className="privacy-policy-link">Privacybeleid</span></Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

{/* Created by willemwebdev.com */}