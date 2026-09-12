import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-top mb-05">
                <div className="footer-left">
                    <p><strong>Rijinstructeur:</strong> Wiebe</p>
                    <p><strong>Tel:</strong> +31 6 19617569</p>
                    <p><strong>KVK nummer:</strong> 63176734</p>
                </div>
                <div className="footer-right">
                    <p><strong>Bereikbaarheid:</strong></p>
                    <p>Maandag t/m Vrijdag</p>
                    <p>08:00 - 17:00</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="algemene-voorwaarden-privacy-beleid-div">
                    <NavLink to="/algemenevoorwaarden"><p className="algemene-voorwaarden-link">Algemene Voorwaarden Wiebe’s Autorijschool</p></NavLink>
                    <NavLink to="/privacybeleid"><p className="privacy-policy-link">Privacy Beleid Wiebe’s Autorijschool</p></NavLink>
                </div>
                
                <p><strong>&copy;</strong> 2026 Alle rechten voorbehouden</p>
            </div>
        </footer>
    )
}

{/* Created by willemwebdev.com */}