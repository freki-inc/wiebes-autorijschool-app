import { NavLink } from "react-router-dom";
import heroImg from "../assets/images/hero-img.webp"

export const Hero = () => {
    return (
        <div className="hero-section">
            <img src={heroImg} fetchPriority="high" className="hero-img" title="Wiebe’s Rijschool" alt="rijinstructeur Wiebe" draggable={false}></img>
            <div className="hero-call on-top">
                <p className="hero-slogan-1 on-top mt-1"><span>&#x1F697;</span> Snel je rijbewijs? <span>&#128512;</span></p>
                <button className="action-button on-top prevent-select mt-05" draggable={false}><NavLink to="/contact" draggable={false}>Proefles aanvragen</NavLink></button>
                <span className="hand-bounce hero-slogan-2-emoji mt-05">&#128070;</span>
            </div>
            <a href="#price" className="on-top">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2.5" 
                    stroke="currentColor" 
                    className="icon hero-move-down">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </a>
        </div>
    )
}

{/* Created by willemwebdev.com */}