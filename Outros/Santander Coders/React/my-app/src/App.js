import React from "react";

// Um componente em classe é uma classe que herda a classe Component do React e retorna HTML dentro do método render().
// É como se fosse uma tag HTML personalizada para retornar o HTML e algumas funcionalidades.

class App extends React.Component {

  // Render é o método responsável por renderizar o HTML do componente
  render() {
    return (
        <div>
          <h1>Aprendendo React ⚛️</h1>
  
          <p>Isso é um parágrafo!</p>
        </div>
    );
  }
}

export default App;
