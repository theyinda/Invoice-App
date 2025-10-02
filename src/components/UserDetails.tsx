import { Box, Grid, Typography } from '@mui/material'
import type { InvoiceItem } from '../types/invoice'

const UserDetails = ({ invoice }: { invoice: InvoiceItem }) => {
    return (
        <Box>
            <Box
                gap={2}
                mb={3}
                sx={{
                    background: "#FCDDEC",
                    borderRadius: "40px",
                    padding: "32px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: "2.5rem",
                    }}
                >
                    <Box sx={{}}>
                        <Typography
                            fontWeight={600}
                            sx={{
                                pb: "1rem",
                                color: "#697598",
                                textTransform: "uppercase",
                                fontSize: "12px",
                                lineHeight: "100%",
                            }}
                        >
                            Sender
                        </Typography>
                        <Box sx={{ display: "flex" }}>
                            <Box
                                sx={{
                                    mr: "1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "#FFF",
                                    borderRadius: "1rem",
                                    width: "60px",
                                    height: "60px",
                                }}
                            >
                                <img
                                    src={invoice?.sender?.logoUrl}
                                    alt="home"
                                    style={{ width: 40, height: 40 }}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    fontWeight={600}
                                    sx={{
                                        pb: ".8rem",
                                        color: "#1F1F23",
                                        fontSize: "16px",
                                        lineHeight: "100%",
                                    }}
                                >
                                    {invoice?.sender?.name}
                                </Typography>
                                <Typography
                                    fontWeight={400}
                                    sx={{
                                        pb: ".8rem",
                                        color: "#697598",
                                        fontSize: "12px",
                                        lineHeight: "100%",
                                    }}
                                >
                                    {invoice?.sender?.phone}
                                </Typography>
                                <Typography
                                    fontWeight={400}
                                    sx={{
                                        pb: ".8rem",
                                        color: "#697598",
                                        fontSize: "12px",
                                        lineHeight: "100%",
                                    }}
                                >
                                    {invoice?.sender?.address}
                                </Typography>
                                <Typography
                                    fontWeight={400}
                                    sx={{
                                        color: "#697598",
                                        fontSize: "12px",
                                        lineHeight: "100%",
                                    }}
                                >
                                    {invoice?.sender?.email}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{}}>
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            sx={{
                                pb: "1rem",
                                color: "#697598",
                                textTransform: "uppercase",
                                fontSize: "12px",
                                lineHeight: "100%",
                            }}
                        >
                            Customer
                        </Typography>
                        <Box sx={{ display: "flex" }}>
                            <Box>
                                <Typography
                                    fontWeight={600}
                                    sx={{
                                        pb: ".8rem",
                                        color: "#1F1F23",
                                        fontSize: "16px",
                                        lineHeight: "100%",
                                    }}
                                >
                                    {invoice?.customer?.name}
                                </Typography>
                                <Typography
                                    fontWeight={400}
                                    sx={{
                                        pb: ".8rem",
                                        color: "#697598",
                                        fontSize: "12px",
                                        lineHeight: "100%",
                                    }}
                                >
                                    {invoice?.customer?.phone}
                                </Typography>
                                <Typography
                                    fontWeight={400}
                                    sx={{
                                        color: "#697598",
                                        fontSize: "12px",
                                        lineHeight: "100%",
                                    }}
                                >
                                    {invoice?.customer?.email}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{
                            mb: "1rem",
                            textTransform: "uppercase",
                            color: "#697598",
                            fontSize: "12px",
                            lineHeight: "100%",
                        }}
                    >
                        Invoice Details
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Typography
                                sx={{
                                    color: "#666F77",
                                    fontSize: "10px",
                                    lineHeight: "20px",
                                    textTransform: "uppercase",
                                }}
                            >
                                invoice no

                            </Typography>
                            <Typography
                                fontWeight={600}
                                sx={{
                                    color: "#1F1F23",
                                    fontSize: "12px",
                                    lineHeight: "20px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {invoice?.id}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Typography
                                sx={{
                                    color: "#666F77",
                                    fontSize: "10px",
                                    lineHeight: "20px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Issue date
                            </Typography>
                            <Typography
                                fontWeight={600}
                                sx={{
                                    color: "#1F1F23",
                                    fontSize: "12px",
                                    lineHeight: "20px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {invoice?.issueDate}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Typography
                                sx={{
                                    color: "#666F77",
                                    fontSize: "10px",
                                    lineHeight: "20px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Due date
                            </Typography>
                            <Typography
                                fontWeight={600}
                                sx={{
                                    color: "#1F1F23",
                                    fontSize: "12px",
                                    lineHeight: "20px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {invoice?.dueDate}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Typography
                                sx={{
                                    color: "#666F77",
                                    fontSize: "10px",
                                    lineHeight: "20px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Billing currency
                            </Typography>
                            <Typography
                                fontWeight={600}
                                sx={{
                                    color: "#1F1F23",
                                    fontSize: "12px",
                                    lineHeight: "20px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {invoice?.currency}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default UserDetails