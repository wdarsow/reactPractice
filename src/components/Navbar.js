import React from 'react';
import "../styles/Navbar.css";

// Navbar.css will be added to the DOM whenever this component loads
const navStyle = {
    backgroundColor: "green",
};

const Navbar = () => (
    <nav style={{backgroundColor:"green"}} className = "navbar">
        <a href = "/">Welcome</a>
    </nav>
)
export default Navbar;