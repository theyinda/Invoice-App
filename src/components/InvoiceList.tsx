
import {
    Table, TableHead, TableRow, TableCell, TableBody,
    Paper, TableContainer, IconButton
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

type Invoice = {
    id: string;
    customer: string;
    amount: number;
    status: "paid" | "pending" | "overdue";
};

const mockInvoices: Invoice[] = [
    { id: "1", customer: "Alice", amount: 200, status: "paid" },
    { id: "2", customer: "Bob", amount: 450, status: "pending" },
    { id: "3", customer: "Charlie", amount: 300, status: "overdue" },
];

export default function InvoiceList({ onSelect }: { onSelect: (id: string) => void }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mockInvoices.map((inv) => (
                        <TableRow key={inv.id}>
                            <TableCell>{inv.id}</TableCell>
                            <TableCell>{inv.customer}</TableCell>
                            <TableCell>${inv.amount}</TableCell>
                            <TableCell>{inv.status}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => onSelect(inv.id)}>
                                    <VisibilityIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
