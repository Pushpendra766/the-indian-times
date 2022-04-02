import React, { useState } from "react";
import axios from "axios";

export function Getnews() {
    const [news, setnews] = useState([]);
    const fetchNews = function() {
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbf7fff128584ef5b4731e72738e2afc`
            )
            .then(response => {
                console.log(response);
                setnews(response.data.articles);
                console.log(news);
            });
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary" onClick={fetchNews}>
                            Fetch News
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {news.map(value => {
                        return (
                            <div className="col">
                                <div
                                    className="card"
                                    style={{ width: "15rem" }}
                                >
                                    <img
                                        src={value.urlToImage}
                                        className="card-img-top"
                                        alt="news image"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {value.title}
                                        </h5>
                                        <p className="card-text">
                                            {value.description}
                                        </p>
                                        <a
                                            href={value.url}
                                            className="btn btn-primary"
                                        >
                                            Read article
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
