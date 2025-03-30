
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, X, ShoppingBag, Loader2 } from 'lucide-react';
import { cartItems } from '@/data/cart';
import { toast } from 'sonner';

const Cart: React.FC = () => {
  const [items, setItems] = useState(cartItems);
  const [couponCode, setCouponCode] = useState('');
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const navigate = useNavigate();
  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const discount = couponDiscount;
  const total = subtotal + shipping - discount;
  
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeItem(id);
      return;
    }
    
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };
  
  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };
  
  const handleApplyCoupon = () => {
    if (!couponCode) return;
    
    setIsApplyingCoupon(true);
    
    // Simulate API call to validate coupon
    setTimeout(() => {
      if (couponCode.toUpperCase() === 'DISCOUNT20') {
        const discount = subtotal * 0.2;
        setCouponDiscount(discount);
        toast.success('Coupon applied successfully!');
      } else {
        toast.error('Invalid coupon code');
      }
      setIsApplyingCoupon(false);
    }, 1000);
  };
  
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-display font-bold">Your Shopping Cart</h1>
          <Link to="/shop" className="text-hype-blue hover:underline flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Continue Shopping
          </Link>
        </div>
        
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <ShoppingBag className="h-8 w-8 text-gray-500" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild className="bg-hype-blue hover:bg-hype-blue/90">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <div className="hidden sm:grid grid-cols-12 text-sm font-medium text-gray-500 mb-4">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-3 text-center">Quantity</div>
                    <div className="col-span-1 text-right">Total</div>
                  </div>
                  
                  {items.map((item) => (
                    <div key={item.id} className="py-6 first:pt-0 border-t first:border-t-0">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        {/* Product Image & Info */}
                        <div className="col-span-12 sm:col-span-6 flex gap-4">
                          <div className="h-20 w-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <Link to={`/product/${item.productId}`} className="font-medium hover:text-hype-blue">
                              {item.name}
                            </Link>
                            <div className="text-sm text-gray-500 mt-1">
                              <span className="capitalize">{item.color}</span> / {item.size}
                            </div>
                            <button 
                              className="text-sm text-red-500 hover:text-red-700 flex items-center mt-2 sm:hidden"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-3.5 w-3.5 mr-1" /> Remove
                            </button>
                          </div>
                        </div>
                        
                        {/* Price */}
                        <div className="col-span-4 sm:col-span-2 text-center">
                          <div className="sm:hidden text-xs text-gray-500 mb-1">Price:</div>
                          ${item.price.toFixed(2)}
                        </div>
                        
                        {/* Quantity */}
                        <div className="col-span-5 sm:col-span-3 flex justify-center">
                          <div className="sm:hidden text-xs text-gray-500 mb-1 absolute -mt-5">Quantity:</div>
                          <div className="flex items-center border rounded">
                            <button
                              className="w-8 h-8 flex items-center justify-center border-r"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <div className="w-10 h-8 flex items-center justify-center">
                              {item.quantity}
                            </div>
                            <button
                              className="w-8 h-8 flex items-center justify-center border-l"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        
                        {/* Total & Remove */}
                        <div className="col-span-3 sm:col-span-1 flex items-center justify-between sm:justify-end">
                          <div className="sm:hidden text-xs text-gray-500 mb-1">Total:</div>
                          <span className="font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button 
                            className="ml-6 text-gray-400 hover:text-red-500 hidden sm:block"
                            onClick={() => removeItem(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Coupon Code */}
              <div className="bg-white rounded-lg shadow mt-6 p-6">
                <h3 className="font-medium mb-4">Have a coupon?</h3>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter coupon code" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button 
                    onClick={handleApplyCoupon} 
                    disabled={isApplyingCoupon || !couponCode}
                    className="bg-hype-blue hover:bg-hype-blue/90 min-w-[100px]"
                  >
                    {isApplyingCoupon ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      'Apply'
                    )}
                  </Button>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Use code "DISCOUNT20" for 20% off your order
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="font-display font-bold text-lg mb-4">Order Summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {couponDiscount > 0 && (
                    <div className="flex justify-between text-hype-pink">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <Separator className="my-2" />
                  
                  <div className="flex justify-between font-medium text-base">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-6 bg-black hover:bg-gray-800"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                
                <div className="mt-6">
                  <h3 className="font-medium text-sm mb-2">We Accept:</h3>
                  <div className="flex gap-2">
                    <div className="h-8 w-12 bg-gray-100 rounded"></div>
                    <div className="h-8 w-12 bg-gray-100 rounded"></div>
                    <div className="h-8 w-12 bg-gray-100 rounded"></div>
                    <div className="h-8 w-12 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
