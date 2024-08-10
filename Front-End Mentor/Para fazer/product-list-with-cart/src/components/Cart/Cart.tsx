import "./Cart.scss";
import { CartFull } from "./CartFull/CartFull";
// import { CartEmpty } from "./CartEmpty/CartEmpty";


export const Cart: React.FC = () => {
    return (
        <section className="cart">
            {/* <CartEmpty/> */}
            <CartFull/>
        </section>
    );
};
