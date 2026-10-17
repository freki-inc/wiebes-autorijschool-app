import { NavLink } from "react-router-dom";
import heroImg from "../assets/images/hero-img.webp"

export const Hero = () => {
    return (
        <section className="hero-section mt-4">
            <div className="hero-img-wrapper">
                <img 
                    src={heroImg} 
                    fetchPriority="high" 
                    className="hero-img" 
                    title="Wiebe’s Rijschool" 
                    alt="rijinstructeur Wiebe" 
                    draggable={false}
                >
                </img>
            </div>

            <div className="hero-content">
                <p className="hero-slogan">
                <span className="emoticons">
                    &#128526;
                </span> 
                    ¡Viva la Rijvolutie!
                <span className="emoticons">
                    &#x270A;
                </span>
                </p>
                <p className="hero-text-1">
                    Leer autorijden als een baas. Rij in een moderne Opel Mokka (handgeschakeld) of een Tesla (automaat).
                </p>
                <NavLink 
                    to="/contact" 
                    draggable={false}>
                    <button
                        className="on-top prevent-select cta-button" 
                        draggable={false}>
                            Proefles aanvragen    
                    </button>
                </NavLink>
                <span className="hand-bounce emoticons hero-hand-emoji mt-05">&#128070;</span>
                <p className="hero-text-2">Proefles van 60 minuten voor €50</p>
            </div>

            {/* <a href="#price" className="hero-down-position on-top" aria-label="Scroll down">
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
            </a> */}
        </section>
    )
}

{/* Created by willemwebdev.com */}