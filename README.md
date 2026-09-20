# Velora Gold & Diamonds

A polished static luxury jewellery showcase built with React, Vite, Tailwind CSS, Framer Motion, Lucide icons, and React Helmet Async.

## 1. Terminal setup

```bash
cd ~/Desktop/Ahmads
npm create vite@latest gold-jewellery-store -- --template react
cd gold-jewellery-store
npm install
npm install lucide-react framer-motion react-helmet-async
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npm run dev
```

The design tokens and Tailwind content paths are already set up in `tailwind.config.js`. The site uses the supplied Velora identity with an ivory, warm-gold, and espresso palette inspired by the brand's Instagram aesthetic.

## 2. Architecture

```text
gold-jewellery-store/
├── index.html                    # Fallback SEO metadata and root document
├── tailwind.config.js            # Luxury palette, typography, gradients, animation tokens
├── postcss.config.js
└── src/
    ├── App.jsx                   # Page composition, selected product and catalog state
    ├── main.jsx                  # React + Helmet provider bootstrap
    ├── index.css                 # Global styling, scrollbar, typography utilities
    ├── data/
    │   └── products.js           # Categories and product catalogue mock data
    └── components/
        ├── SEO.jsx               # Search/social metadata and JewelleryStore schema
        ├── Navbar.jsx            # Gold ticker, responsive navigation
        ├── HeroBanner.jsx        # Animated luxury campaign hero
        ├── CategoryGrid.jsx      # Shop-by-occasion category selector
        ├── FeaturedCollection.jsx# Filterable product showcase
        ├── ProductModal.jsx      # Accessible quick-view / WhatsApp inquiry modal
        ├── TrustBadges.jsx       # Hallmark, certification, exchange assurance
        ├── StoreLocator.jsx      # Boutique CTA and directions link
        ├── WhatsAppFloat.jsx     # Persistent inquiry action
        └── Footer.jsx            # Store contact details and secondary navigation
```

## 3. Customization guide

- **Products:** replace the mock products, descriptions, and image URLs in `src/data/products.js`.
- **Business details:** the verified launch details are centralised in `src/data/site.js`: Prithvi Shopping Mall, near SBI Bank, Uppinangady 574241; WhatsApp and primary phone `+91 91801 96916`; secondary phone `+91 78999 74358`; GSTIN `29ABCFV6880E1ZR`.
- **WhatsApp & site settings:** all inquiry CTAs read from `src/data/site.js`. India’s country code is included in the WhatsApp link, so it opens the correct number.
- **SEO:** set the live canonical domain through `VITE_SITE_URL` before launch; page metadata and local-business structured data are maintained in `src/components/SEO.jsx`.
- **Visual system:** adjust ivory, gold, espresso, typefaces, or motion timing in `tailwind.config.js` and `src/index.css`.
- **Images:** current imagery uses Unsplash URLs as showcase placeholders. License and host final campaign photography before production deployment.

## Quality checks

```bash
npm run build
```

The app is intentionally static: there is no checkout, authentication, or server dependency. Catalogue filtering, product quick views, mobile navigation, smooth anchors, map links, and WhatsApp inquiry CTAs work in the browser.

## SEO launch setup

1. The verified canonical domain is set to `https://www.veloragoldanddiamonds.com`. Copy `.env.example` to `.env.production` only if you need to override it in a hosting environment.
2. Run `npm run build`. It generates the canonical URL, sitemap, and sitemap reference in `robots.txt` for that domain.
3. Add the published domain to Google Search Console and keep Velora's Google Business Profile, address, categories, phone number, and website link accurate.

## Deployment checklist

1. Set `VITE_SITE_URL` to the final HTTPS domain in the hosting provider’s environment variables (or `.env.production` before building).
2. Deploy the output of `npm run build`; Vercel, Netlify, and Cloudflare Pages all detect this Vite project with build command `npm run build` and output directory `dist`.
3. Verify the published site’s directions link, both tap-to-call buttons, and WhatsApp inquiry flow on a mobile phone.
4. Replace showcase imagery and catalogue mock data with licensed final campaign photography and actual product details before advertising individual pieces.
