
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className={cn(
        "flex-grow",
        !fullWidth && "container mx-auto px-4 md:px-6 lg:px-8",
        className
      )}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
