import { Link } from "react-router-dom";

export const PriceCardHome = ({
    badgeText = "Begin nu je opleiding!",
    // oldPrice = "€105",
    price = "€75",
    priceUnit = "per uur",
    // descriptions = [
    //     "Basispakket",
    //     "Uitbreidingspakket",
    //     "Herkansingspakket"
    // ],
    buttonText = "Tarieven en Pakketten",
    buttonLink = "/prijslijst"
}) => {
    return (
        <section id="price" className="tarieven-section-home mt-5">
          <h2 className="tarief-titel">
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                   strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="icon mr-05">
                      <path 
                          strokeLinecap="round"
                          strokeLinejoin="round" 
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" 
                      />
              </svg>
              Tarieven
          </h2>
          <div className="card-container">
                      <div className="home-price-card">
                          <div className="content-container">
                              <div className="home-content-top">
                                  <div className="card-title">
                                    <div className="card-title-border">
                                        {badgeText}
                                    </div>
                                  </div>
                                  {/* <del className="price-crossed-out mb-05">{oldPrice}</del> */}
                                  <div className="display-flex-row">
                                      <p className="price mr-05"> {price}</p>
                                      <p className="price-unit">{priceUnit}</p>
                                  </div>
                              </div>

                              {/* <div className="content-bottom">
                                  {descriptions.map((text, index) => (
                                    <p key={index} className="description">
                                        <span>&#x2705; </span>{text}
                                    </p>
                                  ))}
                              </div> */}

                              <div className="display-flex-column ht-100 mb-2">
                                  <Link 
                                    to={buttonLink} 
                                    className="on-top prevent-select secondary-button"
                                    draggable={false}
                                  >
                                      {buttonText}
                                  </Link>
                              </div>
                          </div>
                      </div>
          </div>
        </section>
    )
}

{/* Created by willemwebdev.com */}