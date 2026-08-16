import { NavLink } from "react-router-dom";

import '../PriceCard.css'

export const PriceCard = () => {
    return (
        <div id="price" className="price-container">
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
            <svg className="svg-container">
                {/* <defs>
                <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
                    <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                    <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
                    </feOffset>

                    <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
                    <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                    <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
                    </feOffset>

                    <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
                    <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
                    <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
                    </feOffset>

                    <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
                    <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
                    <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
                    </feOffset>

                    <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
                    <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
                    <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

                    <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="30" xChannelSelector="R" yChannelSelector="B" />
                </filter>
                </defs> */}
            </svg>

            <div className="card-container">
                <div className="inner-container">
                    <div className="border-outer">
                        <div className="main-card"></div>
                    </div>
                    <div className="glow-layer-1"></div>
                    <div className="glow-layer-2"></div>
                </div>

                <div className="overlay-1"></div>
                <div className="overlay-2"></div>
                <div className="background-glow"></div>

                <div className="content-container">
                    <div className="content-top display-flex-row">
                        <div className="scrollbar-glass">
                        Begin nu je opleiding!
                        </div>
                        <p className="price-crossed-out crossed-out">€105</p>
                        <p className="price"> €70</p>
                        <p>per les</p>
                    </div>

                    <hr className="divider" />

                    <div className="content-bottom">
                        <p className="description"><span>&#128073;</span>Meerdere pakketen beschikbaar.</p>
                        <p className="description"><span>&#128073;</span>Gespreid betalen mogelijk.</p>
                        <p className="description"><span>&#128073;</span>Plan GRATIS lessen in de app.</p>
                    </div>

                    <hr className="divider" />

                    <div className="display-flex-row mt-1">
                        <button className="action-button on-top prevent-select mt-05" draggable={false}><NavLink to="/prijslijst" draggable={false}>Tarieven en Pakketen</NavLink></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

{/* Created by willemwebdev.com */}