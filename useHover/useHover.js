import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export const useHover = onHover => {
  if (typeof onHover !== "function") return;

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayWhat = () => console.log("say What~!");
  const useDate = useHover(sayWhat);
  return (
    <div className="App">
      <h1 ref={useDate}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
