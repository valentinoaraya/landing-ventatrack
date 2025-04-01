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
                    onClick={() => console.log("enviar a wsp")}
                    padding=".5rem"
                >
                    Solicitar prueba gratis
                </Button>
            </div>
        </nav>
    );
}

export default NavBar;
