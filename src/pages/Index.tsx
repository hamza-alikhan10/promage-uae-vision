import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductShowcase from '@/components/ProductShowcase';
import FeaturesSection from '@/components/FeaturesSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductShowcase />
      <FeaturesSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
