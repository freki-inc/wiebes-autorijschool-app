import { NavLink } from "react-router-dom";
import heroImg from "../assets/images/hero-img.webp"

export const Hero = () => {
    return (
        <div className="hero-section mt-4">
            <img src={heroImg} fetchPriority="high" className="hero-img" title="Wiebe’s Rijschool" alt="rijinstructeur Wiebe" draggable={false}></img>
            <div className="hero-call on-top">
                <p className="hero-slogan-1 on-top mt-1">
                <span className="emoticons">
                    &#128526;
                </span> 
                    ¡Viva la Rijvolutie!
                <span className="emoticons">
                    &#128076;
                </span>
                </p>
                <NavLink 
                    to="/contact" 
                    draggable={false}>
                    <button
                        className="on-top prevent-select mt-1 cta-button" 
                        draggable={false}>
                            Proefles aanvragen    
                    </button>
                </NavLink>
                <span className="hand-bounce emoticons hero-slogan-2-emoji mt-05">&#128070;</span>
            </div>
            <a href="#price" className="hero-down-position on-top">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2.5" 
                    stroke="currentColor" 
                    className="hero-move-down mb-1">
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