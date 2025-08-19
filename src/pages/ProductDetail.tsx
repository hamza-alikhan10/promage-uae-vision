import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowLeft,
  ShoppingCart,
  Heart,
  Share2,
  Eye,
  Wifi,
  Battery,
  Camera,
  Shield,
  Star,
  Plus,
  Minus,
  Truck,
  RotateCcw,
  Award,
  Zap,
  Smartphone,
  HardDrive,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Sample products data from ProductShowcase
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

// Updated ImageGallery component
const ImageGallery = ({ images, selectedImage, setSelectedImage }) => (
  <div className="space-y-4">
    <div className="bg-gray-100 h-96 rounded-xl flex items-center justify-center overflow-hidden">
      <img
        src={images[selectedImage]}
        alt="Product"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex gap-2 overflow-x-auto">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          className={`w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 ${
            selectedImage === index ? 'border-2 border-blue-600' : ''
          }`}
          onClick={() => setSelectedImage(index)}
        />
      ))}
    </div>
  </div>
);

const ProductInfo = () => {
  const { id } = useParams();
  const productData = products.find((p) => p.id === parseInt(id)) || products[0];
  const product = {
    id: productData.id,
    title: productData.title,
    model: 'HK-D043T-M',
    price: parseFloat(productData.price.replace('AED ', '')),
    originalPrice: parseFloat(productData.price.replace('AED ', '')) + 100,
    currency: 'AED',
    rating: 4.5,
    reviewCount: 248,
    inStock: true,
    stockCount: 15,
    description: productData.description,
    shortDescription: 'Professional-grade indoor security camera with AI detection and 360° coverage.',
    images: [
      productData.image,
      '/lovable-uploads/93884ddd-968b-4141-9b42-679a47cec058.png',
      '/lovable-uploads/f660607b-ef50-41a1-b87a-975b48a72e02.png',
    ],
    features: productData.features.map((feature, index) => ({
      icon: [Camera, Wifi, Eye, Shield, Smartphone, HardDrive][index % 6],
      title: feature,
      description: `${feature} feature for enhanced security`,
    })),
    specifications: {
      'Image Sensor': '1/2.8″ 3.0MP CMOS',
      Resolution: '2304×1296',
      'Minimum Illumination': '0.01Lux/F1.2',
      'Video Resolution': 'Main: 2304*1296, Sub: 800*448',
      Compression: 'H.264/H.265',
      'Frame Rate': '15fps',
      'Pan Range': 'Horizontal 355°',
      'Tilt Range': 'Vertical 45°',
      'Night Vision': 'IR & White Light Support',
      Storage: 'TF Card (max 256G) + Cloud',
      WiFi: '2.4G WiFi Support',
      Power: 'DC 5V=2A',
      'Working Temperature': '-10~55℃',
    },
    applications: [
      { title: 'Indoor Monitoring', description: 'Perfect for home surveillance' },
      { title: 'Baby Monitoring', description: 'Keep an eye on your little ones' },
      { title: 'Office Security', description: 'Professional workspace monitoring' },
      { title: 'Pet Monitoring', description: 'Watch your pets when away' },
    ],
    highlights: [
      'Two-way audio communication',
      '355° horizontal & 45° vertical rotation',
      'H.264/H.265 encoding',
      'Mobile app push notifications',
      'Auto-tracking technology',
      'Cloud storage compatible',
    ],
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, Math.min(10, quantity + change)));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} units to cart`);
  };

  const handleBuyNow = () => {
    console.log('Proceeding to checkout');
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">
            {product.model}
          </Badge>
          {product.inStock ? (
            <Badge className="bg-green-100 text-green-800 text-xs">In Stock</Badge>
          ) : (
            <Badge variant="destructive" className="text-xs">
              Out of Stock
            </Badge>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
          {product.title}
        </h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>
        <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-blue-600">
              {product.currency} {product.price}
            </span>
            <span className="text-lg text-gray-400 line-through">
              {product.currency} {product.originalPrice}
            </span>
          </div>
          <Badge className="bg-red-500 text-white font-semibold w-fit">
            Save {product.currency} {product.originalPrice - product.price}
          </Badge>
        </div>
        {product.inStock && product.stockCount <= 20 && (
          <p className="text-red-600 text-sm mt-2 font-medium">
            Only {product.stockCount} left in stock!
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {product.features.slice(0, 4).map((feature, index) => (
          <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
            <feature.icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-700 truncate">{feature.title}</span>
          </div>
        ))}
      </div>
      <div className="space-y-4 border-t pt-6">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Quantity:</label>
          <div className="flex items-center border rounded-lg bg-white">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-2 border-x min-w-[60px] text-center font-medium">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= 10}
              className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleAddToCart}
            size="lg"
            className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
          <Button
            onClick={handleBuyNow}
            variant="outline"
            size="lg"
            className="flex-1 border-primary text-primary hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
          >
            Buy Now - {product.price}
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="text-center p-3 bg-gradient-card rounded-lg">
            <Shield className="h-6 w-6 text-primary mx-auto mb-1" />
            <span className="text-xs font-medium">2 Year Warranty</span>
          </div>
          <div className="text-center p-3 bg-gradient-card rounded-lg">
            <Battery className="h-6 w-6 text-primary mx-auto mb-1" />
            <span className="text-xs font-medium">Free Installation</span>
          </div>
          <div className="text-center p-3 bg-gradient-card rounded-lg">
            <Wifi className="h-6 w-6 text-primary mx-auto mb-1" />
            <span className="text-xs font-medium">24/7 Support</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 pt-2">
          <button
            onClick={handleWishlist}
            className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
            <span className="text-sm">Wishlist</span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
            <Share2 className="h-4 w-4" />
            <span className="text-sm">Share</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Truck className="w-4 h-4" />
            <span>Free Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <RotateCcw className="w-4 h-4" />
            <span>30-day Returns</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Award className="w-4 h-4" />
            <span>2 Year Warranty</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const productData = products.find((p) => p.id === parseInt(id)) || products[0];
  const product = {
    id: productData.id,
    title: productData.title,
    model: 'HK-D043T-M',
    price: parseFloat(productData.price.replace('AED ', '')),
    originalPrice: parseFloat(productData.price.replace('AED ', '')) + 100,
    currency: 'AED',
    rating: 4.5,
    reviewCount: 248,
    inStock: true,
    stockCount: 15,
    description: productData.description,
    shortDescription: 'Professional-grade indoor security camera with AI detection and 360° coverage.',
    images: [
      productData.image,
      '/lovable-uploads/93884ddd-968b-4141-9b42-679a47cec058.png',
      '/lovable-uploads/f660607b-ef50-41a1-b87a-975b48a72e02.png',
    ],
    features: productData.features.map((feature, index) => ({
      icon: [Camera, Wifi, Eye, Shield, Smartphone, HardDrive][index % 6],
      title: feature,
      description: `${feature} feature for enhanced security`,
    })),
    specifications: {
      'Image Sensor': '1/2.8″ 3.0MP CMOS',
      Resolution: '2304×1296',
      'Minimum Illumination': '0.01Lux/F1.2',
      'Video Resolution': 'Main: 2304*1296, Sub: 800*448',
      Compression: 'H.264/H.265',
      'Frame Rate': '15fps',
      'Pan Range': 'Horizontal 355°',
      'Tilt Range': 'Vertical 45°',
      'Night Vision': 'IR & White Light Support',
      Storage: 'TF Card (max 256G) + Cloud',
      WiFi: '2.4G WiFi Support',
      Power: 'DC 5V=2A',
      'Working Temperature': '-10~55℃',
    },
    applications: [
      { title: 'Indoor Monitoring', description: 'Perfect for home surveillance' },
      { title: 'Baby Monitoring', description: 'Keep an eye on your little ones' },
      { title: 'Office Security', description: 'Professional workspace monitoring' },
      { title: 'Pet Monitoring', description: 'Watch your pets when away' },
    ],
    highlights: [
      'Two-way audio communication',
      '355° horizontal & 45° vertical rotation',
      'H.264/H.265 encoding',
      'Mobile app push notifications',
      'Auto-tracking technology',
      'Cloud storage compatible',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-slate-900/90 shadow-2xl border-b border-slate-700/50 z-10">
        <Navigation />
      </div>
      <div
        className="min-h-screen bg-background flex-1"
        style={{
          transform: 'scale(0.75)',
          transformOrigin: 'top center',
          width: '100%',
          minHeight: '100%',
          overflow: 'hidden'
        }}
      >
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <Button variant="ghost" onClick={() => navigate(-1)} className="w-fit">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <nav className="text-sm text-gray-500">
                <span>Home</span> / <span>Products</span> /{' '}
                <span className="text-gray-900 font-medium">{product.title}</span>
              </nav>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              <ImageGallery
                images={product.images}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
              <ProductInfo />
            </div>
            <Card className="shadow-sm">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <CardHeader className="pb-0">
                  <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4">
                    <TabsTrigger value="overview" className="text-xs sm:text-sm">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="features" className="text-xs sm:text-sm">
                      Features
                    </TabsTrigger>
                    <TabsTrigger value="specs" className="text-xs sm:text-sm">
                      Specifications
                    </TabsTrigger>
                    <TabsTrigger value="applications" className="text-xs sm:text-sm hidden lg:block">
                      Applications
                    </TabsTrigger>
                  </TabsList>
                </CardHeader>
                <CardContent className="pt-6">
                  <TabsContent value="overview" className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Product Highlights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                            <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="features" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <feature.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="specs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg"
                        >
                          <span className="font-medium text-gray-900">{key}</span>
                          <span className="text-gray-600 text-sm text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="applications">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {product.applications.map((app, index) => (
                        <div key={index} className="p-6 border rounded-xl hover:shadow-md transition-shadow">
                          <h4 className="font-semibold text-lg text-gray-900 mb-2">{app.title}</h4>
                          <p className="text-gray-600">{app.description}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </CardContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;