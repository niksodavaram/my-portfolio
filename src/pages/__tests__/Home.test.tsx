import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

// Mock framer-motion
jest.mock('framer-motion', () => ({
motion: {
div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
},
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
ArrowRight: () => <div data-testid="arrow-right-icon" />,
}));

describe('Home', () => {
it('renders without crashing', () => {
const { container } = render(<Home />);
expect(container).toBeInTheDocument();
});

it('renders the title', () => {
const { getByText } = render(<Home />);
expect(getByText('Nik Sodavaram')).toBeInTheDocument();
});

it('renders the description', () => {
const { getByText } = render(<Home />);
expect(getByText(/Full Stack Developer/)).toBeInTheDocument();
});
});