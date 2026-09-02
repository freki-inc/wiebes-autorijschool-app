import { PriceCard } from "./PriceCard"

export const PriceComplete = () => {
    return (
        <div className="tarieven-section mt-5 p-b-1">
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
                    text="5 lessen, totaal 7,5 uur rijles (90 min per les). Lessen voor €70 per uur! Inclusief praktijkexamen"
                    price="€ 825,-"
                />
                <PriceCard 
                    badgeText="Uitbreidingspakket"
                    text="5 lessen, totaal 7,5 uur rijles (90 min per les). Lessen voor € 70 per uur! Extra voordelig! *"
                    price="€ 525,-"
                />
                <PriceCard 
                    badgeText="Losse Les"
                    text="90 min per les. Prive les. Extra voordelig!"
                    price="€ 70,-"
                />
                <PriceCard 
                    badgeText="Herkansingspakket"
                    text="6 uur rijles (4 Lessen van 1.5 uur en herexamen voor €175) Lessen voor €50,- per uur!! Herexamen praktijk voor €175,-"
                    price="€ 475,-"
                />
                <PriceCard 
                    badgeText="Tussentijdse toets"
                    text="50 minuten inrijden. Toetsing rijvaardigheid. Evaluatie verbeterpunten. Vergrote slagingskans"
                    price="€ 235,-"
                />
                <PriceCard 
                    badgeText="Praktijkexamen"
                    text="50 minuten inrijden. Afrijden bij het CBR. Nabespreking."
                    price="€ 300,-"
                />
            </div>
            
                <p className="tarief-fineprint">*Alleen mogelijk na aanschaf basis pakket</p>
        </div>    
    )
}

{/* Created by willemwebdev.com */}