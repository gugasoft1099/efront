'use client';

import { Heart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useWishlistStore } from '@/lib/store/wishlist';
import { useCartStore } from '@/lib/store/cart';
import { products } from '@/lib/data/products';
import ProductCard from '@/components/ProductCard';
import toast from 'react-hot-toast';

export default function WishlistPage() {
  const { items: wishlistItems, removeItem, isInWishlist } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);

  const wishlistProducts = products.filter((p) => wishlistItems.includes(p.id));

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

  const handleRemoveFromWishlist = (productId: string) => {
    removeItem(productId);
    toast.success('Removed from wishlist');
  };

  if (wishlistProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <Heart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h1>
          <p className="text-gray-600 mb-8">
            Start adding products you love to your wishlist
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
        <p className="text-gray-600">{wishlistProducts.length} items</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
            onAddToWishlist={() => handleRemoveFromWishlist(product.id)}
          />
        ))}
      </div>
    </div>
  );
}
