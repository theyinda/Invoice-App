import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider, createTheme } from '@mui/material';
import InvoiceItems from '../components/InvoiceItems';

const theme = createTheme({ palette: { mode: 'light' } });

const mockInvoice = {
    items: [
        {
            id: 'item-1',
            title: 'Design Work',
            description: 'UI/UX Design for homepage',
            quantity: 2,
            unitPrice: 150,
            total: 300,
            currency: 'USD',
        },
        {
            id: 'item-2',
            title: 'Development',
            description: 'Frontend development',
            quantity: 5,
            unitPrice: 200,
            total: 1000,
            currency: 'USD',
        },
    ],
};

describe('InvoiceItems', () => {
    it('renders the items header', () => {
        render(
            <ThemeProvider theme={theme}>
                <InvoiceItems invoice={mockInvoice as any} />
            </ThemeProvider>
        );

        expect(screen.getByText(/Items/i)).toBeInTheDocument();
    });

    it('renders all items with details', () => {
        render(
            <ThemeProvider theme={theme}>
                <InvoiceItems invoice={mockInvoice as any} />
            </ThemeProvider>
        );

        mockInvoice.items.forEach((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
            expect(screen.getByText(item.description)).toBeInTheDocument();
            expect(screen.getByText(item.quantity.toString())).toBeInTheDocument();
            expect(screen.getByText(`$ ${item.unitPrice}`)).toBeInTheDocument();
            expect(screen.getByText(`$ ${item.total}`)).toBeInTheDocument();
        });
    });
});
