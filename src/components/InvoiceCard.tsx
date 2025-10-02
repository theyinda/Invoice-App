// src/components/RecentSection.tsx
import { Box, Card, CardContent, Typography, Button, Chip } from "@mui/material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
} from "@mui/lab";


type InvoiceItem = {
    id: string;
    title: string;
    dueDateLabel: string;
    dueDate: string;
    amount: string;
    status: string;
    color: string
    background: string;
    border: string;
};

type InvoiceGroup = {
    dateLabel: string;
    invoices: InvoiceItem[];
};

type ActivityItem = {
    timeLabel: string;
    actionTitle: string;
    description: string;
    avatarLetter?: string;
};


const getColor = (status: string) => {
    switch (status) {
        case "PAID":
            return "#129043"
        case "PENDING PAYMENT":
            return "#D98F00"
        case "OVERDUE":
            return "#FF5663"
        default:
            return "#373B47"
    }
}
const getBgColor = (status: string) => {
    switch (status) {
        case "PAID":
            return "#E6FFF0"
        case "PENDING PAYMENT":
            return "#FFF8EB"
        case "OVERDUE":
            return "#FFF4F5"
        default:
            return "#F6F8FA"
    }
}
const getBorderColor = (status: string) => {
    switch (status) {
        case "PAID":
            return "#12904333"
        case "PENDING PAYMENT":
            return "#D98F0033"
        case "OVERDUE":
            return "#FFF4F5"
        default:
            return "#373B4733"
    }
}

function InvoiceRow({ inv }: { inv: InvoiceItem }) {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                justifyContent: "space-between",
                p: 1.5,
            }}
        >
            <Box sx={{}}>
                <Typography variant="body1" fontWeight={700}>
                    {inv.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {inv.id}
                </Typography>
            </Box>

            <Box sx={{}}>
                <Typography variant="caption" color="text.secondary">
                    {inv.dueDateLabel}
                </Typography>
                <Typography variant="body2">{inv.dueDate}</Typography>
            </Box>

            <Box sx={{ textAlign: "right" }}>
                <Typography sx={{
                    color: "#1F1F23",
                    fontSize: '16px', lineHeight: "20px", fontWeight: 700,
                }}>
                    {inv.amount}
                </Typography>
                <Chip label={inv.status} sx={{

                    color: getColor(inv.status),
                    background: getBgColor(inv.status),
                    border: `1px solid ${getBorderColor(inv.status)}`
                }} size="small" />
            </Box>
        </Box>
    );
}

