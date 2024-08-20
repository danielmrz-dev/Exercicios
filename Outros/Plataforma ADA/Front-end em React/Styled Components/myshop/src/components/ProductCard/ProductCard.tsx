import { Product } from "../../data/products";
import * as S from "./StyledProductCard";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
                <S.AddToCardButton>
                    Adicionar ao Carrinho
                    <FiShoppingCart />
                </S.AddToCardButton>
            </S.AddToCardButtonWrapper>
        </S.Card>
    );
};
