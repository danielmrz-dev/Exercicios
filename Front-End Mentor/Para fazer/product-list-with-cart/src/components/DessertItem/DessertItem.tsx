import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import plusIcon from "../../assets/images/icon-increment-quantity.svg"
import minusIcon from "../../assets/images/icon-decrement-quantity.svg"

export interface DessertItem {
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

export const DessertItem: React.FC<DessertItem> = ({ category, image, name, price }) => {

    function formatCurrency(price: number): string {
        const formattedPrice = price.toLocaleString("en-us", {
            style: "currency",
            currency: "USD",
        });
        return formattedPrice;
    }
    
    return (
        <li className="desserts-list-item">
            <div className="picture-and-button">
                <picture>
                    <source media="(min-width: 846px)" srcSet={image.desktop} type="image/jpg" />
                    <img
                        src={image.mobile}
                        alt={name}
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
                    {category}
                </span>
                <p className="dessert-name">{name}</p>
                <span className="dessert-price">
                    {formatCurrency(price)}
                </span>
            </div>
        </li>
    )
}