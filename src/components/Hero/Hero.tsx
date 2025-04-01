import "./Hero.css"
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";
import panelVentaTrack from "../../assets/images/panelVentaTrack.webp"

const Hero = () => {
    return (
        <div className="heroContainer">
            <div className="heroData">
                <Title>
                    El control de tu negocio, en un solo lugar
                </Title>
                <p className="parrafHero">Seguí tus ventas y pagos, gestioná tus productos y cambiá precios de forma rápida y sencilla.</p>
                <Button
                    styleButton="stuffed"
                    onClick={() => window.open("https://wa.me/542625660880?text=¡Hola!%20Me%20gustaría%20probar%20VentaTrack%20por%2010%20días%20para%20mi%20negocio.%20¿Podés%20contarme%20como%20es%20el%20proceso?", "_blank")}
                >
                    Solicitar prueba gratis
                </Button>
            </div>
            <img className="heroImage" src={panelVentaTrack} alt="Panel de ventas" />

        </div>
    );
}

export default Hero;
