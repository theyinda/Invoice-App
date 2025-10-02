import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, Typography
} from "@mui/material";

type Props = {
    open: boolean;
    invoiceId: string | null;
    onClose: () => void;
};

export default function InvoiceModal({ open, invoiceId, onClose }: Props) {
    if (!invoiceId) return null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Invoice Details</DialogTitle>
            <DialogContent dividers>
                <Typography variant="body1">Invoice ID: {invoiceId}</Typography>
                <Typography variant="body2">Customer: Mock Customer</Typography>
                <Typography variant="body2">Amount: $XXX</Typography>
                <Typography variant="body2">Status: pending</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
                <Button variant="contained" color="primary">Mark as Paid</Button>
            </DialogActions>
        </Dialog>
    );
}
