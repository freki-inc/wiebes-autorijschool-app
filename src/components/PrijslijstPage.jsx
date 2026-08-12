import { useState } from 'react'

import { Nav } from './Nav'
import { Price } from './Price'
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
        <Price />
        <Footer />
    </main>
    )
}

{/* Created by willemwebdev.com */}