import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/common/stairs.jsx";
import NavContextProvider from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavContextProvider>
        <Stairs>
          <App />
        </Stairs>
      </NavContextProvider>
    </BrowserRouter>
  </StrictMode>
);
