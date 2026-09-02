import { useState } from 'react'
import { NavLink } from "react-router-dom";

import { Nav } from './Nav'
import { Footer } from './Footer'

export const AlgemeneVoorwaarden = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <main>
            <Nav 
            isOpen={isNavOpen}
            onOpen={() => setIsNavOpen(true)}
            onClose={() => setIsNavOpen(false)}
            />
            <div className='algemene-voorwaarden'>
                <h1 className='center-text mb-1'>Algemene Voorwaarden Autorijschool Rijvolutie</h1>
                <p className='mb-05'>Laatst bijgewerkt: 11 augustus 2026</p>
                <p className='mb-1'>Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten die worden aangegaan met Wiebe’s autorijschool, als wel op iedereen die lessen volgt of andere diensten afneemt van deze rijschool. Hierin staan alle afspraken die nageleefd moeten worden door de rijschool en de leerlingen.</p>
                <p className='mb-1'><strong>De rijschool dient zich te houden aan de volgende afspraken:</strong></p>
                <h2 className='mb-1'>ARTIKEL 1</h2>
                <ul>
                    <li className='mb-05'>1.1 De leerling krijgt praktijkles van een rijinstructeur die aan de eisen voldoet van de Wet Rijonderricht Motorrijtuigen (WRM). De rijinstructeur moet in het bezit zijn van een geldig instructeurscertificaat.</li>
                    <li className='mb-05'>1.2 De leerling legt het rij(her)examen of de tussentijdse toets in principe af met de auto waarin rijles is gevolgd. In geval van overmacht kan het echter gebeuren dat de leerling het rij(her)examen of de tussentijdse toets aflegt in een vervangende lesauto.</li>
                    <li className='mb-05'>1.3 De rijschool heeft voor het geval er iets gebeurt waarvoor zij ten opzichte van jou aansprakelijk is een bedrijfsverzekering afgesloten.</li>
                    <li className='mb-05'>1.4 Indien een les door omstandigheden niet door kan gaan wordt de leerling hiervan zo spoedig mogelijk op de hoogte gesteld en wordt er een nieuwe afspraak gemaakt, of een vervangende rijinstructeur ingezet.</li>
                </ul>
                <p className='mb-1'><strong>De kandidaat / leerling dient zich te houden aan de volgende afspraken:</strong></p>
                <h2 className='mb-1'>ARTIKEL 2</h2>
                <ul>
                    <li className='mb-05'>2.1 Om autorijlessen te volgen moet je 16,5 jaar zijn. Tevens dient de leerling tijdens de lessen altijd een legitimatiebewijs bij zich te hebben.</li>
                    <li className='mb-05'>2.2 De leerling zorgt er voor om op tijd en op de afgesproken plaats voor de rijles klaar te staan. Is de leerling iets te laat, dan wacht de instructeur altijd 10 minuten op de afgesproken plaats. De wachttijd gaat dan van de lestijd af. Ben je er na 10 minuten nog niet, dan heeft de rijschool het recht om 100% van de les in rekening te brengen en komt de les te vervallen.</li>
                    <li className='mb-05'>2.3 De leerling mag een rijles afzeggen of verschuiven. Dit kan tot 48 uur van te voren via de PlanGo LeerlingApp, anders heeft de rijschool het recht om 100% van de les in rekening te brengen in verband met de gereserveerde tijd.</li>
                    <li className='mb-05'>2.4 Een korter dan 48 uur van te voren afgezegde les wordt niet bij de leerling in rekening gebracht indien er een dringende reden is gemeld via Whatsapp of telefonisch. Dringend is bijvoorbeeld: het overlijden van een naaste familie, begrafenis en spoedopname in het ziekenhuis.</li>
                    <li className='mb-05'>Geen dringende reden is bijvoorbeeld: ziekte, ziekenhuisopname waarbij je weet dat je opgenomen wordt, maar dit van te voren niet aangeeft of vergeet aan te geven, verandering in het schoolrooster, werk of vakantie.</li>
                    <li className='mb-05'>2.5 De leerling verstrekt alle noodzakelijke informatie over zijn/haar medische - en/of psychische toestand, medicijn, alcohol en of drugsgebruik naar waarheid aan de rijschool. Gezondheidsverklaringen die bij het CBR worden ingevuld en niet naar eer en waarheid worden ingevuld is op eigen risico van de leerling en/of ouderlijk gezag.</li>
                    <li className='mb-05'>2.6 Indien de leerling iets verzwijgt uit hetgeen in artikel 2.5 vermeld staat, dan heeft de rijschool het recht de lessen per direct te doen beëindigen.</li>
                    <li className='mb-05'>2.7 Bij schade ontstaan als gevolg van het verzwijgen van noodzakelijke informatie over de medische - en/of psychische toestand, zoals vermeld in artikel 2.5, heeft de rijschool het recht dit te verhalen op de leerling.</li>
                </ul>
                <p className='mb-1'><strong>Voor de (wijze van) betaling gelden de volgende voorwaarden:</strong></p>
                <h2 className='mb-1'>ARTIKEL 3</h2>
                <ul>
                    <li className='mb-05'>3.1 Betalingen van losse lessen dienen voldaan te worden op de dag van de les per tikkie/betaalverzoek.</li>
                    <li className='mb-05'>3.2 De factuur van het basispakket dient voor de eerste rijles betaald te zijn. Indien de factuur van het basispakket verzonden is na de eerste rijles dient deze uiterlijk binnen 7 dagen betaald te worden na ontvangst van de factuur. Uitbreidingspakketten dienen uiterlijk binnen 7 dagen betaald te worden, gerekend vanaf ontvangst van de factuur. Gebeurt dit niet dan behoudt de rijschool het recht om de rijlessen te pauzeren totdat de factuur betaald is.</li>
                    <li className='mb-05'>3.3 De meest recente factuur dient betaald te zijn voor aanvang van het rij(her)examen. Is dit niet het geval, dan behoudt de rijschool zich het recht het rij(her)examen zonder restitutie te annuleren.</li>
                    <li className='mb-05'>3.4 Komt het toch voor dat de leerling niet tijdig betaalt, dan hanteert de rijschool de volgende procedure:</li>
                    <li className='mb-05'>a. Indien er een achterstand in de betaling ontstaat, krijgt de leerling in eerste instantie een betalingsherinnering per email. Wordt hier echter ook geen gehoor aan gegeven, ontvangt de leerling 7 dagen na de herinnering een herinneringsfactuur waarbij aanmaningskosten van €10 worden gerekend.</li>
                    <li className='mb-05'>b. De rijschool mag rente gaan vragen over het verschuldigde bedrag nadat er 14 dagen zijn verstreken na ontvangst van de factuur. Deze rente bedraagt de wettelijke rente van 2%.</li>
                    <li className='mb-05'>3.5 Mocht het toch voorkomen dat de leerling de herinneringsfactuur niet binnen 14 dagen na ontvangst betaalt, dan kan de rijschool een incassobureau inschakelen. Bijkomende kosten zijn dan voor de leerling.</li>
                    <li className='mb-05'>3.6 Als je een pakket hebt aangeschaft en je behaalt je rijbewijs terwijl je het pakket nog niet volledig benut hebt dan vindt er een creditering plaats van een gedeelte van dit pakket. De gereden uren van je laatst gekochte pakket worden verrekend volgens de op dit moment geldende losse lesuur prijs. Zie wiebes-rijschool.nl//prijslijst. Wat er overblijft wordt binnen 14 dagen gecrediteerd.</li>
                    <li className='mb-05'>3.7 Pakketten zijn een jaar geldig vanaf de factuurdatum van de laatst betaalde factuur en komen na een jaar stilzwijgend te vervallen zonder recht op restitutie.</li>
                    <li className='mb-05'>3.8 De rijschool behoudt zich het recht voor tussentijds tariefwijzigingen door te voeren. De nieuwe tarieven gelden dan per direct voor losse lessen en voor nog aan te schaffen pakketten.</li>
                </ul>
                <p className='mb-1'><strong>Beëindigen van de les- en pakketovereenkomsten door de leerling:</strong></p>
                <h2 className='mb-1'>ARTIKEL 4</h2>
                <ul>
                    <li className='mb-05'>De leerling mag zonder opgaaf van reden de pakketovereenkomsten beëindigen. In dit geval rekent de rijschool eenmalig €25 administratiekosten en zal er een verrekening plaatsvinden voor de nog niet verreden lesuren en eventuele ongebruikte rij(her)examen en/of de tussentijdse toets.</li>
                    <li className='mb-05'>De gereden uren van je laatst gekochte pakket worden teruggerekend volgens de op dit moment geldende losse lesuur prijs. Zie wiebes-rijschool.nl//prijslijst.Wat er overblijft plus eventuele ongebruikte rij(her)examen en/of de tussentijdse toets wordt binnen 30 dagen gecrediteerd.</li>
                </ul>
                <p className='mb-1'><strong>Beëindigen van de les- en pakketovereenkomsten door de rijschool:</strong></p>
                <h2 className='mb-1'>ARTIKEL 5</h2>
                <ul>
                    <li className='mb-05'>5.1 De rijschool heeft het recht om alle vormen van overeenkomsten te doen ontbinden als:</li>
                    <li className='mb-05'>a. De rijschool sterk het vermoeden heeft dat de leerling opzettelijk geen en of onjuiste informatie heeft gegeven aan de Rijschool (zie artikel 2.5).</li>
                    <li className='mb-05'>b. De rijschool sterk het vermoeden heeft dat de leerling opzettelijk niet meewerkt aan de vooruitgang van de lessen.</li>
                    <li className='mb-05'>c. De rijschool een andere goede reden heeft om de samenwerking niet voort te willen zetten. Deze reden zal worden toegelicht aan de leerling.</li>
                    <li className='mb-05'>Het ontbinden van de overeenkomst zal altijd in overleg met de leerling gebeuren. Als de rijschool de pakketovereenkomst ontbindt heeft de leerling recht op restitutie van alle niet gereden uren en eventuele ongebruikte rij(her)examen en/of de tussentijdse toets.</li>
                    <li className='mb-05'>In dit geval blijft de pakketkorting behouden voor de leerling. Het resterende bedrag wordt binnen 7 dagen door de rijschool gecrediteerd.</li>
                </ul>
                <p className='mb-1'><strong>Rij(her)examen en tussentijdse toets:</strong></p>
                <h2 className='mb-1'>ARTIKEL 6</h2>
                <ul>
                    <li className='mb-05'>6.1 Als de leerling niet of te laat op de afspraak bij het CBR komt, vanwege oorzaken die aan de leerling toegerekend kunnen worden, moet de leerling de kosten dragen voor een nieuwe aanvraag. Het rij(her)examen of de tussentijdse toets komt te vervallen. Dit geldt ook als de leerling geen geldig legitimatiebewijs kan overleggen aan de examinator.</li>
                    <li className='mb-05'>6.2 Mocht het rij(her)examen of de tussentijdse toets niet doorgaan wegens slecht weer, bijvoorbeeld door ijzel of sneeuw, dan hoeft de leerling het nieuwe rij(her)examen of de tussentijdse toets niet zelf te betalen. De rijschool heeft dan wél het recht om aan de leerling de kosten van een lesuur te berekenen als dit pas ter plekke besloten wordt door het CBR.</li>
                    <li className='mb-05'>6.3 De leerling is zelf verantwoordelijk voor het tijdig behalen van het theoriecertificaat. Zonder geldig theoriecertificaat kan er geen Tussentijdse Toets of rij(her)examen afgenomen worden. De kosten voor de rijschool aan het CBR voor de gereserveerde tijd zijn in dat geval voor de leerling.</li>
                    <li className='mb-05'>6.4 Een rij(her)examen wordt aangevraagd als de instructeur ziet dat de leerling ver genoeg gevorderd is in het traject. De rijschool behoudt te allen tijde het recht een aangevraagd rij(her)examen niet door te laten gaan als de instructeur van mening is dat de leerling geen reële kans van slagen heeft. In dit laatste geval zal de rijschool geen kosten voor deze examendatum in rekening brengen. De rijschool behoudt dan het recht de examentijd aan een andere leerling te geven. </li>
                </ul>
                <p className='mb-1'><strong>Aanvullende afspraken:</strong></p>
                <h2 className='mb-1'>ARTIKEL 7</h2>
                <ul>
                    <li className='mb-05'>7.1 De rijschool kan indien het nodig is aanvullende afspraken met de leerling maken. Deze zullen dan schriftelijk worden vastgelegd.</li>
                    <li className='mb-05'>7.2 Echter deze algemene voorwaarden zullen op al onze overeenkomsten van kracht zijn.</li>
                </ul>
                <h2 className='mb-1'>ARTIKEL 8</h2>
                <ul>
                    <li className='mb-05'>8.1 Als de leerling tijdens de rijles, het rij(her)examen of de tussentijdse toets een bekeuring krijgt en/of schade veroorzaakt aan derden, dan gelden de volgende afspraken:</li>
                    <li className='mb-05'>a. De rijschool kan de leerling normaal gesproken niet aansprakelijk stellen voor boetes en schade veroorzaakt aan derden. De rijschool draagt zelf het risico, tenzij de leerling meerdere keren is gewaarschuwd over zijn gedrag.</li>
                    <li className='mb-05'>b. Als de leerling zich in de auto zodanig opzettelijk misdraagt dat er ondanks ingrijpen van de instructeur een aanrijding plaatsvindt, dan kan de leerling wel aansprakelijk worden gesteld.</li>
                    <li className='mb-05'>c. Het is ten zeerste verboden om tijdens de rijles onder invloed van alcohol en andere middelen die de rijvaardigheid kunnen beïnvloeden, te zijn. Als na een aanrijding blijkt, dat de leerling onder invloed was, dan kan de leerling aansprakelijk worden gesteld.</li>
                    <li className='mb-05'>d. Het is ook verboden om medicijnen te nemen waardoor tijdens de rijles de rijvaardigheid kan worden beïnvloed. Dit staat duidelijk op de verpakking van de medicijnen. Ook dan kan de leerling bij schade aansprakelijk worden gesteld. Neem altijd contact met de rijschool op als dergelijke medicijnen worden gebruikt.</li>
                    <li className='mb-05'>8.2 De rijschool zal de leerling vragen of hij/zij een ontzegging van de rijbevoegdheid heeft. Dit kan bijvoorbeeld verkregen zijn als de leerling dronken op de (brom)fiets reed en is gedaagd voor de rechter. De leerling mag dan in zo’n geval ook geen lesauto besturen. Als de leerling dan niet de waarheid heeft verteld en toch rijlessen neemt, dan kan de leerling aansprakelijk worden gesteld voor eventuele (financiële) gevolgen zoals boetes en of schade veroorzaakt aan derden.</li>
                </ul>
                <h2 className='mb-1'>ARTIKEL 9</h2>
                <ul>
                    <li className='mb-05'>Op deze algemene voorwaarden is uitsluitend het Nederlands recht van toepassing.</li>
                    <li className='mb-05'>7.2 Echter deze algemene voorwaarden zullen op al onze overeenkomsten van kracht zijn.</li>
                </ul>
                <h2 className='mb-1'>Contact</h2>
                <p className='mb-05'>Als U vragen heeft over deze Algemene Voorwaarden, kunt U contact met Ons opnemen door deze pagina op Onze website te bezoeken: </p>
                <NavLink to="/contact"><p className='algemene-voorwaarden-contact-link mt-05'>https://www.wiebes-rijschool.nl/contact</p></NavLink>
            </div>
            <Footer />
        </main>
    )
}