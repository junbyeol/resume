import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PrintApp from "./PrintApp.tsx";

const isPrintMode =
  new URLSearchParams(window.location.search).get("print") === "1";

createRoot(document.getElementById("root")!).render(
  <StrictMode>{isPrintMode ? <PrintApp /> : <App />}</StrictMode>,
);
