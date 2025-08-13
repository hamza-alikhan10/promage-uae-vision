import { useEffect, useRef } from 'react';
import { Shield, Award, Users, MapPin } from 'lucide-react';

const AboutSection = () => {
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
      icon: Shield,
      title: 'Cutting-Edge Technology',
      description: 'Advanced AI-powered security systems with real-time monitoring and smart detection capabilities.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Superior build quality with rigorous testing to ensure reliable performance in UAE conditions.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated UAE-wide support team providing installation, maintenance, and 24/7 assistance.'
    },
    {
      icon: MapPin,
      title: 'Local Presence',
      description: 'Serving all seven emirates with local expertise and understanding of regional security needs.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-fade-in">
            About <span className="text-gradient">Promage Connect</span>
          </h2>
          
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed scroll-fade-in">
            <p className="mb-6">
              At Promage Connect, we're redefining smart security in the UAE with cutting-edge 
              technology for modern living. Since 2023, we've expanded across all seven emirates, 
              delivering innovative solutions like PTZ cameras, eco-friendly solar-powered systems, 
              family-safe baby monitors, and dual-lens dashcams for complete road coverage.
            </p>
            <p>
              Our products combine superior quality with hassle-free UAE-wide support, making 
              security simple and reliable. Explore our range and experience the future of protection.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="scroll-fade-in hover-lift bg-card rounded-xl p-6 shadow-custom text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center shadow-large">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="scroll-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">1000+</div>
              <div className="text-primary-foreground/80">Installations</div>
            </div>
            <div className="scroll-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/80">Product Models</div>
            </div>
            <div className="scroll-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">99.9%</div>
              <div className="text-primary-foreground/80">Uptime</div>
            </div>
            <div className="scroll-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;