import { Link } from "react-router-dom";

import logo from "../assets/images/logo.webp";

export const NavBeleid = () => {
    return (
        <header>
            <nav>
                <div className="display-flex-row wd-100">
                    {/* Navigation logo */}
                    <Link to="/" draggable={false}>
                        <img
                            src={logo} 
                            alt="Rijvolutie"
                            width="126px"
                            height="56px"
                            draggable={false}
                            className="logo"
                            aria-label="Rijvolutie samen op weg"
                        />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

{/* Created by willemwebdev.com */}