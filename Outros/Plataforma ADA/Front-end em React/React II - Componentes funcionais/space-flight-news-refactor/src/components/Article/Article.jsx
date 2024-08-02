import React from "react";
import "./Article.css";

export function Article({ image, title, provider, description }) {
    return (
        <article id="article">
            <img src={image} alt="" />

            <div className="article-infos">
                <h2>{title}</h2>
                <h3>{provider}</h3>

                <p>{description}</p>
            </div>
        </article>
    );
}
