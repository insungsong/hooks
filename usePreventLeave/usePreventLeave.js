import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const userPreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = userPreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
