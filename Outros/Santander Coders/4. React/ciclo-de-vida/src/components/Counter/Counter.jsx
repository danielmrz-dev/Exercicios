import React from "react";

export class Counter extends React.Component {
    constructor() {
        super();
        // console.log("Construindo a classe Counter.");

        this.state = {
            contador: 0,
        };
    }

    UNSAFE_componentWillMount() {
        // console.log("O componente Counter será montado");
    }

    componentDidMount() {
        console.log("O componente Counter foi montado");

        document.addEventListener("scroll", this.consoleScroll)
    }

    shouldComponentUpdate() {
        return true;
    }

    UNSAFE_componentWillUpdate() {
        console.log("Componente será atualizado!");
    }

    componentDidUpdate() {
        console.log("Componente foi atualizado!");
    }

    componentWillUnmount() {
        console.log("O componente será desmontado.");

        document.removeEventListener("scroll", this.consoleScroll)
    }

    consoleScroll() {
        console.log("Rolling...");
    }

    render() {
        console.log("Renderizando...");
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <button
                    onClick={() => {
                        this.setState({ contador: this.state.contador - 1 });
                    }}
                >
                    Diminuir
                </button>
                <button
                    onClick={() => {
                        this.setState({ contador: this.state.contador + 1 });
                    }}
                >
                    Aumentar
                </button>
            </div>
        );
    }
}
