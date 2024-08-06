import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

// Um componente em classe é uma classe que herda a classe Component do React e retorna HTML dentro do método render();

// Um componente funcional é um função que retorna um HTML.

export function App() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        async function loadNews() {
            const resposta = await axios.get("https://api.spaceflightnewsapi.net/v4/articles/");            
            const noticias = resposta.data.results;
            setNews(noticias)
        }
        loadNews();
    }, [])

    return (
        <>
            {/* <Counter/> */}
            <Navbar />
            


            <section id="articles">
            { news.length === 0 ? 
                (
                <div className="loader">
                    <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#ffffff"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
                )
                :
                (news.map((noticia) => {
                    return (

                            <Article
                                key={noticia.id} //* TODO PRIMEIRO ELEMENTO DEVE TER UM ATRIBUTO KEY ÚNICO
                                image={noticia.image_url}
                                title={noticia.title}
                                provider={noticia.news_site}
                                description={noticia.summary}
                            />
                        )
                    }))
                }
            </section>
        </>
    );
}
