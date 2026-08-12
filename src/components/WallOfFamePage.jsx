import { useState } from 'react'

import { Nav } from './Nav'
import { WallOfFameGrid } from './WallOfFameGrid'
import { Footer } from './Footer'

export const WallOfFamePage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
    <main>
        <Nav 
            isOpen={isNavOpen}
            onOpen={() => setIsNavOpen(true)}
            onClose={() => setIsNavOpen(false)}
        />
        <WallOfFameGrid />
        <Footer />
    </main>
    )
}

{/* Created by willemwebdev.com */}