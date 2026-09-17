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
                            alt="Wiebe’s Autorijschool"
                            width="180rem"
                            draggable={false}
                            className="logo">
                        </img>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

{/* Created by willemwebdev.com */}