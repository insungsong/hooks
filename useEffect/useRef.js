import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const potato = useRef();
  setTimeout(() => potato.current.focus(), 3000);
  return (
    <div>
      <h1>Hi!</h1>
      <input ref={potato} placeholder="la" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
