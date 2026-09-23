import React, { useState } from 'react';
import { ShoppingBag, Star, Plus, Check, ShoppingCart, X, Trash2, ArrowRight } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'book-hardcover',
    title: 'Be The Reason You Thrive (Hardcover)',
    category: 'Books',
    price: 24.99,
    rating: 5.0,
    badge: 'Bestseller',
    description: 'Signed hardcover edition of the essential self-leadership and clarity guide.'
  },
  {
    id: 'workbook-clarity',
    title: 'Career Direction Guided Workbook',
    category: 'Workbooks',
    price: 14.99,
    rating: 4.9,
    badge: 'Digital PDF',
    description: 'Practical exercises, value audits, and 90-day positioning planner.'
  },
  {
    id: 'audio-masterclass',
    title: 'Emotional Clarity Audio Masterclass',
    category: 'Audio',
    price: 29.99,
    rating: 4.8,
    badge: 'Exclusive',
    description: '3-part audio series on breaking momentum traps and choosing alignment.'
  },
  {
    id: 'merch-tote',
    title: 'Care to Voice Canvas Tote Bag',
    category: 'Merch',
    price: 19.99,
    rating: 5.0,
    badge: 'Eco Collection',
    description: '100% organic heavy canvas tote featuring "Choose Your Direction" typography.'
  },
  {
    id: 'merch-journal',
    title: 'Thrive Daily Reflection Journal',
    category: 'Workbooks',
    price: 22.50,
    rating: 4.9,
    badge: 'Popular',
    description: 'Premium linen-bound daily journal for emotional tracking & purpose setting.'
  },
  {
    id: 'consult-gift-voucher',
    title: 'Gift a Clarity Call Voucher',
    category: 'Coaching',
    price: 99.00,
    rating: 5.0,
    badge: 'Gift Card',
    description: 'Give a colleague or friend 45 minutes of direct coaching with Fatima.'
  }
];

export default function ShopSection({ onAddToCart, cartItems, isCartOpen, setIsCartOpen, onRemoveFromCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedItemToast, setAddedItemToast] = useState(null);

  const categories = ['All', 'Books', 'Workbooks', 'Audio', 'Merch'];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedItemToast(product.title);
    setTimeout(() => setAddedItemToast(null), 2500);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <section id="shop" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)]">
      
      {/* Toast notification */}
      {addedItemToast && (
        <div className="fixed bottom-6 right-6 z-50 glass-panel border border-amber-500/50 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
            <Check className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-500">Added to Cart!</div>
            <div className="text-xs opacity-85">{addedItemToast}</div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Thrive Collection</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-6">
            Explore the Care to Voice <span className="gradient-text-primary">Collection</span>
          </h2>

          <p className="text-base sm:text-lg opacity-85">
            Carefully curated books, guided workbooks, audio series, and merchandise designed to support your personal leadership journey.
          </p>
        </div>

        {/* Category Filter Tabs */}
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                    {product.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                <h3 className="font-serif-heading text-xl font-bold mb-2 leading-snug">
                  {product.title}
                </h3>

                <p className="text-xs opacity-75 mb-6 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div className="text-xl font-bold">
                  ${product.price.toFixed(2)}
                </div>

                <button
                  onClick={() => handleAdd(product)}
                  className="gradient-btn px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Slide-over Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-md glass-panel border-l border-[var(--border-subtle)] h-full p-6 flex flex-col justify-between shadow-2xl">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-6">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-amber-500" />
                  <h3 className="text-lg font-bold">Your Cart ({cartItems.length})</h3>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 opacity-70 hover:opacity-100">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-16 opacity-75">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm font-medium">Your cart is currently empty.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                  {cartItems.map((item, index) => (
                    <div key={index} className="glass-panel p-4 rounded-xl flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold">{item.title || item.name}</h4>
                        <div className="text-xs text-amber-500 font-mono font-bold mt-1">
                          ${item.price.toFixed(2)} x {item.quantity || 1}
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveFromCart(index)}
                        className="p-2 opacity-60 hover:text-rose-500 hover:opacity-100 transition-colors"
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
                <div className="flex items-center justify-between text-sm font-bold mb-4">
                  <span>Subtotal</span>
                  <span className="text-amber-500 text-lg">${cartTotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => alert(`Proceeding to Secure Checkout with total: $${cartTotal.toFixed(2)}`)}
                  className="w-full gradient-btn py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
