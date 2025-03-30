
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="h-8 mb-4" />
            <p className="text-gray-300 text-sm">
              HYPESHOW brings you the latest street fashion trends and exclusive collections.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-hype-pink transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-hype-blue transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-hype-teal transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop/men" className="text-gray-300 hover:text-white transition-colors">Men</Link></li>
              <li><Link to="/shop/women" className="text-gray-300 hover:text-white transition-colors">Women</Link></li>
              <li><Link to="/shop/accessories" className="text-gray-300 hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/collections/new" className="text-gray-300 hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/collections/sale" className="text-gray-300 hover:text-white transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/stores" className="text-gray-300 hover:text-white transition-colors">Store Locator</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-hype-pink hover:bg-hype-purple">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 HYPESHOW. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-white">Terms of Service</Link>
              <Link to="/shipping" className="text-gray-400 text-sm hover:text-white">Shipping Info</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
