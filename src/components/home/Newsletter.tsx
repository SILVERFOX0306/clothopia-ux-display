
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for subscribing!');
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <section className="py-20 bg-gradient-to-r from-hype-blue/10 via-hype-teal/10 to-hype-purple/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-display font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Stay updated with the latest drops and exclusive offers. Get 10% off your first order when you sign up.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Your email address" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="sm:flex-1"
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-hype-pink hover:bg-hype-purple text-white"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
        
        <p className="text-sm text-gray-500 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive marketing communications.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
