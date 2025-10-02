import { Box, Typography, Divider, Grid } from '@mui/material'
import type { InvoiceItem } from '../types/invoice'

const InvoiceItems = ({ invoice }: { invoice: InvoiceItem }) => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: "1rem",
                    width: "100%",
                }}
            >
                <Typography
                    fontWeight={600}
                    sx={{
                        pr: "1rem",
                        color: "#1F1F23",
                        fontSize: "20px",
                        lineHeight: "100%",
                    }}
                >
                    Items
                </Typography>

                <Divider
                    orientation="horizontal"
                    sx={{ width: "85%", background: "#E3E6EF" }}
                />
            </Box>
            <Box sx={{}}>
                {invoice.items?.map((i) => (
                    <Grid container spacing={3} key={i?.id}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Typography
                                sx={{
                                    color: "#1F1F23",
                                    fontSize: "16px",
                                    lineHeight: "100%",
                                    pb: ".5rem",
                                }}
                            >
                                {i?.title}
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#666F77",
                                    fontSize: "13px",
                                    lineHeight: "20px",
                                }}
                            >
                                {i?.description}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Typography
                                sx={{
                                    color: "#1F1F23",
                                    fontSize: "16px",
                                    lineHeight: "100%",
                                    pb: ".5rem",
                                }}
                            >
                                {i?.quantity}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Typography
                                sx={{
                                    color: "#1F1F23",
                                    fontSize: "16px",
                                    lineHeight: "100%",
                                    pb: ".5rem",
                                }}
                            >
                                {i?.currency === "USD" && "$"} {i?.unitPrice}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <Typography
                                sx={{
                                    color: "#1F1F23",
                                    fontSize: "16px",
                                    lineHeight: "100%",
                                    pb: ".5rem",
                                }}
                            >
                                {i?.currency === "USD" && "$"} {i?.total}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Box>
        </Box>
    )
}

export default InvoiceItems