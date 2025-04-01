import "./Pricing.css"
import Button from "../../common/Button/Button";

const Pricing = () => {
    return (
        <div className="pricingContainer">
            <div className="line"></div>
            <h3 className="titlePricing">Probá gratis y transformá tu negocio</h3>
            <div className="cardsPriceContainer">
                <div className="cardPrice">
                    <h3 className="titleCardPrice">Prueba Gratuita</h3>
                    <p className="subtitleCardPrice">Accedé a todas las funciones por 10 días.</p>
                    <p className="price">¡Gratis!</p>
                    <Button
                        onClick={() => window.open("https://wa.me/542625660880?text=¡Hola!%20Me%20gustaría%20probar%20VentaTrack%20por%2010%20días%20para%20mi%20negocio.%20¿Podés%20contarme%20como%20es%20el%20proceso?", "_blank")}
                        styleButton="outline"
                    >
                        Solicitar Prueba Gratis
                    </Button>
                </div>
                <div className="cardPrice">
                    <h3 className="titleCardPrice">Plan Mensual</h3>
                    <p className="subtitleCardPrice">Disfrutá de todas las funciones sin límites.</p>
                    <p className="price">$20.000 / mes</p>
                    <Button
                        onClick={() => window.open("https://wa.me/542625660880?text=¡Hola!%20Me%20gustaría%20utilizar%20VentaTrack%20para%20mi%20negocio.%20¿Podés%20contarme%20como%20es%20el%20proceso?", "_blank")}
                        styleButton="stuffed"
                    >
                        Solicitar Plan Mensual
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
