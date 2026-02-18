# PRD - QDotData Website

## Company Overview

**Company:** QDotData
**CEO:** Tim Dupler, Esq.
**Location:** 1489 W Warm Springs Rd, #110, Las Vegas, Nevada 89014
**Email:** tim@qdotdata.com

QDotData is a consulting firm specializing in business optimization, AI-driven operational analysis, and technology development. The company's executives bring 20+ years of experience in professional services, SaaS, manufacturing, consumer products, branding, and marketing.

## Tech Stack

- **Framework:** React 18 (Create React App)
- **Styling:** Bootstrap 5, custom CSS
- **Animations:** react-reveal, react-typed (typing effect)
- **Navigation:** react-scroll (smooth scroll), react-router-dom, react-router-hash-link
- **Contact Form:** EmailJS (emailjs-com)
- **Notifications:** react-toastify
- **SEO:** react-helmet
- **Hosting:** Netlify (SPA redirect via `_redirects`)
- **Icons:** Remix Icon, Themify Icons, Flaticon, react-icons

## Site Structure

Single-page application with fixed sidebar navigation.

### Active Sections

| Section | Component | Description |
|---------|-----------|-------------|
| Header | `Header.js`, `MobileMenu.js` | Fixed sidebar nav with logo and links: Home, Services, About, Contact |
| Banner | `Banner.js` | Hero section with typing animation cycling through project names (Qalm, Tohi, QBanq, Angellink, QLan, Qh2o). CTA button links to About. |
| Services | `Services.js`, `ServiceModal.js` | Three service cards: Consulting Service, Experience, Our Workflow. Mentions AI/Closed Loop AI capabilities. |
| About | `About.js` | CEO bio for Tim Dupler. Career highlights (Ronco, Amden Corp, Los Defensores, US Auto Parts). Links to LinkedIn. |
| Available | `Available.js` | Call-to-action section: "We are available to help your business grow." Links to Contact. |
| Blog/Projects | `Blog.js`, `BlogGallery.js`, `BlogModal1-6.js` | Six project cards with detail modals (see Projects below). |
| Contact | `Contact.js`, `ContactForm.js` | Contact form (name, email, phone, message) via EmailJS. Displays email and address. |
| Footer | `Footer.js` | Social media links and copyright. |

### Disabled Sections (commented out in `Home.js`)

Portfolio, Resume, Pricing, Brands, Testimonial, AiWidget

## Projects / Partners

Six projects are showcased as clickable cards that open detail modals:

| Project | Description | Status |
|---------|-------------|--------|
| **QALM** | Global micro-task job app for quick local tasks (verification, translation, etc.). Addresses a $1.5B+ market. | Completed, seeking investors |
| **TOHI** | "Stewards of the Earth" - waste management platform connecting waste creators, recyclers, and feedstock purchasers via a national database. | Active |
| **QBANQ** | "Business as a Bank" platform for mid-level businesses ($20M+ annual payables). Includes non-PCI/ACH merchant processing for CBD/Cannabis. Patents pending. | Final phase |
| **ANGELLINK** | Transparent donation platform using blockchain. GPS and video tracking for donation fulfillment verification. | Final phase, seeking investors |
| **QLAN** | Wireless mesh network using building lighting, A/C, and security systems. Creates power back to grid and provides WiFi/TV/phone/internet. Patented technology. | Completed, in production |
| **QH2O** | Industrial water purification for oil industry. Separates oil from water and heavy solids without filters or maintenance. | Completed |

## Key Features

- **Preloader:** 1.4-second animated preloader on initial load
- **Smooth Scrolling:** Section-based navigation with react-scroll
- **Typing Animation:** Banner cycles through project names
- **Responsive:** Bootstrap grid, mobile menu component
- **Contact Form:** EmailJS integration with env vars (`REACT_APP_EMAIL_SERVICE_ID`, `REACT_APP_EMAIL_TEMPLATE_ID`, `REACT_APP_EMAIL_USER_ID`)
- **Toast Notifications:** Success/error feedback on form submission
- **Scroll-to-Top Button:** `ScrollUpBtn.js`
- **404 Page:** `NotFound.js` / `NotFoundText.js`
- **External Widget:** Script tag in `index.html` loads an external widget (bottom-right position)

## File Structure

```
src/
  App.js              # Router, preloader, global layout
  index.js            # React entry point
  Pages/
    Home.js           # Main page composing all sections
  Components/
    Header.js         # Fixed sidebar navigation
    MobileMenu.js     # Mobile responsive menu
    Banner.js         # Hero section with typing animation
    Services.js       # Service cards
    ServiceModal.js   # Service detail modal
    About.js          # CEO biography
    Available.js      # CTA section
    Blog.js           # Projects section wrapper
    BlogGallery.js    # Project card grid
    BlogModal1-6.js   # Individual project detail modals
    Contact.js        # Contact section layout
    ContactForm.js    # EmailJS contact form
    Footer.js         # Footer with social links and copyright
    SocialMedia.js    # Social media icon links
    ScrollUpBtn.js    # Scroll-to-top button
    PreLoader.js      # Loading animation
    NotFound.js       # 404 page
    NotFoundText.js   # 404 content
  assets/
    css/              # style.css, helper.css, flaticon-set.css, unit-test.css
    fonts/            # Remix Icon, Themify, Flaticon font files
    img/              # Images: banners, blog, icons, illustrations, logos, shapes, portfolio, team
public/
  index.html          # HTML template with external widget script
  _redirects          # Netlify SPA routing
  manifest.json       # PWA manifest
  robots.txt          # Search engine directives
```

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `REACT_APP_EMAIL_SERVICE_ID` | EmailJS service identifier |
| `REACT_APP_EMAIL_TEMPLATE_ID` | EmailJS email template |
| `REACT_APP_EMAIL_USER_ID` | EmailJS user/public key |

## Build & Run

```bash
npm start    # Development server
npm run build  # Production build
npm test     # Run tests
```
