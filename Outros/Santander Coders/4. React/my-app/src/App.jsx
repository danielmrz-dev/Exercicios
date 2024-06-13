import React from "react";
import "./styles/App.css"
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import article1Img from "./assets/images/article1.png";
import article2Img from "./assets/images/article2.png";
import article3Img from "./assets/images/article3.png";
// import { Counter } from "./components/Counter/Counter";

// Um componente em classe é uma classe que herda a classe Component do React e retorna HTML dentro do método render().
// É como se fosse uma tag HTML personalizada para retornar o HTML e algumas funcionalidades.

class App extends React.Component {
    // Render é o método responsável por renderizar o HTML do componente
    render() {
        return (
            <>
                <Navbar/> 

                {/* <Counter/> */}
                <section id="articles">
                    <Article 
                        thumbnail={article1Img}
                        title="Designing Dashboards"
                        provider="NASA"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                    <Article 
                        thumbnail={article2Img}
                        title="Vibrant Portraits of 2020"
                        provider="SpaceNews"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                    <Article 
                        thumbnail={article3Img}
                        title="36 Days of Malayalam type"
                        provider="SpaceFlight Now"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                </section>
            </>
        )
    }
}

export default App;
