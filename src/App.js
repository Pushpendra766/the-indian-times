import "./App.css";
import { Header } from "./components/Header";
import { Getnews } from "./components/Getnews";
import { About } from "./components/About";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
    const linkStyle = {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
        margin: "20px",
    };
    return (
        <>
            <Header />
            <Link to="/base" style={linkStyle}>
                Home{" "}
            </Link>
            <Link to="/about" style={linkStyle}>
                About
            </Link>
            <Routes>
                <Route path="/about" exact element={<About />} />
                <Route path="/base" exact element={<Getnews />} />
            </Routes>
        </>
    );
}

export default App;
