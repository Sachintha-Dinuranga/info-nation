import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavoritesProvider>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
    </FavoritesProvider>
  </BrowserRouter>
);
