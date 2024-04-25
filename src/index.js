import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
      <footer>
        <a href="https://github.com/ChiWei-J/weather-react-sandbox">
          Coded by Chi Jan
        </a>{" "}
      </footer>
    </div>
  </StrictMode>
);
