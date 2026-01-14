# eFront - Modern E-Commerce Frontend

A beautiful, modern e-commerce frontend built with Next.js 15, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)

## Features

- ✨ **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- 🛍️ **Complete Shopping Experience**: Browse, search, filter, and purchase products
- 🛒 **Shopping Cart**: Add items, update quantities, apply coupons
- ❤️ **Wishlist**: Save favorite items for later
- 👤 **User Accounts**: Login/register with order history
- 📦 **Order Management**: Complete checkout flow with order tracking
- 🔍 **Advanced Filtering**: Search, category, brand, price range, and rating filters
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile
- 💾 **Persistent State**: Cart, wishlist, and user data saved to localStorage
- 🎨 **Product Variants**: Color and size selection support
- 🔔 **Toast Notifications**: User-friendly feedback messages

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand with localStorage persistence
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gugasoft1099/efront.git
cd efront
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
efront/
├── app/                    # Next.js App Router pages
│   ├── account/           # User account pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   ├── product/           # Product details
│   ├── shop/              # Product catalog
│   ├── wishlist/          # Wishlist
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── lib/                   # Utilities and data
│   ├── data/             # Mock data
│   │   └── products.ts
│   └── store/            # Zustand stores
│       ├── cart.ts
│       ├── wishlist.ts
│       ├── user.ts
│       └── orders.ts
└── public/               # Static assets
```

## Pages & Features

### Home Page (`/`)
- Hero section with CTA
- Category showcase
- Featured products
- Newsletter signup

### Shop Page (`/shop`)
- Product grid/list view toggle
- Search functionality
- Filters: category, brand, price range, rating
- Sorting options
- Responsive filters sidebar

### Product Details (`/product/[slug]`)
- Image gallery
- Product information
- Color/size variant selection
- Quantity selector
- Add to cart/wishlist
- Product specifications

### Cart (`/cart`)
- Item list with images
- Quantity adjustment
- Remove items
- Coupon code application (Try: `SAVE10` or `SAVE20`)
- Order summary with totals
- Proceed to checkout

### Checkout (`/checkout`)
- Multi-step checkout flow:
  1. Shipping address
  2. Shipping method selection
  3. Payment information (UI only)
- Order summary sidebar
- Form validation

### Order Success (`/checkout/success`)
- Order confirmation
- Order details
- Shipping address
- Links to order history

### Wishlist (`/wishlist`)
- Saved products
- Add to cart from wishlist
- Remove from wishlist

### Account Section
- **Login/Register** (`/account/login`): Fake authentication
- **Account Dashboard** (`/account`): Profile overview
- **Order History** (`/account/orders`): Past orders with status

## Mock Data

The application uses mock data for:
- Products (12 sample products across 6 categories)
- Categories
- Orders

Try these coupon codes at checkout:
- `SAVE10` - 10% discount
- `SAVE20` - 20% discount

## State Management

The app uses Zustand for state management with localStorage persistence:

- **Cart Store**: Shopping cart items
- **Wishlist Store**: Favorited products
- **User Store**: Authentication state
- **Order Store**: Order history

## Authentication

The app includes a fake authentication system for demo purposes. You can:
- Register with any email/password
- Login with any credentials
- View account dashboard
- Track orders

**Note**: No real authentication or backend API is used.

## Payment

The checkout process includes a payment form UI, but **no real payment processing** occurs. This is a frontend-only demonstration.

## SEO

Basic SEO metadata is included in page layouts using Next.js Metadata API.

## Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a demonstration project. Feel free to fork and customize for your needs.

## License

ISC

## Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [Lucide React](https://lucide.dev)
- Built with [Next.js](https://nextjs.org)

---

Made with ❤️ by eFront Team
