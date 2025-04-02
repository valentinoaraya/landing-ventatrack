import "./Features.css"
import Feature from "./Feature/Feature";
import productsInPanel from "../../assets/images/productsInPanel.webp"
import totalAmount from "../../assets/images/totalAmount.webp"
import productsTable from "../../assets/images/productsTable.webp"
import formNewProduct from "../../assets/images/formNewProduct.webp"
import productWithoutCodeInput from "../../assets/images/productWithoutCodeInput.webp"
import historySells from "../../assets/images/history.webp"
import sells from "../../assets/images/sells.webp"
import sellDetail from "../../assets/images/sellDetail.webp"

const Features = () => {
    return (
        <div className="featuresContainer">
            <Feature
                title="Escaneá los productos y cobrá al instante"
                subtitle="Fácil de usar"
                imagesAndData={[
                    {
                        path: productsInPanel,
                        title: "Escaneá los productos",
                        subtitle: "Se añadirán automáticamente al panel y se sumarán los precios.",
                        alt: "Productos en el panel"
                    },
                    {
                        path: totalAmount,
                        title: "Sumá todo y cobrá",
                        subtitle: "También podes agregar productos sin código de barras.",
                        alt: "Monto total"
                    }
                ]}
            />
            <Feature
                title="Gestioná productos y actualizá sus precios"
                subtitle="Gestioná tus productos"
                imagesAndData={[
                    {
                        path: productsTable,
                        title: "Todos tus productos registrados",
                        subtitle: "Podés editar precio, nombre y  código  de barras de cada uno.",
                        alt: "Tabla de productos"
                    },
                    {
                        path: formNewProduct,
                        title: "Agregá productos nuevos",
                        subtitle: "Si el producto no se encuentra registrado podés agregarlo vos mismo.",
                        alt: "Formulario Nuevo Producto"
                    }
                ]}
            />
            <Feature
                title="Registrá lo que sale de tu caja"
                subtitle="Controlá lo que pagás"
                imagesAndData={[
                    {
                        path: productWithoutCodeInput,
                        title: "Si le pagás a un proveedor, lo tenés registrado",
                        subtitle: "El dinero que sale de tu caja se resta del total realizado en el día.",
                        alt: "Tabla de productos"
                    },
                ]}
            />
            <Feature
                title="Consultá las ventas realizadas en el historial"
                subtitle="Registrá las ventas"
                imagesAndData={[
                    {
                        path: historySells,
                        title: "Todas las ventas que realizaste",
                        subtitle: "Revisá la caja del día que quieras, registramos todo por vos.",
                        alt: "Tabla de productos"
                    },
                    {
                        path: sells,
                        title: "Revisá lo que entró y salió",
                        subtitle: "Podés ver lo que pagaste y la cantidad de ventas con sus totales.",
                        alt: "Tabla de productos"
                    },
                    {
                        path: sellDetail,
                        title: "Cada venta en detalle",
                        subtitle: "Consultá los productos que vendiste en una venta específica.",
                        alt: "Tabla de productos"
                    },
                ]}
            />
        </div>
    );
}

export default Features;
