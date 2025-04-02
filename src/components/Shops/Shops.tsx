import "./Shops.css"
import ShopItem from "./ShopItem/ShopItem";
import { CartIcon, HammerIcon, BagIcon, BoxIcon, CakeIcon, PencilIcon, PigIcon } from "../../common/Icons/Icons";

const Shops = () => {
    return (
        <div className="shopsContainer">
            <div className="line"></div>
            <h3 className="titleShops">Ideal si manejas ventas diarias en tu negocio</h3>
            <div className="shops">
                <div className="lineShop">
                    <ShopItem
                        icon={
                            <CartIcon
                                width={window.innerWidth > 1100 ? "32" : "24"}
                                height={window.innerWidth > 1100 ? "32" : "24"}
                                fill="#252323"
                            />
                        }
                        title="Despensas y minimercados"
                    />
                    <ShopItem
                        icon={
                            <HammerIcon
                                width={window.innerWidth > 1100 ? "32" : "24"}
                                height={window.innerWidth > 1100 ? "32" : "24"}
                                fill="#252323"
                            />
                        }
                        title="Ferreterías"
                    />
                    <ShopItem
                        icon={
                            <BagIcon
                                width={window.innerWidth > 1100 ? "32" : "24"}
                                height={window.innerWidth > 1100 ? "32" : "24"}
                                fill="#252323"
                            />
                        }
                        title="Tiendas de ropa y calzado"
                    />
                </div>
                <div className="lineShop">
                    <ShopItem
                        icon={
                            <BoxIcon
                                width={window.innerWidth > 1100 ? "32" : "24"}
                                height={window.innerWidth > 1100 ? "32" : "24"}
                                fill="#252323"
                            />
                        }
                        title="Tiendas de repuestos"
                    />
                    <ShopItem
                        icon={
                            <CakeIcon
                                width={window.innerWidth > 1100 ? "32" : "24"}
                                height={window.innerWidth > 1100 ? "32" : "24"}
                                fill="#252323"
                            />
                        }
                        title="Panaderías y almacenes"
                    />
                </div>
                <div className="lineShop">
                    <ShopItem
                        icon={
                            <PencilIcon
                                width={window.innerWidth > 1100 ? "32" : "24"}
                                height={window.innerWidth > 1100 ? "32" : "24"}
                                fill="#252323"
                            />
                        }
                        title="Librerías"
                    />
                    <ShopItem
                        icon={
                            <PigIcon
                                width={window.innerWidth > 1100 ? "32" : "24"}
                                height={window.innerWidth > 1100 ? "32" : "24"}
                                fill="#252323"
                            />
                        }
                        title="Carnicerías"
                    />
                </div>
            </div>
        </div>
    );
}

export default Shops;
