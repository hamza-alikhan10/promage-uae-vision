import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Award, Users, MapPin, Eye, Brain, RotateCw, Wifi, Smartphone, Mail, Phone, Send, ArrowRight, Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-bg.jpg';

const MainContent = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    const sections = [aboutRef, featuresRef, contactRef];
    sections.forEach((section) => {
      const elements = section.current?.querySelectorAll('.scroll-fade-in');
      elements?.forEach((el) => observer.observe(el));
    });

    return () => observer.disconnect();
  }, []);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const aboutFeatures = [
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

  const techFeatures = [
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+971 50 XXX XXXX',
      subContent: 'Mon-Sat 9AM-7PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@promageconnect.ae',
      subContent: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Dubai, UAE',
      subContent: 'Serving all 7 Emirates'
    }
  ];

  return (
    
    <main>
    

      {/* About Section */}
      <section ref={aboutRef} className="py-20 lg:py-32 bg-muted/30">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutFeatures.map((feature, index) => (
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

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 lg:py-32 bg-gradient-to-br from-muted/20 to-muted/40">
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
            {techFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="scroll-fade-in hover-lift group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-card rounded-xl p-8 shadow-custom h-full border border-border/50 group-hover:border-primary/30 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 h-1 bg-gradient-to-r from-primary/20 to-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </div>
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

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-fade-in">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto scroll-fade-in">
              Ready to secure your property? Contact our experts for personalized security solutions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="scroll-fade-in">
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Let's Start a Conversation
              </h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-primary font-medium">{info.content}</p>
                      <p className="text-muted-foreground text-sm">{info.subContent}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Card className="shadow-custom">
                <CardHeader>
                  <CardTitle className="text-primary">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="font-medium">Emergency Support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="scroll-fade-in">
              <Card className="shadow-large">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+971 XX XXX XXXX"
                          className="focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your security needs..."
                        required
                        rows={4}
                        className="focus:ring-primary focus:border-primary resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary hover:shadow-glow transform hover:scale-[1.02] transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;