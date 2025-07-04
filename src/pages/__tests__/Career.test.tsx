// src/pages/__tests__/Career.test.tsx
import { render, screen } from '@testing-library/react';
import Career from '../Career';

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
    Briefcase: () => <div data-testid="briefcase-icon" />,
    ArrowRight: () => <div data-testid="arrow-right-icon" />,
}));

describe('Career Page', () => {
    it('renders career journey title', () => {
        render(<Career />);
        expect(screen.getByText('Career Journey')).toBeInTheDocument();
    });

    it('renders all career steps', () => {
        render(<Career />);
        expect(screen.getByText('Software Engineer')).toBeInTheDocument();
        expect(screen.getByText('Software Developer')).toBeInTheDocument();
        expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
        expect(screen.getByText('Lead Developer')).toBeInTheDocument();
        expect(screen.getByText('Technical Architect')).toBeInTheDocument();
    });

    it('renders year ranges', () => {
        render(<Career />);
        expect(screen.getByText('2004 - 2006')).toBeInTheDocument();
        expect(screen.getByText('2006 - 2014')).toBeInTheDocument();
    });

    it('renders skills tags', () => {
        render(<Career />);
        expect(screen.getByText('Java')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('AWS')).toBeInTheDocument();
    });
});