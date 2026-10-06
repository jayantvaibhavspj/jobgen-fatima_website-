import React, { useState } from 'react';
import { ShoppingBag, Star, Plus, Check, ShoppingCart, X, Trash2, ArrowRight, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionBackground from './SectionBackground';

const PRODUCTS = [
  {
    "id": "book-hardcover",
    "title": "Be The Reason You Thrive (Author Signed Hardcover)",
    "category": "Books",
    "price": 24.99,
    "rating": 5,
    "badge": "Signed Author Edition",
    "image": "https://static.wixstatic.com/media/68c1c8_ba18aae42a4143ae829b2ff0693662bc~mv2.avif/v1/fill/w_532,h_848,al_c,q_85,enc_avif,quality_auto/Be%20the%20Reason%20You%20Thrive%20-%20Book.avif",
    "description": "Official signed edition by Fatima Y. Abreu. Master self-leadership, career pivot positioning, and inner alignment.",
    "buyUrl": "https://www.caretovoice.com/product-page/be-the-reason-you-thrive"
  },
  {
    "id": "care-puzzle-relaxed-tee-female",
    "title": "CARE Puzzle | Female Relaxed Fit T-Shirt",
    "category": "Apparel",
    "price": 28,
    "rating": 4.9,
    "badge": "Relaxed Fit",
    "image": "https://static.wixstatic.com/media/68c1c8_da7191c9a9a84423af2d730e3f421144~mv2.png/v1/crop/x_0,y_0,w_1414,h_1966/fill/w_500,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_da7191c9a9a84423af2d730e3f421144~mv2.png",
    "description": "Lead From The Inside Out with Fatima's signature CARE puzzle artwork: Comfort, Ambition, Renewal, Equilibrium.",
    "buyUrl": "https://www.redbubble.com/i/t-shirt/CARE-Puzzle-Female-by-Fatimaabreu/176898755.NE00P"
  },
  {
    "id": "confusion-clarity-fitted-tee",
    "title": "Confusion & Clarity | Fitted T-Shirt",
    "category": "Apparel",
    "price": 26,
    "rating": 4.9,
    "badge": "Fitted Fit",
    "image": "https://static.wixstatic.com/media/68c1c8_0522050c727b4dddad2d84f847dd914b~mv2.png/v1/fill/w_500,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(27).png",
    "description": "Minimalist philosophical artwork exploring the transformational journey where reflection becomes lasting power.",
    "buyUrl": "https://www.redbubble.com/i/t-shirt/Confusion-and-Clarity-by-Fatimaabreu/176611926.EEZDA"
  },
  {
    "id": "enabler-fitted-vneck-tee",
    "title": "Enabler | Fitted V-Neck T-Shirt",
    "category": "Apparel",
    "price": 27,
    "rating": 4.9,
    "badge": "V-Neck",
    "image": "https://static.wixstatic.com/media/68c1c8_52ff3fbeb0174facb5e2cc611feedcfc~mv2.png/v1/crop/x_0,y_17,w_1414,h_1972/fill/w_500,h_697,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(1).png",
    "description": "Clean silhouette featuring Fatima's empowering statement: \"Enablers Build Momentum | Be An Enabler\".",
    "buyUrl": "https://www.redbubble.com/i/t-shirt/Enabler-by-Fatimaabreu/176897708.L1PUX"
  },
  {
    "id": "dodecahedron-relaxed-tee",
    "title": "The Dodecahedron | Relaxed Fit T-Shirt",
    "category": "Apparel",
    "price": 28,
    "rating": 4.9,
    "badge": "Relaxed Fit",
    "image": "https://static.wixstatic.com/media/68c1c8_ee2773eab4c24e72b0e4b777b3ad4d6d~mv2.png/v1/crop/x_0,y_0,w_1414,h_1892/fill/w_500,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(2).png",
    "description": "Geometric 12-sided polyhedron artwork celebrating creative friction: \"Chaos + Creativity = Magic\".",
    "buyUrl": "https://www.redbubble.com/i/t-shirt/The-Dodecahedron-by-Fatimaabreu/176898274.ZQTF0"
  },
  {
    "id": "confusion-clarity-boxy-tee",
    "title": "Confusion & Clarity | Boxy T-Shirt",
    "category": "Apparel",
    "price": 28,
    "rating": 4.8,
    "badge": "Boxy Cut",
    "image": "https://static.wixstatic.com/media/68c1c8_d3733858cf9344ff92b09b2128ec07b3~mv2.png/v1/crop/x_0,y_0,w_1414,h_1890/fill/w_500,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(4).png",
    "description": "Modern relaxed boxy cut heavyweight tee with high-contrast Confusion & Clarity duality graphic.",
    "buyUrl": "https://www.redbubble.com/i/t-shirt/Confusion-and-Clarity-by-Fatimaabreu/176611926.LPB90"
  },
  {
    "id": "dodecahedron-boxy-tee",
    "title": "The Dodecahedron | Boxy T-Shirt",
    "category": "Apparel",
    "price": 28,
    "rating": 4.8,
    "badge": "Boxy Cut",
    "image": "https://static.wixstatic.com/media/68c1c8_acee1d4ac3474b0cb4ce381d288d035a~mv2.png/v1/crop/x_0,y_0,w_1414,h_1890/fill/w_500,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_acee1d4ac3474b0cb4ce381d288d035a~mv2.png",
    "description": "Boxy streetwear silhouette displaying Fatima's intricate geometric creative alignment motif.",
    "buyUrl": "https://www.redbubble.com/i/t-shirt/The-Dodecahedron-by-Fatimaabreu/176898274.3KEDS"
  },
  {
    "id": "care-puzzle-tank-female",
    "title": "CARE Puzzle | Female Racerback Tank Top",
    "category": "Apparel",
    "price": 24,
    "rating": 4.9,
    "badge": "Racerback",
    "image": "https://static.wixstatic.com/media/68c1c8_aa83208c0b1c434384af9762753ab9ed~mv2.png/v1/fill/w_500,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(24).png",
    "description": "Lightweight performance racerback tank showcasing the four core CARE self-leadership dimensions.",
    "buyUrl": "https://www.redbubble.com/i/tank-top/CARE-Puzzle-Female-by-Fatimaabreu/176898755.IXNXQ"
  },
  {
    "id": "dodecahedron-tank",
    "title": "The Dodecahedron | Racerback Tank Top",
    "category": "Apparel",
    "price": 24,
    "rating": 4.9,
    "badge": "Racerback",
    "image": "https://static.wixstatic.com/media/68c1c8_53644cb173cc43c0ad14ae893c9833ac~mv2.png/v1/fill/w_500,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(25).png",
    "description": "Soft breathable tank designed for active workouts and mindful focus sessions.",
    "buyUrl": "https://www.redbubble.com/i/tank-top/The-Dodecahedron-by-Fatimaabreu/176898274.N283C"
  },
  {
    "id": "confusion-clarity-tank",
    "title": "Confusion & Clarity | Racerback Tank Top",
    "category": "Apparel",
    "price": 24,
    "rating": 4.8,
    "badge": "Racerback",
    "image": "https://static.wixstatic.com/media/68c1c8_f66cf94a019e4aecb9072c0d71664462~mv2.png/v1/fill/w_500,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(26).png",
    "description": "Minimalist athletic tank top featuring philosophical clarity and purpose emblem.",
    "buyUrl": "https://www.redbubble.com/i/tank-top/Confusion-and-Clarity-by-Fatimaabreu/176611926.PQIVH"
  },
  {
    "id": "care-puzzle-hoodie-female",
    "title": "CARE Puzzle | Female Pullover Hoodie",
    "category": "Apparel",
    "price": 48,
    "rating": 5,
    "badge": "Outerwear",
    "image": "https://static.wixstatic.com/media/68c1c8_aa149c3dd5774e5685df028a7bed05c1~mv2.png/v1/crop/x_0,y_0,w_1414,h_1890/fill/w_500,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(8).png",
    "description": "Premium heavyweight cotton fleece hoodie with signature CARE puzzle alignment print.",
    "buyUrl": "https://www.redbubble.com/i/hoodie/CARE-Puzzle-Female-by-Fatimaabreu/176898755.YFBT8"
  },
  {
    "id": "confusion-clarity-zipped-hoodie",
    "title": "Confusion & Clarity | Zipped Hoodie",
    "category": "Apparel",
    "price": 52,
    "rating": 5,
    "badge": "Zip Hoodie",
    "image": "https://static.wixstatic.com/media/68c1c8_5db67b6f38034d45afe4e930d33f21ca~mv2.png/v1/crop/x_0,y_0,w_1414,h_1890/fill/w_506,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(9).png",
    "description": "Plush brushed fleece zip-up hoodie featuring dual-perspective clarity back artwork.",
    "buyUrl": "https://www.redbubble.com/i/hoodie/Confusion-and-Clarity-by-Fatimaabreu/176611926.AJ57R"
  },
  {
    "id": "dodecahedron-hoodie-oversized",
    "title": "The Dodecahedron | Premium Oversized Hoodie",
    "category": "Apparel",
    "price": 54,
    "rating": 5,
    "badge": "Oversized Fleece",
    "image": "https://static.wixstatic.com/media/68c1c8_68a2f0c807ec4acc83b3e04a9ac704a0~mv2.png/v1/crop/x_0,y_0,w_1414,h_1874/fill/w_506,h_671,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_68a2f0c807ec4acc83b3e04a9ac704a0~mv2.png",
    "description": "Ultra-warm relaxed hoodie featuring geometric dodecahedron creative symbolism on reverse.",
    "buyUrl": "https://www.redbubble.com/i/hoodie/The-Dodecahedron-by-Fatimaabreu/176898274.G7SLU"
  },
  {
    "id": "confusion-clarity-baseball-tee",
    "title": "Confusion & Clarity | Baseball ¾ Sleeve T-Shirt",
    "category": "Apparel",
    "price": 30,
    "rating": 4.8,
    "badge": "Raglan ¾ Sleeve",
    "image": "https://static.wixstatic.com/media/68c1c8_acd58abe601e42bca8af06e79349c2c4~mv2.png/v1/crop/x_0,y_0,w_1414,h_1890/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(12).png",
    "description": "Two-tone contrast raglan baseball shirt with purposeful inner reflection artwork.",
    "buyUrl": "https://www.redbubble.com/i/t-shirt/Confusion-and-Clarity-by-Fatimaabreu/176611926.TR8D9"
  },
  {
    "id": "care-puzzle-tee-male",
    "title": "CARE Puzzle | Male Oversized T-Shirt",
    "category": "Apparel",
    "price": 30,
    "rating": 4.8,
    "badge": "Unisex Oversized",
    "image": "https://static.wixstatic.com/media/68c1c8_f86da860aa704abf9988f0efcfe8f867~mv2.png/v1/crop/x_0,y_0,w_1414,h_1866/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_f86da860aa704abf9988f0efcfe8f867~mv2.png",
    "description": "Drop-shoulder street cut tee with executive CARE leadership graphics.",
    "buyUrl": "https://www.redbubble.com/i/t-shirt/CARE-Puzzle-Male-by-Fatimaabreu/176900149.74GE1"
  },
  {
    "id": "dodecahedron-active-tee",
    "title": "The Dodecahedron | Active T-Shirt",
    "category": "Apparel",
    "price": 29,
    "rating": 4.9,
    "badge": "Activewear",
    "image": "https://static.wixstatic.com/media/68c1c8_d9dc5179c6d442e18e5cbcbad9e7c27a~mv2.png/v1/crop/x_0,y_22,w_1414,h_1934/fill/w_506,h_669,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(15).png",
    "description": "Moisture-wicking athletic performance tee engineered for high energy and clarity.",
    "buyUrl": "https://www.redbubble.com/i/t-shirt/The-Dodecahedron-by-Fatimaabreu/176898274.UGYPM"
  },
  {
    "id": "confusion-clarity-backpack",
    "title": "Confusion & Clarity | Backpack",
    "category": "Accessories",
    "price": 54,
    "rating": 5,
    "badge": "Travel Gear",
    "image": "https://static.wixstatic.com/media/68c1c8_31901eb3afb64ba982b4c9b7811bdc0a~mv2.png/v1/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(16).png",
    "description": "Ergonomic commuter backpack with padded laptop sleeve and distinctive reflective clarity design.",
    "buyUrl": "https://www.redbubble.com/i/backpack/Confusion-and-Clarity-by-Fatimaabreu/176611926.K1KHE"
  },
  {
    "id": "care-puzzle-backpack-female",
    "title": "CARE Puzzle | Female Backpack",
    "category": "Accessories",
    "price": 54,
    "rating": 5,
    "badge": "Travel Gear",
    "image": "https://static.wixstatic.com/media/68c1c8_b83b33a3dce84b30a7ce92796b4b3105~mv2.png/v1/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(19).png",
    "description": "Durable reinforced backpack designed for traveling executives and purpose-driven coaches.",
    "buyUrl": "https://www.redbubble.com/i/backpack/CARE-Puzzle-Female-by-Fatimaabreu/176898755.K1KHE"
  },
  {
    "id": "dodecahedron-tote-bag",
    "title": "The Dodecahedron | Tote Bag",
    "category": "Accessories",
    "price": 22,
    "rating": 4.8,
    "badge": "Canvas Tote",
    "image": "https://static.wixstatic.com/media/68c1c8_76c7e1fdc43844c599eae2cd46c87279~mv2.png/v1/crop/x_0,y_0,w_1414,h_1866/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(20).png",
    "description": "Heavyweight organic cotton tote featuring geometric creativity diagram.",
    "buyUrl": "https://www.redbubble.com/i/tote-bag/The-Dodecahedron-by-Fatimaabreu/176898274.PJQVX"
  },
  {
    "id": "care-puzzle-tote-female",
    "title": "CARE Puzzle | Female Tote Bag",
    "category": "Accessories",
    "price": 22,
    "rating": 4.9,
    "badge": "Canvas Tote",
    "image": "https://static.wixstatic.com/media/68c1c8_1d1a9b9e9e874b6e9601361adbb68ba7~mv2.png/v1/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(21).png",
    "description": "Spacious canvas carryall celebrating Fatima's \"Lead From The Inside Out\" CARE philosophy.",
    "buyUrl": "https://www.redbubble.com/i/tote-bag/CARE-Puzzle-Female-by-Fatimaabreu/176898755.A9G4R"
  },
  {
    "id": "enabler-tote-bag",
    "title": "Enabler | Tote Bag",
    "category": "Accessories",
    "price": 22,
    "rating": 4.9,
    "badge": "Canvas Tote",
    "image": "https://static.wixstatic.com/media/68c1c8_295bfbc2b8eb46a4bf9af1d3ce9f8471~mv2.png/v1/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(22).png",
    "description": "Durable daily carry tote with bold enabler manifesto typography for leaders who take action.",
    "buyUrl": "https://www.redbubble.com/i/tote-bag/Enabler-by-Fatimaabreu/176897708.P1QBH"
  },
  {
    "id": "confusion-clarity-tote-bag",
    "title": "Confusion & Clarity | Tote Bag",
    "category": "Accessories",
    "price": 22,
    "rating": 4.9,
    "badge": "Canvas Tote",
    "image": "https://static.wixstatic.com/media/68c1c8_321f8585c3974f3a83b88f7ba9872706~mv2.png/v1/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shop%20Products%20(23).png",
    "description": "Minimalist shopper tote bag with double-sided reflection artwork.",
    "buyUrl": "https://www.redbubble.com/i/tote-bag/Confusion-and-Clarity-by-Fatimaabreu/176611926.P1QBH"
  },
  {
    "id": "care-puzzle-female-cases-prints",
    "title": "Phone Cases, Prints & Accessories | CARE Puzzle Female",
    "category": "Accessories",
    "price": 18,
    "rating": 5,
    "badge": "Prints & Tech",
    "image": "https://static.wixstatic.com/media/68c1c8_d0363b70d53c40f397cda917d40ee649~mv2.png/v1/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Official%20Art%20%20-%20Care%20to%20Voice%20(12).png",
    "description": "Official Redbubble collection: iPhone & Samsung phone cases, museum-grade art prints, mugs, and notebooks.",
    "buyUrl": "https://www.redbubble.com/shop/ap/176898755"
  },
  {
    "id": "care-puzzle-male-cases-prints",
    "title": "Phone Cases, Prints & Accessories | CARE Puzzle Male",
    "category": "Accessories",
    "price": 18,
    "rating": 5,
    "badge": "Prints & Tech",
    "image": "https://static.wixstatic.com/media/68c1c8_ecf7aa13364b473380e9da5bb80f1645~mv2.png/v1/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Official%20Art%20%20-%20Care%20to%20Voice%20(13).png",
    "description": "Official masculine CARE puzzle phone cases, desk mats, wall art tapestries, and accessories.",
    "buyUrl": "https://www.redbubble.com/shop/ap/176900149"
  },
  {
    "id": "enabler-cases-prints",
    "title": "Phone Cases, Prints & Accessories | Enabler",
    "category": "Accessories",
    "price": 18,
    "rating": 5,
    "badge": "Prints & Tech",
    "image": "https://static.wixstatic.com/media/68c1c8_4704973d4cec42259e7f22780c0c6b8e~mv2.png/v1/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Official%20Art%20%20-%20Care%20to%20Voice%20(14).png",
    "description": "Empowerment merchandise: tech cases, desk prints, vinyl stickers, and journal accessories.",
    "buyUrl": "https://www.redbubble.com/shop/ap/176897708"
  },
  {
    "id": "confusion-clarity-cases-prints",
    "title": "Phone Cases, Prints & Accessories | Confusion & Clarity",
    "category": "Accessories",
    "price": 18,
    "rating": 5,
    "badge": "Prints & Tech",
    "image": "https://static.wixstatic.com/media/68c1c8_1cc80184f4d6495089d2467115946758~mv2.png/v1/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Official%20Art%20%20-%20Care%20to%20Voice%20(15).png",
    "description": "Minimalist philosophy phone skins, hardcover journals, wall art posters, and stationery.",
    "buyUrl": "https://www.redbubble.com/shop/ap/176611926"
  },
  {
    "id": "dodecahedron-cases-prints",
    "title": "Phone Cases, Prints & Accessories | The Dodecahedron",
    "category": "Accessories",
    "price": 18,
    "rating": 5,
    "badge": "Prints & Tech",
    "image": "https://static.wixstatic.com/media/68c1c8_c99341cbe69a4f9eb2f6436a6b4c2126~mv2.png/v1/fill/w_506,h_668,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Official%20Art%20%20-%20Care%20to%20Voice%20(16).png",
    "description": "Intricate 3D geometric art cases, canvas prints, tapestries, and premium office goods.",
    "buyUrl": "https://www.redbubble.com/shop/ap/176898274"
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

  const categories = ['All', 'Books', 'Apparel', 'Accessories'];

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
    <section id="shop" className="py-24 relative overflow-hidden border-t border-slate-200/80 text-slate-900">
      
      {/* Bespoke Dynamic Background */}
      <SectionBackground variant="light" />

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
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${selectedCategory === cat
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
          {filteredProducts.map((product) => {
            const isBook = product.id === 'book-hardcover';
            return (
              <div
                key={product.id}
                onClick={() => {
                  if (isBook) {
                    handleAdd(product);
                  } else {
                    window.open(product.buyUrl || 'https://www.redbubble.com/people/Fatimaabreu/shop', '_blank');
                  }
                }}
                className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between group/card cursor-pointer"
              >
                <div>
                  {/* Product Image Container */}
                  <div className="relative mb-5 rounded-2xl overflow-hidden bg-white h-80 sm:h-[360px] flex items-center justify-center border border-slate-200/80 shadow-sm p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      decoding="async"
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

                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold mb-2 leading-snug text-slate-900 group-hover/card:text-amber-700 transition-colors">
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

                  {isBook ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAdd(product);
                      }}
                      className="gradient-btn px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md hover:scale-105 transition-transform text-slate-950"
                    >
                      <Plus className="w-3.5 h-3.5 text-slate-950" />
                      <span>Add to Cart</span>
                    </button>
                  ) : (
                    <a
                      href={product.buyUrl || 'https://www.redbubble.com/people/Fatimaabreu/shop'}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="gradient-btn px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md hover:scale-105 transition-transform text-slate-950"
                    >
                      <span>Product Details</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Store Button (On Home Page) */}
        {isHomePage && (
          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate && onNavigate('shop')}
              className="gradient-btn px-8 py-4 rounded-full text-sm font-bold inline-flex items-center gap-3 shadow-xl hover:scale-105 transition-transform"
            >
              <span>Explore All Merchandise & Store (27 Items)</span>
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
