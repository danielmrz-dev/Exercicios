import "./desserts-list.scss";
import dessertPic from "../assets/images/image-waffle-mobile.jpg"
import cartIcon from "../assets/images/icon-add-to-cart.svg";

export const DessertsList: React.FC = () => {
    return (
        <section>
            <h1 className="title">Desserts</h1>
            <ul className="desserts-list">
                <li className="desserts-list-item">
                    <div className="picture-and-button">
                        <img src={dessertPic} alt="Cake" className="dessert-picture" />
                        <button className="add-to-card-btn">
                            <img src={cartIcon} alt="Add to cart button" />
                            Add to Cart
                        </button>
                    </div>
                    <div className="description-and-price">
                        <span className="dessert-type">Waffle</span>
                        <p className="dessert-name">Waffle with Berries</p>
                        <span className="dessert-price">$6.50</span>
                    </div>
                </li>
            </ul>
        </section>
    )
}