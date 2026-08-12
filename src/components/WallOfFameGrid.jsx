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

export const WallOfFameGrid = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: wof1, alt: 'geslaagde leerling', caption: 'Ik ben geslaagd door Wiebe!' },
        { src: wof2, alt: 'geslaagde leerling', caption: 'Ik ben geslaagd door Wiebe!' },
        { src: wof3, alt: 'geslaagde leerling', caption: 'Ik ben geslaagd door Wiebe!' },
        { src: wof4, alt: 'geslaagde leerling', caption: 'Ik ben geslaagd door Wiebe!' },
        { src: wof5, alt: 'geslaagde leerling', caption: 'Ik ben geslaagd door Wiebe!' },
        { src: wof6, alt: 'geslaagde leerling', caption: 'Ik ben geslaagd door Wiebe!' },
        { src: wof7, alt: 'geslaagde leerling', caption: 'Ik ben geslaagd door Wiebe!' },
        { src: wof8, alt: 'geslaagde leerling', caption: 'Ik ben geslaagd door Wiebe!' },
        { src: wof9, alt: 'geslaagde leerling', caption: 'Ik ben geslaagd door Wiebe!' },
        { src: wof10, alt: 'geslaagde leerling', caption: 'Ik ben geslaagd door Wiebe!' },
        { src: wof11, alt: 'geslaagde leerling', caption: 'Ik ben geslaagd door Wiebe!' },
      ]
    
    return (
        <main className='wall-of-fame-section'>
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
            <div className='image-grid'>
                {/* Grid */}
                {images.map((img) => (
                    <figure key={img.src} className='image-grid__item'>
                        <img 
                            src={img.src}
                            alt={img.alt || ''}
                            loading="lazy"
                            decoding="async"
                            width={'400px'}
                            height={'auto'}
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='icon'><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                    </button>
                    
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="lightbox-image"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
                    />
                    {selectedImage.caption && <figcaption className='fig-caption'>{selectedImage.caption}</figcaption>}
                    </div>
                )}
            </div>
            
        </main>
    )
}

{/* Created by willemwebdev.com */}