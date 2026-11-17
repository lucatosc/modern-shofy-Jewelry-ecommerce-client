# Zaibaraish Jewelry - Full Stack eCommerce Web Application + Admin Panel

Zaibaraish Jewelry (zaibaraish.pk) is a powerful and modern full stack eCommerce web application built using Next.js, Express.js, MongoDB with Mongoose, Redux Toolkit, RTK Query, Bootstrap 5, and Sass. It includes a feature-rich admin panel for easy management and control of your online store.

## Features Overview

- **Next.js:** Next.js is The React Framework for Production, providing a fast and scalable foundation for your eCommerce website.
- **Express.js:** Express.js is a minimal and flexible Node.js web application framework that offers a robust set of features for web and mobile applications.
- **MongoDB:** MongoDB is a developer-friendly data platform that provides the services and tools necessary to build distributed applications at scale.
- **Mongoose:** Mongoose provides a straightforward, schema-based solution to model your application data, offering built-in type casting, validation, and query building.
- **Nodemailer:** Nodemailer is a module for Node.js applications that facilitates easy email sending, keeping your users informed and engaged.
- **Authentication:** Zaibaraish includes features for Google login, user registration, email verification, forgot password, reset password, and profile updates.
- **Redux Toolkit:** Manage state effortlessly with Redux Toolkit, providing a convenient and efficient way to handle state in your application.
- **RTK Query:** RTK Query is a powerful data fetching and caching tool, ensuring efficient data retrieval for a smoother user experience.
- **Form Validation:** Ensure data accuracy and consistency with form validation capabilities.
- **Bootstrap 5 (latest Version) Framework:** Bootstrap is a popular HTML, CSS, and JS framework for responsive, mobile-first projects.
- **Responsive Layout Design:** Zaibaraish is fully responsive across all devices, providing a seamless experience for your customers.
- **Touch Friendly:** The web application is designed for easy browsing on touch devices, making it accessible to a wide range of users.

## Full Features List

- **React JS:** Utilize the power of React.js to create dynamic and interactive user interfaces.
- **Next.js:** The React Framework for Production, optimizing your web application's performance.
- **Express.js:** Create a robust backend for your eCommerce website using Express.js.
- **MongoDB:** Store and retrieve data efficiently with the flexibility and scalability of MongoDB.
- **Mongoose:** Model your application data effortlessly with Mongoose's schema-based solution.
- **Nodemailer:** Keep your users informed with easy email sending capabilities.
- **Authentication:** Enable secure user registration, login, and profile updates, including Google login option.
- **Redux Toolkit:** Efficiently manage state in your application with Redux Toolkit.
- **Dynamic Routes:** Create dynamic and user-friendly URLs for enhanced navigation.
- **Based on Bootstrap 5.x:** Utilize the latest version of Bootstrap for responsive and customizable design elements.
- **Logo Slider Integration:** Showcase your brand and products with a logo slider.
- **Sticky Header:** Improve user navigation with a sticky header that remains visible as users scroll.
- **Google Fonts:** Access a wide range of fonts from Google Fonts for creative typography.
- **100% Responsive:** Ensure a seamless experience on all devices with a fully responsive layout.
- **Clean and Commented Code:** Maintainable and well-organized code for easy customization.
- **Customizable Components:** Tailor the components of each page to match your brand identity.
- **Integrated with FontAwesome:** Utilize FontAwesome icons to enhance the visual appeal of your website.
- **Multiple Home Pages:** Choose from a variety of home page designs to best suit your business.
- **Inner Pages:** Access a range of inner pages for various sections of your eCommerce website.
- **Image Background:** Customize page backgrounds with visually appealing images.
- **Flexible and Multi-Purpose:** Zaibaraish is versatile and can be adapted to various eCommerce niches.
- **Valid CSS3:** Comply with modern CSS standards for a better user experience.
- **Detailed Documentation:** Access comprehensive documentation for easy development and setup.

## Powerful Additional Features

- **All E-commerce Features and Apps Included:** Zaibaraish provides a comprehensive eCommerce solution with all the essential features and apps needed for a successful online store.
- **Variation Swatch:** Create clean and professional product pages with variation swatches that capture your customer's attention and allow easy selection of product variations.
- **Filter Variations, Pagination, Filters by Size & Color:** Improve user experience and boost conversion rates by reducing the time needed for customers to complete their orders through filtering options and pagination.
- **Video Gallery:** Offer customers a detailed view of products with an engaging video gallery that showcases products from different angles or in use.
- **Sale Countdown Timer:** Increase sales and engagement for special occasions or limited-time offers with sale countdown timers that create a sense of urgency for shoppers.
- **Product Quick View:** Enable customers to view product details without leaving their current page, providing a convenient and efficient shopping experience.
- **Quantity Select:** Provide users with two options for selecting product quantities: a dropdown select box or manual input for more flexibility.
- **Google and Email Password-based Authentication:** Secure user accounts with authentication methods, including Google login and email-based password authentication.
- **User Profile and Information Update:** Allow users to update their profile information, ensuring accurate and up-to-date data for future interactions.
- **Payment Options for Pakistan:** Cash on Delivery (COD) works out of the box, with Safepay.pk (JazzCash/Easypaisa/cards) wired in on the backend for when merchant credentials are available.

