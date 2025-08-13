import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ShoppingCart, Heart, Share2, Eye, Wifi, Battery, Camera, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Sample product data - in real app, this would come from API
  const product = {
    id: 1,
    title: '3MP WiFi Indoor HD 2K 3K PT Camera',
    model: 'HK-D043T-M',
    price: 'AED 299',
    originalPrice: 'AED 399',
    description: 'Advanced indoor security camera with pan & tilt functionality, featuring 3MP resolution, AI human detection, and two-way audio communication.',
    images: [
      '/lovable-uploads/f660607b-ef50-41a1-b87a-975b48a72e02.png',
      '/lovable-uploads/27013d73-d3b8-474f-8231-75b7092adcca.png',
      '/lovable-uploads/93884ddd-968b-4141-9b42-679a47cec058.png'
    ],
    features: [
      '1/2.8″ 3.0MP CMOS Sensor',
      'Two-way audio communication',
      'IR night vision up to 10M',
      'TF card storage (max 256G)',
      'Human detection & auto tracking',
      'Mobile app push notifications',
      '355° horizontal & 45° vertical rotation',
      'H.264/H.265 encoding'
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
    applications: ['Indoor monitoring', 'Home security', 'Office surveillance', 'Baby monitoring']
  };

  const handleAddToCart = () => {
    // Add to cart logic
    console.log(`Added ${quantity} units to cart`);
  };

  const handleBuyNow = () => {
    // Direct purchase logic
    console.log('Proceeding to checkout');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <nav className="text-sm text-muted-foreground">
              <span>Home</span> / <span>Products</span> / <span className="text-foreground">{product.title}</span>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl bg-muted/20">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                  25% OFF
                </Badge>
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

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">{product.model}</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {product.title}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                <Badge variant="destructive">Save 25%</Badge>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Camera className="h-5 w-5 text-primary" />
                  <span className="text-sm">3MP Resolution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wifi className="h-5 w-5 text-primary" />
                  <span className="text-sm">WiFi Enabled</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-primary" />
                  <span className="text-sm">Night Vision</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">Motion Detection</span>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label htmlFor="quantity" className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-muted transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button
                    onClick={handleBuyNow}
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Buy Now
                  </Button>
                </div>

                <div className="flex items-center justify-center space-x-6 pt-4">
                  <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">Add to Wishlist</span>
                  </button>
                  <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            <Card className="shadow-custom">
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card className="shadow-custom">
              <CardHeader>
                <CardTitle>Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {product.applications.map((app, index) => (
                    <div
                      key={index}
                      className="p-4 bg-muted/30 rounded-lg text-center hover:bg-primary/10 transition-colors"
                    >
                      <span className="text-sm font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Specifications */}
          <Card className="mt-8 shadow-custom">
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0"
                  >
                    <span className="font-medium text-foreground">{key}:</span>
                    <span className="text-muted-foreground text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;