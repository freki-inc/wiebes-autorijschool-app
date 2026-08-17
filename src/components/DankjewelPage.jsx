import { NavLink } from "react-router-dom";

import dankjewel from "../assets/images/dankjewel.webp"
import logo from "../assets/images/logo.webp"

export const DankjewelPage = () => {
    return (
        <div className="dankjewel">
            <img src={logo} alt="Wiebe’s Autorijschool" className="logo mb-2" />
            <img src={dankjewel} alt="Rijles" />
            <h1 className="mt-1">Dankjwel!</h1>
            <p className="center-text">Je bericht is verstuurd. We nemen zo snel mogelijk contact met je op!</p>
            <div className="display-flex-row mt-1">
                <button className="action-button on-top prevent-select mt-05" draggable={false}><NavLink to="/" draggable={false}>Terug naar Homepage</NavLink></button>
            </div>
        </div>
    )
}