
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, className, fullWidth = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className={cn(
        "flex-grow",
        !fullWidth && "max-w-7xl mx-auto w-full",
        className
      )}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
