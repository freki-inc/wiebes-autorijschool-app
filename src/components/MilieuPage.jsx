import { useState } from 'react'

import { Nav } from './Nav'
import { Milieu } from './Milieu'
import { Footer } from './Footer'

export const MilieuPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
    <main>
        <Nav 
            isOpen={isNavOpen}
            onOpen={() => setIsNavOpen(true)}
            onClose={() => setIsNavOpen(false)}
        />
        <Milieu />
        <Footer />
    </main>
    )
}

{/* Created by willemwebdev.com */}