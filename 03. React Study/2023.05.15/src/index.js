import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./1st Class Router/Router1-Overlap";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
