export const PriceCard = ({
    badgeText = "Proefles van 60 min",
    text1 = "Les van 60 min.",
    text2 = "Persoonlijk plan van aanpak.",
    text3 = "Voor leerlingen zonder ervaring.",
    text4 = "Nabespreking.",
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
                    <p className="price"> {price}</p>
                    <div className="description-wrapper mt-05 mb-1">
                        <p className="description">
                            <span>&#x2705;</span> {text1}
                        </p>
                        <p className="description">
                            <span>&#x2705;</span> {text2}
                        </p>
                        <p className="description">
                            <span>&#x2705;</span> {text3}
                        </p>
                        <p className="description">
                            <span>&#x2705;</span> {text4}
                        </p>
                    </div>
                    <p className="observation">{observation}</p>
                </div>
            </div>
        </div>
    )
}

{/* Created by willemwebdev.com */}