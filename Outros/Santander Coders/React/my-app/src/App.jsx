import React from "react";
import "./styles/App.css"
import Navbar from "./components/Navbar/Navbar";
// Um componente em classe é uma classe que herda a classe Component do React e retorna HTML dentro do método render().
// É como se fosse uma tag HTML personalizada para retornar o HTML e algumas funcionalidades.

class App extends React.Component {
    // Render é o método responsável por renderizar o HTML do componente
    render() {
        return <Navbar/>;
    }
}

export default App;