## Configuration

Copy `.env.local.example` to `.env.local` and configure:

| Variable | Purpose | Local default |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Base URL (incl. `/api`) of the backend API | `http://localhost:5000/api` |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used in SEO/meta tags | `https://zaibaraish.pk` |
| `NEXT_PUBLIC_STRIPE_KEY` | Optional Stripe publishable key; leave blank to disable card checkout via Stripe | _(blank)_ |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Optional Google OAuth client ID; leave blank to disable "Sign in with Google" | _(blank)_ |

## Installation and Usage

To get started with Zaibaraish, follow these steps:

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables (see above).

4. Build the project:

   ```bash
   npm run build
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

6. Access the application at the specified URL (defaults to `http://localhost:3000`).

## Running the full stack locally

This storefront pairs with two sibling repos: `zaibaraish-backend` (Express + MongoDB
API) and `zaibaraish-admin` (Next.js admin panel). All three run locally on different
ports, backed by a local MongoDB.

| Service | Repo | Port | Start command |
| --- | --- | --- | --- |
| MongoDB | — (Docker) | 27017 | `docker run -d --name zaibaraish-mongo -p 27017:27017 -v zaibaraish-mongo-data:/data/db mongo:7` |
| Backend API | `zaibaraish-backend` | 5000 | `npm run dev` |
| Admin panel | `zaibaraish-admin` | 3001 | `npm run dev -- -p 3001` |
| Storefront (this repo) | `modern-shofy-Jewelry-ecommerce-client` | 3000 | `npm run dev` |

Startup order:

1. **MongoDB** — start the Docker container above (skip if it already exists; just
   `docker start zaibaraish-mongo`).
2. **Backend** — in `zaibaraish-backend`, copy `.env.example` to `.env` and set
   `MONGODB_URI=mongodb://localhost:27017/zaibaraish`, `CLIENT_URL=http://localhost:3000`,
   `ADMIN_URL=http://localhost:3001`. Then:
   ```bash
   npm install
   npm run seed   # one-time: creates the admin user + sample catalog
   npm run dev    # http://localhost:5000
   ```
3. **Admin panel** — in `zaibaraish-admin`, ensure `.env.local` has
   `NEXT_PUBLIC_API_URL=http://localhost:5000/api`. Then:
   ```bash
   npm install
   npm run dev -- -p 3001   # http://localhost:3001
   ```
   Sign in with the seed admin credentials (`SEED_ADMIN_EMAIL`/`SEED_ADMIN_PASSWORD`
   from the backend's `.env`, defaulting to `admin@zaibaraish.pk` / `Admin@12345`).
4. **Storefront** — in this repo, copy `.env.local.example` to `.env.local` (defaults
   already point at `http://localhost:5000/api`). Then:
   ```bash
   npm install
   npm run dev   # http://localhost:3000
   ```

### Known integration gap (backend-side)

Verified locally: the storefront home page, login/signup, and the admin dashboard all
work end-to-end against the local backend. Two backend/seed gaps were found that are
**not** storefront bugs:

- The storefront's jewelry homepage sections call `GET /product/:type` with
  `type=jewelry` (and `fashion`/`beauty`/`electronics` for the other demo themes) to
  group products by storefront "niche", the same convention the rest of the existing
  RTK Query code already relies on. The current seed script only tags products with
  badge-style `type` values (`best-seller`, `new-arrival`, `featured`), so those
  homepage sections show "No Products found!" until the backend seeds/stores a
  `type: "jewelry"` value (as well as badge values) on products.
- The product detail pages call `product.category.name` (and several components filter
  on `category.name`), but the backend's `Category` model exposes the display name as
  `parent` instead of `name`, which throws a runtime error on `/product-details/[id]`.
  This is a schema/contract mismatch in `zaibaraish-backend`'s Category model, not a
  storefront issue — the storefront's `category.name` usage matches the API contract
  the client code was already built against.

## Sources and Credits

- Twitter Bootstrap
- Swiper Slider
- Google Fonts
- Free Font Awesome Icons by Fontawesome

## Thank You for Choosing Zaibaraish!

We hope you find Zaibaraish to be a powerful and effective solution for your eCommerce needs. Should you encounter any issues or have any questions, please feel free to reach out to our support team at support@zaibaraish.pk. Happy selling!