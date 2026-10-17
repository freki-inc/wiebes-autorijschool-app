import { PriceCard } from "./PriceCard"

export const PriceComplete = () => {
    return (
        <section className="tarieven-section mt-5 p-b-1">
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
            <div>
                <p className="mb-05">&#128179; Transparante tarieven.</p>
                <p className="mb-2">&#128664; Een les duurt 90 min.</p>
            </div>
            <div className="price-card-wrapper">
                <PriceCard />
                <PriceCard 
                    badgeText="Basispakket"
                    text="5 lessen, totaal 7,5 uur rijles (90 min per les). Lessen voor €75 per uur! Inclusief praktijkexamen."
                    price="€ 890,-"
                />
                <PriceCard 
                    badgeText="Uitbreidingspakket"
                    text="5 lessen, totaal 7,5 uur rijles (90 min per les). Lessen voor € 75 per uur! Extra voordelig!"
                    price="€ 560,-"
                    observation="*Alleen mogelijk na aanschaf basis pakket."
                />
                
                <PriceCard 
                    badgeText="Herkansingspakket"
                    text="6 uur rijles (4 Lessen van 1.5 uur) Lessen voor €55,- per uur!! Herexamen praktijk voor €195,-"
                    price="€ 525,-"
                />
                <PriceCard 
                    badgeText="Losse Les"
                    text="60 min per les. Prive les. Extra voordelig!"
                    price="€ 75,-"
                />
                <PriceCard 
                    badgeText="Faalangst Examen"
                    text="Incl. 50 min inrijden. Meer aandacht met mogelijkheid tot time-out. Vergrote slagingskans."
                    price="€ 345,-"
                />
                <PriceCard 
                    badgeText="Tussentijdse toets"
                    text="Incl. 50 min inrijden. Toetsing rijvaardigheid. Evaluatie verbeterpunten. Vergrote slagingskans."
                    price="€ 305,-"
                />
                <PriceCard 
                    badgeText="Praktijkexamen"
                    text="Incl. 50 min inrijden. Afrijden bij het CBR. Nabespreking."
                    price="€ 330,-"
                />
            </div>
            
        </section>    
    )
}

{/* Created by willemwebdev.com */}