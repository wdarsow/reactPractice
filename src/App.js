import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
//import JSXVariables from "./components/JSXVariables";
// import HelloBootstrap from "./components/HelloBootstrap";
// import HelloDiv from "./components/HelloDiv";

const App = () => (
    <div>
        <Navbar />
        <Header />
        <Section />
    </div>
);
//const App = () => <JSXVariables />;
//const App = () => <HelloDiv />;
//const App = () => <p>Render Bootstrap components here</p>;

export default App;