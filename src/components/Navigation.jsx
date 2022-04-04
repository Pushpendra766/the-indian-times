import React from "react";

import { Navbar } from "./Navbar";
export const Navigation = () => {
    const linkStyle = {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
        margin: "20px",
    };
    return (
        <>
            <Navbar />
            {/* <Link to="/base" style={linkStyle}>
                Home
            </Link>
            <Link to="/about" style={linkStyle}>
                About
            </Link> */}
        </>
    );
};
