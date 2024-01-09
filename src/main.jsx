import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AllProjectContextProvider from "../Contexts/AllProjectsContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <AllProjectContextProvider>
          <App />
        </AllProjectContextProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
