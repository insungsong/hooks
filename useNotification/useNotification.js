import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

const App = () => {
  const triggerNofitif = useNotification("Can I steal your kimchi?", {
    body: "I Love kimchi dont you"
  });
  return (
    <div>
      <button onClick={triggerNofitif}>Hello!</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