export function RecentInvoices({ groups }: { groups: InvoiceGroup[] }) {
    return (
        <Card sx={{ width: '60%', borderRadius: 2, boxShadow: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography sx={{
                        color: "#1F1F23",
                        fontSize: '20px', lineHeight: "100%", fontWeight: 700,
                    }}>
                        Recent Invoices
                    </Typography>
                    <Button variant="outlined" size="small" sx={{
                        color: "#003EFF",
                        background: "#fff",
                        borderRadius: '40px',
                        padding: "10px 20px",
                        cursor: "pointer",
                        border: '1px solid #E3E6EF',
                        fontSize: '14px', lineHeight: "100%", fontWeight: 500,
                    }}>
                        View All Invoices
                    </Button>
                </Box>


                {groups.map((g, gi) => (
                    <Box key={gi} mb={3}>
                        <Typography variant="subtitle2" color="text.secondary" mb={1}>
                            {g.dateLabel}
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            {g.invoices.map((inv) => (
                                <InvoiceRow key={inv.id} inv={inv} />
                            ))}
                        </Box>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
}

export function ActivityRow({ a }: { a: ActivityItem }) {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                alignItems: "flex-start",

            }}
        >
            <img src="/avatar.svg" alt="home" style={{ width: 48, height: 48, borderRadius: "30px" }} />
            <Box sx={{ mb: 1 }}>

                <Box sx={{}}>


                    <Typography fontWeight={600} sx={{ color: "#000", fontSize: "18px", lineHeight: "100%" }}>
                        {a.actionTitle}
                    </Typography>
                    <Typography sx={{ color: "#697598", fontSize: "14px", lineHeight: "160%" }}>
                        {a.timeLabel}
                    </Typography>
                </Box>



                <Box sx={{ flex: 1, borderRadius: "16px", bgcolor: "#F6F8FA", padding: "10px", width: '250px' }}>
                    <Typography sx={{ color: "#697598", fontSize: "14px", lineHeight: "160%" }}>
                        {a.description}
                    </Typography>
                </Box>
            </Box>

        </Box>
    );
}

export function RecentActivities({ activities }: { activities: ActivityItem[] }) {
    return (
        <Card sx={{ width: "40%", borderRadius: 2, boxShadow: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography sx={{
                        color: "#1F1F23",
                        fontSize: '20px', lineHeight: "100%", fontWeight: 700,
                    }}>
                        Recent Activities
                    </Typography>
                    <Button variant="outlined" size="small" sx={{
                        color: "#003EFF",
                        background: "#fff",
                        borderRadius: '40px',
                        padding: "10px 20px",
                        cursor: "pointer",
                        border: '1px solid #E3E6EF',
                        fontSize: '14px', lineHeight: "100%", fontWeight: 500,
                    }}>
                        VIEW ALL
                    </Button>
                </Box>

                <Box display="flex" flexDirection="column" gap={1.5}>
                    {activities.map((act, i) => (
                        <Box key={i}>
                            <ActivityRow a={act} />
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}

// export function InvoiceActivity({ activities }: { activities: ActivityItem[] }) {
//     return (
//         <Box sx={{ width: "40%", ml: '2rem' }}>
//             <Box>
//                 <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//                     <Typography sx={{
//                         color: "#1F1F23",
//                         fontSize: '20px', lineHeight: "100%", fontWeight: 500,
//                     }}>
//                         Invoice Activity
//                     </Typography>
//                 </Box>

//                 <Box display="flex" flexDirection="column" gap={1.5}>
//                     {activities?.map((act, i) => (
//                         <Box key={i}>
//                             <ActivityRow a={act} />
//                         </Box>
//                     ))}
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

export function InvoiceActivity({ activities }: { activities: ActivityItem[] }) {
    return (
        <Box sx={{ width: "40%", ml: "2rem" }}>
            <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography
                        sx={{
                            color: "#1F1F23",
                            fontSize: "20px",
                            lineHeight: "100%",
                            fontWeight: 500,
                        }}
                    >
                        Invoice Activity
                    </Typography>
                </Box>

                <Timeline sx={{
                    p: 0, m: 0, "& .MuiTimelineItem-root:before": {
                        flex: 0,
                        padding: 0,
                        content: "none",
                        border: "1px solid #E3E6EF"
                    },
                }}>
                    {activities?.map((act, i) => (
                        <TimelineItem key={i} sx={{ minHeight: "60px" }}>
                            <TimelineSeparator>
                                {/* Instead of dot, render your image here */}
                                {/* <Box
                  component="img"
                  src={act.icon} // 👈 whatever image you want
                  alt="activity"
                  sx={{ width: 24, height: 24, borderRadius: "50%" }}
                /> */}
                                <img src="/avatar.svg" alt="home" style={{ width: 48, height: 48, borderRadius: "30px" }} />

                                {/* Show connector only if not the last item */}
                                {i < activities.length - 1 && (
                                    <TimelineConnector sx={{ bgcolor: "#E3E6EF", width: "1px" }} />
                                )}
                            </TimelineSeparator>

                            <TimelineContent sx={{ mb: '1rem' }}>
                                <Typography fontWeight={600} sx={{ color: "#000", fontSize: "18px", lineHeight: "100%" }}>
                                    {act.actionTitle}
                                </Typography>
                                <Typography sx={{ color: "#697598", fontSize: "14px", lineHeight: "160%" }}>
                                    {act.timeLabel}
                                </Typography>
                                <Box sx={{ flex: 1, borderRadius: "16px", bgcolor: "#F6F8FA", padding: "10px", width: '250px' }}>
                                    <Typography sx={{ color: "#697598", fontSize: "14px", lineHeight: "160%" }}>
                                        {act.description}
                                    </Typography>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </Box>
    );
}
