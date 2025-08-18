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
  Moon,
  Smartphone,
  HardDrive
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Sample product data
  const product = {
    id: 1,
    title: '3MP WiFi Indoor HD 2K 3K PT Camera',
    model: 'HK-D043T-M',
    price: 299,
    originalPrice: 399,
    currency: 'AED',
    rating: 4.5,
    reviewCount: 248,
    inStock: true,
    stockCount: 15,
    description: 'Advanced indoor security camera with pan & tilt functionality, featuring 3MP resolution, AI human detection, and two-way audio communication for comprehensive home monitoring.',
    shortDescription: 'Professional-grade indoor security camera with AI detection and 360° coverage.',
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&h=600&fit=crop'
    ],
    features: [
      {
        icon: Camera,
        title: '3MP Ultra HD',
        description: '1/2.8″ 3.0MP CMOS Sensor for crystal clear footage'
      },
      {
        icon: Wifi,
        title: 'WiFi Connectivity',
        description: '2.4G WiFi support with stable connection'
      },
      {
        icon: Eye,
        title: 'Night Vision',
        description: 'IR night vision up to 10M range'
      },
      {
        icon: Shield,
        title: 'AI Detection',
        description: 'Human detection with auto tracking'
      },
      {
        icon: Smartphone,
        title: 'Mobile App',
        description: 'Real-time monitoring via smartphone app'
      },
      {
        icon: HardDrive,
        title: 'Storage Options',
        description: 'TF card (max 256G) + cloud storage'
      }
    ],
    specifications: {
      'Image Sensor': '1/2.8″ 3.0MP CMOS',
      'Resolution': '2304×1296',
      'Minimum Illumination': '0.01Lux/F1.2',
      'Video Resolution': 'Main: 2304*1296, Sub: 800*448',
      'Compression': 'H.264/H.265',
      'Frame Rate': '15fps',
      'Pan Range': 'Horizontal 355°',
      'Tilt Range': 'Vertical 45°',
      'Night Vision': 'IR & White Light Support',
      'Storage': 'TF Card (max 256G) + Cloud',
      'WiFi': '2.4G WiFi Support',
      'Power': 'DC 5V=2A',
      'Working Temperature': '-10~55℃'
    },
    applications: [
      { title: 'Indoor Monitoring', description: 'Perfect for home surveillance' },
      { title: 'Baby Monitoring', description: 'Keep an eye on your little ones' },
      { title: 'Office Security', description: 'Professional workspace monitoring' },
      { title: 'Pet Monitoring', description: 'Watch your pets when away' }
    ],
    highlights: [
      'Two-way audio communication',
      '355° horizontal & 45° vertical rotation',
      'H.264/H.265 encoding',
      'Mobile app push notifications',
      'Auto-tracking technology',
      'Cloud storage compatible'
    ]
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, Math.min(10, quantity + change)));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} units to cart`);
  };

  const handleBuyNow = () => {
    console.log('Proceeding to checkout');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          {/* Enhanced Breadcrumb */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 p-4 bg-gradient-card rounded-xl shadow-soft">
            <div className="flex items-center mb-4 sm:mb-0">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mr-4 hover:bg-primary/10 hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Button>
              <nav className="text-sm text-muted-foreground">
                <span className="hover:text-primary cursor-pointer transition-colors">Home</span> 
                <span className="mx-2">/</span> 
                <span className="hover:text-primary cursor-pointer transition-colors">Products</span> 
                <span className="mx-2">/</span> 
                <span className="text-foreground font-medium">{product.title}</span>
              </nav>
            </div>
            <Badge className="bg-gradient-primary text-primary-foreground shadow-glow">
              Free UAE Delivery
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enhanced Product Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl bg-gradient-card shadow-large">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground shadow-glow animate-pulse">
                  25% OFF
                </Badge>
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-2">
                  <span className="text-xs font-medium text-foreground">High Quality 3MP</span>
                </div>
              </div>
              
              {/* Image Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary shadow-glow'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} view ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

  const ProductInfo = () => (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">{product.model}</Badge>
          {product.inStock ? (
            <Badge className="bg-green-100 text-green-800 text-xs">In Stock</Badge>
          ) : (
            <Badge variant="destructive" className="text-xs">Out of Stock</Badge>
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
          {product.title}
        </h1>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>
        
        <p className="text-gray-600 text-base leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Pricing */}
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

      {/* Quick Features */}
      <div className="grid grid-cols-2 gap-3">
        {product.features.slice(0, 4).map((feature, index) => (
          <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
            <feature.icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-700 truncate">
              {feature.title}
            </span>
          </div>
        ))}
      </div>

      {/* Purchase Options */}
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

                {/* Trust Badges */}
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

        {/* Action Buttons */}
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

        {/* Guarantees */}
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Breadcrumb */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="w-fit"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <nav className="text-sm text-gray-500">
              <span>Home</span> / <span>Products</span> / <span className="text-gray-900 font-medium">{product.title}</span>
            </nav>
          </div>

          {/* Main Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <ImageGallery />
            <ProductInfo />
          </div>

          {/* Detailed Information Tabs */}
          <Card className="shadow-sm">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <CardHeader className="pb-0">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4">
                  <TabsTrigger value="overview" className="text-xs sm:text-sm">Overview</TabsTrigger>
                  <TabsTrigger value="features" className="text-xs sm:text-sm">Features</TabsTrigger>
                  <TabsTrigger value="specs" className="text-xs sm:text-sm">Specifications</TabsTrigger>
                  <TabsTrigger value="applications" className="text-xs sm:text-sm hidden lg:block">Applications</TabsTrigger>
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
                      <div key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
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

      <Footer />
    </div>
  );
};

export default ProductDetail;