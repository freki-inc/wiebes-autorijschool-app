import { useState } from 'react';

import wof1 from '../assets/images/wof/wof1.webp'
import wof2 from '../assets/images/wof/wof2.webp'
import wof3 from '../assets/images/wof/wof3.webp'
import wof4 from '../assets/images/wof/wof4.webp'
import wof5 from '../assets/images/wof/wof5.webp'
import wof6 from '../assets/images/wof/wof6.webp'
import wof7 from '../assets/images/wof/wof7.webp'
import wof8 from '../assets/images/wof/wof8.webp'
import wof9 from '../assets/images/wof/wof9.webp'
import wof10 from '../assets/images/wof/wof10.webp'
import wof11 from '../assets/images/wof/wof11.webp'
import wof12 from '../assets/images/wof/wof12.webp'
import wof13 from '../assets/images/wof/wof13.webp'
import wof14 from '../assets/images/wof/wof14.webp'
import wof15 from '../assets/images/wof/wof15.webp'
import wof16 from '../assets/images/wof/wof16.webp'
import wof17 from '../assets/images/wof/wof17.webp'
import wof18 from '../assets/images/wof/wof18.webp'
import wof19 from '../assets/images/wof/wof19.webp'
import wof20 from '../assets/images/wof/wof20.webp'
import wof21 from '../assets/images/wof/wof21.webp'
import wof22 from '../assets/images/wof/wof22.webp'
import wof23 from '../assets/images/wof/wof23.webp'
import wof24 from '../assets/images/wof/wof24.webp'
import wof25 from '../assets/images/wof/wof25.webp'
import wof26 from '../assets/images/wof/wof26.webp'
import wof27 from '../assets/images/wof/wof27.webp'
import wof28 from '../assets/images/wof/wof28.webp'
import wof29 from '../assets/images/wof/wof29.webp'
import wof30 from '../assets/images/wof/wof30.webp'
import wof31 from '../assets/images/wof/wof31.webp'
import wof32 from '../assets/images/wof/wof32.webp'
import wof33 from '../assets/images/wof/wof33.webp'
import wof34 from '../assets/images/wof/wof34.webp'
import wof35 from '../assets/images/wof/wof35.webp'
import wof36 from '../assets/images/wof/wof36.webp'
import wof37 from '../assets/images/wof/wof37.webp'
import wof38 from '../assets/images/wof/wof38.webp'
import wof39 from '../assets/images/wof/wof39.webp'
import wof40 from '../assets/images/wof/wof40.webp'
import wof41 from '../assets/images/wof/wof41.webp'
import wof42 from '../assets/images/wof/wof42.webp'
import wof43 from '../assets/images/wof/wof43.webp'
import wof44 from '../assets/images/wof/wof44.webp'
import wof45 from '../assets/images/wof/wof45.webp'
import wof46 from '../assets/images/wof/wof46.webp'
import wof47 from '../assets/images/wof/wof47.webp'
import wof48 from '../assets/images/wof/wof48.webp'
import wof49 from '../assets/images/wof/wof49.webp'
import wof50 from '../assets/images/wof/wof50.webp'
import wof51 from '../assets/images/wof/wof51.webp'
import wof52 from '../assets/images/wof/wof52.webp'
import wof53 from '../assets/images/wof/wof53.webp'
import wof54 from '../assets/images/wof/wof54.webp'
import wof55 from '../assets/images/wof/wof55.webp'
import wof56 from '../assets/images/wof/wof56.webp'
import wof57 from '../assets/images/wof/wof57.webp'
import wof58 from '../assets/images/wof/wof58.webp'
import wof59 from '../assets/images/wof/wof59.webp'
import wof60 from '../assets/images/wof/wof60.webp'
import wof61 from '../assets/images/wof/wof61.webp'
import wof62 from '../assets/images/wof/wof62.webp'
import wof63 from '../assets/images/wof/wof63.webp'
import wof64 from '../assets/images/wof/wof64.webp'
import wof65 from '../assets/images/wof/wof65.webp'
import wof66 from '../assets/images/wof/wof66.webp'
import wof67 from '../assets/images/wof/wof67.webp'
import wof68 from '../assets/images/wof/wof68.webp'
import wof69 from '../assets/images/wof/wof69.webp'
import wof70 from '../assets/images/wof/wof70.webp'

