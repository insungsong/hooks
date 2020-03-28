import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFullScreen = callback => {
  const element = useRef();

  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = isFull => {
    console.log(isFull ? "We are Full" : "We are Small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="image src here!" />
        <button onClick={exitFull}>exit Button</button>
      </div>
      <button onClick={triggerFull}>Make Full Screen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
