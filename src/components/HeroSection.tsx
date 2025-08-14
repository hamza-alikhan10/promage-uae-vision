import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        backgroundRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.1)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 container mx-auto px-4 lg:px-8 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up drop-shadow-lg">
            Redefining Smart Security
            <span className="block text-primary-light mt-2">in the UAE</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 max-w-3xl mx-auto animate-fade-in-delayed drop-shadow-md">
            Experience the future of protection with cutting-edge technology, 
            solar-powered solutions, and Dubai's most trusted security systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark transform hover:scale-105 transition-all duration-300 shadow-glow text-lg px-8 py-4"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/50 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-delayed">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">2023+</div>
              <div className="text-white/90 drop-shadow-md">Serving UAE Since</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">7</div>
              <div className="text-white/90 drop-shadow-md">Emirates Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
              <div className="text-white/90 drop-shadow-md">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;