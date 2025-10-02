import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    Modal,
    Chip,
    Menu,
    MenuItem,
    Paper,
    IconButton,
} from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { InvoiceActivity } from "../components/InvoiceCard";
import PaymentInfo from "../components/PaymentInfo";
import InvoiceItems from "../components/InvoiceItems";
import UserDetails from "../components/UserDetails";
import type { ActivityItem, InvoiceItem } from "../types/invoice";

export default function InvoiceDetailsModal({
    open,
    onClose,
    activities,
    invoice,
}: {
    open: boolean;
    activities: ActivityItem[];
    invoice: InvoiceItem;
    onClose: () => void;
}) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);
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
                        background: "#fff",
                        borderRadius: "2rem",
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                >
                    <Box>
                        <Typography
                            sx={{
                                color: "#1F1F23",
                                fontSize: "32px",
                                lineHeight: "100%",
                                fontWeight: 700,
                            }}
                        >
                            Invoice #12345
                        </Typography>
                        <Typography
                            sx={{
                                padding: "10px 0",
                                color: "#697598",
                                fontSize: "16px",
                                lineHeight: "100%",
                                fontWeight: 400,
                            }}
                        >
                            View the details and activity of this invoice
                        </Typography>
                        <Chip
                            label="Partial Payment"
                            sx={{
                                mt: 1,
                                borderRadius: "40px",
                                padding: "20px 25px",
                                cursor: "pointer",
                                border: "1px solid #003EFF33",
                                background: "#F2FBFF",
                                fontWeight: 700,
                                textDecoration: "uppercase",
                                color: "#003EFF",
                            }}
                        />
                    </Box>

                    <Box display="flex" gap={2}>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "#003EFF",
                                background: "#fff",
                                borderRadius: "40px",
                                padding: "15px 30px",
                                cursor: "pointer",
                                border: "1px solid #E3E6EF",
                                textDecoration: "uppercase",
                                fontSize: "16px",
                                lineHeight: "100%",
                                fontWeight: 700,
                                "&:hover": {
                                    bgcolor: "#003EFF",
                                    color: "white",
                                    transform: "translateY(-3px)",
                                    cursor: "pointer",
                                },
                            }}
                        >
                            Download as PDF
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "#003EFF",
                                background: "#fff",
                                borderRadius: "40px",
                                cursor: "pointer",
                                padding: "15px 30px",
                                fontSize: "16px",
                                lineHeight: "100%",
                                fontWeight: 700,
                                "&:hover": {
                                    bgcolor: "#003EFF",
                                    color: "white",
                                    transform: "translateY(-3px)",
                                    cursor: "pointer",
                                },
                            }}
                        >
                            Send Invoice
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "#697598",
                                background: "#fff",
                                borderRadius: "40px",
                                padding: "15px 30px",
                                cursor: "pointer",
                                border: "1px solid #E3E6EF",
                                fontSize: "14px",
                                lineHeight: "100%",
                                fontWeight: 700,
                                "&:hover": {
                                    bgcolor: "#003EFF",
                                    color: "white",
                                    transform: "translateY(-3px)",
                                    cursor: "pointer",
                                },
                            }}
                            onClick={handleOpenMenu}
                        >
                            MORE
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                            PaperProps={{
                                sx: {
                                    background: "#fff",
                                    borderRadius: "24px",
                                    padding: "16px",
                                    border: "1px solid #E3E6EF",
                                    mt: '1rem'
                                },
                            }}
                        >
                            <MenuItem
                                onClick={handleCloseMenu}
                                sx={{
                                    color: "#697598",
                                    fontSize: "14px",
                                    lineHeight: "100%",
                                    fontWeight: 600,
                                    pb: '1rem'
                                }}
                            >
                                DUPLICATE INVOICE
                            </MenuItem>
                            <MenuItem
                                onClick={handleCloseMenu}
                                sx={{
                                    color: "#697598",
                                    fontSize: "14px",
                                    lineHeight: "100%",
                                    fontWeight: 600,
                                }}
                            >
                                GET SHAREABLE LINK
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
                <Paper
                    variant="outlined"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 2,
                        mb: 3,
                        gap: 2,
                        borderRadius: "24px",
                        // width: '100%',
                        border: "1px solid #E3E6EF",
                    }}
                >
                    <Typography
                        sx={{
                            color: "#666F77",
                            fontSize: "12px",
                            lineHeight: "16px",
                            fontWeight: 400,
                        }}
                    >
                        REMINDERS
                    </Typography>
                    {[
                        "14 days before",
                        "7 days before",
                        "3 days before",
                        "24h before",
                        "On due date",
                    ].map((label, idx) => (
                        <Box
                            key={idx}
                            display="flex"
                            alignItems="center"
                            gap={1}
                            sx={{
                                padding: { sm: "5px 10px", md: "12px 16px" },
                                background: "#E6FFF0",
                                borderRadius: "24px",
                            }}
                        >
                            <Typography sx={{
                                colot: "#373B47", fontSize: "14px",
                                lineHeight: "100%",
                            }}> {label}</Typography>
                            <DoneIcon sx={{ color: "#2DB260" }} fontSize="small" />
                        </Box>
                    ))}
                </Paper>
                <Box display="flex" gap={3}>
                    <Box
                        flex={2}
                        sx={{
                            borderRadius: "24px",
                            border: "1px solid #E3E6EF",
                            padding: "32px",
                        }}
                    >
                        <UserDetails invoice={invoice} />

                        <InvoiceItems invoice={invoice} />

                        <PaymentInfo invoice={invoice} />

                        <Box
                            sx={{
                                width: "100%",
                                borderRadius: "24px",
                                bgcolor: "#F6F8FA",
                                padding: "16px 24px",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#B7BDCF",
                                    fontSize: "14px",
                                    lineHeight: "100%",
                                    pb: ".5rem",
                                }}
                            >
                                NOTE
                            </Typography>
                            <Typography
                                sx={{ color: "#666F77", fontSize: "16px", lineHeight: "100%" }}
                            >
                                {invoice?.note}
                            </Typography>
                        </Box>
                    </Box>
                    <InvoiceActivity activities={activities} />
                </Box>
            </Box>
        </Modal>
    );
}
