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
                    onClick={() => console.log("enviar a wsp")}
                >
                    Solicitar prueba gratis
                </Button>
            </div>
            <img className="heroImage" src={panelVentaTrack} alt="Panel de ventas" />

        </div>
    );
}

export default Hero;
