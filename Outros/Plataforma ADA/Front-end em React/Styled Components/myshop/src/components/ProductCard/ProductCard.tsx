import * as S from "./StyledProductCard";
import { FiShoppingCart } from "react-icons/fi";

export const ProductCard: React.FC = () => {
    return (
        <S.Card>
            <S.ProductImage src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
            <S.ProductTitle>
                Mens casual premium slim fit T-shirts
            </S.ProductTitle>
            <S.ReviewPriceContainer>
                <S.Review>
                    4.1
                </S.Review>
                <S.Price>
                    $ 22.35
                </S.Price>
            </S.ReviewPriceContainer>
            <S.AddToCardButtonWrapper>
                <S.AddToCardButton>
                    Adicionar ao Carrinho
                    <FiShoppingCart/>
                </S.AddToCardButton>
            </S.AddToCardButtonWrapper>
        </S.Card>
    );
};
