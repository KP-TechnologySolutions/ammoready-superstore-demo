# Development Guide - AmmoReady Superstore Demo

Complete development, deployment, and maintenance instructions.

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ installed
- 8GB+ RAM (important for build process)
- Git for version control

### **Installation**
```bash
# Clone repository
git clone [repository-url]
cd ammoready-superstore-demo

# Install dependencies
npm install

# Build and serve (NEVER use npm run dev)
npm run build:serve
```

### **⚠️ CRITICAL: Never Use Dev Server**
Due to 8GB RAM constraint, ALWAYS use build+serve approach:
```bash
# ❌ NEVER DO THIS (will crash)
npm run dev

# ✅ ALWAYS DO THIS
rm -rf .next out
npx next build
find out -name "*.txt" -delete
npx serve out/ -p 4000
```

## 📁 Project Structure

```
ammoready-superstore-demo/
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── page.tsx            # Homepage (/)
│   │   ├── categories/         # Product catalog
│   │   │   └── page.tsx       # /categories
│   │   ├── stores/            # Dealer directory  
│   │   │   └── page.tsx       # /stores
│   │   └── features/          # Feature-specific pages
│   │       └── daily-deals/   # /features/daily-deals
│   │           └── page.tsx
│   │
│   └── components/             # Reusable React components
│       ├── Header.tsx          # Navigation with logo/search
│       ├── Hero.tsx           # Homepage hero section
│       ├── ProductGrid.tsx    # Main product display
│       ├── MarketplaceSections.tsx # NEW TODAY, DAILY DEALS sections
│       ├── TopSellingAmmo.tsx # Ammunition section
│       ├── FeaturedCategories.tsx # Category navigation
│       ├── TrustSignals.tsx   # Social proof elements
│       ├── Footer.tsx         # Site footer
│       └── Product3D.tsx      # 3D visualization component
│
├── public/
│   └── images/
│       └── finallogo.png      # AmmoReady official logo
│
├── package.json               # Dependencies and scripts
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── README.md                 # Project overview
├── PROJECT_SCOPE.md          # Detailed project scope
└── DEVELOPMENT.md            # This file
```

## 🛠️ Development Workflow

### **Making Changes**
1. **Edit Components** - Modify files in `src/components/`
2. **Update Pages** - Edit files in `src/app/`  
3. **Test Build** - Run `npm run build:serve`
4. **Verify Changes** - Check `http://localhost:4000`
5. **Commit Changes** - Git commit with descriptive message

### **Adding New Pages**
```bash
# Create new page directory
mkdir -p src/app/new-page

# Create page component
cat > src/app/new-page/page.tsx << 'EOF'
'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NewPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* Page content here */}
      <Footer />
    </main>
  )
}
EOF

# Update navigation in Header.tsx
```

### **Adding New Components**
```bash
# Create component file
cat > src/components/NewComponent.tsx << 'EOF'
'use client'

export default function NewComponent() {
  return (
    <div>
      {/* Component content here */}
    </div>
  )
}
EOF

# Import in page where needed
# import NewComponent from '@/components/NewComponent'
```

## 🎨 Styling Guidelines

### **Color Palette (AmmoReady Brand)**
```css
/* Primary Colors */
--chrome-light: #e5e7eb    /* Gray-200 */
--chrome-dark: #374151     /* Gray-700 */  
--gunmetal: #1f2937        /* Gray-800 */
--deep-gunmetal: #111827   /* Gray-900 */

/* Accent Colors */
--gold-light: #fbbf24      /* Yellow-400 */
--gold: #f59e0b           /* Yellow-500 */
--gold-dark: #d97706      /* Yellow-600 */

/* Status Colors */
--success: #10b981        /* Emerald-500 */
--error: #ef4444         /* Red-500 */
--warning: #f59e0b       /* Amber-500 */
```

### **Tailwind Classes**
```css
/* Brand Colors */
.text-brand-chrome: text-gray-700
.text-brand-gunmetal: text-gray-900  
.text-brand-gold: text-yellow-500

.bg-brand-chrome: bg-gray-100
.bg-brand-gunmetal: bg-gray-900
.bg-brand-gold: bg-yellow-500

.border-brand-chrome: border-gray-300
.border-brand-gold: border-yellow-500
```

### **Component Patterns**
```typescript
// Standard product card
<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">

// CTA button primary
<button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">

// CTA button secondary  
<button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">

// Badge/tag
<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
```

## 🖼️ Image Management

### **Current Image Strategy**
- **Source:** Competitor's CDN for professional appearance
- **Fallback:** Emoji icons when images fail to load  
- **Format:** WebP preferred, JPEG fallback
- **Sizes:** Responsive with proper aspect ratios

