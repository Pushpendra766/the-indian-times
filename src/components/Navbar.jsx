import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Getnews } from "./Getnews";
import { About } from "./About";
export const Navbar = () => {
    const navStyle = {
        justifyContent: "space-evenly",
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav my-2 mx-auto" style={navStyle}>
                        <li className="nav-item mx-3">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/top-news">
                                Top News
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Category
                            </Link>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/business"
                                    >
                                        Business
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/entertainment"
                                    >
                                        Entertainment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/health"
                                    >
                                        Health
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/technology"
                                    >
                                        Technology
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to="/sports"
                                    >
                                        Sports
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path="/" exact element={<Getnews />} />
                <Route
                    path="/business"
                    exact
                    element={<Getnews category="business" />}
                />
                <Route
                    path="/entertainment"
                    exact
                    element={<Getnews category="entertainment" />}
                />
                <Route
                    path="/top-news"
                    exact
                    element={<Getnews category="general" />}
                />
                <Route
                    path="/health"
                    exact
                    element={<Getnews category="health" />}
                />
                <Route
                    path="/technology"
                    exact
                    element={<Getnews category="technology" />}
                />
                <Route
                    path="/sports"
                    exact
                    element={<Getnews category="sports" />}
                />
                <Route path="/about" exact element={<About />} />
            </Routes>
        </>
    );
};
