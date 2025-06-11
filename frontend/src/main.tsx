import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./Styles/index.less";
import "./Styles/global.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
