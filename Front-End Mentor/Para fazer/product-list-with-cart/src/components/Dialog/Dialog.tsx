import "./Dialog.scss";
import orderConfirmed from "../../assets/images/icon-order-confirmed.svg";
import dessertImg from "../../assets/images/image-waffle-thumbnail.jpg"

export const Dialog: React.FC = () => {
    return (
        <dialog className="dialog">
            <img src={orderConfirmed} alt="" />
            <div className="order-confirmed-text">
                <h2>Order Confirmed</h2>
                <p>We hope you enjoy your food!</p>
            </div>
            <div className="list-and-items">
                <ul className="items-selected-list">
                    <li className="selected-item">
                        <img src={dessertImg} alt="" />
                        <h3>Classic Tiramisu</h3>
                        <span className="item-price-container">
                            <span className="quantity">1x</span>
                            <span className="item-price">@ $5.50</span>
                        </span>
                        <span className="total-item-price">$5.50</span>
                    <hr />
                    </li>
                    <li className="selected-item">
                        <img src={dessertImg} alt="" />
                        <h3>Classic Tiramisu</h3>
                        <span className="item-price-container">
                            <span className="quantity">1x</span>
                            <span className="item-price">@ $5.50</span>
                        </span>
                        <span className="total-item-price">$5.50</span>
                    <hr />
                    </li>
                </ul>
                <div className="order-total">
                    <span>Order total</span>
                    <span>$46.50</span>
                </div>
            </div>
            <button className="start-new-order-btn">Start a new order</button>
        </dialog>
    )
}