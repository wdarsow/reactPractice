import React from 'react';
import "../styles/Header.css";

// importing the Header.css file adds it to the DOM whenever this component loads
const styles = {
    headerStyle: {
        background: "red"
    },
    headingStyle: {
        fontSize: 100
    }
};

const Header = () => (
    <header style={styles.headerStyle} className = "header">
        <h1 style={styles.headingStyle}> Welcome to my webpage</h1>
    </header>
);

export default Header;