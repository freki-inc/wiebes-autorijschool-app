import rijles from '../assets/images/rijles.webp';

export const ExamenChecklist = () => {
    return (
        <div className="examenchecklist-section mt-5 p-b-1">
            
            <h3 className="examenchecklist-titel">
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
                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" 
                        />
                </svg>
                Examen Checklist
            </h3>
            <img src={rijles} alt="rijles" />
            <div className='wd-100 display-flex-row'>
                <h4 className="mb-05">&#128161; Belangrijk! &#128064;</h4>
            </div>
            <p className="mb-1">Voordat jouw examen aangevraagd kan worden bij het cbr, moet jij de volgende zaken regelen door op de onderstaande links te clicken:</p>
            <div className='cbr-link-div'>
                <div className='display-flex-row mb-05'>
                    <p className='cbr-link-emoji'>&#128073; </p><a className='cbr-link' href='https://www.cbr.nl/nl/mijncbr/inloggen-op-mijn-cbr?orgurl=https%3A%2F%2Fwww.cbr.nl%2Fnl%2Fmijncbr%3Forgurl%3Dhttps%253A%252F%252Fwww.cbr.nl%252Fnl%252Fmijncbr%252Freserveren' target='_blank'>Haal je theorie</a>
                </div>
                <div className='display-flex-row mb-05'>
                    <p className='cbr-link-emoji'>&#128073; </p><a className='cbr-link' href='https://www.cbr.nl/nl/mijncbr/inloggen-op-mijn-cbr?orgurl=https%3A%2F%2Fwww.cbr.nl%2Fnl%2Fmijncbr%3Forgurl%3Dhttps%253A%252F%252Fwww.cbr.nl%252Fnl%252Fmijncbr%252Fgezondheidsverklaring' target='_blank'>Vul je gezondheidsverklaring</a>    
                </div>
                <div className='display-flex-row mb-05'>
                    <p className='cbr-link-emoji'>&#128073; </p><a className='cbr-link' href='https://www.cbr.nl/nl/mijncbr/inloggen-op-mijn-cbr?orgurl=https%3A%2F%2Fwww.cbr.nl%2Fnl%2Fmijncbr%3Forgurl%3Dhttps%253A%252F%252Fwww.cbr.nl%252Fnl%252Fmijncbr%252Fopleider-machtigen' target='_blank'>Machtig de rijschool (rijschoolnummer: 4724Z1)</a>
                </div>
            </div>
            <div className='center-text'>
                <p className='mt-1'>Controleer de geldigheidsdatum van je identiteitsbewijs:</p>
                <p>geen id = geen examen</p>
            </div>

        </div>
    )
}

{/* Created by willemwebdev.com */}