import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateRoute from "./routes/PrivateRoutes";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardShell from "./components/DashboardShell";
import { Box } from "@mui/material";
import Invoice from "./pages/Invoice";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F5F6FA",
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/invoice" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Protect /invoice with PrivateRoute */}
        <Route
          path="/invoice"
          element={
            <PrivateRoute>
              <DashboardShell />
            </PrivateRoute>
          }
        >
          {/* Invoice is the main page inside the shell */}
          <Route index element={<Invoice />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
}
