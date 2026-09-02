import { NavLink } from "react-router-dom";

export const PriceCardHome = ({
    badgeText = "Begin nu je opleiding!",
    oldPrice = "€105",
    price = "€70",
    priceUnit = "per uur",
    descriptions = [
        "Meerdere pakketen beschikbaar.",
        "Gespreid betalen mogelijk.",
        "Plan GRATIS lessen in de app."
    ],
    buttonText = "Tarieven en Pakketen",
    buttonLink = "/prijslijst"
}) => {
    return (
        <div id="price" className="tarieven-section mt-5">
          <h3 className="tarief-titel">
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
              Tarieven
          </h3>
          <div className="card-container">
                      <div className="main-card">
                          <div className="content-container">
                              <div className="content-top">
                                  <div className="scrollbar-glass">
                                      {badgeText}
                                  </div>
                                  <p className="price-crossed-out crossed-out">{oldPrice}</p>
                                  <div className="display-flex-row">
                                      <p className="price mr-05"> {price}</p>
                                      <p>{priceUnit}</p>
                                  </div>
                              </div>

                              <div className="content-bottom">
                                  {descriptions.map((text, index) => (
                                    <p key={index} className="description">
                                        <span>&#128073;</span>{text}
                                    </p>
                                  ))}
                              </div>

                              <div className="display-flex-column ht-100 mb-2">
                                  <NavLink 
                                    to={buttonLink} 
                                    draggable={false}>
                                    <button 
                                      className="on-top prevent-select secondary-button" 
                                      draggable={false}>
                                      {buttonText}
                                    </button>
                                  </NavLink>
                              </div>
                          </div>
                      </div>
          </div>
        </div>
    )
}

{/* Created by willemwebdev.com */}