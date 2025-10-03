import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import type { InvoiceItem } from '../types/invoice';
import { ThemeProvider, createTheme } from '@mui/material';
import PaymentInfo from '../components/PaymentInfo';

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

describe('PaymentInfo', () => {
    it('renders payment information correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <PaymentInfo invoice={mockInvoice} />
            </ThemeProvider>
        );

        // Check that section title is rendered
        expect(screen.getByText(/Payment Information/i)).toBeInTheDocument();

        // Check each field label
        expect(screen.getByText(/Account name:/i)).toBeInTheDocument();
        expect(screen.getByText(/Account Number:/i)).toBeInTheDocument();
        expect(screen.getByText(/Ach routing no/i)).toBeInTheDocument();
        expect(screen.getByText(/Bank Name/i)).toBeInTheDocument();
        expect(screen.getByText(/bank address/i)).toBeInTheDocument();

        // Check field values
        expect(screen.getByText(mockInvoice.paymentInfo!.accountName)).toBeInTheDocument();
        expect(screen.getByText(mockInvoice.paymentInfo!.accountNumber)).toBeInTheDocument();
        expect(screen.getByText(mockInvoice.paymentInfo!.achRoutingNo)).toBeInTheDocument();
        expect(screen.getByText(mockInvoice.paymentInfo!.bankName)).toBeInTheDocument();
        expect(screen.getByText(mockInvoice.paymentInfo!.bankAddress!)).toBeInTheDocument();
    });
});
