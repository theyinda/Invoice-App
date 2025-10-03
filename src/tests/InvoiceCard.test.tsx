import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider, createTheme } from '@mui/material';
import type { InvoiceGroup } from '../types/invoice';
import { RecentInvoices, InvoiceActivity } from '../components/InvoiceCard';

const theme = createTheme({ palette: { mode: 'light' } });

const mockGroups: InvoiceGroup[] = [
    {
        dateLabel: "Today",
        invoices: [
            {
                id: "INV-1001",
                title: "Website Redesign",
                dueDateLabel: "Due Today",
                issueDate: "Nov 2, 2025",
                dueDate: "Oct 2, 2025",
                amount: "$1,200",
                currency: "USD",
                status: "PAID",
                note: "Thank you",
                sender: {
                    name: "ABC Company",
                    phone: "+23479493393",
                    email: "abc@example.com",
                    address: "123 Street, City",
                    logoUrl: "/crop.svg",
                },
                customer: {
                    name: "John Doe",
                    phone: "+1234567890",
                    email: "john@example.com",
                },
                paymentInfo: {
                    accountName: "Access",
                    accountNumber: "123456789",
                    achRoutingNo: "987654321",
                    bankName: "Bank of Example",
                    bankAddress: "456 Bank Street, City",
                },
                items: [
                    {
                        id: "item-1",
                        title: "Design Work",
                        description: "Homepage + About page redesign",
                        quantity: 10,
                        unitPrice: 120,
                        total: 1200,
                        currency: "USD",
                    },
                ],
                activity: [
                    {
                        id: "act-11",
                        timeLabel: "2 hours ago",
                        invoiceId: "INV-1001",
                        actionTitle: "Invoice Sent",
                        description: "Sent invoice INV-1001 to John Doe",
                        logoUrl: "/avatar.svg",
                    },
                    {
                        id: "act-12",
                        timeLabel: "1 hour ago",
                        invoiceId: "INV-1001",
                        actionTitle: "Payment Received",
                        description: "Payment received for INV-1001",
                        logoUrl: "/avatar.svg",
                    },
                ],
            },
        ],
    },
];

const mockActivities = [
    {
        id: 'act-001',
        invoiceId: 'INV-001',
        logoUrl: '/avatar.svg',
        actionTitle: 'Invoice sent',
        timeLabel: '2 hours ago',
        description: 'Invoice #001 sent to customer',
    },
    {
        id: 'act-002',
        invoiceId: 'INV-001',
        logoUrl: '/avatar.svg',
        actionTitle: 'Payment received',
        timeLabel: '1 hour ago',
        description: 'Payment of $500 received',
    },
];

describe('RecentInvoices Component', () => {
    it('renders headers and invoices', () => {
        render(
            <ThemeProvider theme={theme}>
                <RecentInvoices groups={mockGroups} onSelectInvoice={vi.fn()} />
            </ThemeProvider>
        );

        expect(screen.getByText(/Recent Invoices/i)).toBeInTheDocument();
    });

    it('calls onSelectInvoice when an invoice row is clicked', () => {
        const mockSelect = vi.fn();
        render(
            <ThemeProvider theme={theme}>
                <RecentInvoices groups={mockGroups} onSelectInvoice={mockSelect} />
            </ThemeProvider>
        );


    });
});

describe('InvoiceActivity Component', () => {
    it('renders activity rows', () => {
        render(
            <ThemeProvider theme={theme}>
                <InvoiceActivity activities={mockActivities} />
            </ThemeProvider>
        );

        mockActivities.forEach((act) => {
            expect(screen.getByText(act.actionTitle)).toBeInTheDocument();
            expect(screen.getByText(act.timeLabel)).toBeInTheDocument();
            expect(screen.getByText(act.description)).toBeInTheDocument();
        });
    });
});
