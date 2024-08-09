import "./styles/global.scss";
import { DessertsList } from "./components/DessertsList/Desserts-list";
import { Cart } from "./components/Cart/Cart";


export function App() {
    return (
        <>
            <main>
                <DessertsList />
                <Cart />
            </main>
        </>
    );
}
