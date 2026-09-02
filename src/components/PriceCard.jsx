export const PriceCard = ({
    badgeText = "Proefles van 60 min",
    text = "Les van 60 min, persoonlijk plan van aanpak",
    price = "€50 per les",
}) => {
    return (
        <div id="price" className="card-container mb-2">
            <div className="main-card-price-card">
                <div className="content-top display-flex-row">
                    <div className="scrollbar-glass">
                        {badgeText}
                    </div>
                    <p className="description mb-05">
                        <span>&#128073;</span>{text}
                    </p>
                    <p className="price"> {price}</p>
                </div>
            </div>
        </div>
    )
}

{/* Created by willemwebdev.com */}