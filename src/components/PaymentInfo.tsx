import { Box, Typography, Grid } from '@mui/material'
import type { InvoiceItem } from '../types/invoice'

const PaymentInfo = ({ invoice }: { invoice: InvoiceItem }) => {
    return (
        <Box
            sx={{
                width: "100%",
                borderRadius: "24px",
                bgcolor: "",
                padding: "16px 24px",
                border: "1px solid #E3E6EF",
                margin: "2rem 0",
            }}
        >
            <Typography
                sx={{
                    fontWeight: "600",
                    color: "#B7BDCF",
                    fontSize: "12px",
                    lineHeight: "100%",
                    pb: ".5rem",
                    textTransform: "uppercase",
                }}
            >
                Payment Information
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            color: "#666F77",
                            fontSize: "10px",
                            lineHeight: "20px",
                            pb: ".5rem",
                        }}
                    >
                        Account name:
                    </Typography>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            color: "#1F1F23",
                            fontSize: "12px",
                            lineHeight: "20px",
                            pb: ".5rem",
                        }}
                    >
                        {invoice?.paymentInfo?.accountName}
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            color: "#666F77",
                            fontSize: "10px",
                            lineHeight: "20px",
                            pb: ".5rem",
                        }}
                    >
                        Account Number:
                    </Typography>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            color: "#1F1F23",
                            fontSize: "12px",
                            lineHeight: "20px",
                            pb: ".5rem",
                        }}
                    >
                        {invoice?.paymentInfo?.accountNumber}
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            color: "#666F77",
                            fontSize: "10px",
                            lineHeight: "20px",
                            pb: ".5rem",
                        }}
                    >
                        Ach routing no
                    </Typography>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            color: "#1F1F23",
                            fontSize: "12px",
                            lineHeight: "20px",
                            pb: ".5rem",
                        }}
                    >
                        {invoice?.paymentInfo?.achRoutingNo}
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            color: "#666F77",
                            fontSize: "10px",
                            lineHeight: "20px",
                            pb: ".5rem",
                        }}
                    >
                        Bank Name
                    </Typography>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            color: "#1F1F23",
                            fontSize: "12px",
                            lineHeight: "20px",
                            pb: ".5rem",
                        }}
                    >
                        {invoice?.paymentInfo?.bankName}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            color: "#666F77",
                            fontSize: "10px",
                            lineHeight: "20px",
                            pb: ".5rem",
                        }}
                    >
                        bank address
                    </Typography>
                    <Typography
                        sx={{
                            textTransform: "uppercase",
                            color: "#1F1F23",
                            fontSize: "12px",
                            lineHeight: "20px",
                            pb: ".5rem",
                        }}
                    >
                        {invoice?.paymentInfo?.bankAddress}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PaymentInfo