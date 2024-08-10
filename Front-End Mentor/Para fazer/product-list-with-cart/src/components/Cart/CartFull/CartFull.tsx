import carbonNeutral from "../../../assets/images/icon-carbon-neutral.svg"
import removeItem from "../../../assets/images/icon-remove-item.svg"
import "./CartFull.scss"

export const CartFull: React.FC = () => {
    return (
        <div className="full-cart">
            <h2>Your Cart (1)</h2>
            
            <div className="cart-item">
                <h4>Classic Tiramisu</h4>
                <div className="price-and-quantity">
                    <span className="quantity">1x</span>
                    <span className="unit-price">@ $5.50</span>
                    <span className="total-price">@ $5.50</span>
                </div>
                <button>
                    <img src={removeItem} alt="" />
                </button>
            </div>

            <div className="order-total">
                <span>Order Total</span>
                <span>$46.50</span>
            </div>

            <div className="carbon-neutral-delivery">
                <img src={carbonNeutral} alt="" />
                This is a <strong>carbon neutral</strong> delivery
            </div>
            <button>Confirm Order</button>
        </div>  
    )
}