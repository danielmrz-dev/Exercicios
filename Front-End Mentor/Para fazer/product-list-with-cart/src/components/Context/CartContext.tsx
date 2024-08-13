import { createContext, useEffect, useState } from "react";
import { DessertItem } from "../DessertItem/DessertItem";
import axios from "axios";

export const CartContext = createContext({} as CartContextData);

interface CartProviderProps {
    children: React.ReactNode;
}

interface CartContextData {
    formatCurrency: (price: number) => string;
    selectItem: (category: string, image: string, name: string, price: number, quantity?: number) => void;
    desserts: DessertItem[];
    setDesserts: React.Dispatch<React.SetStateAction<DessertItem[]>>;
    selectedItems: DessertItem[]
    setSelectedItems:  React.Dispatch<React.SetStateAction<DessertItem[]>>;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

    const [selectedItems, setSelectedItems] = useState([] as DessertItem[])

    function selectItem(category: string, image: string, name: string, price: number, quantity?: number): DessertItem {
        const teste: DessertItem = {
            category: category,
            image: {
                desktop: image,
                mobile: image,
                tablet: image,
                thumbnail: image,
            },
            name: name,
            price: price,
            quantity: quantity
        };

        console.log(teste);
        return teste;
    }

    const [desserts, setDesserts] = useState([] as DessertItem[]);
    
    useEffect(() => {
        async function getData() {
            const data = await axios.get("./data.json");
            const desserts = data.data;
            setDesserts(desserts)
        }
        getData();
    }, []);

    function formatCurrency(price: number): string {
        const formattedPrice = price.toLocaleString("en-us", {
            style: "currency",
            currency: "USD",
        });
        return formattedPrice;
    }

    return (
        <CartContext.Provider
            value={{
                formatCurrency,
                desserts,
                setDesserts,
                selectItem,
                selectedItems,
                setSelectedItems
            }}
        >
            {children}
        </CartContext.Provider>
    )
}