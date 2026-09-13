import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const STORAGE_KEY = 'privacyAndTermsAccepted3'; // if terms are updated, change this key

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
        <div className="privacy-overlay">
            <div className="privacy-modal">
                <h2 className='mb-05'>Privacy Beleid & Algemene Voorwaarden</h2>
                <p className='privacy-text'>
                Door deze site te gebruiken, gaat u akkoord met ons <Link to="/privacybeleid"><span className="privacy-policy-link">Privacybeleid</span></Link> en onze <Link to="/algemenevoorwaarden"><span className="algemene-voorwaarden-link"> Algemene Voorwaarden</span></Link>.
                </p>
                <div className="privacy-actions">
                <button className='secondary-button' onClick={handleAccept}>Ik ga akkoord</button>
                {/* Optional: Decline button that redirects or disables features */}
                </div>
            </div>
        </div>
    );
}

{/* Created by willemwebdev.com */}