import "./App.css";
import { Header } from "./components/Header";
import React from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
function App() {
    return (
        <>
            <Header />
            <Navbar />
            <Footer />
        </>
    );
}

export default App;
