import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider, createTheme } from '@mui/material';
import UserDetails from '../components/UserDetails';

const theme = createTheme({ palette: { mode: 'light' } });

const mockInvoice = {
    id: 'INV-001',
    issueDate: 'Oct 2, 2025',
    dueDate: 'Nov 2, 2025',
    currency: 'USD',
    sender: {
        name: 'Acme Corp',
        phone: '123-456-7890',
        email: 'sender@acme.com',
        address: '123 Sender St.',
        logoUrl: 'logo.png',
    },
    customer: {
        name: 'John Doe',
        phone: '987-654-3210',
        email: 'customer@example.com',
    },
};

describe('UserDetails', () => {
    it('renders sender and customer details', () => {
        render(
            <ThemeProvider theme={theme}>
                <UserDetails invoice={mockInvoice as any} />
            </ThemeProvider>
        );

        // Sender details
        expect(screen.getByText(/Acme Corp/i)).toBeInTheDocument();
        expect(screen.getByText(/123-456-7890/i)).toBeInTheDocument();
        expect(screen.getByText(/sender@acme.com/i)).toBeInTheDocument();
        expect(screen.getByText(/123 Sender St./i)).toBeInTheDocument();

        // Customer details
        expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
        expect(screen.getByText(/987-654-3210/i)).toBeInTheDocument();
        expect(screen.getByText(/customer@example.com/i)).toBeInTheDocument();
    });

    it('renders invoice details', () => {
        render(
            <ThemeProvider theme={theme}>
                <UserDetails invoice={mockInvoice as any} />
            </ThemeProvider>
        );

        expect(screen.getByText(/INV-001/i)).toBeInTheDocument();
        expect(screen.getByText(/Oct 2, 2025/i)).toBeInTheDocument();
        expect(screen.getByText(/Nov 2, 2025/i)).toBeInTheDocument();
        expect(screen.getByText(/USD/i)).toBeInTheDocument();
    });

    it('renders sender logo', () => {
        render(
            <ThemeProvider theme={theme}>
                <UserDetails invoice={mockInvoice as any} />
            </ThemeProvider>
        );

        const logo = screen.getByAltText('home') as HTMLImageElement;
        expect(logo).toBeInTheDocument();
        expect(logo.src).toContain('logo.png');
    });
});
