import React from "react";
import { Box, Typography, Button, TextField, Paper, Divider } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../services/firebase";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation() as any;
    const from = location.state?.from?.pathname || "/invoice";

    const handleGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate(from, { replace: true });
            toast.success("Login successful!");
        } catch (err) {
            console.error(err);
            toast.error("Google login failed");
        }
    };

    const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const password = (form.elements.namedItem("password") as HTMLInputElement).value;

        try {
            await login(email, password);
            navigate(from, { replace: true });
            toast.success("Login successful!");
        } catch (error: any) {
            if (error.code === "auth/invalid-credential") {
                toast.error("Incorrect Login details.");
            }
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                p: 2,
            }}
        >
            <Paper
                sx={{
                    p: 5,
                    width: "100%",
                    maxWidth: 400,
                    borderRadius: 4,
                    boxShadow: 6,
                    textAlign: "center",
                }}
            >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Welcome Back
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                    Sign in to continue to your account
                </Typography>

                <Box component="form" onSubmit={handleEmailLogin} sx={{ display: "grid", gap: 2 }}>
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        required
                    />
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            py: 1.5,
                            borderRadius: 3,
                            fontWeight: "bold",
                            background: "linear-gradient(45deg, #1976d2, #42a5f5)",
                        }}
                    >
                        Sign in
                    </Button>
                </Box>

                <Divider sx={{ my: 3 }}>OR</Divider>

                <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleGoogle}
                    startIcon={<GoogleIcon />}
                    sx={{ py: 1.5, borderRadius: 3 }}
                >
                    Sign in with Google
                </Button>

                <Typography variant="body2" sx={{ mt: 3 }}>
                    Don’t have an account?{" "}
                    <RouterLink to="/signup" style={{ textDecoration: "none", color: "#1976d2", fontWeight: 600 }}>
                        Sign up
                    </RouterLink>
                </Typography>
            </Paper>
        </Box>
    );
}
