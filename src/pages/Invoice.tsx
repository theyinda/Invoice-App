
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import StatCard from "../components/Stats";
import { InvoiceActionCard } from "../components/InvoiceActions";
import { RecentActivities, RecentInvoices } from "../components/InvoiceCard";
import { useEffect, useState } from "react";
import InvoiceDetailsModal from "./InvoiceDetails";
import type { ActivityItem, InvoiceGroup, InvoiceItem, Stats } from "../types/invoice";

const Invoice = () => {
    const [invoices, setInvoices] = useState<InvoiceGroup[]>([]);
    const [activities, setActivities] = useState<ActivityItem[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [selectedInvoice, setSelectedInvoice] = useState<InvoiceItem | null>(null);


    useEffect(() => {
        fetch("/api/invoices")
            .then((res) => res.json())
            .then(setInvoices);
    }, []);
    useEffect(() => {
        fetch("/api/activities")
            .then((res) => res.json())
            .then(setActivities);
    }, []);
    useEffect(() => {
        fetch("/api/stats")
            .then((res) => res.json())
            .then(setStats);
    }, []);

    const selectedActivity = activities.filter((i) => i.invoiceId === selectedInvoice?.id)
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: { xs: "block", sm: "flex" }, justifyContent: "space-between", alignItems: "center", mb: 4, mt: 7 }}>
                <Typography sx={{
                    color: "#1F1F23",
                    fontSize: { xs: "20", sm: "32px" },
                    lineHeight: "100%", fontWeight: 700,
                }}>
                    Invoice
                </Typography>
                <Box sx={{ display: { xs: "block", sm: "flex" }, gap: { xs: 2, sm: 2 }, }}>
                    <Button variant="outlined" sx={{
                        color: "#697598",
                        background: "#fff",
                        borderRadius: '40px',
                        padding: { xs: "10px 20px", sm: "15px 30px" },
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
                        padding: { xs: "10px 20px", sm: "15px 30px" },
                        fontSize: '16px', lineHeight: "100%", fontWeight: 700,
                    }}>
                        CREATE
                    </Button>
                </Box>
            </Box>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                    <StatCard
                        icon={<img src="/home.svg" alt="home" style={{ width: 40, height: 40 }} />}
                        title="TOTAL PAID"
                        chipLabel={stats?.paid as string}
                        chipColor="#B6FDD3"
                        value={stats?.totalPaid as string}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                    <StatCard
                        icon={<img src="/home.svg" alt="home" style={{ width: 40, height: 40 }} />}
                        title="TOTAL OVERDUE"
                        chipLabel={stats?.unpaid as string}
                        chipColor="#FFB7BD"
                        value={stats?.totalOverdue as string}

                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                    <StatCard
                        icon={<img src="/home.svg" alt="home" style={{ width: 40, height: 40 }} />}
                        title="TOTAL DRAFT"
                        chipLabel={stats?.draft as string}
                        chipColor="#D9D9E0"
                        value={stats?.totalDraft as string}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                    <StatCard
                        icon={<img src="/home.svg" alt="home" style={{ width: 40, height: 40 }} />}
                        title="TOTAL UNPAID"
                        chipLabel={stats?.unpaid as string}
                        chipColor="#F8E39B"
                        value={stats?.unpaid as string}
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
                    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                        <InvoiceActionCard
                            icon={<img src="/money.svg" alt="home" style={{ width: 80, height: 80 }} />}
                            title="Create Invoice"
                            subtitle="Create new invoices easily"
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                        <InvoiceActionCard
                            icon={<img src="/setting.svg" alt="home" style={{ width: 80, height: 80 }} />}
                            title="Change Invoice settings"
                            subtitle="Customise your invoices"
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                        <InvoiceActionCard
                            icon={<img src="/profile2.svg" alt="home" style={{ width: 80, height: 80 }} />}
                            title="Manage Customer list"
                            subtitle="Add and remove customers"
                        />
                    </Grid>

                </Grid>
            </Box>


            {/* <Box display="flex" gap={3} mt={4}> */}
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 6 }}>
                    <RecentInvoices groups={invoices} onSelectInvoice={setSelectedInvoice} />
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                    <RecentActivities activities={activities} />
                </Grid>
            </Grid>


            {/* </Box> */}

            {selectedInvoice && (
                <InvoiceDetailsModal
                    open={!!selectedInvoice}
                    onClose={() => setSelectedInvoice(null)}
                    activities={selectedActivity}
                    invoice={selectedInvoice}
                />
            )}

        </Box>
    );
};

export default Invoice;
