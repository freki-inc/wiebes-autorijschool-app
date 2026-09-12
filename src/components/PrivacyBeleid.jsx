import { useState } from 'react'
import { NavLink } from "react-router-dom";

import { Nav } from './Nav'
import { Footer } from './Footer'

export const PrivacyBeleid = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <main>
            <Nav 
            isOpen={isNavOpen}
            onOpen={() => setIsNavOpen(true)}
            onClose={() => setIsNavOpen(false)}
            />
            <div className='privacy-policy'>
                <h1 className='center-text mb-1'>Privacyverklaring Autorijschool Rijvolutie</h1>
                <p className='mb-05'>Laatst bijgewerkt: 11 augustus 2026</p>
                <p className='mb-1'>Deze website wordt beheerd door [naam bedrijf / eenmanszaak], gevestigd te [plaats], ingeschreven bij de KvK onder nummer [KvK-nummer] ("wij", "ons"). Wij hechten waarde aan de privacy van bezoekers van onze website en zijn transparant over welke gegevens er worden verwerkt.</p>
                <h2 className='mb-1'>1. Contactgegevens</h2>
                <p className='mb-1'>[Naam bedrijf] [Adres] [E-mailadres] [Telefoonnummer, optioneel]</p>
                
                <h2 className='mb-1'>2. Geen formulieren, geen actief verzamelde gegevens</h2>
                <p className='mb-1'>Deze website bevat geen contactformulieren, nieuwsbrieven of andere functies waarmee u actief persoonsgegevens (zoals naam, e-mailadres of telefoonnummer) aan ons verstrekt. Wij verzamelen dus geen gegevens die u zelf invult.</p>
                <h2 className='mb-1'>3. Serverlogs (hosting)</h2>
                <p className='mb-1'>Zoals vrijwel elke website registreert onze hostingprovider automatisch bepaalde technische gegevens wanneer u de website bezoekt, waaronder uw IP-adres, browsertype en tijdstip van bezoek. Deze gegevens worden alleen gebruikt om de website technisch te laten functioneren en te beveiligen (bijvoorbeeld tegen misbruik), en worden niet gebruikt voor profilering of marketing.</p>
                <ul>
                    <li className='mb-05'>Grondslag: gerechtvaardigd belang (artikel 6 lid 1 sub f AVG) — het veilig en goed laten functioneren van de website.</li>
                    <li className='mb-05'>Bewaartermijn: [bijv. maximaal 30 dagen], tenzij langer nodig voor beveiligingsdoeleinden.</li>
                </ul>
                
                <h2 className='mb-1'>4. Google Maps</h2>
                <p className='mb-1'>Op onze website tonen wij een ingesloten (embedded) kaart via Google Maps, zodat u onze locatie kunt zien. Wanneer deze kaart wordt geladen, worden er gegevens (zoals uw IP-adres) rechtstreeks naar Google verzonden. Google kan hierbij cookies of vergelijkbare technieken plaatsen.</p>
                <ul>
                    <li className='mb-05'>Doel: het tonen van onze locatie op een kaart.</li>
                    <li className='mb-05'>
                        Grondslag: [kies wat van toepassing is — zie toelichting hieronder]
                        <ul>
                            <li className='mb-05'>indien u toestemming vraagt vóór het laden van de kaart: uw toestemming (artikel 6 lid 1 sub a AVG)</li>
                            <li className='mb-05'>indien de kaart direct laadt zonder cookies (bijv. via een "klik om te laden"-oplossing): gerechtvaardigd belang (artikel 6 lid 1 sub f AVG)</li>
                        </ul>
                    </li>
                    <li className='mb-05'>Doorgifte buiten de EU: Google kan gegevens verwerken in de Verenigde Staten. Google doet dit op basis van het EU-U.S. Data Privacy Framework en/of modelcontractbepalingen (Standard Contractual Clauses).</li>
                    <li className='mb-05'>Meer informatie: <a className='privacy-policy-link' href='https://policies.google.com/privacy' target='_blank'>Privacybeleid van Google</a></li>
                </ul>
                <p className='mb-1'><strong>Let op: als de kaart pas na een klik van de bezoeker wordt geladen (of pas na toestemming via een cookiebanner), is er geen aparte cookietoestemming vooraf nodig. Laadt de kaart automatisch bij elk bezoek, dan is doorgaans wél voorafgaande toestemming vereist.</strong></p>
                
                <h2 className='mb-1'>5. WhatsApp</h2>
                <p className='mb-1'>Op onze website staat een link waarmee u, indien u dat wilt, via WhatsApp contact met ons kunt opnemen. Deze link opent de WhatsApp-app of -website; wijzelf verwerken hierbij geen gegevens via onze website. Zodra u via WhatsApp contact opneemt, is dat gesprek onderworpen aan het privacybeleid van WhatsApp/Meta.</p>
                <p className='mb-1'>Meer informatie: <a className='privacy-policy-link' href='https://www.whatsapp.com/legal/privacy-policy' target='_blank'>Privacybeleid van WhatsApp</a></p>

                <h2 className='mb-1'>6. Cookies</h2>
                <p className='mb-1'>Deze website plaatst geen eigen tracking- of marketingcookies. De enige cookies die mogelijk worden geplaatst, zijn afkomstig van de ingesloten Google Maps-kaart (zie punt 4) [en eventueel: functionele cookies die noodzakelijk zijn voor de werking van de website].</p>

                <h2 className='mb-1'>7. Uw rechten</h2>
                <p className='mb-1'>U heeft het recht om:</p>
                <ul>
                    <li className='mb-05'>inzage te vragen in de gegevens die wij (via serverlogs) over u verwerken;</li>
                    <li className='mb-05'>correctie of verwijdering van uw gegevens te vragen;</li>
                    <li className='mb-05'>bezwaar te maken tegen verwerking op basis van gerechtvaardigd belang;</li>
                    <li className='mb-05'>een klacht in te dienen bij de Autoriteit Persoonsgegevens (<a className='privacy-policy-link' href='https://www.autoriteitpersoonsgegevens.nl/' target='_blank'>autoriteitpersoonsgegevens.nl</a>).</li>
                </ul>
                <p className='mb-1'>Voor vragen over deze verklaring of uw gegevens kunt u contact opnemen via [e-mailadres].</p>
                <h2 className='mb-1'>8. Wijzigingen</h2>
                <p>Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen, bijvoorbeeld bij wijzigingen in de website of wetgeving. De meest actuele versie is altijd op deze pagina te vinden.</p>
            </div>
            <Footer />
        </main>
    )
}

{/* Created by willemwebdev.com */}