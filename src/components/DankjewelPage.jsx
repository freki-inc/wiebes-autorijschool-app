import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.webp"

export const DankjewelPage = () => {
    return (
        <div className="dankjewel">
            <img src={logo} alt="Wiebe’s Autorijschool" className="logo mb-2 p-lr-2" />
            <h1 className="mt-1">Dankjwel!</h1>
            <p className="mt-1 center-text">Je gegevens zijn geregistreerd!</p>
            <div className="display-flex-row mt-1">
                <button className="secondary-button on-top prevent-select mt-05" draggable={false}><NavLink to="/" draggable={false}>Terug naar Homepage</NavLink></button>
            </div>
        </div>
    )
}