import { useEffect, useState } from "react";
import { DessertItem } from "../DessertItem/DessertItem";
import "./desserts-list.scss";
import axios from "axios";

export const DessertsList: React.FC = () => {

    const [desserts, setDesserts] = useState([] as DessertItem[]);
    
    useEffect(() => {
        async function getData() {
            const data = await axios.get("../public/data.json");
            const desserts = data.data;
            //= CONTINUAR AQUI, FAZER UM MAP E ADICIONAR UM ID UNICO PARA CADA ITEM
            setDesserts(desserts);
        }
        getData();
    }, []);

    return (
        <section>
            <h1 className="title">Desserts</h1>
            <ul className="desserts-list">
                {desserts.map((dessert) => {
                    return (
                        <DessertItem
                            // key={dessert.id}
                            name={dessert.name}
                            category={dessert.category}
                            image={dessert.image}
                            price={dessert.price}
                        />
                    )
                })}
            </ul>
        </section>
    );
};
