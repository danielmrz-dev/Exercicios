import React from "react";
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            showComponent: false,
            textoDoBotao: "Remover Componente",
        };
    }

    render() {
        return (
            <div>
                <h1>Ciclo de vida no React</h1>

                <button
                    onClick={() => {
                        this.setState({
                            showComponent: !this.state.showComponent,
                        });
                    }}
                >
                    {this.state.showComponent
                        ? "Mostrar componente"
                        : "Remover componente"}
                </button>

                {this.state.showComponent ? <Counter /> : null}
            </div>
        );
    }
}

export default App;
