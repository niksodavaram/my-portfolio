// src/pages/Career.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import Career from '../pages/Career';

const meta = {
    title: 'Pages/Career',
    component: Career,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#000000' },
                { name: 'light', value: '#ffffff' },
            ],
        },
    },
    // Adding decorators to handle Framer Motion in Storybook
    decorators: [
        (Story) => (
            <div style={{ margin: 0, minHeight: '100vh' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Career>;

export default meta;
type Story = StoryObj<typeof Career>;

// Default story
export const Default: Story = {};

// With custom career steps
export const CustomCareerSteps: Story = {
    render: () => {
        // Override the default careerSteps with custom data
        const customCareerSteps = [
            {
                id: 1,
                years: "2020 - 2021",
                title: "Frontend Developer",
                company: "Tech Startup",
                description: "Developed modern web applications using React and TypeScript.",
                skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
            },
            {
                id: 2,
                years: "2021 - Present",
                title: "Senior Frontend Developer",
                company: "Enterprise Corp",
                description: "Leading frontend architecture and mentoring junior developers.",
                skills: ["Vue.js", "React", "GraphQL", "AWS"]
            },
        ];

        // You'll need to modify the Career component to accept careerSteps as a prop
        return <Career careerSteps={customCareerSteps} />;
    }
};

// Mobile view story
export const MobileView: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};

// Loading state story
export const LoadingState: Story = {
    render: () => {
        const loadingSteps = [
            {
                id: 1,
                years: "Loading...",
                title: "Loading...",
                company: "Loading...",
                description: "Loading...",
                skills: ["Loading..."]
            },
        ];
        return <Career careerSteps={loadingSteps} />;
    }
};

// Empty state story
export const EmptyState: Story = {
    render: () => <Career careerSteps={[]} />;
};