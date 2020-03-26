import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTilte = document.querySelector("title");
    htmlTilte.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdate = useTitle("Loading");
  setTimeout(() => titleUpdate("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
