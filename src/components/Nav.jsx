import { Link, NavLink } from "react-router-dom";
import { useState } from 'react'
import { WhatsAppButton } from './WhatsappButton'

import logo from "../assets/images/logo.webp"

const NavLogic = ({ isOpen, onOpen, onClose }) => {
    return (
        <header>
            <nav>
                {/* Whatsapp logo */}
                <WhatsAppButton />
                {/* Navigation logo */}
                <Link to="/" draggable={false}>
                    <img
                        src={logo} 
                        alt="Wiebe’s Autorijschool"
                        draggable={false}
                        className="logo">
                    </img>
                </Link>

                {/* Hamburger menu icon */}
                <button type="button" className="nav-open-button" onClick={onOpen}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="nav-open-button-icon">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                    </svg>
                </button>

                {/* Hamburger menu */}
                <ul id="site-links" className={`site-links ${isOpen ? 'open' : ''}`}>

                    <Link to="/" onClick={onClose}>
                        <img
                            src={logo} alt="Wiebe’s Autorijschool"
                        />
                    </Link>

                    <li>
                        <button type="button" onClick={onClose}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="icon"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M6 18 18 6M6 6l12 12" 
                            />
                            </svg>
                            Sluiten
                        </button>
                    </li>

                    <li>
                        <NavLink to="/" end onClick={onClose}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="icon">
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" 
                                    />
                            </svg>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/prijslijst" onClick={onClose}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="icon">
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                                    />
                             </svg>
                             Prijslijst
                        </NavLink>
                        
                    </li>  
                    <li>
                        <NavLink to="/walloffame" onClick={onClose}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="icon">
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" 
                                    />
                            </svg>
                            Wall of Fame
                        </NavLink>   
                    </li>
                    <li>
                        <NavLink to="/overons" onClick={onClose}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="icon">
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" 
                                    />
                            </svg>
                            Over ons
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={onClose}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="icon">
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" 
                                    />
                            </svg>
                            Contact
                        </NavLink>
                    </li>
                </ul>


            </nav>
        </header>
    )
}

export const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <NavLogic 
            isOpen={isNavOpen}
            onOpen={() => setIsNavOpen(true)}
            onClose={() => setIsNavOpen(false)}
        />
    )
}

{/* Created by willemwebdev.com */}