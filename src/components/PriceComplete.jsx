import { PriceCard } from "./PriceCard"

export const PriceComplete = () => {
    return (
        <section className="tarieven-section p-b-1">
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
            <div className="tarief-text">
                <p className="mb-05"><span aria-hidden="true">&#128179; </span>Transparante tarieven, zeer voordelig.</p>
                <p className="mb-2"><span aria-hidden="true">&#128664; </span>Kies jouw pakket, begin je opleiding nu!</p>
            </div>
            <div className="price-card-wrapper">
                <div className="price-card-top">
                    <PriceCard 
                        badgeText="Basispakket"
                        text1="5 lessen, 90 min per les."
                        text2="Plan zelf je lessen in de app."
                        text3="Lessen voor €75 per uur!"
                        text4="Incl. praktijkexamen."
                        price="€ 890,-"
                    />
                    <PriceCard 
                        badgeText="Uitbreidingspakket"
                        text1="5 lessen, 90 min per les."
                        text2="Plan zelf je lessen in de app."
                        text3="Lessen voor € 75 per uur!"
                        text4="Zeer voordelig!"
                        price="€ 560,-"
                        observation="*Alleen mogelijk na aanschaf basis pakket."
                    />
                    
                    <PriceCard 
                        badgeText="Herkansingspakket"
                        text1="4 Lessen van 90 min."
                        text2="Lessen voor €55,- per uur!!"
                        text3="Incl. herexamen praktijk (€195,-)"
                        text4="Extra voordelig!"
                        price="€ 525,-"
                    />
                </div>
                <div className="price-card-middle">
                    <PriceCard />
                    <PriceCard 
                        badgeText="Losse Les"
                        text1="60 min per les."
                        text2="Prive les, geen afleidingen."
                        text3="Bepaal zelf hoeveel lessen je wilt."
                        text4="Vaste instructeur."
                        price="€ 75,-"
                    />
                </div>
                <div className="price-card-bottom">

                    <PriceCard 
                        badgeText="Faalangst Examen"
                        text1="Incl. 50 min inrijden."
                        text2="Extra aandacht."
                        text3="Mogelijkheid tot time-out."
                        text4="Vergrote slagingskans."
                        price="€ 345,-"
                    />
                    <PriceCard 
                        badgeText="Tussentijdse toets"
                        text1="Incl. 50 min inrijden."
                        text2="Toetsing rijvaardigheid."
                        text3="Evaluatie verbeterpunten."
                        text4="Verbetert je slagingskans."
                        price="€ 305,-"
                    />
                    <PriceCard 
                        badgeText="Praktijkexamen"
                        text1="Incl. 50 min inrijden."
                        text2="Wij regelen de aanvraag."
                        text3="Afrijden bij het CBR."
                        text4="Nabespreking."
                        price="€ 330,-"
                    />
                </div>

            </div>
            
        </section>    
    )
}

{/* Created by willemwebdev.com */}