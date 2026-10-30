import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-top mb-05">
                <div className="footer-left">
                    <strong className="footer-highlight">Rijinstructeur:</strong>
                    <p> Wiebe Spierenburg</p>
                    <strong className="footer-highlight">KVK nummer:</strong>
                    <p> 63176734</p>
                </div>
                <div className="footer-right">
                    <p className="footer-highlight"><strong>Bereikbaarheid:</strong></p>
                    <p>Maandag t/m Vrijdag</p>
                    <p>08:00 - 17:00</p>
                    <p><strong className="footer-highlight">Tel:</strong> +31 6 19617569</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="algemene-voorwaarden-privacy-beleid-div mb-05">
                    <NavLink to="/algemenevoorwaarden"><p className="algemene-voorwaarden-link mb-05">Algemene Voorwaarden Rijvolutie</p></NavLink>
                    <NavLink to="/privacybeleid"><p className="privacy-policy-link">Privacy Beleid Rijvolutie</p></NavLink>
                </div>
                
                <p className="footer-copyright"><strong>&copy;</strong> 2026 Alle rechten voorbehouden</p>
            </div>
        </footer>
    )
}

{/* Created by willemwebdev.com */}