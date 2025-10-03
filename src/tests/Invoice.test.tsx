import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ThemeProvider, createTheme } from '@mui/material';
import Invoice from '../pages/Invoice';

const theme = createTheme({ palette: { mode: 'light' } });

const mockInvoices = [
    { id: 'INV-001', dueDateLabel: 'Due in 5 days', dueDate: '2025-10-07', amount: '$500', status: 'PAID' },
];

const mockGroups = [{ dateLabel: 'Today', invoices: mockInvoices }];

const mockActivities = [
    { invoiceId: 'INV-001', logoUrl: '/avatar.svg', actionTitle: 'Invoice sent', timeLabel: '2 hours ago', description: 'Invoice #001 sent to customer' },
];

const mockStats = {
    paid: '5',
    totalPaid: '$2000',
    unpaid: '2',
    totalOverdue: '$500',
    draft: '1',
    totalDraft: '$300',
};

beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn((url: string) => {
        if (url.includes('invoices')) return Promise.resolve({ json: () => Promise.resolve(mockGroups) });
        if (url.includes('activities')) return Promise.resolve({ json: () => Promise.resolve(mockActivities) });
        if (url.includes('stats')) return Promise.resolve({ json: () => Promise.resolve(mockStats) });
        return Promise.resolve({ json: () => Promise.resolve([]) });
    }));
});

describe('Invoice Page', () => {
    it('renders page header and buttons', async () => {
        render(<ThemeProvider theme={theme}><Invoice /></ThemeProvider>);

        expect(screen.getByText(/SEE WHAT'S NEW/i)).toBeInTheDocument();
    });

    it('renders StatCard components with fetched stats', async () => {
        render(<ThemeProvider theme={theme}><Invoice /></ThemeProvider>);

        expect(await screen.findByText(/TOTAL PAID/i)).toBeInTheDocument();
        expect(await screen.findByText(mockStats.totalPaid)).toBeInTheDocument();
        expect(await screen.findByText(/TOTAL OVERDUE/i)).toBeInTheDocument();
        expect(await screen.findByText(/TOTAL DRAFT/i)).toBeInTheDocument();
        expect(await screen.findByText(mockStats.totalDraft)).toBeInTheDocument();
    });

    it('renders InvoiceActionCard components', async () => {
        render(<ThemeProvider theme={theme}><Invoice /></ThemeProvider>);

        expect(screen.getByText(/Create Invoice/i)).toBeInTheDocument();
        expect(screen.getByText(/Change Invoice settings/i)).toBeInTheDocument();
        expect(screen.getByText(/Manage Customer list/i)).toBeInTheDocument();
    });

    it('renders RecentInvoices and RecentActivities', async () => {
        render(<ThemeProvider theme={theme}><Invoice /></ThemeProvider>);

        await waitFor(() => {
            expect(screen.getByText(mockGroups[0].dateLabel)).toBeInTheDocument();
            expect(screen.getByText(mockInvoices[0].id)).toBeInTheDocument();
            expect(screen.getByText(mockActivities[0].actionTitle)).toBeInTheDocument();
            expect(screen.getByText(mockActivities[0].description)).toBeInTheDocument();
        });
    });

    it('opens InvoiceDetailsModal when an invoice is clicked', async () => {
        render(<ThemeProvider theme={theme}><Invoice /></ThemeProvider>);

        await waitFor(() => {
            const invoiceRow = screen.getByText(mockInvoices[0].id).closest('div');
            invoiceRow && fireEvent.click(invoiceRow);
        });
        expect(screen.getByText(/Invoice Details/i)).toBeInTheDocument();

    });
});
