# 🎙️ Care to Voice — Executive Coaching & Workforce Consulting Platform

> **Empowering Leaders. Transforming Organizations. Aligning Career & Compensation.**  
> Official web platform for **Fátima Y. Abreu Arellano** — Author of *"Be The Reason You Thrive"*, Executive Leadership Coach, and Total Rewards / Workforce Consulting Principal.

---

## 🌟 Overview

**Care to Voice** is a state-of-the-art, high-converting digital platform built for C-suite executives, senior professionals, and HR workforce leaders. Designed with modern glassmorphic aesthetics, fluid micro-interactions, high-contrast obsidian slate typography, and authentic multimedia assets.

---

## ⚡ Key Features & Modules

### 🎬 1. Fullscreen Cinematic Hero & Audio Teaser
- **High-Definition Video Background**: Fullscreen executive leadership video showcase.
- **Vibrant Headline Typography**: High-impact warm amber/orange gradient styling for maximum readability.
- **Audio Teaser**: Instant interactive audio preview with animated soundwave visualizer.

### 🧭 2. Executive Coaching & Total Rewards Consulting
- **4-Step Career Alignment Framework**: Detailed visual diagram of *Discovery & Audit*, *Target Positioning*, *Total Rewards Alignment*, and *Executive Execution*.
- **Click-to-Zoom HD Diagram Modal**: Interactive full-screen view of Fatima's executive coaching roadmap.
- **Tabbed Experience**: Seamless switching between **Career Clarity Coaching (1-on-1)** and **Corporate Workforce / Total Rewards Consulting**.

### 📖 3. "Be The Reason You Thrive" Book Spotlight
- **Published Book Feature**: Direct showcase of Fatima Abreu's self-leadership guide.
- **Author Edition Ordering**: Instant cart integration for signed hardcover copies.

### 🛍️ 4. Official Merchandise & Thrive Store
- **100% Authentic Products**: Direct integration of official merchandise from `caretovoice.com/shop`.
  - **CARE Puzzle Collection** ("Lead From The Inside Out"): Hoodies, T-shirts, Totes, and Backpacks.
  - **Confusion & Clarity Collection**: Executive fitted tees, zipped hoodies, and studio canvas totes.
  - **The Dodecahedron Collection**: Graphic tees, heavyweight fleece, and geometric totes.
  - **Be An Enabler Collection**: Leadership V-neck tees and momentum canvas totes.
  - **Workbooks & Vouchers**: Career Direction PDF workbook, Thrive Daily Reflection Journal, and Gift Clarity Call vouchers.
- **Optimized Product Cards**: Taller 360px image boxes with `object-contain` for 100% complete photo visibility without cropping.
- **Home Preview Mode**: Displays top 3 featured products on Home page with a direct *"Explore All Merchandise & Store"* CTA.
- **Slide-Over Cart & Confetti Checkout**: Interactive slide-over cart drawer with animated checkout modal.

### 📊 5. Interactive Assessment Tools & Modals
- **Career Direction Quiz Modal**: Interactive multi-step diagnostic for identifying career bottlenecks.
- **Total Rewards ROI Calculator Modal**: Financial estimation tool for evaluating executive compensation and retention alignment.
- **Direct 1-on-1 Session Booking Modal**: Calendar booking interface for strategy calls.

### 💬 6. Communication & Accessibility
- **Floating Emerald WhatsApp Quick-Inquiry**: Authentic `#25D366` floating action button with dismissible tooltip.
- **AI Executive Chatbot Assistant**: Floating assistant providing immediate session guidance and navigation.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | Vanilla CSS3 + Modern Glassmorphism + [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Animations & FX** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) + HTML5 Canvas (`VoiceCanvas.jsx`) |
| **Media Hosting** | Authentic Wix Static CDN (`static.wixstatic.com`) + Local Assets |

---

## 📁 Project Structure

```
fatima_website/
├── public/
│   ├── career_framework.jpg          # HD 4-Step Executive Coaching Framework
│   ├── hero_video.mp4                # High-Definition Hero Video
│   ├── shop_workbook.jpg             # Workbooks & Reflection Journal Asset
│   └── career_clarity_roadmap.jpg    # Roadmap Visual
├── src/
│   ├── assets/                       # Images, Videos, and Logos
│   ├── components/
│   │   ├── Navbar.jsx                # Header Navigation & Page View Switcher
│   │   ├── Hero.jsx                  # Video Background & Audio Teaser
│   │   ├── AboutSection.jsx          # Founder Biography & Philosophy
│   │   ├── CoachingPrograms.jsx      # Coaching & Consulting Tabs + Framework Modal
│   │   ├── BookSection.jsx           # Author Book Showcase
│   │   ├── ShopSection.jsx           # Care to Voice Authentic Merch Store
│   │   ├── PodcastPlayer.jsx         # Audio Series Player
│   │   ├── YouTubeSection.jsx        # YouTube Masterclasses Feed
│   │   ├── TestimonialsSection.jsx   # Executive Testimonials Carousel
│   │   ├── FaqSection.jsx            # Interactive FAQ Accordion
│   │   ├── VoiceCanvas.jsx           # Interactive Radial Multi-Color Background
│   │   ├── WhatsAppButton.jsx        # Floating Emerald WhatsApp Quick-Inquiry
│   │   └── Modals/                   # Quiz, Calculator, Booking, and Journal Modals
│   ├── index.css                     # Design Tokens & High-Contrast Typography
│   ├── App.jsx                       # Root Application & Navigation Router
│   └── main.jsx                      # Application Entry Point
├── package.json
└── vite.config.js
```

---

## 🚀 Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jayantvaibhavspj/jobgen-fatima_website-.git
   cd jobgen-fatima_website-
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 👤 Author & Credits

- **Founder & Principal Coach**: Fátima Y. Abreu Arellano (*Care to Voice*)
- **Official Website**: [https://www.caretovoice.com](https://www.caretovoice.com)
- **YouTube Channel**: [@FatimaCaretoVoice](https://www.youtube.com/@FatimaCaretoVoice)
- **Built for**: C-Suite Leadership, Executive Career Pivots & Corporate Total Rewards Consulting.
