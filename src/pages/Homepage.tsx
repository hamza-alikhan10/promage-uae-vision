import Navigation from '@/components/Navigation';
import MainContent from '@/components/MainContent';
import ProductShowcase from '@/components/ProductShowcase';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const Homepage = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <div 
        className="min-h-screen bg-background"
        style={{
          transform: 'scale(0.75)',
          transformOrigin: 'top center',
          width: '100%', // Keep original width for gaps on sides
          minHeight: '133.33vh', // Compensate for height scaling
          overflow: 'hidden'
        }}
      >
        <MainContent />
        <div id="products">
          <ProductShowcase />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;