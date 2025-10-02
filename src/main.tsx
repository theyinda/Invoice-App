import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";

const theme = createTheme({
  palette: { mode: "light" },
});

if (import.meta.env.MODE === "development") {
  import("./mocks/browser").then(({ worker }) => {
    worker.start();
  });
}


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

