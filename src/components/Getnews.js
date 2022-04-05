import React, { useState, useEffect } from "react";
import axios from "axios";

export function Getnews({ category }) {
    const [news, setnews] = useState([]);

    const fetchNews = function() {
        const API_KEY = "075d401d8f4a4a98b40430e0ebc11626";
        if (category) {
            axios
                .get(
                    "https://newsapi.org/v2/top-headlines?country=in&category=" +
                        category +
                        "&apiKey=" +
                        API_KEY
                )
                .then(response => {
                    console.log(response);
                    setnews(response.data.articles);
                });
        } else {
            axios
                .get(
                    "https://newsapi.org/v2/top-headlines?country=in&apiKey=" +
                        API_KEY
                )
                .then(response => {
                    console.log(response);
                    setnews(response.data.articles);
                });
        }
    };
    // useEffect(() => {
    //     alert("Click 'Fetch News' to get latest news of India.");
    // }, []);

    return (
        <>
            {console.log("GEtnews")}
            <div className="text-center">
                <button className="btn btn-primary" onClick={fetchNews}>
                    Fetch News
                </button>
            </div>
            <div className="container my-5">
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
                                        alt="news"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {value.title.length <= 75
                                                ? value.title.slice(0, 75)
                                                : value.title.slice(0, 75) +
                                                  "..."}
                                        </h5>
                                        <p className="card-text">
                                            {/* {value.description.length <= 75
                                                ? value.description.slice(0, 75)
                                                : value.description.slice(
                                                      0,
                                                      75
                                                  ) + "..."} */}
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
