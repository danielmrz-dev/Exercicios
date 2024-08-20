import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";
import * as S from "./StyledHeader";

export const Header: React.FC = () => {

    const [showCart, setShowCart] = useState(false)
    const [isLogged, setIslogged] = useState(false)

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop</S.HeaderTitle>
                <S.ButtonsWrapper>
                    <S.AuthButton isLogged={isLogged} onClick={() => setIslogged(!isLogged)}>
                        {isLogged ? "Logout" : "Login"}
                        {isLogged ? <FiLogOut /> : <FiLogIn />}
                    </S.AuthButton>
                    <S.CartButton onClick={() => setShowCart(!showCart)}>
                        Carrinho
                        <FiShoppingCart/>
                    </S.CartButton>
                </S.ButtonsWrapper>
            </S.Wrapper>
            <Cart showCart={showCart}/>
        </S.StyledHeader>
    );
};
