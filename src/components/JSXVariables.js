import React from "react"; 

const firstName = "Wade";
const numLetters = 4;
const reactThoughts = "love React!";
// const regex = /([aeiou])/i;
const vowelsRemoved = (firstName) => {
    return (firstName.replace(/[aeiou]/gi,''));
}

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {firstName}</h1>
        <h2>My name has {numLetters} letters</h2>
        <h2>I {reactThoughts}</h2>
        <h2>My name without any vowels is: {vowelsRemoved(firstName)}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
