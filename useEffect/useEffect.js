import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const sayHello = () => {
    console.log("say Hello~!!");
  };
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, []);
  return (
    <div>
      <button onClick={setNumber(number + 1)}></button>
      <button onClick={setAnumber(number + 1)}></button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
