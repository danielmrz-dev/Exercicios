import emptyCartImage from "../../assets/images/illustration-empty-cart.svg";
import "./Cart.scss";

export const Cart: React.FC = () => {
    return (
        <section className="empty-cart">
            <h2>Your Cart (0)</h2>
            <img src={emptyCartImage} alt="" />
            <p>Your added items will appear here.</p>
        </section>
    )
}