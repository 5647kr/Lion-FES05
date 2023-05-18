import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App2";
import { HelloLicat1 } from "./HelloLicat1";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<HelloLicat1 />);
