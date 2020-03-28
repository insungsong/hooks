import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function" || typeof rejection !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      return callback();
    } else {
      return rejection();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world");
  const rejection = () => console.log("Rejection");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, rejection);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
