export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  images: string[];
  inStock: boolean;
  featured: boolean;
  variants?: {
    colors?: { name: string; value: string; inStock: boolean }[];
    sizes?: { name: string; inStock: boolean }[];
  };
  specifications?: { label: string; value: string }[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
    productCount: 156,
  },
  {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    productCount: 234,
  },
  {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=300&fit=crop',
    productCount: 89,
  },
  {
    id: '4',
    name: 'Sports',
    slug: 'sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
    productCount: 127,
  },
  {
    id: '5',
    name: 'Books',
    slug: 'books',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop',
    productCount: 312,
  },
  {
    id: '6',
    name: 'Beauty',
    slug: 'beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
    productCount: 178,
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise Cancelling Headphones',
    slug: 'wireless-noise-cancelling-headphones',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and exceptional sound quality. Perfect for travel, work, or leisure.',
    price: 299.99,
    originalPrice: 399.99,
    category: 'Electronics',
    brand: 'SoundPro',
    rating: 4.8,
    reviews: 342,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop',
    ],
    inStock: true,
    featured: true,
    variants: {
      colors: [
        { name: 'Black', value: '#000000', inStock: true },
        { name: 'Silver', value: '#C0C0C0', inStock: true },
        { name: 'Blue', value: '#0066CC', inStock: false },
      ],
    },
    specifications: [
      { label: 'Battery Life', value: '30 hours' },
      { label: 'Bluetooth', value: '5.0' },
      { label: 'Weight', value: '250g' },
      { label: 'Warranty', value: '2 years' },
    ],
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    slug: 'smart-watch-pro',
    description: 'Advanced smartwatch with health tracking, GPS, and 7-day battery life. Track your fitness goals and stay connected on the go.',
    price: 449.99,
    category: 'Electronics',
    brand: 'TechWear',
    rating: 4.6,
    reviews: 289,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop',
    ],
    inStock: true,
    featured: true,
    variants: {
      colors: [
        { name: 'Black', value: '#000000', inStock: true },
        { name: 'Rose Gold', value: '#B76E79', inStock: true },
        { name: 'Silver', value: '#C0C0C0', inStock: true },
      ],
      sizes: [
        { name: '40mm', inStock: true },
        { name: '44mm', inStock: true },
      ],
    },
  },
  {
    id: '3',
    name: 'Leather Messenger Bag',
    slug: 'leather-messenger-bag',
    description: 'Handcrafted genuine leather messenger bag with multiple compartments. Perfect for work or travel with a timeless design.',
    price: 189.99,
    originalPrice: 249.99,
    category: 'Fashion',
    brand: 'LeatherCo',
    rating: 4.7,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&h=800&fit=crop',
    ],
    inStock: true,
    featured: true,
    variants: {
      colors: [
        { name: 'Brown', value: '#8B4513', inStock: true },
        { name: 'Black', value: '#000000', inStock: true },
        { name: 'Tan', value: '#D2B48C', inStock: false },
      ],
    },
  },
  {
    id: '4',
    name: 'Premium Running Shoes',
    slug: 'premium-running-shoes',
    description: 'Lightweight running shoes with advanced cushioning and breathable mesh. Designed for comfort and performance.',
    price: 129.99,
    category: 'Sports',
    brand: 'RunMax',
    rating: 4.5,
    reviews: 421,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop',
    ],
    inStock: true,
    featured: true,
    variants: {
      colors: [
        { name: 'White', value: '#FFFFFF', inStock: true },
        { name: 'Black', value: '#000000', inStock: true },
        { name: 'Blue', value: '#0066CC', inStock: true },
      ],
      sizes: [
        { name: 'US 8', inStock: true },
        { name: 'US 9', inStock: true },
        { name: 'US 10', inStock: true },
        { name: 'US 11', inStock: false },
      ],
    },
  },
  {
    id: '5',
    name: 'Ergonomic Office Chair',
    slug: 'ergonomic-office-chair',
    description: 'Premium ergonomic office chair with lumbar support and adjustable armrests. Designed for all-day comfort.',
    price: 349.99,
    category: 'Home & Garden',
    brand: 'ComfortSeating',
    rating: 4.9,
    reviews: 178,
    images: [
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop',
    ],
    inStock: true,
    featured: false,
    variants: {
      colors: [
        { name: 'Black', value: '#000000', inStock: true },
        { name: 'Gray', value: '#808080', inStock: true },
      ],
    },
  },
  {
    id: '6',
    name: 'Modern Table Lamp',
    slug: 'modern-table-lamp',
    description: 'Minimalist table lamp with touch controls and adjustable brightness. Perfect for any room.',
    price: 79.99,
    category: 'Home & Garden',
    brand: 'LightHouse',
    rating: 4.4,
    reviews: 92,
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop',
    ],
    inStock: true,
    featured: false,
  },
  {
    id: '7',
    name: 'Wireless Gaming Mouse',
    slug: 'wireless-gaming-mouse',
    description: 'High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.',
    price: 89.99,
    originalPrice: 119.99,
    category: 'Electronics',
    brand: 'GamePro',
    rating: 4.7,
    reviews: 267,
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop',
    ],
    inStock: true,
    featured: false,
    variants: {
      colors: [
        { name: 'Black', value: '#000000', inStock: true },
        { name: 'White', value: '#FFFFFF', inStock: true },
      ],
    },
  },
  {
    id: '8',
    name: 'Classic Denim Jacket',
    slug: 'classic-denim-jacket',
    description: 'Timeless denim jacket made from premium quality fabric. A wardrobe essential.',
    price: 99.99,
    category: 'Fashion',
    brand: 'UrbanStyle',
    rating: 4.6,
    reviews: 134,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop',
    ],
    inStock: true,
    featured: false,
    variants: {
      sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: false },
      ],
    },
  },
  {
    id: '9',
    name: 'Skincare Gift Set',
    slug: 'skincare-gift-set',
    description: 'Complete skincare routine set with cleanser, toner, serum, and moisturizer. Natural ingredients.',
    price: 149.99,
    category: 'Beauty',
    brand: 'NaturalGlow',
    rating: 4.8,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=800&fit=crop',
    ],
    inStock: true,
    featured: true,
  },
  {
    id: '10',
    name: 'Bestseller Fiction Novel',
    slug: 'bestseller-fiction-novel',
    description: 'Gripping thriller that will keep you on the edge of your seat. Award-winning author.',
    price: 24.99,
    category: 'Books',
    brand: 'PageTurner Books',
    rating: 4.9,
    reviews: 1243,
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=800&fit=crop',
    ],
    inStock: true,
    featured: false,
  },
  {
    id: '11',
    name: 'Yoga Mat Pro',
    slug: 'yoga-mat-pro',
    description: 'Extra thick yoga mat with superior grip and cushioning. Eco-friendly materials.',
    price: 59.99,
    category: 'Sports',
    brand: 'YogaLife',
    rating: 4.5,
    reviews: 189,
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop',
    ],
    inStock: true,
    featured: false,
    variants: {
      colors: [
        { name: 'Purple', value: '#800080', inStock: true },
        { name: 'Blue', value: '#0066CC', inStock: true },
        { name: 'Green', value: '#00AA00', inStock: true },
      ],
    },
  },
  {
    id: '12',
    name: '4K Webcam',
    slug: '4k-webcam',
    description: 'Professional 4K webcam with autofocus and built-in microphone. Perfect for streaming and video calls.',
    price: 199.99,
    category: 'Electronics',
    brand: 'CamPro',
    rating: 4.7,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=800&h=800&fit=crop',
    ],
    inStock: true,
    featured: false,
  },
];

export const getBrands = (): string[] => {
  return Array.from(new Set(products.map(p => p.brand))).sort();
};

export const getPriceRanges = () => [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: '$200 - $500', min: 200, max: 500 },
  { label: 'Over $500', min: 500, max: Infinity },
];
