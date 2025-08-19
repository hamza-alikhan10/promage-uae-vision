import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Products', href: '/' },
    { name: "What's New", href: '/' },
    { name: 'Contact', href: '/' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/90 backdrop-blur-xl shadow-2xl border-b border-slate-700/50'
        : 'bg-transparent backdrop-blur-none'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Brand Name */}
          <div className="text-2xl lg:text-3xl font-bold text-white">
            Promage Connect
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons & Cart */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white transition-all duration-300">
              Login
            </Button>
            <Button className="bg-primary hover:bg-primary-dark transform hover:scale-105 transition-all duration-300 shadow-glow text-lg px-6 py-4">
              Sign Up
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu & Cart */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors duration-300 font-medium px-4 py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-3 px-4 pt-4 border-t border-slate-700/50">
                <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button className="bg-primary hover:bg-primary-dark transform hover:scale-105 transition-all duration-300 shadow-glow text-lg px-8 py-4">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;