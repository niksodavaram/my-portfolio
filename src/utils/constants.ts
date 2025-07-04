import { Route, Social, Skill, Project } from '../types';

export const ROUTES: Route[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  // Add more skills
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of project 1',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  // Add more projects
];

export const SOCIAL_LINKS: Social[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  // Add more social links
];