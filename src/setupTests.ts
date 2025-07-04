import '@testing-library/jest-dom';

// Mock window.location
const location = new URL('http://localhost');
delete window.location;
window.location = location as unknown as Location;