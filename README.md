# Eco-Vest Landing Page

A modern, responsive landing page for Eco-Vest, a mission-driven financial app that connects personal finance with sustainable investing and social impact.

## 🌱 Project Overview

This landing page showcases the Eco-Vest brand and converts visitors into app users through:

- **Mission-driven messaging** emphasizing "Money with Meaning"
- **Clear value proposition** highlighting AI automation + sustainable investing
- **Responsive design** optimized for all devices
- **Strong CTAs** guiding users to sign up and learn more

## 📁 Project Structure

```
eco-vest-landing/
├── index.html           # Main landing page
├── styles.css           # Complete styling with responsive design
├── script.js            # Interactive features and functionality
├── assets/
│   ├── images/          # Image assets (placeholder)
│   └── icons/           # Icon assets (placeholder)
├── README.md            # This file
└── LICENSE              # Project license
```

## 🎨 Design System

### Color Palette

- **Primary Green**: `#2d7d5e` - Trust and growth
- **Light Green**: `#4db380` - Accent and highlights
- **Sage Green**: `#98b98d` - Subtle backgrounds
- **Natural Beige**: `#f5f1e8` - Warm, eco-friendly backdrop
- **Warm Brown**: `#a89772` - Earthy grounding
- **Rich Blue**: `#3d5a80` - Trust and stability

### Typography

- **Primary Font**: Inter (body text, UI elements)
- **Secondary Font**: Poppins (headings)

## 📄 Page Sections

### 1. **Header & Navigation**

- **Sticky navigation** with smooth scrolling
- **Responsive hamburger menu** with smooth animations:
  - Hamburger-to-X transition on mobile
  - Fixed positioning for full-screen menu access
  - Escape key support to close menu
  - Click-outside to close functionality
- **Optimized header** sizing:
  - Desktop: Full size for prominent branding
  - Scrolled state: Compact size for improved screen real estate
  - Mobile: Tight spacing with touch-friendly 44px× 44px hamburger button
  - Tablet: Intermediate sizing for optimal proportions
- Logo with brand identity and smooth hover effects

### 2. **Hero Section**

- **Full viewport height** (100vh) coverage on desktop
- **Compelling headline**: "Invest in Your Future. Invest in the Planet."
- **Fluid typography** with responsive scaling using `clamp()`:
  - Title: Scales from 2rem to 4rem based on viewport width
  - Subtitle: Proportional scaling for optimal readability
- **Dual-column layout** on desktop, single column on mobile
- **Animated illustration** with floating circles and visual elements
- **Primary CTA**: "Start Building Impact Today"
- **Social proof statistics** with key metrics:
  - Active users
  - Total investments
  - Environmental impact
- **Responsive CTAs** that stack vertically on mobile
- **Hero visual** fills available space on desktop, hidden on mobile

### 3. **USP Section**

- Four key unique selling points
- AI automation, verified impact, smart growth, transparency

### 4. **Features Section**

- Six numbered feature cards
- Automated savings, sustainable portfolios, impact dashboard, education, community, transparent fees

### 5. **How It Works**

- Three-step process: Sign Up → Connect & Fund → Watch Impact Grow

### 6. **Impact Section**

- Environmental, Social, and Financial metrics
- Real community achievements

### 7. **Testimonials**

- Three user testimonials with 5-star ratings

### 8. **Call-to-Action (CTA)**

- Email signup form with validation

### 9. **Footer**

- Company information, quick links, support channels

## ⚙️ Features

### Responsive Design

- **Mobile-first approach** with progressive enhancement
- **Desktop** (1024px+): Full two-column hero layout, standard spacing
- **Tablet** (769px - 1024px): Single-column hero, optimized spacing and touch targets
- **Mobile** (≤ 768px): Compact layout with responsive hamburger menu, stacked CTAs
- **Small Mobile** (≤ 480px): Ultra-compact spacing, aggressive font scaling
- **Fluid typography** using CSS `clamp()` for smooth scaling across all breakpoints
- **Touch-friendly** interactive elements with 44px minimum tap targets
- **Hamburger menu** with 24px animation and smooth transitions

### Interactive Elements

- Smooth scrolling navigation
- Form validation and notifications
- Scroll animations on cards
- Hover effects throughout

### Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus-visible states

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required

### Installation

1. Clone or download the repository
2. Open `index.html` in your web browser
3. Or serve using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above (full two-column layouts, standard spacing)
- **Tablet**: 768px - 1023px (optimized single/two-column layouts, adjusted spacing)
- **Mobile**: 481px - 767px (single-column layouts, responsive menu, stacked elements)
- **Small Mobile**: Below 480px (ultra-compact layouts, minimal spacing)

## 🎯 Key Features

- ✅ **100% responsive design** with fluid typography
- ✅ **4 breakpoint coverage** (desktop, tablet, mobile, small mobile)
- ✅ **Animated mobile menu** with hamburger-to-X transition
- ✅ **Full viewport hero section** (100vh on desktop)
- ✅ **Smooth scrolling navigation** with keyboard support
- ✅ **Email form validation** with real-time feedback
- ✅ **Scroll animations** on cards and elements
- ✅ **Touch-friendly interface** with 44px+ tap targets
- ✅ **Accessible (WCAG compliance)** with semantic HTML and ARIA labels
- ✅ **SEO optimized** with meta tags and structured content
- ✅ **Performance optimized** with no external dependencies

## 🔐 Deployment Ready

This project is ready to deploy to:

- Netlify
- Vercel
- GitHub Pages
- Traditional web hosting
- AWS S3 + CloudFront

Simply upload the files to your hosting provider.

## 📄 License

Licensed under the MIT License - see the LICENSE file for details.

---

**Made with 🌱 for conscious investors everywhere.**
