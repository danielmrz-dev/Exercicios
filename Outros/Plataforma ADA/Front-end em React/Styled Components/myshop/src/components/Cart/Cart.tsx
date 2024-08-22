import { useDispatch, useSelector } from "react-redux";
import * as S from "./StyledCart";
import { RootReducer } from "../../Redux/root-reducer";
import { removeProduct } from "../../Redux/Cart/cart-slice";

interface CartProps {
    showCart: boolean
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {

    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

    const total = cart.reduce((totalCart, product) => {
        return totalCart + product.price
    }, 0)

    const dispatch = useDispatch()

    return (
        <S.Container showCart={showCart}>
            <S.Title>Carrinho</S.Title>

            <S.CartProductsList>
                {
                    cart.map((product) => (
                        <S.CartProductItem key={product.id}>
                            <strong>{product.title}</strong> - {product.price}
                            <button onClick={() => dispatch(removeProduct(product))}>Remover</button>
                        </S.CartProductItem>
                    ))
                }
            </S.CartProductsList>

            <S.CartTotal>
                Total: $ {total}
            </S.CartTotal>
        </S.Container>
    )
}