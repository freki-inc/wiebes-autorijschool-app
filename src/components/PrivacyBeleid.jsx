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
            <div className='privacybeleid'>
                <h1 className='center-text mb-1'>Algemene Voorwaarden Website</h1>
                <p className='mb-05'>Laatst bijgewerkt: 11 augustus 2026</p>
                <p className='mb-1'>Lees deze algemene voorwaarden zorgvuldig door voordat u Onze Dienst gebruikt.</p>
                <h2 className='mb-1'>Interpretatie en Definities</h2>
                <h3 className='mb-1'>Interpretatie</h3>
                <p className='mb-1'>De woorden waarvan de eerste letter met een hoofdletter is geschreven, hebben de betekenissen die onder de volgende voorwaarden zijn gedefinieerd. De volgende definities hebben dezelfde betekenis, ongeacht of zij in het enkelvoud of in het meervoud voorkomen.</p>
                <h3 className='mb-1'>Definities</h3>
                <p className='mb-05'>Voor de doeleinden van deze Algemene Voorwaarden:</p>
                <li className='mb-05'><strong>Affiliate</strong> betekent een entiteit die een partij controleert, door een partij wordt gecontroleerd of onder gemeenschappelijke controle staat met een partij, waarbij “controle” betekent het eigendom van 50% of meer van de aandelen, het eigen vermogen of andere effecten die recht geven om te stemmen voor de verkiezing van bestuurders of andere leidinggevende autoriteit.</li>
                <li className='mb-05'><strong>Land</strong> verwijst naar: Nederland</li>
                <li className='mb-05'><strong>Bedrijf</strong> (aangeduid als “het Bedrijf”, “Wij”, “Ons” of “Onze” in deze Overeenkomst) verwijst naar Wiebes Autorijschool BV</li> {/*Aanpassen*/}
                <li className='mb-05'><strong>Apparaat</strong> betekent elk apparaat dat toegang kan krijgen tot de Dienst, zoals een computer, een mobiele telefoon of een digitale tablet.</li>
                <li className='mb-05'><strong>Dienst</strong> verwijst naar de Website.</li>
                <li className='mb-05'><strong>Algemene Voorwaarden</strong> (ook aangeduid als “Voorwaarden”) betekenen deze Algemene Voorwaarden die de volledige overeenkomst vormen tussen U en het Bedrijf met betrekking tot het gebruik van de Dienst.</li>
                <li className='mb-05'><strong>Dienst van derden via sociale media</strong> betekent alle diensten of content (inclusief gegevens, informatie, producten of diensten) die door een derde partij worden geleverd en die door de Dienst kunnen worden weergegeven, opgenomen of beschikbaar gesteld.</li>
                <li className='mb-05'><strong>Website</strong> verwijst naar Wiebes Autorijschool, toegankelijk via https://www.wiebes-rijschool.nl/</li>
                <li className='mb-1'><strong>U</strong> betekent de persoon die toegang heeft tot of gebruikmaakt van de Dienst, of het bedrijf of andere juridische entiteit namens welke die persoon toegang heeft tot of gebruikmaakt van de Dienst, zoals van toepassing.</li>
                <h2 className='mb-1'>Erkenning</h2>
                <p className='mb-05'>Dit zijn de Algemene Voorwaarden die het gebruik van deze Dienst regelen en de overeenkomst die tussen U en het Bedrijf geldt. Deze Algemene Voorwaarden leggen de rechten en verplichtingen vast van alle gebruikers met betrekking tot het gebruik van de Dienst.</p>
                <p className='mb-05'>Uw toegang tot en gebruik van de Dienst is afhankelijk van Uw aanvaarding van en naleving van deze Algemene Voorwaarden. Deze Algemene Voorwaarden zijn van toepassing op alle bezoekers, gebruikers en anderen die toegang hebben tot of gebruikmaken van de Dienst.</p>
                <p className='mb-05'>Door toegang te krijgen tot of gebruik te maken van de Dienst gaat U akkoord met deze Algemene Voorwaarden. Als U het niet eens bent met enig deel van deze Algemene Voorwaarden, mag U geen toegang tot de Dienst hebben.</p>
                <p className='mb-05'>U verklaart dat U ouder bent dan 18 jaar. Het Bedrijf staat personen jonger dan 18 jaar niet toe de Dienst te gebruiken.</p>
                <p className='mb-1'>Uw toegang tot en gebruik van de Dienst is ook afhankelijk van Uw aanvaarding van en naleving van het Privacybeleid van het Bedrijf. Ons Privacybeleid beschrijft Onze beleidslijnen en procedures met betrekking tot de verzameling, het gebruik en de openbaarmaking van Uw persoonlijke gegevens wanneer U de Applicatie of de Website gebruikt, en informeert U over Uw privacyrechten en hoe de wet U beschermt. Lees Ons Privacybeleid zorgvuldig door voordat U Onze Dienst gebruikt.</p>
                <h2 className='mb-1'>Links naar andere websites</h2>
                <p className='mb-05'>Onze Dienst kan links bevatten naar websites of diensten van derden die niet eigendom zijn van of onder controle staan van het Bedrijf.</p>
                <p className='mb-05'>Het Bedrijf heeft geen controle over, en aanvaardt geen verantwoordelijkheid voor, de content, privacybeleid of praktijken van websites of diensten van derden. U erkent en gaat er verder mee akkoord dat het Bedrijf niet verantwoordelijk of aansprakelijk is, direct of indirect, voor enige schade of verlies veroorzaakt of beweerdelijk veroorzaakt door of in verband met het gebruik van of het vertrouwen op dergelijke content, goederen of diensten die beschikbaar zijn op of via dergelijke websites of diensten.</p>
                <p className='mb-1'>Wij raden U sterk aan de algemene voorwaarden en privacybeleid te lezen van alle websites of diensten van derden die U bezoekt.</p>
                <h2 className='mb-1'>Beëindiging</h2>
                <p className='mb-05'>Wij kunnen Uw toegang onmiddellijk beëindigen of opschorten, zonder voorafgaande kennisgeving of aansprakelijkheid, om welke reden dan ook, inclusief maar niet beperkt tot indien U deze Algemene Voorwaarden schendt.</p>
                <p className='mb-1'>Bij beëindiging zal Uw recht om de Dienst te gebruiken onmiddellijk ophouden.</p>
                <h2 className='mb-1'>Beperking van aansprakelijkheid</h2>
                <p className='mb-05'>Niettegenstaande enige schade die U zou kunnen oplopen, is de totale aansprakelijkheid van het Bedrijf en al zijn leveranciers onder enige bepaling van deze Voorwaarden en Uw exclusieve rechtsmiddel voor al het voorgaande beperkt tot het bedrag dat U daadwerkelijk via de Dienst heeft betaald, of 100 EURO indien U niets via de Dienst heeft gekocht.</p>
                <p className='mb-1'>Voor zover maximaal toegestaan door de toepasselijke wetgeving, is het Bedrijf of zijn leveranciers in geen geval aansprakelijk voor enige speciale, incidentele, indirecte of gevolgschade (inclusief, maar niet beperkt tot, schade voor winstderving, verlies van gegevens of andere informatie, bedrijfsonderbreking, persoonlijk letsel, verlies van privacy die voortvloeit uit of op enigerlei wijze verband houdt met het gebruik van of het onvermogen om de Dienst te gebruiken, software van derden en/of hardware van derden die met de Dienst wordt gebruikt, of anderszins in verband met enige bepaling van deze Voorwaarden), zelfs indien het Bedrijf of enige leverancier op de hoogte is gesteld van de mogelijkheid van dergelijke schade en zelfs indien het rechtsmiddel zijn essentiële doel niet bereikt.</p>
                <h2 className='mb-1'>“AS IS” en “AS AVAILABLE” Disclaimer</h2>
                <p className='mb-05'>De Dienst wordt aan U geleverd “AS IS” (zoals het is) en “AS AVAILABLE” (zoals beschikbaar) en met alle fouten en gebreken zonder enige garantie van welke aard dan ook. Voor zover maximaal toegestaan onder de toepasselijke wetgeving, wijst het Bedrijf, namens zichzelf en namens zijn Affiliates en hun respectieve licentiegevers en dienstverleners, uitdrukkelijk alle garanties af, of deze nu uitdrukkelijk, impliciet, wettelijk of anderszins zijn, met betrekking tot de Dienst, inclusief alle impliciete garanties van verkoopbaarheid, geschiktheid voor een bepaald doel, eigendom en non-inbreuk, en garanties die kunnen voortvloeien uit handelsgebruik, handelspraktijk, gebruik of handelsgewoonte. Zonder beperking van het voorgaande geeft het Bedrijf geen garantie of toezegging, en doet geen enkele verklaring van welke aard dan ook, dat de Dienst aan Uw eisen zal voldoen, enig beoogd resultaat zal bereiken, compatibel zal zijn of zal werken met enige andere software, applicaties, systemen of diensten, zonder onderbreking zal werken, aan enige prestatie- of betrouwbaarheidsnormen zal voldoen of foutloos zal zijn, of dat eventuele fouten of gebreken kunnen of zullen worden gecorrigeerd.</p>
                <p className='mb-05'>Zonder beperking van het voorgaande doet noch het Bedrijf, noch enige provider van het Bedrijf enige verklaring of garantie van welke aard dan ook, uitdrukkelijk of impliciet: (i) met betrekking tot de werking of beschikbaarheid van de Dienst, of de informatie, content en materialen of producten die daarop zijn opgenomen; (ii) dat de Dienst ononderbroken of foutloos zal zijn; (iii) met betrekking tot de nauwkeurigheid, betrouwbaarheid of actualiteit van enige informatie of content die via de Dienst wordt verstrekt; of (iv) dat de Dienst, de servers ervan, de content, of e-mails die van of namens het Bedrijf worden verzonden, vrij zijn van virussen, scripts, Trojaanse paarden, wormen, malware, tijdbommen of andere schadelijke componenten.</p>
                <p className='mb-1'>Sommige rechtsgebieden staan de uitsluiting van bepaalde soorten garanties of beperkingen van toepasselijke wettelijke rechten van een consument niet toe, zodat sommige of alle van de bovenstaande uitsluitingen en beperkingen mogelijk niet op U van toepassing zijn. Maar in een dergelijk geval zullen de uitsluitingen en beperkingen in deze sectie worden toegepast in de maximale mate die afdwingbaar is onder de toepasselijke wetgeving.</p>
                <h2 className='mb-1'>Toepasselijk recht</h2>
                <p className='mb-1'>De wetten van het Land, met uitsluiting van de conflictregels daarvan, zijn van toepassing op deze Voorwaarden en Uw gebruik van de Dienst. Uw gebruik van de Applicatie kan ook onderworpen zijn aan andere lokale, staats-, nationale of internationale wetten.</p>
                <h2 className='mb-1'>Geschillenbeslechting</h2>
                <p className='mb-1'>Als U enige zorg of geschil heeft over de Dienst, stemt U ermee in om eerst te proberen het geschil informeel op te lossen door contact op te nemen met het Bedrijf.</p>
                <h2 className='mb-1'>Voor gebruikers in de Europese Unie (EU)</h2>
                <p className='mb-1'>Als U een consument in de Europese Unie bent, geniet U de bescherming van de dwingende bepalingen van de wet van het land waarin U woonachtig bent.</p>
                <h2 className='mb-1'>Scheidbaarheid en Afstand</h2>
                <h3 className='mb-1'>Scheidbaarheid</h3>
                <p className='mb-1'>Indien enige bepaling van deze Voorwaarden als niet-afdwingbaar of ongeldig wordt beschouwd, zal die bepaling worden gewijzigd en geïnterpreteerd om de doelstellingen van die bepaling te realiseren in de maximale mate die mogelijk is onder de toepasselijke wetgeving, en de overige bepalingen zullen van kracht blijven en van kracht blijven.</p>
                <h3 className='mb-1'>Afstand</h3>
                <p className='mb-1'>Behalve zoals hierin bepaald, heeft het nalaten om een recht uit te oefenen of de nakoming van een verplichting onder deze Voorwaarden te eisen, geen invloed op het vermogen van een partij om dat recht uit te oefenen of die nakoming op enig moment daarna te eisen, noch vormt de afstand van een schending een afstand van enige volgende schending.</p>
                <h2 className='mb-1'>Interpretatie van vertalingen</h2>
                <p className='mb-1'>Deze Algemene Voorwaarden kunnen zijn vertaald indien Wij ze aan U beschikbaar hebben gesteld op Onze Dienst. U gaat ermee akkoord dat de originele Nederlandse tekst prevaleert in geval van een geschil.</p>
                <h2 className='mb-1'>Wijzigingen in deze Algemene Voorwaarden</h2>
                <p className='mb-05'>Wij behouden ons het recht voor, naar Ons uitsluitende goeddunken, om deze Voorwaarden te allen tijde te wijzigen of te vervangen. Indien een herziening materieel is, zullen Wij redelijke inspanningen leveren om ten minste 30 dagen van tevoren kennisgeving te doen voordat enige nieuwe voorwaarden van kracht worden. Wat een materiële wijziging inhoudt, wordt naar Ons uitsluitende goeddunken bepaald.</p>
                <p className='mb-1'>Door door te gaan met toegang tot of gebruik van Onze Dienst nadat die herzieningen van kracht zijn geworden, gaat U akkoord met de herziene voorwaarden. Indien U het niet eens bent met de nieuwe voorwaarden, geheel of gedeeltelijk, stop dan met het gebruik van de website en de Dienst.</p>
                <h2 className='mb-1'>Contact</h2>
                <p className='mb-05'>Als U vragen heeft over deze Algemene Voorwaarden, kunt U contact met Ons opnemen:</p>
                <li>Door deze pagina op Onze website te bezoeken: <NavLink to="/contact"><p className='privacybeleid-link mt-05'>https://www.wiebes-rijschool.nl/contact</p></NavLink></li>
            </div>
            <Footer />
        </main>
    )
}