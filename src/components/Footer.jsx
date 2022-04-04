import React from "react";

export const Footer = () => {
    const backgroundStyle = {
        backgroundColor: "#212529",
        position: "relative",
        top: "100%",
        width: "100%",
    };
    return (
        <>
            <footer className="bg-dark text-center text-white">
                <div className="text-center p-3" style={backgroundStyle}>
                    © 2020 Copyright: The Indian Times
                </div>
            </footer>
        </>
    );
};
