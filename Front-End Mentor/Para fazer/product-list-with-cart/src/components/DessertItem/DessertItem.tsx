import cartIcon from "../../assets/images/icon-add-to-cart.svg";
import plusIcon from "../../assets/images/icon-increment-quantity.svg";
import minusIcon from "../../assets/images/icon-decrement-quantity.svg";
import "./DessertItem.scss";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
// import { CartContext } from "../Context/CartContext";
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
    quantity?: number
}

export const DessertItem: React.FC<DessertItem> = ({ category, image, name, price }) => {

    const [addToCartBtn, setAddToCartBtn] = useState(true);
    const [itemsNumber, setItemsNumber] = useState(0)

    const { formatCurrency, selectItem } = useContext(CartContext)

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
                    {
                        addToCartBtn ?     
                        <button className="btn-content" 
                            onClick={() => {
                                selectItem(category, image.thumbnail, name, price, itemsNumber + 1)
                                setItemsNumber(itemsNumber + 1)
                                setAddToCartBtn(!addToCartBtn)

                                //= CONTINUAR AQUI, CRIAR A LÓGICA DE ADICIONAR O ITEM CLICADO AO ARRAY DE ITENS ESCOLHIDOS

                            }}>
                            <img
                                src={cartIcon}
                                alt="Add to cart button"
                            />
                            Add to Cart
                        </button> 
                        :
                        <div className="add-or-remove-item">
                            <button 
                            onClick={() => {
                                setItemsNumber(itemsNumber - 1)
                                if (itemsNumber <= 1) {
                                    selectItem(category, image.thumbnail, name, price, itemsNumber - 1)
                                    setAddToCartBtn(!addToCartBtn)                                    
                                }
                            }}>
                                <img src={minusIcon} alt="" />
                            </button>
                            <span>{itemsNumber}</span>
                            <button onClick={() => {
                                selectItem(category, image.thumbnail, name, price, itemsNumber + 1)
                                setItemsNumber(itemsNumber + 1)
                            }}>
                                <img src={plusIcon} alt="" />
                            </button>
                        </div>
                    }
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