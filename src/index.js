import React from "react";
import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import App from "./App";
import './DisableSelection.css';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const handleContextMenu = (e) => {
  e.preventDefault(); // Prevents the context menu from appearing
};
root.render(
  <div className="disable-selection" onContextMenu={handleContextMenu}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
