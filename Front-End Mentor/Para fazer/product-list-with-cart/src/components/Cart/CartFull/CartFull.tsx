import carbonNeutral from "../../../assets/images/icon-carbon-neutral.svg"
import { CartItem } from "../CartItem.tsx/CartItem"
import "./CartFull.scss"

export const CartFull: React.FC = () => {
    return (
        <div className="full-cart">
            <h2>Your Cart (1)</h2>

            <CartItem/>            
            <CartItem/>            

            <div className="order-total">
                <span>Order Total</span>
                <span>$46.50</span>
            </div>

            <div className="carbon-neutral-delivery">
                <img src={carbonNeutral} alt="" />
                <p>This is a <strong>carbon neutral</strong> delivery</p>
            </div>
            <button className="confirm-order-btn">Confirm Order</button>
        </div>  
    )
}