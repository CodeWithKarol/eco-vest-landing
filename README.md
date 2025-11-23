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
├── index.html                  # Main landing page
├── styles.css                  # Complete styling with responsive design
├── script.js                   # Interactive features and functionality
├── favicon.svg                 # Site favicon (eco-friendly lightning bolt design)
├── CUSTOMIZATION-GUIDE.html    # Detailed instructions for customizing the template
├── assets/
│   ├── images/                 # Image assets (placeholder)
│   └── icons/                  # Icon assets (placeholder)
├── README.md                   # This file
└── LICENSE                     # Project license
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
  - Mobile: Tight spacing with touch-friendly 44px × 44px hamburger button
  - Tablet: Intermediate sizing for optimal proportions
- **Logo with elegant hover effects**:
  - Smooth color transition to accent green
  - Animated gradient underline
  - Subtle icon tilt and lift animation
  - Refined cubic-bezier easing for sophisticated feel

### 2. **Hero Section**

- **Full viewport height** (100vh) coverage on desktop with responsive padding
- **Compelling headline**: "Invest in Your Future. Invest in the Planet."
- **Fluid typography** with responsive scaling using `clamp()`:
  - Title: Scales from 1.75rem to 3.5rem based on viewport width
  - Subtitle: Proportional scaling for optimal readability
- **Dual-column layout** on desktop, single column on mobile with centered content
- **Animated illustration** with floating circles and visual elements
- **Primary CTA**: "Start Building Impact Today" with secondary "Watch Demo" button
- **Social proof statistics** with key metrics:
  - 50K+ Active Users
  - $2.5M Invested Sustainably
  - 100K+ Trees Protected
  - 50+ Companies in Portfolio
- **Responsive CTAs** that stack vertically on mobile/tablet
- **Hero visual** fills available space on desktop, hidden on mobile
- **Smooth animations** on page load with staggered effects

### 3. **USP Section**

- Four key unique selling points
- AI automation, verified impact, smart growth, transparency

### 4. **Features Section**

- Six numbered feature cards
- Automated savings, sustainable portfolios, impact dashboard, education, community, transparent fees

### 5. **How It Works**

- Three-step process with clean, modern design
- **Steps**: Sign Up → Connect & Fund → Watch Impact Grow
- **Custom SVG icons** for each step (form, payment, growth)
- **Gradient-styled step indicators** with numbered circles
- **Responsive layout** with single-column on mobile, horizontal flow on desktop
- **Smooth animations** with staggered delays on page load
- **No connecting lines** for minimal, clean aesthetic

### 6. **Impact Section**

- **Three-card grid** displaying environmental, social, and financial impact
- **Custom SVG icons**:
  - Leaf icon for environmental impact
  - People/community icon for social impact
  - Growth trend icon for financial metrics
- **Large impact statistics** with descriptive labels
- **Gradient background** with frosted glass card design
- **Smooth animations** with staggered entrance effects
- **Responsive layout** adapting to tablet and mobile views

### 7. **Testimonials**

- **Three testimonial cards** with modern glass-morphism design
- **Quote icons** with gradient styling
- **Customer avatars** with colored circles and initials
- **5-star ratings** with gradient accent
- **Trust indicators** showing 50K+ Active Investors, 4.9/5 Rating, 95% Satisfaction
- **Fixed 3-column grid** on desktop (2-column tablet, 1-column mobile)
- **Glass-morphism cards** with backdrop blur and gradient borders
- **Smooth animations** with staggered entrance on page load

### 8. **Call-to-Action (CTA) Section**

- **Centered layout** with modern pill-style email form
- **Gradient background** with animated decorative circles
- **Gradient text accent** on "Start Building Impact"
- **Pill-shaped email input** with embedded icon and button
- **Three stat cards** showing 4.9/5 Rating, 50K+ Users, $2.5B+ Invested
- **Trust checkmarks** with feature highlights
- **Glass-morphism effects** on stat cards with hover animations
- **Responsive single-column** layout on mobile/tablet

### 9. **Footer**

- **Two-column layout** with brand section and link columns
- **Brand section** with gradient logo text, tagline, and social icons
- **Social icon links** (X/Twitter, LinkedIn, Instagram, Facebook) in rounded squares
- **Four link columns** (Product, Company, Resources, Legal) with 5 links each
- **Trust badges** (SEC Registered, Bank-Level Security, B-Corp Certified) with icons
- **Gradient background** with animated decorative circles
- **Interactive hover effects** on all links with color transitions and lift animations
- **Centered content on mobile/tablet** (up to 1024px) for better UX
- **Responsive layout** (2-column desktop → 1-column mobile with centered alignment)
- **Copyright notice** in bottom section

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

### Customization

📖 **Need to customize this template for your own product?**

Open `CUSTOMIZATION-GUIDE.html` in your browser for detailed, step-by-step instructions covering:

- Changing colors and branding
- Modifying content sections
- Updating navigation and links
- Customizing the CTA form
- Replacing icons and images
- Typography changes
- SEO optimization
- Deployment checklist

The guide includes code examples, tips, and troubleshooting for common issues.

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above (full two-column layouts, standard spacing)
- **Tablet**: 768px - 1023px (optimized single/two-column layouts, adjusted spacing)
- **Mobile**: 481px - 767px (single-column layouts, responsive menu, stacked elements)
- **Small Mobile**: Below 480px (ultra-compact layouts, minimal spacing)

## 🎯 Key Features

- ✅ **100% responsive design** with fluid typography and smart breakpoints
- ✅ **4 breakpoint coverage** (desktop, tablet, mobile, small mobile)
- ✅ **Animated mobile menu** with hamburger-to-X transition
- ✅ **Full viewport hero section** with responsive sizing (100vh desktop, adaptive mobile)
- ✅ **Smooth scrolling navigation** with keyboard support
- ✅ **Email form validation** with real-time feedback
- ✅ **Scroll animations** on cards and elements with staggered delays
- ✅ **Custom SVG icons** throughout all sections (no external icon libraries)
- ✅ **Custom favicon** with eco-friendly lightning bolt design
- ✅ **Comprehensive customization guide** in HTML format with step-by-step instructions
- ✅ **Elegant logo hover effect** with gradient underline and icon animation
- ✅ **Glass-morphism effects** on testimonial cards and stat cards
- ✅ **Gradient backgrounds** with decorative animated circles
- ✅ **Modern pill-style forms** with embedded icons and buttons
- ✅ **Centered mobile/tablet footer** for improved readability
- ✅ **Interactive hover states** with smooth transitions and visual feedback
- ✅ **Touch-friendly interface** with 44px+ tap targets
- ✅ **Accessible (WCAG compliance)** with semantic HTML and ARIA labels
- ✅ **SEO optimized** with meta tags and structured content
- ✅ **Performance optimized** with no external dependencies
- ✅ **Ready to customize** - well-documented code structure for easy modifications

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
