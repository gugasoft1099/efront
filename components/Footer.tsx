import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-white text-2xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">✨ eFront</h3>
            <p className="text-sm leading-relaxed">
              Your one-stop shop for quality products at great prices. We deliver happiness to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/shop" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/shipping" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  → Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4 leading-relaxed">Subscribe to get special offers and updates.</p>
            <form className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 text-sm bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
              >
                <Mail className="h-4 w-4" />
              </button>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110 transition-transform">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110 transition-transform">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors transform hover:scale-110 transition-transform">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">eFront</span>. All rights reserved. Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
