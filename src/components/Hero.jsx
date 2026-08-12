import { NavLink } from "react-router-dom";
import heroImg from "../assets/images/hero-img.webp"
import logo from "../assets/images/logo.webp"

export const Hero = () => {
    return (
        <div className="hero-section">
            <img src={heroImg} fetchPriority="high" className="hero-img" title="Wiebe’s Rijschool" alt="rijinstructeur Wiebe"></img>
            <img className="logo on-top mb-1" src={logo} alt="Wiebe’s Autorijschool"></img>
            {/* <h1 className="hero-title on-top">Wiebe’s Autorijschool</h1> */}
            <h2 className="hero-quote on-top mb-1">Autorijden geeft je vrijheid</h2>
            <button className="action-button on-top"><NavLink to="/contact">Proefles aanvragen</NavLink></button>
        </div>
    )
}

{/* Created by willemwebdev.com */}