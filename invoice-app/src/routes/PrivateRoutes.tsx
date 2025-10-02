import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CircularProgress, Box } from "@mui/material";
import type { ReactElement } from "react";

type PrivateRouteProps = {
    children: ReactElement;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
