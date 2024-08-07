import "./styles/global.scss";
import { DessertsList } from "./components/Desserts-list/Desserts-list";
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
