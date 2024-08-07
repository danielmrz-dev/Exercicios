import "./desserts-list.scss";
import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import plusIcon from "../../assets/images/icon-increment-quantity.svg"
import minusIcon from "../../assets/images/icon-decrement-quantity.svg"
import { useEffect, useState } from "react";
import axios from "axios";

interface DessertItem {
    category: string;
    image: {
        desktop: string;
        mobile: string;
        tablet: string;
        thumbnail: string;
    };
    name: string;
    price: number;
}

export const DessertsList: React.FC = () => {

    function formatCurrency(price: number): string {
        const formattedPrice = price.toLocaleString("en-us", {
            style: "currency",
            currency: "USD",
        });
        return formattedPrice;
    }

    const [desserts, setDesserts] = useState([] as DessertItem[]);
    useEffect(() => {
        async function getData() {
            const data = await axios.get("../public/data.json");
            const desserts = data.data;
            setDesserts(desserts);
        }
        getData();
    }, []);

    return (
        <section>
            <h1 className="title">Desserts</h1>
            <ul className="desserts-list">
                {desserts.map((dessert) => {
                    return (
                        <li className="desserts-list-item">
                            <div className="picture-and-button">
                                <picture>
                                    <source media="(min-width: 846px)" srcSet={dessert.image.desktop} type="image/jpg" />
                                    <img
                                        src={dessert.image.mobile}
                                        alt={dessert.name}
                                        className="dessert-picture"
                                    />
                                </picture>
                                <div className="add-to-card-btn">
                                    <button className="btn-content">
                                        <img
                                            src={cartIcon}
                                            alt="Add to cart button"
                                        />
                                        Add to Cart
                                    </button>
                                    <div className="add-or-remove-item">
                                        <button>
                                            <img src={minusIcon} alt="" />
                                        </button>
                                        <span>1</span>
                                        <button>
                                            <img src={plusIcon} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="description-and-price">
                                <span className="dessert-type">
                                    {dessert.category}
                                </span>
                                <p className="dessert-name">{dessert.name}</p>
                                <span className="dessert-price">
                                    {formatCurrency(dessert.price)}
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
