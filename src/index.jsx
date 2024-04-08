import React from "react"; //import this to use JSX syntax.
import App from "./App";
import { createRoot } from "react-dom/client";

const rootNode = document.getElementById("app");
const root = createRoot(rootNode);
root.render(<App />);