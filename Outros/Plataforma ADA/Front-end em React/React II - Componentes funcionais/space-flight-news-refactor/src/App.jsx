import React from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import articleImg1 from "../src/assets/images/Rectangle 30.png";
import articleImg2 from "../src/assets/images/Rectangle 32.png";
import articleImg3 from "../src/assets/images/Rectangle 34.png";

// Um componente em classe é uma classe que herda a classe Component do React e retorna HTML dentro do método render();

// Um componente funcional é um função que retorna um HTML.

export function App() {
        return (
            <>
                <Navbar/>
                <section id="articles">
                    <Article 
                        image={articleImg1}
                        title="Designing Dashboards"
                        provider="NASA"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                    <Article 
                        image={articleImg2}
                        title="Vibrant Portraits of 2020"
                        provider="Space News"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                    <Article 
                        image={articleImg3}
                        title="36 Days of Malayalam type"
                        provider="Spaceflight Now"
                        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                </section>
            </>
        );
}