// src/components/layout/Layout.tsx
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;