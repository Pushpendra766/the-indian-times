import React, { useState } from "react";
import axios from "axios";
export const Homepage = () => {
    const [news, setnews] = useState([]);
    axios
        .get(
            "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey"+API_KEY
        )
        .then(response => {
            // console.log(response.data.articles);
            setnews(response.data.articles);
        });

    return (
        <>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    {/* {news.map(article => {
                        <div className="carousel-item">
                            <img
                                src={article.urlToImage}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>;
                    })} */}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};