export const WallOfFameGrid = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: wof1, alt: 'geslaagde leerling'},
        { src: wof2, alt: 'geslaagde leerling'},
        { src: wof3, alt: 'geslaagde leerling'},
        { src: wof4, alt: 'geslaagde leerling'},
        { src: wof5, alt: 'geslaagde leerling'},
        { src: wof6, alt: 'geslaagde leerling'},
        { src: wof7, alt: 'geslaagde leerling'},
        { src: wof8, alt: 'geslaagde leerling'},
        { src: wof9, alt: 'geslaagde leerling'},
        { src: wof10, alt: 'geslaagde leerling'},
        { src: wof11, alt: 'geslaagde leerling'},
        { src: wof12, alt: 'geslaagde leerling'},
        { src: wof13, alt: 'geslaagde leerling'},
        { src: wof14, alt: 'geslaagde leerling'},
        { src: wof15, alt: 'geslaagde leerling'},
        { src: wof16, alt: 'geslaagde leerling'},
        { src: wof17, alt: 'geslaagde leerling'},
        { src: wof18, alt: 'geslaagde leerling'},
        { src: wof19, alt: 'geslaagde leerling'},
        { src: wof20, alt: 'geslaagde leerling'},
        { src: wof21, alt: 'geslaagde leerling'},
        { src: wof22, alt: 'geslaagde leerling'},
        { src: wof23, alt: 'geslaagde leerling'},
        { src: wof24, alt: 'geslaagde leerling'},
        { src: wof25, alt: 'geslaagde leerling'},
        { src: wof26, alt: 'geslaagde leerling'},
        { src: wof27, alt: 'geslaagde leerling'},
        { src: wof28, alt: 'geslaagde leerling'},
        { src: wof29, alt: 'geslaagde leerling'},
        { src: wof30, alt: 'geslaagde leerling'},
        { src: wof31, alt: 'geslaagde leerling'},
        { src: wof32, alt: 'geslaagde leerling'},
        { src: wof33, alt: 'geslaagde leerling'},
        { src: wof34, alt: 'geslaagde leerling'},
        { src: wof35, alt: 'geslaagde leerling'},
        { src: wof36, alt: 'geslaagde leerling'},
        { src: wof37, alt: 'geslaagde leerling'},
        { src: wof38, alt: 'geslaagde leerling'},
        { src: wof39, alt: 'geslaagde leerling'},
        { src: wof40, alt: 'geslaagde leerling'},
        { src: wof41, alt: 'geslaagde leerling'},
        { src: wof42, alt: 'geslaagde leerling'},
        { src: wof43, alt: 'geslaagde leerling'},
        { src: wof44, alt: 'geslaagde leerling'},
        { src: wof45, alt: 'geslaagde leerling'},
        { src: wof46, alt: 'geslaagde leerling'},
        { src: wof47, alt: 'geslaagde leerling'},
        { src: wof48, alt: 'geslaagde leerling'},
        { src: wof49, alt: 'geslaagde leerling'},
        { src: wof50, alt: 'geslaagde leerling'},
        { src: wof51, alt: 'geslaagde leerling'},
        { src: wof52, alt: 'geslaagde leerling'},
        { src: wof53, alt: 'geslaagde leerling'},
        { src: wof54, alt: 'geslaagde leerling'},
        { src: wof55, alt: 'geslaagde leerling'},
        { src: wof56, alt: 'geslaagde leerling'},
        { src: wof57, alt: 'geslaagde leerling'},
        { src: wof58, alt: 'geslaagde leerling'},
        { src: wof59, alt: 'geslaagde leerling'},
        { src: wof60, alt: 'geslaagde leerling'},
        { src: wof61, alt: 'geslaagde leerling'},
        { src: wof62, alt: 'geslaagde leerling'},
        { src: wof63, alt: 'geslaagde leerling'},
        { src: wof64, alt: 'geslaagde leerling'},
        { src: wof65, alt: 'geslaagde leerling'},
        { src: wof66, alt: 'geslaagde leerling'},
        { src: wof67, alt: 'geslaagde leerling'},
        { src: wof68, alt: 'geslaagde leerling'},
        { src: wof69, alt: 'geslaagde leerling'},
        { src: wof70, alt: 'geslaagde leerling'},
      ]
    
    return (
        <div className='wall-of-fame-section'>
            <h3 className='wall-of-fame-titel'>
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
                            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" 
                        />
                </svg>
                Wall of Fame
            </h3>
            <p className='p-tlr-1'>&#128247; Velen gingen je voor. &#127942;</p>
            <p>¡Viva la Rijvolutie siempre!</p>
            <div className='image-grid'>
                {/* Grid */}
                {[...images].reverse().map((img) => (
                    <figure key={img.src} className='image-grid__item'>
                        <img 
                            src={img.src}
                            alt={img.alt || ''}
                            loading="lazy"
                            decoding="async"
                            width={'500px'}
                            height={'auto'}
                            draggable={false}
                            onClick={() => setSelectedImage(img)}
                        />
                        
                    </figure>
                ))}
                {/* Fullscreen Overlay */}
                {selectedImage && (
                    <div
                    className="lightbox"
                    onClick={() => setSelectedImage(null)}
                    role="dialog"
                    aria-modal="true"
                    >
                    <button
                        className="close-btn"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="close-btn-icon"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                    </button>
                    
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="lightbox-image"
                        draggable={false}
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
                    />
                    </div>
                )}
            </div>
        </div>            
    )
}

{/* Created by willemwebdev.com */}