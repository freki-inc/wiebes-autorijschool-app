import { useState } from 'react'

import { Nav } from './Nav'
import { OverOns } from './OverOns'
import { Footer } from './Footer'

export const OverOnsPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
    <main>
        <Nav 
            isOpen={isNavOpen}
            onOpen={() => setIsNavOpen(true)}
            onClose={() => setIsNavOpen(false)}
        />
        <OverOns />
        <Footer />
    </main>
    )
}

{/* Created by willemwebdev.com */}