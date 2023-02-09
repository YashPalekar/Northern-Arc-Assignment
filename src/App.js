import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApplicationContextProvider } from "./context/app-context";
import Home from "./pages/home";
import AppRoutes from "./routes/app-routes";
import "./styles.css"

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <ApplicationContextProvider>
          <AppRoutes />
        </ApplicationContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
