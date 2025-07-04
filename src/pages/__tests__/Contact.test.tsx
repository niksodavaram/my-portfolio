// src/pages/__tests__/Contact.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
    Send: () => <div data-testid="send-icon" />,
    Phone: () => <div data-testid="phone-icon" />,
    Mail: () => <div data-testid="mail-icon" />,
}));

describe('Contact Page', () => {
    it('renders contact information', () => {
        render(<Contact />);
        expect(screen.getByText('+61 452 342 206')).toBeInTheDocument();
        expect(screen.getByText('nik.sodavaram@outlook.com')).toBeInTheDocument();
    });

    it('renders contact form fields', () => {
        render(<Contact />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Message')).toBeInTheDocument();
    });

    it('handles form submission', () => {
        render(<Contact />);

        // Fill out the form
        fireEvent.change(screen.getByLabelText('Name'), {
            target: { value: 'Test User' },
        });
        fireEvent.change(screen.getByLabelText('Email'), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(screen.getByLabelText('Message'), {
            target: { value: 'Test message' },
        });

        // Submit the form
        fireEvent.click(screen.getByText('Send Message'));
    });
});