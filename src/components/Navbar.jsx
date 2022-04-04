import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Getnews } from "./Getnews";
import { About } from "./About";
export const Navbar = () => {
    const navStyle = {
        justifyContent: "space-evenly",
    };
    const linkStyle = {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
        margin: "20px",
    };
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav my-2 mx-auto" style={navStyle}>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">
                                Top News
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <Link to="/base" style={linkStyle}>
                Home
            </Link>
            <Link to="/about" style={linkStyle}>
                About
            </Link> */}
            <Routes>
                <Route path="/about" exact element={<About />} />
                <Route path="/" exact element={<Getnews />} />
            </Routes>
        </>
    );
};
