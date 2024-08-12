import "./styles/global.scss";
import { DessertsList } from "./components/DessertsList/Desserts-list";
import { Cart } from "./components/Cart/Cart";
// import { Dialog } from "./components/Dialog/Dialog";

export function App() {
    return (
        <>
            <main>
                <DessertsList />
                <Cart />
                {/* <Dialog/> */}
            </main>
        </>
    );
}
