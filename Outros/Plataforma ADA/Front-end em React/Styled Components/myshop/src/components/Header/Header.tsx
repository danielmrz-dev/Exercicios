import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";
import * as S from "./StyledHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../Redux/root-reducer";

export const Header: React.FC = () => {

    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)
    const [showCart, setShowCart] = useState(false)
    const isLogged = false

    const dispatch = useDispatch()
    
    function handleUserAuth() {
        if (user === null) {
            dispatch({
                type: "user/login",
                payload: {
                    name: "Daniel",
                    email: "dan@ana.com"
                }
            })
        } else {
            dispatch({
                type: "user/logout",
            })
        } 
        
    }

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop</S.HeaderTitle>
                <S.ButtonsWrapper>
                    <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
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
