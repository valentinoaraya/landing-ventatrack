import "./ShopItem.css"

interface Props {
    title: string;
    icon: React.ReactNode;
}

const ShopItem: React.FC<Props> = ({ title, icon }) => {
    return (
        <div className="shopItem">
            {icon}
            <p className="titleShopItem">{title}</p>
        </div>
    );
}

export default ShopItem;
