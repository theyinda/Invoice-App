import React from "react";
import { Box, Typography, Button, TextField, Paper, Divider } from "@mui/material";
import { signInWithPopup, updateProfile } from "firebase/auth";
import { auth, googleProvider } from "../services/firebase";
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import GoogleIcon from "@mui/icons-material/Google";

const SignUpPage = () => {
    const navigate = useNavigate();
    const location = useLocation() as any;
    const from = location.state?.from?.pathname || "/dashboard";
    const { signup } = useAuth();

    const handleGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate(from, { replace: true });
        } catch (err) {
            console.error(err);
            alert("Google signup failed");
        }
    };

    const handleEmailSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fullName = (form.elements.namedItem("fullName") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const password = (form.elements.namedItem("password") as HTMLInputElement).value;

        try {
            const newUser = await signup(email, password);

            console.log(newUser, "newUsr")

            // update profile with full name
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, { displayName: fullName });
            }

            navigate(from, { replace: true });
        } catch (err) {
            console.error(err);
            alert("Signup failed");
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)",
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
                    Create Account
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                    Join us today and start your journey
                </Typography>

                <Box component="form" onSubmit={handleEmailSignup} sx={{ display: "grid", gap: 2 }}>
                    <TextField
                        name="fullName"
                        label="Full Name"
                        type="text"
                        required
                    // InputProps={{ startAdornment: <PersonIcon sx={{ mr: 1, color: "action.active" }} /> }}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        required
                    // InputProps={{ startAdornment: <EmailIcon sx={{ mr: 1, color: "action.active" }} /> }}
                    />
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        required
                    // InputProps={{ startAdornment: <LockIcon sx={{ mr: 1, color: "action.active" }} /> }}
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
                        Sign Up
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
                    Sign up with Google
                </Button>

                <Typography variant="body2" sx={{ mt: 3 }}>
                    Already have an account?{" "}
                    <RouterLink to="/login" style={{ textDecoration: "none", color: "#1976d2", fontWeight: 600 }}>
                        Sign in
                    </RouterLink>
                </Typography>
            </Paper>
        </Box>
    );
};

export default SignUpPage;
