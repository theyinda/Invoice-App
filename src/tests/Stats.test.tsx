import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider, createTheme } from '@mui/material';
import StatCard from '../components/Stats';

const theme = createTheme({ palette: { mode: 'light' } });

describe('StatCard', () => {
    it('renders the StatCard with title, value, chip label, and chip color', () => {
        const props = {
            title: 'TOTAL PAID',
            chipLabel: 'PAID',
            chipColor: '#B6FDD3',
            value: '$1200',
        };

        render(
            <ThemeProvider theme={theme}>
                <StatCard {...props} />
            </ThemeProvider>
        );

        // Check if the title is rendered
        expect(screen.getByText(props.title)).toBeInTheDocument();

        // Check if the value is rendered
        expect(screen.getByText(props.value)).toBeInTheDocument();

        // Check if the chip label is rendered
        expect(screen.getByText(props.chipLabel)).toBeInTheDocument();

        // Check if the chip has the correct background color
        const chip = screen.getByText(props.chipLabel).closest('.MuiChip-root');
        expect(chip).toHaveStyle(`background: ${props.chipColor}`);
    });

    it('renders default icon if no icon prop is provided', () => {
        render(
            <ThemeProvider theme={theme}>
                <StatCard title="Test" chipLabel="TEST" value="$0" />
            </ThemeProvider>
        );

        // Check that an svg icon (AttachMoneyIcon) exists
        expect(screen.getByTestId('AttachMoneyIcon')).toBeInTheDocument();
    });
});
