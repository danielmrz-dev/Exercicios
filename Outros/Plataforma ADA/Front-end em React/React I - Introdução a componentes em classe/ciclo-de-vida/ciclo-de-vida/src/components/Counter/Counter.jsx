import React from "react";

export class Counter extends React.Component {
    constructor() {
        super()
        console.log("Construindo a classe Counter.");
        
        this.state = {
            counter: 0
        }
    }

    shouldComponentUpdate() {
        if (this.state.counter === 2) return false;
        return true;
    }

    componentWillUpdate() {
        console.log("Vai atualizar...");
    }

    componentDidUpdate() {
        console.log("Atualizou");
    }

    

    // UNSAFE_componentWillMount() {
    //     console.log("Componente vai montar...");
    // }
    componentDidMount() {
        console.log("Componente montou...");
        document.addEventListener("scroll", this.consoleScroll)
    }
    componentWillUnmount() {
        console.log("Componente vai desmontar...");
        document.removeEventListener("scroll", this.consoleScroll)
    }

    consoleScroll() {
        console.log("Rolando a página...");
    }

    render() {
        console.log("Renderizando...");
        
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button
                    onClick={() => {
                        this.setState({ counter: this.state.counter - 1})
                    }}
                >Diminuir
                </button>

                <button
                    onClick={() => {
                        this.setState({ counter: this.state.counter + 1})
                    }}
                >Aumentar</button>
            </div>
        )
    }
}