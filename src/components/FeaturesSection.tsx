import { useEffect, useRef } from 'react';
import { Eye, MapPin, Brain, RotateCw, Wifi, Smartphone } from 'lucide-react';

const FeaturesSection = () => {
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

  const features = [
    {
      icon: Eye,
      title: 'Night Vision & Color Vision',
      description: 'Advanced IR technology with full-color night vision capabilities for 24/7 monitoring',
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'GPS Tracking',
      description: 'Real-time location tracking with geofencing alerts and route monitoring',
      gradient: 'from-green-600 to-teal-600'
    },
    {
      icon: Brain,
      title: 'AI Motion Detection',
      description: 'Smart AI algorithms that distinguish between humans, vehicles, and animals',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      icon: RotateCw,
      title: '360° PTZ Control',
      description: 'Complete pan, tilt, and zoom control with preset positions and auto-patrol',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Wifi,
      title: '4G/WiFi Connectivity',
      description: 'Dual connectivity options ensuring reliable connection anywhere in the UAE',
      gradient: 'from-teal-600 to-cyan-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Control',
      description: 'Comprehensive mobile app for remote monitoring, alerts, and system management',
      gradient: 'from-pink-600 to-purple-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-muted/20 to-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-fade-in">
            Advanced <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto scroll-fade-in">
            Experience cutting-edge security features designed for the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="scroll-fade-in hover-lift group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-card rounded-xl p-8 shadow-custom h-full border border-border/50 group-hover:border-primary/30 transition-all duration-300">
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated Border */}
                <div className="mt-6 h-1 bg-gradient-to-r from-primary/20 to-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="scroll-fade-in bg-gradient-primary rounded-2xl p-8 lg:p-12 shadow-large">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Experience the Future of Security
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers across the UAE who trust Promage Connect 
              for their security needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;