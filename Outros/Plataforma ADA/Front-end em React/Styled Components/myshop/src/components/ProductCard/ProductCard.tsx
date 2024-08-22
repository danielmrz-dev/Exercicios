import { Product } from "../../data/products";
import * as S from "./StyledProductCard";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../Redux/root-reducer";

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { cart } = useSelector(
        (rootReducer: RootReducer) => rootReducer.cartReducer
    );

    const isProductOnCart =
        cart.find((productOnCart) => product.id === productOnCart.id) !==
        undefined;

    const dispatch = useDispatch();

    function handleAddProductToCart() {
        dispatch({
            type: "cart/add-product",
            payload: product,
        });
    }

    function handleRemoveProductFromCart() {
        dispatch({
            type: "cart/remove-product",
            payload: product
        })
    }

    return (
        <S.Card>
            <S.ProductImage src={product.image} alt={product.description} />
            <S.ProductTitle>{product.title}</S.ProductTitle>
            <S.ReviewPriceContainer>
                <S.Review>
                    ({product.rating.rate})
                    {Array.from({ length: 5 }).map((_, index) =>
                        index < Math.round(product.rating.rate) ? (
                            <AiFillStar key={index} />
                        ) : (
                            <AiOutlineStar key={index} />
                        )
                    )}
                </S.Review>
                <S.Price>$ {product.price}</S.Price>
            </S.ReviewPriceContainer>
            <S.AddToCardButtonWrapper>
                {isProductOnCart ? (
                    <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
                        Remover do Carrinho
                        <FiShoppingCart />
                    </S.RemoveFromCartButton>
                ) : (
                    <S.AddToCardButton onClick={handleAddProductToCart}>
                        Adicionar ao Carrinho
                        <FiShoppingCart />
                    </S.AddToCardButton>
                )}
            </S.AddToCardButtonWrapper>
        </S.Card>
    );
};
