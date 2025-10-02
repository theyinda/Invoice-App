
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import StatCard from "../components/Stats";
import { InvoiceActionCard } from "../components/InvoiceActions";
import { RecentActivities, RecentInvoices } from "../components/InvoiceCard";
import { useState } from "react";
import InvoiceDetailsModal from "./InvoiceDetails";

const Invoice = () => {

    const [isModal, setIsModal] = useState(true)

    type InvoiceStatus = "PAID" | "OVERDUE" | "DRAFT" | "PENDING PAYMENT";

    type InvoiceItem = {
        id: string;
        title: string;
        dueDateLabel: string;
        dueDate: string;
        amount: string;
        status: InvoiceStatus;
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


    const groups: InvoiceGroup[] = [
        {
            dateLabel: "Today, 27th November 2022",
            invoices: [
                {
                    id: "1023494 - 2304",
                    title: "Invoice -",
                    dueDateLabel: "DUE DATE",
                    dueDate: "May 19th, 2023",
                    amount: "₦1,311,750.12",
                    status: "PAID",
                },
                {
                    id: "#INV-1002",
                    title: "Invoice",
                    dueDateLabel: "Due date",
                    dueDate: "May 19, 2023",
                    amount: "₦520,000.00",
                    status: "PENDING PAYMENT",
                },
            ],
        },
        {
            dateLabel: "8th December 2022",
            invoices: [
                {
                    id: "#INV-1003",
                    title: "Invoice",
                    dueDateLabel: "Due date",
                    dueDate: "Dec 25, 2023",
                    amount: "₦750,000.00",
                    status: "OVERDUE",
                },
            ],
        },
    ];

    const activities: ActivityItem[] = [
        {
            timeLabel: "Yesterday, 12:05 PM",
            actionTitle: "Invoice creation",
            description: "Created Invoice #INV-1001 / Olani Ojo Adewale",
        },
        {
            timeLabel: "Yesterday, 2:30 PM",
            actionTitle: "Payment Received",
            description: "Created Invoice #INV-1001 / Olani Ojo Adewale",
        },
        {
            timeLabel: "Yesterday, 2:30 PM",
            actionTitle: "Payment Received",
            description: "Created Invoice #INV-1001 / Olani Ojo Adewale",
        },
        {
            timeLabel: "Yesterday, 2:30 PM",
            actionTitle: "Payment Received",
            description: "Created Invoice #INV-1001 / Olani Ojo Adewale",
        },
    ];
    return (
        <Box sx={{ p: 3 }}>
            {/* Top row */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, mt: 7 }}>
                <Typography variant="h5" sx={{
                    color: "#1F1F23",
                    fontSize: '32px', lineHeight: "100%", fontWeight: 700,
                }}>
                    Invoice
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button variant="outlined" sx={{
                        color: "#697598",
                        background: "#fff",
                        borderRadius: '40px',
                        padding: "15px 30px",
                        cursor: "pointer",
                        border: '1px solid #E3E6EF',
                        fontSize: '14px', lineHeight: "100%", fontWeight: 700,
                    }}>
                        SEE WHAT'S NEW
                    </Button>
                    <Button variant="contained" sx={{
                        color: "#FFFFFF",
                        background: "#003EFF",
                        borderRadius: '40px',
                        cursor: "pointer",
                        padding: "15px 30px",
                        fontSize: '16px', lineHeight: "100%", fontWeight: 700,
                    }}>
                        CREATE
                    </Button>
                </Box>
            </Box>

            {/* Stats Grid */}


            <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <StatCard
                        icon={<img src="/home.svg" alt="home" style={{ width: 40, height: 40 }} />}
                        title="TOTAL PAID"
                        chipLabel="1,289"
                        chipColor="#B6FDD3"
                        value="$4,120.76"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <StatCard
                        icon={<img src="/home.svg" alt="home" style={{ width: 40, height: 40 }} />}
                        title="TOTAL OVERDUE"
                        chipLabel="830"
                        chipColor="#FFB7BD"
                        value="$2,310.50"

                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <StatCard
                        icon={<img src="/home.svg" alt="home" style={{ width: 40, height: 40 }} />}
                        title="TOTAL DRAFT"
                        chipLabel="400"
                        chipColor="#D9D9E0"
                        value="$1,120.90"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <StatCard
                        icon={<img src="/home.svg" alt="home" style={{ width: 40, height: 40 }} />}
                        title="TOTAL UNPAID"
                        chipLabel="520"
                        chipColor="#F8E39B"
                        value="$3,210.45"
                    />
                </Grid>
            </Grid>


            <Box sx={{ margin: "50px 0" }}>
                <Typography variant="h5" sx={{
                    paddingBottom: "20px",
                    color: "#1F1F23",
                    fontSize: '20px', lineHeight: "100%", fontWeight: 700,
                }}>
                    Invoice Actions
                </Typography>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <InvoiceActionCard
                            icon={<img src="/money.svg" alt="home" style={{ width: 80, height: 80 }} />}
                            title="Create Invoice"
                            subtitle="Create new invoices easily"
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <InvoiceActionCard
                            icon={<img src="/setting.svg" alt="home" style={{ width: 80, height: 80 }} />}
                            title="Change Invoice settings"
                            subtitle="Customise your invoices"
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <InvoiceActionCard
                            icon={<img src="/profile2.svg" alt="home" style={{ width: 80, height: 80 }} />}
                            title="Manage Customer list"
                            subtitle="Add and remove customers"
                        />
                    </Grid>

                </Grid>
            </Box>


            <Box display="flex" gap={3} mt={4}>
                <RecentInvoices groups={groups} />
                <RecentActivities activities={activities} />
            </Box>

            {isModal && (
                <InvoiceDetailsModal
                    open={isModal}
                    onClose={() => setIsModal(false)}
                    activities={activities}
                />
            )}
            <InvoiceDetailsModal
                open={isModal}
                onClose={() => setIsModal(false)}
                activities={activities}
            />
        </Box>
    );
};

export default Invoice;
