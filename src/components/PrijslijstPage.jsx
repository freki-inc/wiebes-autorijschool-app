import { useState } from 'react'

import { Nav } from './Nav'
import { PriceComplete } from './PriceComplete'
import { Footer } from './Footer'

export const PrijslijstPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
    <main>
        <Nav 
            isOpen={isNavOpen}
            onOpen={() => setIsNavOpen(true)}
            onClose={() => setIsNavOpen(false)}
        />
        <PriceComplete />
        <Footer />
    </main>
    )
}

{/* Created by willemwebdev.com */}