'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Shield, Truck } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/data/products';
import { useCartStore } from '@/lib/store/cart';
import { useWishlistStore } from '@/lib/store/wishlist';
import toast from 'react-hot-toast';

export default function Home() {
  const addItem = useCartStore((state) => state.addItem);
  const { addItem: addToWishlist, isInWishlist } = useWishlistStore();

  const featuredProducts = products.filter((p) => p.featured);

  const handleAddToCart = (product: typeof products[0]) => {
    if (!product.inStock) {
      toast.error('Product is out of stock');
      return;
    }
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images[0],
    });
    toast.success('Added to cart!');
  };

  const handleAddToWishlist = (productId: string, productName: string) => {
    if (isInWishlist(productId)) {
      toast('Already in wishlist');
    } else {
      addToWishlist(productId);
      toast.success('Added to wishlist!');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRINDB2NGgtNHYtNHptMCAwdi00aDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">eFront</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-50 max-w-2xl mx-auto leading-relaxed">
              Discover amazing products at unbeatable prices. Shop the latest trends in electronics, fashion, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/shop?featured=true"
                className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold hover:bg-white/20 transition-all border-2 border-white/30 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Featured Products
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all card-hover">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl">
                <Truck className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all card-hover">
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-2xl">
                <Shield className="h-7 w-7 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all card-hover">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-2xl">
                <TrendingUp className="h-7 w-7 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Best Prices</h3>
                <p className="text-sm text-gray-600">Competitive pricing guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Shop by Category</h2>
              <p className="text-gray-600 mt-2">Explore our wide range of products</p>
            </div>
            <Link href="/shop" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/shop?category=${category.slug}`}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 shadow-lg group-hover:shadow-2xl transition-all card-hover">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-center font-bold text-gray-900 group-hover:text-blue-600 transition">
                  {category.name}
                </h3>
                <p className="text-center text-sm text-gray-500 font-medium">{category.productCount} products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Featured Products</h2>
              <p className="text-gray-600 mt-2">Handpicked just for you</p>
            </div>
            <Link href="/shop?featured=true" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
                onAddToWishlist={() => handleAddToWishlist(product.id, product.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRINDB2NGgtNHYtNHptMCAwdi00aDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-xl mb-10 text-pink-50 max-w-2xl mx-auto">
            Get exclusive deals, early access to sales, and special offers delivered straight to your inbox
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl"
            />
            <button
              type="submit"
              className="px-10 py-4 bg-white text-purple-600 rounded-2xl font-bold hover:bg-pink-50 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
