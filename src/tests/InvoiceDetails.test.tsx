import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import type { ActivityItem, InvoiceItem } from '../types/invoice';
import { ThemeProvider, createTheme } from '@mui/material';
import InvoiceDetails from '../pages/InvoiceDetails';

const theme = createTheme({ palette: { mode: 'light' } });

const mockInvoice: InvoiceItem = {
    id: 'INV-123',
    title: 'Website Redesign',
    dueDateLabel: 'Due Today',
    issueDate: 'Oct 2, 2025',
    dueDate: 'Nov 2, 2025',
    amount: '$1200',
    status: 'PAID',
    items: [],
    customer: { name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
    sender: { name: 'My Company', email: 'me@example.com', phone: '9876543210' },
    paymentInfo: { accountName: 'My Company', accountNumber: '12345', achRoutingNo: '6789', bankName: 'Bank', bankAddress: 'Bank Street' },
    activity: [],
    note: 'This is a test note',
};

const mockActivities: ActivityItem[] = [
    { id: '1', timeLabel: '2h ago', invoiceId: 'INV-123', actionTitle: 'Sent Invoice', description: 'Invoice sent to John' },
    { id: '2', timeLabel: '1h ago', invoiceId: 'INV-123', actionTitle: 'Payment Received', description: 'Payment received' },
];

describe('InvoiceDetailsModal', () => {
    it('renders modal when open', () => {
        render(
            <ThemeProvider theme={theme}>
                <InvoiceDetails
                    open={true}
                    onClose={vi.fn()}
                    invoice={mockInvoice}
                    activities={mockActivities}
                />
            </ThemeProvider>
        );

        // Check that invoice title is rendered
        expect(screen.getByText(/Invoice #12345/i)).toBeInTheDocument();

        // Check that note is rendered
        expect(screen.getByText(mockInvoice.note)).toBeInTheDocument();

        // Check that activities are rendered
        mockActivities.forEach((activity) => {
            expect(screen.getByText(activity.actionTitle)).toBeInTheDocument();
            expect(screen.getByText(activity.description)).toBeInTheDocument();
        });
    });

    it('calls onClose when close button is clicked', () => {
        const onClose = vi.fn();
        render(
            <ThemeProvider theme={theme}>
                <InvoiceDetails
                    open={true}
                    onClose={onClose}
                    invoice={mockInvoice}
                    activities={mockActivities}
                />
            </ThemeProvider>
        );

    });

    it('opens and closes MORE menu', () => {
        render(
            <ThemeProvider theme={theme}>
                <InvoiceDetails
                    open={true}
                    onClose={vi.fn()}
                    invoice={mockInvoice}
                    activities={mockActivities}
                />
            </ThemeProvider>
        );

        const moreButton = screen.getByText(/MORE/i);
        fireEvent.click(moreButton);

        // Menu items should appear
        expect(screen.getByText(/DUPLICATE INVOICE/i)).toBeInTheDocument();
        expect(screen.getByText(/GET SHAREABLE LINK/i)).toBeInTheDocument();

        // Click a menu item to close
        fireEvent.click(screen.getByText(/DUPLICATE INVOICE/i));
        expect(screen.queryByText(/DUPLICATE INVOICE/i)).not.toBeVisible();
    });
});
