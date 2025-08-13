import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye, Wifi, Battery, Camera, Shield } from 'lucide-react';

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: 1,
      title: 'Solar-Powered PTZ Camera',
      description: '4K Ultra HD | Solar Powered | 360° Pan & Tilt',
      image: '/lovable-uploads/fb13d867-b814-4646-80fc-4af24b97f0fd.png',
      features: ['Solar Powered', '4K Resolution', 'PTZ Control'],
      badge: 'Eco-Friendly',
      price: 'AED 899'
    },
    {
      id: 2,
      title: 'Mini Battery Camera',
      description: '3K Ultra HD | Rechargeable Battery | Motion Detection',
      image: '/lovable-uploads/27013d73-d3b8-474f-8231-75b7092adcca.png',
      features: ['Rechargeable', 'Night Vision', 'App Control'],
      badge: 'Best Seller',
      price: 'AED 299'
    },
    {
      id: 3,
      title: 'Smart Dash Cam',
      description: '2.4/7 Recording | 4G Connectivity | GPS Tracking',
      image: '/lovable-uploads/93884ddd-968b-4141-9b42-679a47cec058.png',
      features: ['4G WiFi', 'GPS Track', 'Full HD'],
      badge: 'New',
      price: 'AED 449'
    },
    {
      id: 4,
      title: 'PTZ 360° Security Camera',
      description: 'Ultra Wide Angle | Full HD | Two-Way Audio',
      image: '/lovable-uploads/f660607b-ef50-41a1-b87a-975b48a72e02.png',
      features: ['360° View', 'Two-Way Audio', 'Motion Track'],
      badge: 'Professional',
      price: 'AED 649'
    },
    {
      id: 5,
      title: 'WiFi Indoor Camera',
      description: '3MP WiFi | 2K/3K HD | Pan & Tilt',
      image: '/lovable-uploads/f660607b-ef50-41a1-b87a-975b48a72e02.png',
      features: ['WiFi Connect', '3MP Sensor', 'Cloud Storage'],
      badge: 'Indoor',
      price: 'AED 199'
    },
    {
      id: 6,
      title: 'Baby Monitor Camera',
      description: 'Family Safe | Night Vision | Mobile Alerts',
      image: '/lovable-uploads/f660607b-ef50-41a1-b87a-975b48a72e02.png',
      features: ['Baby Safe', 'Night Vision', 'Mobile Alert'],
      badge: 'Family',
      price: 'AED 249'
    },
    {
      id: 7,
      title: 'Solar Dual Camera System',
      description: 'Dual Lens | Solar Panel | Weather Resistant',
      image: '/lovable-uploads/2066e9d0-97c9-4a22-be75-238092e6b1b7.png',
      features: ['Dual Camera', 'Weather Proof', 'Solar Power'],
      badge: 'Premium',
      price: 'AED 1,299'
    },
    {
      id: 8,
      title: 'Wireless Security Kit',
      description: 'Complete Kit | Easy Setup | Remote Access',
      image: '/lovable-uploads/06af5786-fbed-4c4a-b60c-d24c36d893f2.png',
      features: ['Complete Kit', 'Easy Setup', 'Remote View'],
      badge: 'Kit',
      price: 'AED 799'
    }
  ];

  const handleProductClick = (productId: number) => {
    // Navigate to product detail page
    window.location.href = `/product/${productId}`;
  };

  return (
    <section id="products" ref={sectionRef} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-fade-in">
            Our <span className="text-gradient">Product Range</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto scroll-fade-in">
            Discover our comprehensive collection of smart security solutions designed 
            for modern UAE living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="scroll-fade-in hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="bg-card rounded-xl p-6 shadow-custom h-full flex flex-col">
                {/* Product Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg bg-muted/20">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge 
                    className="absolute top-3 right-3 bg-primary text-primary-foreground"
                  >
                    {product.badge}
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Price and Actions */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-primary hover:shadow-glow transform transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart functionality
                      }}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;