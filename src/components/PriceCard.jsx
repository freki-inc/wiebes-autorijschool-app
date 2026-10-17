export const PriceCard = ({
    badgeText = "Proefles van 60 min",
    text = "Les van 60 min, persoonlijk plan van aanpak.",
    price = "€50,-",
    observation = "",
}) => {
    return (
        <div id="price" className="card-container mb-2">
            <div className="price-card">
                <div className="content-top">
                    <div className="card-title">
                        <div className="card-title-border">
                            {badgeText}
                        </div>
                    </div>
                    <div className="description-wrapper mb-1">
                        <span>&#x2705;</span>
                        <p className="description">
                            {text}
                        </p>
                    </div>
                    <p className="price"> {price}</p>
                    <p className="observation">{observation}</p>
                </div>
            </div>
        </div>
    )
}

{/* Created by willemwebdev.com */}