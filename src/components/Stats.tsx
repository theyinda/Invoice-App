import React from "react";
import { Paper, Typography, Chip, Box } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

type StatCardProps = {
    icon?: React.ReactNode;
    title: string;
    chipLabel: string;
    chipColor?: string;
    value: string;
};

const StatCard = ({ icon, title, chipLabel, chipColor, value }: StatCardProps) => {
    return (
        <Paper sx={{ p: 3, display: "flex", flexDirection: "column", gap: 1, alignItems: "flex-start", width: '250px', background: "#FFFFFF", borderRadius: '1.5rem' }}>
            <Box>{icon || <AttachMoneyIcon color="action" />}</Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography variant="subtitle1" sx={{ fontSize: '12px', color: '#697598', lineHeight: "20px", fontWeight: 700, }}>
                    {title}
                </Typography>
                <Chip label={chipLabel} sx={{ background: chipColor }} size="small" />
            </Box>
            <Typography variant="h5" fontWeight={700} sx={{ fontSize: '28px', color: '#1F1F23', lineHeight: "28px", fontWeight: 700, }}>
                {value}
            </Typography>
        </Paper>
    );
};

export default StatCard;
