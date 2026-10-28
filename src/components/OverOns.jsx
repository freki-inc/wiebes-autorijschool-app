import opelMokka from '../assets/images/Opel-Mokka.webp'
import tesla from '../assets/images/tesla.webp'

export const OverOns = () => {
    return (
        <section className='overons-section'>
            <h2 className='over-ons-titel'>
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
                            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" 
                        />
                </svg>
                Over Ons
            </h2>
            <div className='over-ons-desktop-layout-top'>
                <img src={tesla} alt='tesla auto' draggable={false}></img>
                <div className='overons-text'>
                    <p className='mb-2'>
                        Wiebes autorijschool, een begrip in Leiden, gooit het roer om en begint een Rijvolutie. 
                        Met meer dan tien jaar ervaring help ik jou op weg naar jouw rijbewijs. 
                        100% priveles. Geen andere leerlingen wegbrengen. Volle aandacht voor wat jij nodig hebt. 
                        Centraal opstappunt, vlakbij CS Leiden. Makkelijk bereikbaar.</p>
                </div>
            </div>

            <a href='https://www.cbr.nl/nl/service/nl/rijscholen/wiebes-autorijschool' target='_blank'><button className='center-text slagings-percentage'>Bekijk mijn slagingspercentage</button></a>

            <div className='over-ons-desktop-layout-bottom'>
                <img src={opelMokka} alt='opel mokka auto' draggable={false}></img>
                    <p className='overons-text'>Je kunt kiezen of je wilt rijden in een handgeschakelde Opel Mokka die op neste my renewable diesel rijdt of een Tesla die met groene stroom wordt geladen.</p>
            </div>
            
        </section>
    )

}

{/* Created by willemwebdev.com */}