import "./NavBar.css"
import Button from "../../common/Button/Button";
import { useState, useEffect } from "react";

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScolled = window.scrollY > 10;
            setScrolled(isScolled)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={scrolled ? "scrolled" : ""}>
            <div className="navBarContent">
                <h1
                    className="titleNavBar"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    VentaTrack
                </h1>
                <Button
                    styleButton="outline"
                    onClick={() => window.open("https://wa.me/542625660880?text=¡Hola!%20Me%20gustaría%20probar%20VentaTrack%20por%2010%20días%20para%20mi%20negocio.%20¿Podés%20contarme%20como%20es%20el%20proceso?", "_blank")}
                    padding=".5rem"
                    fontSize=".8rem"
                >
                    Solicitar prueba gratis
                </Button>
            </div>
        </nav>
    );
}

export default NavBar;
