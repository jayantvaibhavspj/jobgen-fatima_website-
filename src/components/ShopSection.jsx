import React, { useState } from 'react';
import { ShoppingBag, Star, Plus, Check, ShoppingCart, X, Trash2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import workbookImg from '../assets/shop_workbook.jpg';

const PRODUCTS = [
  {
    id: 'book-hardcover',
    title: 'Be The Reason You Thrive (Author Signed Hardcover)',
    category: 'Books',
    price: 24.99,
    rating: 5.0,
    badge: 'Signed Author Edition',
    image: 'https://static.wixstatic.com/media/68c1c8_ba18aae42a4143ae829b2ff0693662bc~mv2.avif/v1/fill/w_532,h_848,al_c,q_85,enc_avif,quality_auto/Be%20the%20Reason%20You%20Thrive%20-%20Book.avif',
    description: 'Official signed edition by Fatima Y. Abreu. Master self-leadership, career pivot positioning, and alignment.',
    artwork: 'Author Edition'
  },
  {
    id: 'care-puzzle-tee-female',
    title: 'CARE Puzzle — Female Relaxed Fit T-Shirt',
    category: 'Apparel',
    price: 28.00,
    rating: 4.9,
    badge: 'Top Seller',
    image: 'https://static.wixstatic.com/media/68c1c8_52ff3fbeb0174facb5e2cc611feedcfc~mv2.png',
    description: 'Features Fatima\'s signature "Lead From The Inside Out" puzzle artwork: Comfort, Ambition, Renewal, Equilibrium.',
    artwork: 'CARE Puzzle'
  },
  {
    id: 'care-puzzle-hoodie',
    title: 'CARE Puzzle — Premium Pullover Hoodie',
    category: 'Apparel',
    price: 48.00,
    rating: 5.0,
    badge: 'Outerwear',
    image: 'https://static.wixstatic.com/media/68c1c8_aa149c3dd5774e5685df028a7bed05c1~mv2.png',
    description: 'Heavyweight fleece hoodie displaying the CARE self-leadership framework graphics.',
    artwork: 'CARE Puzzle'
  },
  {
    id: 'care-puzzle-tee-male',
    title: 'CARE Puzzle — Male Oversized T-Shirt',
    category: 'Apparel',
    price: 30.00,
    rating: 4.8,
    badge: 'Unisex Fit',
    image: 'https://static.wixstatic.com/media/68c1c8_d9dc5179c6d442e18e5cbcbad9e7c27a~mv2.png',
    description: 'Oversized executive street-style cotton tee with "Be The Reason You Thrive" back print.',
    artwork: 'CARE Puzzle'
  },
  {
    id: 'care-puzzle-tote',
    title: 'CARE Puzzle — Heavyweight Organic Canvas Tote',
    category: 'Accessories',
    price: 22.00,
    rating: 4.9,
    badge: 'Eco Essential',
    image: 'https://static.wixstatic.com/media/68c1c8_295bfbc2b8eb46a4bf9af1d3ce9f8471~mv2.png',
    description: '100% organic heavy canvas tote featuring "Lead From The Inside Out" CARE puzzle graphics.',
    artwork: 'CARE Puzzle'
  },
  {
    id: 'care-puzzle-backpack',
    title: 'CARE Puzzle — Multi-Compartment Ergonomic Backpack',
    category: 'Accessories',
    price: 54.00,
    rating: 5.0,
    badge: 'Travel Gear',
    image: 'https://static.wixstatic.com/media/68c1c8_1d1a9b9e9e874b6e9601361adbb68ba7~mv2.png',
    description: 'Durable executive backpack with padded laptop sleeve and high-contrast CARE emblem.',
    artwork: 'CARE Puzzle'
  },
  {
    id: 'clarity-fitted-tee',
    title: 'Confusion & Clarity — Fitted Executive T-Shirt',
    category: 'Apparel',
    price: 26.00,
    rating: 4.9,
    badge: 'Executive Series',
    image: 'https://static.wixstatic.com/media/68c1c8_ee2773eab4c24e72b0e4b777b3ad4d6d~mv2.png',
    description: 'Tailored fit featuring "Where Reflection Becomes Power..." minimalism graphic.',
    artwork: 'Confusion & Clarity'
  },
  {
    id: 'clarity-boxy-tee',
    title: 'Confusion & Clarity — Boxy Silhouette T-Shirt',
    category: 'Apparel',
    price: 28.00,
    rating: 4.8,
    badge: 'Modern Cut',
    image: 'https://static.wixstatic.com/media/68c1c8_5db67b6f38034d45afe4e930d33f21ca~mv2.png',
    description: 'Relaxed boxy cut cotton shirt displaying the duality of confusion transitioning into clarity.',
    artwork: 'Confusion & Clarity'
  },
  {
    id: 'clarity-zipped-hoodie',
    title: 'Confusion & Clarity — Premium Zipped Hoodie',
    category: 'Apparel',
    price: 52.00,
    rating: 5.0,
    badge: 'Zip Hoodie',
    image: 'https://static.wixstatic.com/media/68c1c8_acd58abe601e42bca8af06e79349c2c4~mv2.png',
    description: 'Soft brushed interior zip jacket with subtle front crest and back clarity diagram.',
    artwork: 'Confusion & Clarity'
  },
  {
    id: 'clarity-tote-bag',
    title: 'Confusion & Clarity — Studio Canvas Tote',
    category: 'Accessories',
    price: 22.00,
    rating: 4.9,
    badge: 'Daily Carry',
    image: 'https://static.wixstatic.com/media/68c1c8_321f8585c3974f3a83b88f7ba9872706~mv2.png',
    description: 'Spacious canvas shopper tote with reinforced handles and dual-tone clarity design.',
    artwork: 'Confusion & Clarity'
  },
  {
    id: 'dodecahedron-relaxed-tee',
    title: 'The Dodecahedron — Relaxed Fit Graphic T-Shirt',
    category: 'Apparel',
    price: 28.00,
    rating: 4.9,
    badge: 'Artist Series',
    image: 'https://static.wixstatic.com/media/68c1c8_d3733858cf9344ff92b09b2128ec07b3~mv2.png',
    description: 'Features Fatima\'s geometric artwork: "Chaos + Creativity = Magic".',
    artwork: 'The Dodecahedron'
  },
  {
    id: 'dodecahedron-hoodie',
    title: 'The Dodecahedron — Oversized Heavyweight Hoodie',
    category: 'Apparel',
    price: 54.00,
    rating: 5.0,
    badge: 'Heavyweight',
    image: 'https://static.wixstatic.com/media/68c1c8_31901eb3afb64ba982b4c9b7811bdc0a~mv2.png',
    description: 'Ultra-warm 400gsm cotton fleece hoodie with geometric dodecahedron back artwork.',
    artwork: 'The Dodecahedron'
  },
  {
    id: 'dodecahedron-tote',
    title: 'The Dodecahedron — Geometric Canvas Tote',
    category: 'Accessories',
    price: 24.00,
    rating: 4.8,
    badge: 'Creative Carry',
    image: 'https://static.wixstatic.com/media/68c1c8_b83b33a3dce84b30a7ce92796b4b3105~mv2.png',
    description: 'Artistic tote bag engineered for creative leaders and executives on the go.',
    artwork: 'The Dodecahedron'
  },
  {
    id: 'enabler-vneck-tee',
    title: 'Be An Enabler — Fitted V-Neck T-Shirt',
    category: 'Apparel',
    price: 27.00,
    rating: 4.9,
    badge: 'Leadership Tee',
    image: 'https://static.wixstatic.com/media/68c1c8_76c7e1fdc43844c599eae2cd46c87279~mv2.png',
    description: 'Clean V-neck tee with "Enablers Build Momentum — Be An Enabler" front print.',
    artwork: 'Be An Enabler'
  },
  {
    id: 'enabler-tote-bag',
    title: 'Be An Enabler — Momentum Canvas Tote',
    category: 'Accessories',
    price: 22.00,
    rating: 4.9,
    badge: 'Purpose Carry',
    image: 'https://static.wixstatic.com/media/68c1c8_aa83208c0b1c434384af9762753ab9ed~mv2.png',
    description: 'Durable tote celebrating action-oriented leadership and workforce enablement.',
    artwork: 'Be An Enabler'
  },
  {
    id: 'workbook-clarity-digital',
    title: 'Career Direction Guided Digital Workbook',
    category: 'Workbooks',
    price: 14.99,
    rating: 4.9,
    badge: 'Digital PDF',
    image: 'https://static.wixstatic.com/media/68c1c8_53644cb173cc43c0ad14ae893c9833ac~mv2.png',
    description: 'Interactive PDF workbook with value audits, 90-day positioning planner, and exercise templates.',
    artwork: 'Workbooks'
  },
  {
    id: 'thrive-reflection-journal',
    title: 'Thrive Daily Reflection & Purpose Planner',
    category: 'Workbooks',
    price: 22.50,
    rating: 5.0,
    badge: 'Guided Journal',
    image: 'https://static.wixstatic.com/media/68c1c8_f66cf94a019e4aecb9072c0d71664462~mv2.png',
    description: 'Linen-bound daily tracker for self-leadership, focus metrics, and emotional alignment.',
    artwork: 'Workbooks'
  },
  {
    id: 'consult-gift-voucher',
    title: 'Gift a Clarity Call Voucher Card',
    category: 'Coaching',
    price: 99.00,
    rating: 5.0,
    badge: 'Gift Card',
    image: 'https://static.wixstatic.com/media/68c1c8_ecf7aa13364b473380e9da5bb80f1645~mv2.png',
    description: 'Gift a 45-minute 1-on-1 career direction and leadership strategy session with Fatima Abreu.',
    artwork: 'Coaching'
  }
];

export default function ShopSection({ 
  onAddToCart, 
  cartItems, 
  isCartOpen, 
  setIsCartOpen, 
  onRemoveFromCart,
  isHomePage = false,
  onNavigate
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedItemToast, setAddedItemToast] = useState(null);
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const categories = ['All', 'Books', 'Apparel', 'Accessories', 'Workbooks', 'Coaching'];

  const filteredProducts = isHomePage
    ? PRODUCTS.slice(0, 3)
    : (selectedCategory === 'All'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === selectedCategory));

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedItemToast(product.title);
    setTimeout(() => {
      setAddedItemToast(null);
    }, 2500);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  const handleProceedCheckout = () => {
    const orderId = `CTV-${Math.floor(100000 + Math.random() * 900000)}`;
    setCompletedOrder({
      orderId,
      total: cartTotal,
      items: [...cartItems],
      date: new Date().toLocaleDateString()
    });
    setIsCartOpen(false);
    setShowCheckoutSuccess(true);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 }
    });
  };

  return (
    <section id="shop" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)] section-multicolor-shop">
      
      {/* Toast notification */}
      {addedItemToast && (
        <div className="fixed bottom-6 right-6 z-50 glass-panel border border-amber-500/50 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
            ✓
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Added to Cart!</div>
            <div className="text-[11px] text-slate-700 font-medium">{addedItemToast}</div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Thrive Collection & Merchandise</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text-primary">Self-Leadership & Clarity Tools</span>
          </h2>

          <p className="text-base sm:text-lg opacity-85">
            {isHomePage 
              ? 'Preview of official author-signed books, merchandise, and guided planners from the Care to Voice collection.' 
              : 'Explore all published books, apparel, accessories, reflection journals, and coaching vouchers.'}
          </p>
        </div>

        {/* Category Filter Tabs (Shown on full page view) */}
        {!isHomePage && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                    : 'glass-panel opacity-80 hover:opacity-100 hover:border-amber-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid (3 items on home, all on dedicated page) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between group/card"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative mb-5 rounded-2xl overflow-hidden bg-white h-80 sm:h-[360px] flex items-center justify-center border border-slate-200/80 shadow-sm p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain object-center transform group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 font-extrabold text-[10px] uppercase tracking-widest shadow-md">
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-xs text-amber-400 font-bold shadow-md">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                <h3 className="font-serif-heading text-lg sm:text-xl font-bold mb-2 leading-snug text-slate-900">
                  {product.title}
                </h3>

                <p className="text-xs text-slate-700 font-medium mb-6 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div className="text-xl font-extrabold text-slate-900">
                  ${product.price.toFixed(2)}
                </div>

                <button
                  onClick={() => handleAdd(product)}
                  className="gradient-btn px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Store Button (On Home Page) */}
        {isHomePage && (
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate && onNavigate('shop')}
              className="gradient-btn px-8 py-4 rounded-full text-sm font-bold inline-flex items-center gap-3 shadow-xl hover:scale-105 transition-transform"
            >
              <span>Explore All Merchandise & Store (18+ Items)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Slide-over Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-md glass-panel border-l border-[var(--border-subtle)] h-full p-6 flex flex-col justify-between shadow-2xl">
            
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-amber-500" />
                  <h3 className="font-serif-heading text-lg font-bold">Your Thrive Cart</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-full hover:bg-slate-200 text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-12 text-slate-600 font-medium">
                  <ShoppingBag className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-sm">Your cart is currently empty.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-1">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                        <div className="text-xs font-semibold text-amber-600 mt-0.5">
                          ${item.price.toFixed(2)} x {item.quantity || 1}
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveFromCart(idx)}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex justify-between items-center mb-4 text-base font-bold">
                  <span className="text-slate-700">Total Amount:</span>
                  <span className="text-xl text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleProceedCheckout}
                  className="w-full gradient-btn py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Complete Order Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Checkout Success Modal */}
      {showCheckoutSuccess && completedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="w-full max-w-lg glass-panel rounded-3xl p-8 border border-amber-500/40 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg shadow-amber-500/30">
              ✓
            </div>
            <h3 className="font-serif-heading text-2xl font-bold text-slate-900 mb-2">
              Thank You for Your Order!
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Your order <span className="font-bold text-amber-600">{completedOrder.orderId}</span> has been confirmed. Confirmation & access details have been sent to your email.
            </p>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-left mb-6 text-xs text-slate-800 space-y-1">
              <div className="font-bold text-amber-700 mb-2">Order Details Summary:</div>
              {completedOrder.items.map((it, i) => (
                <div key={i} className="flex justify-between">
                  <span>{it.title} (x{it.quantity || 1})</span>
                  <span className="font-bold">${((it.price) * (it.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-amber-500/20 flex justify-between font-bold text-slate-900 text-sm">
                <span>Total Paid:</span>
                <span>${completedOrder.total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => setShowCheckoutSuccess(false)}
              className="gradient-btn px-8 py-3 rounded-full text-xs font-bold shadow-lg"
            >
              Continue Exploring Shop
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
