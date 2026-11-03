import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-img.webp";

export const Hero = () => {
    return (
        <section className="hero-section" aria-labelledby="hero-title">
            <div className="hero-img-wrapper">
                <img 
                    src={heroImg}
                    width={500}
                    height={296}
                    fetchPriority="high" 
                    className="hero-img" 
                    alt="Rijinstructeur Wiebe geeft een duimpje omhoog vanuit het raam van de Tesla lesauto." 
                    draggable={false}
                />
            </div>

            <div className="hero-content">
                <div className="hero-content-desktop-container">
                    <h1 id="hero-title" className="hero-title">
                        Rijvolutie
                    </h1>
                    <p className="hero-slogan">
                    <span className="emoticons" aria-hidden="true">
                        &#128526;
                    </span> 
                    <span lang="es">¡Viva la </span>
                        Rijvolutie!
                    <span className="emoticons" aria-hidden="true">
                        &#x270A;
                    </span>
                    </p>
                    <p className="hero-text-1">
                        Leer autorijden als een baas. Rij in een moderne Opel Mokka (handgeschakeld) of een Tesla (automaat).
                    </p>                    
                    <Link 
                        to="/contact"
                        className="on-top prevent-select cta-button" 
                        draggable={false}>
                                Proefles aanvragen    
                    </Link>
                    <span className="hand-bounce emoticons hero-hand-emoji mt-05" aria-hidden="true">&#128070;</span>
                    <p className="hero-text-2">Proefles van 60 minuten voor €50</p>
                </div>
            </div>
        </section>
    )
}

{/* Created by willemwebdev.com */}