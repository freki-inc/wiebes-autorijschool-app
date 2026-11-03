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
                            alt="Rijvolutie samen op weg"
                            width={126}
                            height={56}
                            draggable={false}
                            className="logo"
                        />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

{/* Created by willemwebdev.com */}