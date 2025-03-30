
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '../common/Logo';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo className="h-8" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link font-medium">Home</Link>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link to="/shop" className="nav-link font-medium">Shop</Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-64 p-4">
                <div className="space-y-2">
                  <h4 className="font-medium mb-2">Categories</h4>
                  <Link to="/shop/men" className="block py-1 text-sm hover:text-hype-pink transition-colors">Men's Clothing</Link>
                  <Link to="/shop/women" className="block py-1 text-sm hover:text-hype-pink transition-colors">Women's Clothing</Link>
                  <Link to="/shop/accessories" className="block py-1 text-sm hover:text-hype-pink transition-colors">Accessories</Link>
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link to="/collections" className="nav-link font-medium">Collections</Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-64 p-4">
                <div className="space-y-2">
                  <h4 className="font-medium mb-2">Featured Collections</h4>
                  <Link to="/collections/summer-essentials" className="block py-1 text-sm hover:text-hype-pink transition-colors">Summer Essentials</Link>
                  <Link to="/collections/streetwear" className="block py-1 text-sm hover:text-hype-pink transition-colors">Streetwear Edition</Link>
                  <Link to="/collections/minimalist" className="block py-1 text-sm hover:text-hype-pink transition-colors">Minimalist Collection</Link>
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <Link to="/about" className="nav-link font-medium">About</Link>
            <Link to="/contact" className="nav-link font-medium">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            
            <Link to="/auth" className="hidden md:flex">
              <Button variant="ghost" size="icon">
                <User className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </Link>
            
            <Link to="/favorites" className="hidden md:flex">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </Link>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-hype-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-white z-50 p-4 md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="nav-link font-medium text-lg py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/shop" className="nav-link font-medium text-lg py-2" onClick={toggleMenu}>Shop</Link>
            <Link to="/collections" className="nav-link font-medium text-lg py-2" onClick={toggleMenu}>Collections</Link>
            <Link to="/about" className="nav-link font-medium text-lg py-2" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="nav-link font-medium text-lg py-2" onClick={toggleMenu}>Contact</Link>
            <Link to="/auth" className="nav-link font-medium text-lg py-2" onClick={toggleMenu}>Account</Link>
            <Link to="/favorites" className="nav-link font-medium text-lg py-2" onClick={toggleMenu}>Favorites</Link>
            <div className="pt-4 mt-4 border-t">
              <Button className="w-full btn-primary" onClick={toggleMenu}>
                <Search className="mr-2 h-4 w-4" />
                Search Products
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
