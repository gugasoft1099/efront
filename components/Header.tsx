'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart';
import { useWishlistStore } from '@/lib/store/wishlist';
import { useUserStore } from '@/lib/store/user';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const totalItems = useCartStore((state) => state.getTotalItems());
  const wishlistItems = useWishlistStore((state) => state.items.length);
  const { isAuthenticated, user, logout } = useUserStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
            ✨ eFront
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands..."
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </form>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Shop
            </Link>
            <Link href="/wishlist" className="relative text-gray-700 hover:text-blue-600 transition group">
              <Heart className="h-6 w-6 group-hover:scale-110 transition-transform" />
              {wishlistItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse shadow-lg">
                  {wishlistItems}
                </span>
              )}
            </Link>
            <Link href="/cart" className="relative text-gray-700 hover:text-blue-600 transition group">
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse shadow-lg">
                  {totalItems}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
                  <User className="h-6 w-6" />
                  <span className="text-sm font-medium">{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform group-hover:translate-y-1">
                  <Link href="/account" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-t-xl transition">
                    My Account
                  </Link>
                  <Link href="/account/orders" className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition">
                    Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-b-xl transition"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/account/login" className="text-gray-700 hover:text-blue-600 transition">
                <User className="h-6 w-6 hover:scale-110 transition-transform" />
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </form>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/shop" className="block text-gray-700 hover:text-blue-600">
              Shop
            </Link>
            <Link href="/wishlist" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Heart className="h-5 w-5" />
              <span>Wishlist ({wishlistItems})</span>
            </Link>
            <Link href="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart ({totalItems})</span>
            </Link>
            {isAuthenticated ? (
              <>
                <Link href="/account" className="block text-gray-700 hover:text-blue-600">
                  My Account
                </Link>
                <Link href="/account/orders" className="block text-gray-700 hover:text-blue-600">
                  Orders
                </Link>
                <button onClick={logout} className="block text-gray-700 hover:text-blue-600">
                  Logout
                </button>
              </>
            ) : (
              <Link href="/account/login" className="block text-gray-700 hover:text-blue-600">
                Login / Register
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
