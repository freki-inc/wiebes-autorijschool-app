import opelMokka from "./src/assets/images/Opel-Mokka.webp"
import tesla from "./src/assets/images/tesla.webp"

export const Cars = () => {
    return (
        <div>
            <div>
                <img className="mb-1" src={opelMokka} alt="opel mokka auto"></img>
                <p className="center-text mb-1 p-1">Bij Wiebe’s autorijschool zul je je zeker op je gemak voelen. Er zijn twee opties beschikbaar om te leren autorijden, een Opel Mokka (schakkel) en een Tesla (automaat).</p>
                
            </div>
            <div>
                <img className="mb-1" src={tesla} alt="tesla auto"></img>
                <p className="center-text mb-1 p-1">In deze auto's geeft de instructeur namelijk op een betrokken en prettige manier les. Iedere leerling kan pakketten op maat samenstellen, zodat ook jij op de beste manier naar je rijbewijs toe kunt werken.</p>
            </div>
        </div>
    )

}

{/* Created by willemwebdev.com */}