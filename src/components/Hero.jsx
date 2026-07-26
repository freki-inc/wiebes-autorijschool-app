import heroImg from "./src/assets/images/hero-img.webp"
import logo from "./src/assets/images/logo.webp"

export const Hero = () => {
    return (
        <div className="hero-section flex-column">
            <img src={heroImg} fetchpriority="high" className="hero-img" title="Wiebe’s Rijschool" alt="rijinstructeur Wiebe"></img>
            <img className="logo-site-links on-top" src={logo} alt="Wiebe’s Autorijschool"></img>
            {/* <h1 className="hero-title on-top">Wiebe’s Autorijschool</h1> */}
            <h2 className="hero-quote on-top mb-1">Autorijden geeft je vrijheid</h2>
            <button className="hero-button on-top">Proefles aanvragen</button>
            <p className="hero-p on-top">Leiden, Katwijk, Noordwijk, Wassenaar, Leiderdorp, Oegstgeest, Voorschoten</p>
        </div>
    )
}

{/* Created by willemwebdev.com */}