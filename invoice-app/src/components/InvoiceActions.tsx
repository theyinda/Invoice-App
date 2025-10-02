import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";

export const InvoiceActionCard = ({ icon, title, subtitle }: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}) => {
    return (
        <Card
            sx={{
                borderRadius: 3,
                boxShadow: 2,
                bgcolor: "white",
                transition: "all 0.3s ease",
                "&:hover": {
                    bgcolor: "#003EFF",
                    color: "white",
                    transform: "translateY(-3px)",
                    cursor: 'pointer'
                },
            }}
        >
            <CardActionArea href="#" sx={{ p: 2, width: "339px" }}>
                <CardContent sx={{}}>
                    <Box>{icon}</Box>
                    <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {title}
                        </Typography>
                        <Typography variant="body2">{subtitle}</Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
