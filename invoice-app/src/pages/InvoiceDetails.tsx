import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    Modal,
    Chip,
    Menu,
    MenuItem,
    Divider,
    Grid,
    Paper,
    IconButton,
} from "@mui/material";

import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from "@mui/icons-material/Close";
import { InvoiceActivity } from "../components/InvoiceCard";

export default function InvoiceDetailsModal({ open, onClose, activities }: { open: boolean; activities: any; onClose: () => void }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleCloseMenu = () => setAnchorEl(null);

    return (
        <Modal open={open} onClose={onClose}>



            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "95%",
                    maxHeight: "90vh",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    borderRadius: 2,
                    overflowY: "auto",
                    p: 3,
                }}
            >
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: 9,
                        right: 8,
                        color: "#292D32",
                        border: "1px solid #E3E6EF",
                        background: '#fff',
                        borderRadius: "2rem"
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                    <Box>
                        <Typography sx={{ color: "#1F1F23", fontSize: '32px', lineHeight: "100%", fontWeight: 700, }}>
                            Invoice #12345
                        </Typography>
                        <Typography sx={{ padding: "10px 0", color: "#697598", fontSize: '16px', lineHeight: "100%", fontWeight: 400, }}>
                            View the details and activity of this invoice
                        </Typography>
                        <Chip label="Partial Payment" sx={{
                            mt: 1,
                            borderRadius: '40px',
                            padding: "20px 25px",
                            cursor: "pointer",
                            border: '1px solid #003EFF33',
                            background: "#F2FBFF",
                            fontWeight: 700,
                            textDecoration: "uppercase", color: '#003EFF'
                        }} />
                    </Box>

                    <Box display="flex" gap={2}>
                        <Button variant="outlined" sx={{
                            color: "#003EFF",
                            background: "#fff",
                            borderRadius: '40px',
                            padding: "15px 30px",
                            cursor: "pointer",
                            border: '1px solid #E3E6EF',
                            textDecoration: "uppercase",
                            fontSize: '16px', lineHeight: "100%", fontWeight: 700,
                            "&:hover": {
                                bgcolor: "#003EFF",
                                color: "white",
                                transform: "translateY(-3px)",
                                cursor: 'pointer'
                            },
                        }}>
                            Download as PDF
                        </Button>
                        <Button variant="outlined" sx={{
                            color: "#003EFF",
                            background: "#fff",
                            borderRadius: '40px',
                            cursor: "pointer",
                            padding: "15px 30px",
                            fontSize: '16px', lineHeight: "100%", fontWeight: 700,
                            "&:hover": {
                                bgcolor: "#003EFF",
                                color: "white",
                                transform: "translateY(-3px)",
                                cursor: 'pointer'
                            },
                        }}>
                            Send Invoice
                        </Button>
                        <Button variant="outlined" sx={{
                            color: "#697598",
                            background: "#fff",
                            borderRadius: '40px',
                            padding: "15px 30px",
                            cursor: "pointer",
                            border: '1px solid #E3E6EF',
                            fontSize: '14px', lineHeight: "100%", fontWeight: 700,
                            "&:hover": {
                                bgcolor: "#003EFF",
                                color: "white",
                                transform: "translateY(-3px)",
                                cursor: 'pointer'
                            },
                        }} onClick={handleOpenMenu}>
                            MORE
                        </Button>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                            <MenuItem onClick={handleCloseMenu} sx={{ color: '#697598', fontSize: '14px', lineHeight: "100%", fontWeight: 700, }}>DUPLICATE INVOICE</MenuItem>
                            <MenuItem onClick={handleCloseMenu} sx={{ color: '#697598', fontSize: '14px', lineHeight: "100%", fontWeight: 700, }}>GET SHAREABLE LINK</MenuItem>
                        </Menu>
                    </Box>
                </Box>


                {/* 2-Column Layout */}
                {/* Reminders */}
                <Paper variant="outlined" sx={{ display: "flex", alignItems: "center", p: 2, mb: 3, gap: 2, borderRadius: '24px', border: '1px solid #E3E6EF' }}>
                    <Typography sx={{ color: "#666F77", fontSize: '12px', lineHeight: "16px", fontWeight: 400, }}>
                        REMINDERS
                    </Typography>
                    {["14 days before", "7 days before", "3 days before", "24h before", "On due date"].map(
                        (label, idx) => (
                            <Box key={idx} display="flex" alignItems="center" gap={1} sx={{
                                padding: "12px 16px", background: '#E6FFF0', borderRadius: '24px'
                            }}>
                                < Typography variant="body2" > {label}</Typography>
                                <DoneIcon sx={{ color: '#2DB260' }} fontSize="small" />

                            </Box>
                        )
                    )}
                </Paper>
                <Box display="flex" gap={3}>

                    {/* Left Column */}
                    <Box flex={2} sx={{ borderRadius: '24px', border: '1px solid #E3E6EF', padding: "32px" }}>


                        {/* Sender & Customer */}
                        <Box gap={2} mb={3} sx={{ background: "#FCDDEC", borderRadius: '40px', padding: "32px" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: '2.5rem' }}>
                                <Box sx={{}}>
                                    <Typography fontWeight={600} sx={{ pb: '1rem', color: "#697598", textTransform: "uppercase", fontSize: '12px', lineHeight: "100%" }}>
                                        Sender
                                    </Typography>
                                    <Box sx={{ display: "flex" }}>
                                        <Box sx={{ mr: '1rem', display: "flex", alignItems: "center", justifyContent: "center", background: "#FFF", borderRadius: '1rem', width: '60px', height: '60px' }}>
                                            <img src="/crop.svg" alt="home" style={{ width: 40, height: 40 }} />
                                        </Box>
                                        <Box>
                                            <Typography fontWeight={600} sx={{ pb: ".8rem", color: '#1F1F23', fontSize: '16px', lineHeight: "100%" }}>Your Company Name</Typography>
                                            <Typography fontWeight={400} sx={{ pb: ".8rem", color: '#697598', fontSize: '12px', lineHeight: "100%" }}>+23479493393</Typography>
                                            <Typography fontWeight={400} sx={{ pb: ".8rem", color: '#697598', fontSize: '12px', lineHeight: "100%" }}>123 Street, City</Typography>
                                            <Typography fontWeight={400} sx={{ color: '#697598', fontSize: '12px', lineHeight: "100%" }}>email@example.com</Typography>
                                        </Box>
                                    </Box>


                                </Box>
                                <Box sx={{}}>
                                    <Typography variant="subtitle1" fontWeight={600} sx={{ pb: '1rem', color: "#697598", textTransform: "uppercase", fontSize: '12px', lineHeight: "100%" }}>
                                        Customer
                                    </Typography>
                                    <Box sx={{ display: "flex" }}>
                                        <Box>
                                            <Typography fontWeight={600} sx={{ pb: ".8rem", color: '#1F1F23', fontSize: '16px', lineHeight: "100%" }}>Your Company Name</Typography>
                                            <Typography fontWeight={400} sx={{ pb: ".8rem", color: '#697598', fontSize: '12px', lineHeight: "100%" }}>+23479493393</Typography>
                                            <Typography fontWeight={400} sx={{ color: '#697598', fontSize: '12px', lineHeight: "100%" }}>email@example.com</Typography>
                                        </Box>
                                    </Box>


                                </Box>
                            </Box>

                            <Box>
                                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: "1rem", textTransform: "uppercase", color: '#697598', fontSize: '12px', lineHeight: "100%" }}>
                                    Invoice Details
                                </Typography>

                                <Box display="flex" justifyContent="space-between" mb={1}>
                                    <Typography sx={{ color: "#666F77", fontSize: '10px', lineHeight: "20px", textTransform: 'uppercase' }}>invoice no</Typography>
                                    <Typography sx={{ color: "#666F77", fontSize: '10px', lineHeight: "20px", textTransform: 'uppercase' }}>Issue date</Typography>
                                    <Typography sx={{ color: "#666F77", fontSize: '10px', lineHeight: "20px", textTransform: 'uppercase' }}>Due date</Typography>
                                    <Typography sx={{ color: "#666F77", fontSize: '10px', lineHeight: "20px", textTransform: 'uppercase' }}>Billing currency</Typography>
                                </Box>

                                {[...Array(1)].map((_, i) => (
                                    <Box key={i} display="flex" justifyContent="space-between" my={1}>
                                        <Typography fontWeight={600} sx={{ color: '#1F1F23', fontSize: '12px', lineHeight: "20px", textTransform: 'uppercase' }}>1023902390</Typography>
                                        <Typography fontWeight={600} sx={{ color: '#1F1F23', fontSize: '12px', lineHeight: "20px", textTransform: 'uppercase' }}>March 30th, 2023</Typography>
                                        <Typography fontWeight={600} sx={{ color: '#1F1F23', fontSize: '12px', lineHeight: "20px", textTransform: 'uppercase' }}>March 30th, 2023</Typography>
                                        <Typography fontWeight={600} sx={{ color: '#1F1F23', fontSize: '12px', lineHeight: "20px", textTransform: 'uppercase' }}>USD ($)</Typography>
                                    </Box>
                                ))}
                            </Box>


                        </Box>

                        {/* Items */}

                        <Box sx={{ display: 'flex', alignItems: "center", mb: "1rem", width: "100%" }}>
                            <Typography fontWeight={600} sx={{ pr: '1rem', color: '#1F1F23', fontSize: '20px', lineHeight: "100%" }}>
                                Items
                            </Typography>

                            <Divider orientation="horizontal" sx={{ width: '85%', background: '#E3E6EF' }} />
                        </Box>
                        <Box sx={{}}>
                            <Grid container spacing={3} >
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>Email Marketing</Typography>
                                    <Typography sx={{ color: "#666F77", fontSize: "13px", lineHeight: "20px" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>10</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>$1,500</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>$100,500</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>Email Marketing</Typography>
                                    <Typography sx={{ color: "#666F77", fontSize: "13px", lineHeight: "20px" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>10</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>$1,500</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>$100,500</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>Email Marketing</Typography>
                                    <Typography sx={{ color: "#666F77", fontSize: "13px", lineHeight: "20px" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>10</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>$1,500</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>$100,500</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>Email Marketing</Typography>
                                    <Typography sx={{ color: "#666F77", fontSize: "13px", lineHeight: "20px" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>10</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>$1,500</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ color: "#1F1F23", fontSize: "16px", lineHeight: "100%", pb: ".5rem" }}>$100,500</Typography>
                                </Grid>
                            </Grid>
                        </Box>

                        {/* Payment Info */}

                        <Box sx={{ width: "100%", borderRadius: "24px", bgcolor: "", padding: "16px 24px", border: "1px solid #E3E6EF", margin: '2rem 0' }}>
                            <Typography sx={{ fontWeight: "600", color: "#B7BDCF", fontSize: "12px", lineHeight: "100%", pb: ".5rem", textTransform: "uppercase" }}>
                                Payment Information
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ textTransform: "uppercase", color: "#666F77", fontSize: "10px", lineHeight: "20px", pb: ".5rem" }}>Account name:</Typography>
                                    <Typography sx={{ textTransform: "uppercase", color: "#1F1F23", fontSize: "12px", lineHeight: "20px", pb: ".5rem" }}>Account</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ textTransform: "uppercase", color: "#666F77", fontSize: "10px", lineHeight: "20px", pb: ".5rem" }}>Account Number:</Typography>
                                    <Typography sx={{ textTransform: "uppercase", color: "#1F1F23", fontSize: "12px", lineHeight: "20px", pb: ".5rem" }}>123456789</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ textTransform: "uppercase", color: "#666F77", fontSize: "10px", lineHeight: "20px", pb: ".5rem" }}>Ach routing no</Typography>
                                    <Typography sx={{ textTransform: "uppercase", color: "#1F1F23", fontSize: "12px", lineHeight: "20px", pb: ".5rem" }}>May 19th, 2023</Typography>
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ textTransform: "uppercase", color: "#666F77", fontSize: "10px", lineHeight: "20px", pb: ".5rem" }}>Bank Name</Typography>
                                    <Typography sx={{ textTransform: "uppercase", color: "#1F1F23", fontSize: "12px", lineHeight: "20px", pb: ".5rem" }}>USD ($)</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography sx={{ textTransform: "uppercase", color: "#666F77", fontSize: "10px", lineHeight: "20px", pb: ".5rem" }}>bank address</Typography>
                                    <Typography sx={{ textTransform: "uppercase", color: "#1F1F23", fontSize: "12px", lineHeight: "20px", pb: ".5rem" }}>Account</Typography>
                                </Grid>
                            </Grid>
                        </Box>

                        {/* Thank You */}
                        <Box sx={{ width: "100%", borderRadius: "24px", bgcolor: "#F6F8FA", padding: "16px 24px", }}>
                            <Typography sx={{ color: "#B7BDCF", fontSize: "14px", lineHeight: "100%", pb: ".5rem" }}>
                                NOTE
                            </Typography>
                            <Typography sx={{ color: "#666F77", fontSize: "16px", lineHeight: "100%" }}>
                                Thank you for your patronage
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right Column - Activities */}
                    {/* <Box flex={1}>
                        <Typography variant="h6" fontWeight={600} mb={2}>
                            Invoice Activity
                        </Typography>
                        <Paper sx={{ p: 2, mb: 2, bgcolor: "#f9f9f9" }}>
                            <Typography variant="body2" fontWeight={600}>
                                Yesterday, 12:05 PM
                            </Typography>
                            <Typography variant="body2">Created invoice for Olani Ojo Adewale</Typography>
                        </Paper>
                        <Paper sx={{ p: 2, bgcolor: "#f9f9f9" }}>
                            <Typography variant="body2" fontWeight={600}>
                                Today, 10:30 AM
                            </Typography>
                            <Typography variant="body2">Partial payment received</Typography>
                        </Paper>
                    </Box> */}
                    <InvoiceActivity activities={activities} />
                </Box>
            </Box >
        </Modal >
    );
}
