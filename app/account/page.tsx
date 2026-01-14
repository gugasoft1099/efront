'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { User, Mail, Package } from 'lucide-react';
import { useUserStore } from '@/lib/store/user';

export default function AccountPage() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useUserStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/account/login');
    }
  }, [isAuthenticated, router]);

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="md:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="text-center mb-6">
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4"
                />
              ) : (
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-12 w-12 text-blue-600" />
                </div>
              )}
              <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-gray-600 flex items-center justify-center mt-2">
                <Mail className="h-4 w-4 mr-2" />
                {user.email}
              </p>
            </div>
            <button
              onClick={logout}
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Account Actions */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/account/orders"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition group"
            >
              <Package className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">My Orders</h3>
              <p className="text-gray-600">View and track your orders</p>
            </Link>
            <Link
              href="/wishlist"
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition group"
            >
              <svg
                className="h-12 w-12 text-red-500 mb-4 group-hover:scale-110 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wishlist</h3>
              <p className="text-gray-600">View your saved items</p>
            </Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/shop" className="block text-blue-600 hover:text-blue-700">
                Continue Shopping →
              </Link>
              <Link href="/cart" className="block text-blue-600 hover:text-blue-700">
                View Cart →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