### **Image URLs Pattern**
```javascript
const productImages = {
  handguns: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/ZiQhelIQtyqD9fTQmlm6",
  rifles: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/AUCUp7s1QU6XpJ1HbZNi",
  ammo: "https://cdn.filestackcontent.com/AUcm0ze0SHM76x9FhaHgpz/resize=width:300,height:300/https://www.filepicker.io/api/file/XxV1doYRKmByhOkgnGjA"
}
```

### **Adding New Images**
```typescript
// With error handling
<img 
  src={product.image}
  alt={product.name}
  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
  onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    target.parentElement!.innerHTML = `
      <div class="w-full h-full bg-gray-200 flex items-center justify-center text-4xl">
        ${fallbackEmoji}
      </div>
    `;
  }}
/>
```

## 🔧 NPM Scripts

### **Available Commands**
```json
{
  "scripts": {
    "build": "next build",                    // Build for production
    "serve": "serve out/ -p 4000",          // Serve built files
    "build:serve": "rm -rf .next out && npm run build && find out -name '*.txt' -delete && npm run serve",
    "clean": "rm -rf .next out node_modules/.cache",
    "type-check": "tsc --noEmit",            // Check TypeScript errors
    "lint": "next lint",                     // Run ESLint
    "lint:fix": "next lint --fix"           // Fix ESLint errors
  }
}
```

### **Usage Examples**
```bash
# Full clean build and serve
npm run build:serve

# Just build (for deployment)
npm run build

# Clean up build artifacts
npm run clean

# Check for TypeScript errors
npm run type-check

# Fix linting issues
npm run lint:fix
```

## 📦 Deployment

### **Static Export Deployment**
```bash
# Build static files
npm run build

# Deploy 'out' folder to:
# - Vercel (drag & drop)
# - Netlify (drag & drop) 
# - AWS S3 + CloudFront
# - Any static hosting service
```

### **Vercel Deployment**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel --prod
```

### **Custom Server Deployment**
```bash
# Build static files
npm run build

# Upload 'out' folder to server
scp -r out/ user@server:/var/www/ammoready-demo/

# Serve with nginx or Apache
```

## 🐛 Troubleshooting

### **Common Issues**

#### **Build Out of Memory**
```bash
# Error: JavaScript heap out of memory
# Solution: Use build+serve, never dev server
rm -rf .next out node_modules/.cache
npm run build:serve
```

#### **Images Not Loading**
```bash
# Check network connectivity
# Verify image URLs are valid
# Ensure error handling is implemented
```

#### **Type Errors**
```bash
# Run type check
npm run type-check

# Check tsconfig.json configuration
# Verify import paths use '@/' alias
```

#### **Build Warnings**
```bash
# Check for unused imports
# Verify all images have alt attributes  
# Fix accessibility issues
```

### **Performance Optimization**

#### **Bundle Size**
```bash
# Analyze bundle size
npm run build
# Check .next/analyze/ for bundle analysis
```

#### **Image Optimization** 
```typescript
// Use Next.js Image component for local images
import Image from 'next/image'

<Image 
  src="/images/logo.png"
  alt="Logo"
  width={200} 
  height={50}
  priority={true} // For above-fold images
/>
```

#### **Code Splitting**
```typescript
// Dynamic imports for large components
import dynamic from 'next/dynamic'

const Product3D = dynamic(() => import('./Product3D'), {
  ssr: false,
  loading: () => <p>Loading 3D viewer...</p>
})
```

## 🔍 Testing

### **Manual Testing Checklist**
- [ ] Homepage loads without errors
- [ ] All navigation links work  
- [ ] Categories page filters function
- [ ] Stores page displays dealer info
- [ ] Daily deals page shows countdown timers
- [ ] Mobile responsive on all pages
- [ ] Images load with proper fallbacks
- [ ] Logo displays correctly
- [ ] Search bar is functional (UI only)

### **Browser Testing**
- [ ] Chrome (primary)
- [ ] Safari (macOS/iOS)  
- [ ] Firefox
- [ ] Edge
- [ ] Mobile browsers

### **Performance Testing**
```bash
# Lighthouse audit
# Run in Chrome DevTools
# Target scores: 90+ for all metrics
```

## 📚 Resources

### **Documentation**
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)

### **Tools**
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [TypeScript VS Code Extension](https://code.visualstudio.com/docs/languages/typescript)

### **Design References**
- Competitor: https://demo.ammoreadysuperstore.com/
- Logo: `public/images/finallogo.png`
- Color palette: Chrome/gunmetal with gold accents

---

**For questions or issues, refer to this guide or check the project README.md**