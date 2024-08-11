import removeItem from "../../../assets/images/icon-remove-item.svg"
import "./CartItem.scss"

export const CartItem: React.FC = () => {
    return (
        <div className="cart-item">
            <h4>Classic Tiramisu</h4>
            <div className="price-and-quantity">
                <span className="quantity">1x</span>
                <span className="unit-price">@ $5.50</span>
                <span className="total-price">$5.50</span>
            </div>
            <button>
                <img src={removeItem} alt="" />
            </button>
        </div>
    )
}