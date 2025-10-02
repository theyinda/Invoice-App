import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: 2,
            }}
        >
            <Typography variant="h2" fontWeight="bold">
                404
            </Typography>
            <Typography variant="h5" color="text.secondary">
                Oops! The page you are looking for does not exist.
            </Typography>
            <Button
                variant="contained"
                onClick={() => navigate("/invoice")}
                sx={{ mt: 2, background: '#003EFF' }}
            >
                Go to Invoices
            </Button>
        </Box>
    );
}
