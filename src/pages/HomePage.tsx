import React, { useState, useRef } from 'react';
import { 
  ArrowUpRight, 
  Maximize2, 
  ShoppingBag, 
  Layers, 
  Activity, 
  Compass, 
  ShieldCheck, 
  ChevronUp, 
  ChevronDown, 
  Scale, 
  TrendingDown, 
  Cpu, 
  Sparkles,
  Check,
  Instagram,
  Youtube,
  Twitter,
  Grid
} from 'lucide-react';
import { PRODUCTS, ASSETS } from '../data/products';
import { useCart } from '../context/CartContext';
import { NexoraLogo } from '../components/NexoraLogo';
import { ProductColorway } from '../types';

interface HomePageProps {
  onNavigate: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { addToCart, setIsSizeGuideOpen } = useCart();
  const product = PRODUCTS[0]; // Nexora Elite 1.0

  // Hero state
  const [selectedColorway, setSelectedColorway] = useState<ProductColorway>(product.colorways[0]);
  const [heroSlide, setHeroSlide] = useState(0); // 0, 1, 2
  const [shoeTransform, setShoeTransform] = useState({ rotateX: 0, rotateY: 0, translateZ: 0 });

  // Showcase panel state
  const [showcaseImage, setShowcaseImage] = useState<string>(product.gallery[0]);
  const [showcaseSize, setShowcaseSize] = useState<number>(9.5);
  const [showcaseQty, setShowcaseQty] = useState<number>(1);
  const [activeLayer, setActiveLayer] = useState<'upper' | 'midsole' | 'outsole' | null>(null);

  // 3D Parallax tilt effect on hero shoe
  const heroCardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 16;
    const rotateY = (x / rect.width) * 18;
    setShoeTransform({ rotateX, rotateY, translateZ: 20 });
  };

  const handleMouseLeave = () => {
    setShoeTransform({ rotateX: 0, rotateY: 0, translateZ: 0 });
  };

  const handleHeroAddToCart = () => {
    addToCart(product, selectedColorway, showcaseSize, 1);
  };

  const handleShowcaseAddToCart = () => {
    addToCart(product, selectedColorway, showcaseSize, showcaseQty);
  };

  return (
    <div className="relative w-full bg-[#0D0D0D] text-white overflow-hidden min-h-screen">
      {/* ========================================================================= */}
      {/* 1. LEFT FIXED/STICKY TECH RAIL (From Reference Image)                     */}
      {/* ========================================================================= */}
      <aside className="hidden xl:flex fixed left-0 top-20 bottom-0 w-20 flex-col items-center justify-between py-8 border-r border-[#1C1E26] bg-[#0A0A0C]/90 z-30 select-none">
        {/* Top Watermark Rotated Typography */}
        <div className="flex-1 flex items-center justify-center">
          <span 
            className="font-display font-black text-2xl tracking-[0.35em] text-[#22242D] uppercase -rotate-90 whitespace-nowrap pointer-events-none select-none hover:text-[#FF1E27]/40 transition-colors"
            style={{ textShadow: '0 0 1px rgba(255,255,255,0.05)' }}
          >
            NEXORA
          </span>
        </div>

        {/* Page / Collection Indicator 01 / 03 with up/down arrows */}
        <div className="my-6 flex flex-col items-center gap-1 font-mono text-xs">
          <button 
            onClick={() => setHeroSlide((prev) => (prev > 0 ? prev - 1 : 2))}
            className="text-neutral-500 hover:text-white transition-colors cursor-pointer p-1"
            aria-label="Previous slide"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <span className="text-[#FF1E27] font-bold text-sm">0{heroSlide + 1}</span>
          <div className="w-4 h-[1px] bg-[#2E313D]" />
          <span className="text-neutral-500 text-[11px]">03</span>
          <button 
            onClick={() => setHeroSlide((prev) => (prev < 2 ? prev + 1 : 0))}
            className="text-neutral-500 hover:text-white transition-colors cursor-pointer p-1"
            aria-label="Next slide"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Social Icons & Dot Matrix */}
        <div className="flex flex-col items-center gap-4 text-neutral-400">
          <a href="#x" onClick={(e) => e.preventDefault()} className="p-1 hover:text-[#FF1E27] transition-colors" aria-label="X">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#instagram" onClick={(e) => e.preventDefault()} className="p-1 hover:text-[#FF1E27] transition-colors" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#youtube" onClick={(e) => e.preventDefault()} className="p-1 hover:text-[#FF1E27] transition-colors" aria-label="YouTube">
            <Youtube className="w-4 h-4" />
          </a>
          <div className="pt-2 text-neutral-600">
            <Grid className="w-4 h-4" />
          </div>
        </div>
      </aside>

      {/* Main Content Area (Offset for xl:ml-20 rail) */}
      <main className="xl:ml-20">
        {/* ========================================================================= */}
        {/* 2. HERO SECTION (Faithful match of reference image top area)              */}
        {/* ========================================================================= */}
        <section 
          ref={heroCardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-8 lg:px-16 pt-8 pb-16"
        >
          {/* Background Ambient Glow & Geometric Angles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Subtle red tech gradient glow in top right */}
            <div className="absolute -top-32 -right-32 w-[650px] h-[650px] bg-[#FF1E27]/15 rounded-full blur-[130px]" />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

            {/* Giant Watermark Crown / NEXORA Typography in background */}
            <div className="absolute right-10 top-16 opacity-[0.035] select-none text-white font-display font-black text-[220px] leading-none pointer-events-none">
              NEXORA
            </div>

            {/* Angular wedge graphic from reference image */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-bl from-[#FF1E27]/10 via-[#181920]/40 to-transparent pointer-events-none hidden lg:block"
              style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
            />
          </div>

          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Hero Content: Headline & Shop CTA */}
            <div className="lg:col-span-6 space-y-6">
              {/* Kicker tag with horizontal red line */}
              <div className="flex items-center gap-3">
                <span className="font-display font-bold text-xs md:text-sm tracking-[0.25em] text-[#FF1E27] uppercase">
                  ENGINEERED FOR PERFORMANCE
                </span>
                <div className="h-[2px] w-12 bg-[#FF1E27]" />
              </div>

              {/* Bold Headlines */}
              <div className="space-y-1">
                <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-white">
                  NEXORA
                </h1>
                <div className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-[#FF1E27] drop-shadow-[0_0_25px_rgba(255,30,39,0.35)]">
                  ELITE 1.0
                </div>
              </div>

              {/* Tagline */}
              <div className="pt-2">
                <p className="font-display font-bold text-xl sm:text-2xl tracking-widest text-neutral-300 uppercase leading-snug">
                  BEYOND LIMITS.<br />
                  BUILT TO WIN.
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-md mt-2 font-sans leading-relaxed">
                  The apex of athletic footwear engineering. Featuring supercritical NX Foam™ cushioning and high-traction court grip for explosive responsiveness.
                </p>
              </div>

              {/* CTA Action & Colorway Dots */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button
                  onClick={() => onNavigate('shop')}
                  className="group relative inline-flex items-center gap-3 bg-[#FF1E27] hover:bg-[#E50914] text-white px-8 py-4 font-display font-bold text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-red-600/30 hover:shadow-red-600/50 clip-button-angle active:scale-95"
                >
                  <span>SHOP NOW</span>
                  <span className="w-6 h-6 rounded bg-black/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>

                {/* Colorway Switcher */}
                <div className="flex items-center gap-2.5 bg-[#171820] border border-[#2B2D3A] px-3.5 py-2 rounded-full">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase mr-1">EDITION:</span>
                  {product.colorways.map((cw) => (
                    <button
                      key={cw.id}
                      onClick={() => setSelectedColorway(cw)}
                      className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                        selectedColorway.id === cw.id
                          ? 'border-[#FF1E27] scale-110'
                          : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: cw.hex }}
                      title={cw.name}
                    />
                  ))}
                </div>
              </div>

              {/* Pagination Dots from reference image */}
              <div className="flex items-center gap-2 pt-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF1E27] shadow-[0_0_8px_#FF1E27]" />
                <div className="w-2 h-2 rounded-full bg-neutral-600" />
                <div className="w-2 h-2 rounded-full bg-neutral-600" />
              </div>
            </div>

            {/* Right Hero Content: 3D Floating Sneaker Showcase */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              {/* Crown Signature Emblem in top right */}
              <div className="absolute top-0 right-0 sm:right-4 z-20 flex flex-col items-center text-center p-3 bg-[#13141C]/80 border border-[#262836] rounded-lg backdrop-blur-sm shadow-xl">
                <NexoraLogo size="sm" showSubtitle={false} light={true} />
                <span className="font-display font-bold text-[10px] uppercase tracking-widest text-[#FF1E27] mt-1">
                  NEXORA
                </span>
                <span className="font-display font-semibold text-[8px] uppercase tracking-wider text-neutral-300">
                  ELITE 1.0 · SIGNATURE LINE
                </span>
              </div>

              {/* The Hero Floating Sneaker with Parallax Tilt */}
              <div
                className="relative w-full max-w-lg aspect-4/3 flex items-center justify-center transition-transform duration-200 ease-out"
                style={{
                  transform: `perspective(1000px) rotateX(${shoeTransform.rotateX}deg) rotateY(${shoeTransform.rotateY}deg) scale3d(1.04, 1.04, 1.04)`,
                }}
              >
                {/* Floating shadow reflection */}
                <div className="absolute -bottom-6 w-3/4 h-8 bg-black/60 rounded-full blur-xl pointer-events-none" />

                {/* Primary Sneaker Image */}
                <img
                  src={selectedColorway.image || ASSETS.heroShoe}
                  alt="Nexora Elite 1.0"
                  className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] select-none transition-all duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Interactive Hotspot for NX Foam */}
                <div className="absolute bottom-16 left-12 group/hotspot">
                  <div className="w-5 h-5 rounded-full bg-[#FF1E27] text-white flex items-center justify-center text-xs font-bold animate-pulse cursor-pointer shadow-[0_0_15px_#FF1E27]">
                    +
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/hotspot:block w-48 p-2.5 bg-[#141620] border border-[#2D3040] rounded shadow-xl text-left pointer-events-none z-30">
                    <div className="font-display font-bold text-xs text-[#FF1E27] uppercase">NX FOAM™ CORE</div>
                    <div className="text-[11px] text-neutral-300 mt-0.5">85% Energy Return with supercritical TPU cushioning.</div>
                  </div>
                </div>

                {/* Interactive Hotspot for Nexora Grip */}
                <div className="absolute bottom-6 right-20 group/hotspot">
                  <div className="w-5 h-5 rounded-full bg-[#FF1E27] text-white flex items-center justify-center text-xs font-bold animate-pulse cursor-pointer shadow-[0_0_15px_#FF1E27]">
                    +
                  </div>
                  <div className="absolute bottom-full right-0 mb-2 hidden group-hover/hotspot:block w-52 p-2.5 bg-[#141620] border border-[#2D3040] rounded shadow-xl text-left pointer-events-none z-30">
                    <div className="font-display font-bold text-xs text-[#FF1E27] uppercase">NEXORA GRIP™ TREAD</div>
                    <div className="text-[11px] text-neutral-300 mt-0.5">Translucent icy blue high-friction court compound.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. PRODUCT SHOWCASE PANEL (Pixel-faithful reproduction of middle card)    */}
        {/* ========================================================================= */}
        <section className="px-4 sm:px-8 lg:px-16 py-12">
          <div className="max-w-7xl mx-auto">
            {/* The Crisp White / Light Technical Showcase Container */}
            <div className="bg-white text-neutral-900 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-neutral-200">
              {/* Red technical corner accents from reference design */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#FF1E27] rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#FF1E27] rounded-br-xl" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Product Thumbnail Gallery with Page Selector (01 / 03) */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative w-full aspect-4/3 bg-neutral-50 rounded-xl p-6 flex items-center justify-center border border-neutral-200 group">
                    {/* Expand icon in top right */}
                    <button 
                      onClick={() => onNavigate('shop')}
                      className="absolute top-3 right-3 p-2 rounded-lg bg-white/80 hover:bg-white text-neutral-700 hover:text-black border border-neutral-200 transition-colors cursor-pointer shadow-sm"
                      title="Inspect model"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    {/* Main Showcase Image */}
                    <img
                      src={showcaseImage}
                      alt="Nexora Elite 1.0 Detail"
                      className="max-h-56 sm:max-h-64 object-contain filter drop-shadow-md transition-all duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Thumbnail Row */}
                  <div className="flex items-center gap-3 mt-4">
                    {product.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setShowcaseImage(img)}
                        className={`w-14 h-14 rounded-lg border-2 p-1 bg-neutral-100 transition-all cursor-pointer overflow-hidden ${
                          showcaseImage === img
                            ? 'border-[#FF1E27] shadow-sm scale-105'
                            : 'border-neutral-200 hover:border-neutral-400'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Angle ${idx + 1}`}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Center: Product Specs, Price, Size & Add to Cart */}
                <div className="lg:col-span-4 space-y-4">
                  <div>
                    <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-neutral-900">
                      NEXORA ELITE 1.0
                    </h2>
                    <div className="font-mono font-bold text-2xl text-[#FF1E27] mt-1">
                      $199.99 USD
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    The Nexora Elite 1.0 is designed for athletes who demand excellence. Precision-crafted for agility, stability, and unmatched style.
                  </p>

                  {/* Metadata List */}
                  <div className="space-y-1.5 text-xs text-neutral-700 font-sans pt-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-neutral-400 font-semibold">Category:</span>
                      <span className="font-medium text-neutral-900">Performance Basketball</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-neutral-400 font-semibold">SKU:</span>
                      <span className="font-mono text-neutral-900 font-medium">NXE1.0-WBR</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-neutral-400 font-semibold">Availability:</span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        In Stock (Ships in 24h)
                      </span>
                    </div>
                  </div>

                  {/* Size Selector */}
                  <div className="pt-2">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-mono uppercase font-semibold text-neutral-500">SELECT SIZE (US)</span>
                      <button
                        onClick={() => setIsSizeGuideOpen(true)}
                        className="text-[#FF1E27] font-semibold hover:underline text-[11px]"
                      >
                        Size Guide
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0].map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setShowcaseSize(sz)}
                          className={`w-9 h-9 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                            showcaseSize === sz
                              ? 'bg-neutral-900 text-white shadow-sm'
                              : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-200'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity & Buy CTA */}
                  <div className="flex items-center gap-3 pt-3">
                    {/* Quantity dropdown */}
                    <div className="relative">
                      <select
                        value={showcaseQty}
                        onChange={(e) => setShowcaseQty(Number(e.target.value))}
                        className="h-12 px-3 pr-8 rounded-lg bg-neutral-100 border border-neutral-300 font-mono text-xs font-bold text-neutral-900 focus:outline-none focus:border-[#FF1E27] appearance-none cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5].map((q) => (
                          <option key={q} value={q}>
                            {q}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    {/* ADD TO CART Button matching reference image */}
                    <button
                      onClick={handleShowcaseAddToCart}
                      className="flex-1 h-12 bg-[#FF1E27] hover:bg-[#E50914] text-white px-6 font-display font-bold text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-md hover:shadow-red-600/30 flex items-center justify-center gap-2 rounded-lg"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO CART</span>
                    </button>
                  </div>
                </div>

                {/* Right: Spec Highlights Grid from reference image */}
                <div className="lg:col-span-3 space-y-4 bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                  <h3 className="font-display font-bold text-xs uppercase tracking-widest text-neutral-500 pb-2 border-b border-neutral-200">
                    TECHNICAL SPECIFICATIONS
                  </h3>

                  <div className="space-y-4 text-xs">
                    {/* Weight */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-neutral-200 text-neutral-700">
                        <Scale className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-800">Weight (US 9):</div>
                        <div className="font-mono text-neutral-600">13.4 oz / 380 g</div>
                      </div>
                    </div>

                    {/* Heel to Toe Drop */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-neutral-200 text-neutral-700">
                        <TrendingDown className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-800">Heel to Toe Drop:</div>
                        <div className="font-mono text-neutral-600">8 mm</div>
                      </div>
                    </div>

                    {/* Outsole Tech */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-neutral-200 text-neutral-700">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-800">Tech:</div>
                        <div className="text-neutral-600">Nexora Grip™ Outsole</div>
                      </div>
                    </div>

                    {/* Cushioning */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-neutral-200 text-neutral-700">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-800">Cushioning:</div>
                        <div className="text-neutral-600">NX Foam™ Midsole</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. FEATURES & SPECS BREAKDOWN (Exploded / Layered View from Reference)   */}
        {/* ========================================================================= */}
        <section className="px-4 sm:px-8 lg:px-16 py-16 bg-[#0B0C10] border-t border-b border-[#1C1E26]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Performance Features */}
              <div className="lg:col-span-4 space-y-6">
                <div className="border-b border-[#232530] pb-3">
                  <h3 className="font-display font-black text-xl uppercase tracking-wider text-white">
                    PERFORMANCE FEATURES
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Calibrated specifically for rapid lateral cuts and vertical force absorption.
                  </p>
                </div>

                <div className="space-y-4">
                  <div 
                    onClick={() => setActiveLayer('midsole')}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      activeLayer === 'midsole'
                        ? 'bg-[#181922] border-[#FF1E27]'
                        : 'bg-[#12131A] border-[#222430] hover:border-neutral-500'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FF1E27]/10 flex items-center justify-center text-[#FF1E27] font-bold">
                        <Layers className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-white uppercase">
                        NX FOAM™ MIDSOLE
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      Superior energy return and impact protection during violent landing mechanics.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActiveLayer('outsole')}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      activeLayer === 'outsole'
                        ? 'bg-[#181922] border-[#FF1E27]'
                        : 'bg-[#12131A] border-[#222430] hover:border-neutral-500'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FF1E27]/10 flex items-center justify-center text-[#FF1E27] font-bold">
                        <Activity className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-white uppercase">
                        NEXORA GRIP™ OUTSOLE
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      Multi-directional traction engineered for zero-slip court deceleration.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActiveLayer('upper')}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      activeLayer === 'upper'
                        ? 'bg-[#181922] border-[#FF1E27]'
                        : 'bg-[#12131A] border-[#222430] hover:border-neutral-500'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FF1E27]/10 flex items-center justify-center text-[#FF1E27] font-bold">
                        <Compass className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-white uppercase">
                        DYNAMIC FIT SYSTEM
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      Locked-in midfoot comfort with adaptive biometric support straps.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActiveLayer('upper')}
                    className="p-4 rounded-xl bg-[#12131A] border border-[#222430] hover:border-neutral-500 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FF1E27]/10 flex items-center justify-center text-[#FF1E27] font-bold">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-white uppercase">
                        BREATHABLE ENGINEERED MESH
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      Lightweight, durable, and ventilated for peak cooling through 4 quarters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Column: Exploded Component View */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
                <div className="w-full bg-[#12131B] border border-[#232533] rounded-2xl p-6 relative overflow-hidden flex flex-col items-center">
                  {/* Technical Alignment Crosshairs from reference design */}
                  <div className="absolute top-4 left-4 text-neutral-600 font-mono text-xs">+</div>
                  <div className="absolute top-4 right-4 text-neutral-600 font-mono text-xs">+</div>
                  <div className="absolute bottom-4 left-4 text-neutral-600 font-mono text-xs">+</div>
                  <div className="absolute bottom-4 right-4 text-neutral-600 font-mono text-xs">+</div>

                  <div className="text-center mb-3">
                    <span className="font-mono text-[10px] tracking-widest text-[#FF1E27] uppercase">
                      SCHEMATIC DECONSTRUCTION
                    </span>
                    <h4 className="font-display font-bold text-sm text-white uppercase">
                      MODULAR LAYER STACK
                    </h4>
                  </div>

                  {/* Exploded Layers Graphic */}
                  <div className="relative w-full aspect-square flex items-center justify-center">
                    <img
                      src={ASSETS.explodedLayers}
                      alt="Nexora Exploded Component Deconstruction"
                      className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex gap-2 mt-4 text-[10px] font-mono">
                    <button
                      onClick={() => setActiveLayer('upper')}
                      className={`px-3 py-1 rounded transition-colors ${
                        activeLayer === 'upper' ? 'bg-[#FF1E27] text-white' : 'bg-[#1C1E2A] text-neutral-400'
                      }`}
                    >
                      01. UPPER
                    </button>
                    <button
                      onClick={() => setActiveLayer('midsole')}
                      className={`px-3 py-1 rounded transition-colors ${
                        activeLayer === 'midsole' ? 'bg-[#FF1E27] text-white' : 'bg-[#1C1E2A] text-neutral-400'
                      }`}
                    >
                      02. MIDSOLE
                    </button>
                    <button
                      onClick={() => setActiveLayer('outsole')}
                      className={`px-3 py-1 rounded transition-colors ${
                        activeLayer === 'outsole' ? 'bg-[#FF1E27] text-white' : 'bg-[#1C1E2A] text-neutral-400'
                      }`}
                    >
                      03. OUTSOLE
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Material Composition Breakdown */}
              <div className="lg:col-span-4 space-y-6">
                <div className="border-b border-[#232530] pb-3">
                  <h3 className="font-display font-black text-xl uppercase tracking-wider text-white">
                    MATERIAL COMPOSITION
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Certified athletic compounds tested under ISO biomechanical standards.
                  </p>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="p-3.5 bg-[#12131A] border border-[#232530] rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-neutral-400 uppercase text-[10px]">Upper Construction</div>
                      <div className="text-white font-bold text-sm mt-0.5">Engineered Mesh / TPU</div>
                    </div>
                    <span className="text-[#FF1E27] font-bold">42%</span>
                  </div>

                  <div className="p-3.5 bg-[#12131A] border border-[#232530] rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-neutral-400 uppercase text-[10px]">Interior Lining</div>
                      <div className="text-white font-bold text-sm mt-0.5">Breathable Textile</div>
                    </div>
                    <span className="text-[#FF1E27] font-bold">18%</span>
                  </div>

                  <div className="p-3.5 bg-[#12131A] border border-[#232530] rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-neutral-400 uppercase text-[10px]">Midsole Cushion</div>
                      <div className="text-white font-bold text-sm mt-0.5">NX Foam™ (EVA Blend)</div>
                    </div>
                    <span className="text-[#FF1E27] font-bold">25%</span>
                  </div>

                  <div className="p-3.5 bg-[#12131A] border border-[#232530] rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-neutral-400 uppercase text-[10px]">Outsole Compound</div>
                      <div className="text-white font-bold text-sm mt-0.5">High-Performance Rubber</div>
                    </div>
                    <span className="text-[#FF1E27] font-bold">12%</span>
                  </div>

                  <div className="p-3.5 bg-[#12131A] border border-[#232530] rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-neutral-400 uppercase text-[10px]">Insole Footbed</div>
                      <div className="text-white font-bold text-sm mt-0.5">Ortholite® Hybrid</div>
                    </div>
                    <span className="text-[#FF1E27] font-bold">3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. TECHNOLOGY BANNER (NEXORA GRIP™ OUTSOLE Close-up from Reference Image) */}
        {/* ========================================================================= */}
        <section className="relative px-4 sm:px-8 lg:px-16 py-16 bg-[#08090C] overflow-hidden">
          {/* Subtle blue / red lighting backdrop */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-blue-700/10 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#FF1E27]/10 blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0F1118] border border-[#222533] rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left: Close-up Zoom Outsole Image */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-16/9 sm:aspect-16/10 rounded-xl overflow-hidden border border-[#2B2F40] shadow-2xl group">
                    <img
                      src={ASSETS.outsoleTread}
                      alt="Nexora Grip Outsole Close-up Tread"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 text-[11px] font-mono text-neutral-300">
                      NEXORA TORSION SHANK CORE
                    </div>
                  </div>
                </div>

                {/* Right: Outsole Technology Details */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="space-y-1">
                    <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-[#FF1E27]">
                      INNOVATION THAT MOVES YOU
                    </span>
                    <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                      NEXORA GRIP™ OUTSOLE
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed max-w-xl">
                    Advanced traction pattern designed for explosive movements and total court control. Formulated with a proprietary polymer blend that generates 38% higher static and kinetic friction coefficient on high-speed directional cuts.
                  </p>

                  {/* 3 Key Feature Tags from Reference Image */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#232738]">
                    <div className="p-3 bg-[#161824] rounded-lg border border-[#292D3E] space-y-1">
                      <div className="text-[#FF1E27] font-bold text-xs">01. TRACTION</div>
                      <div className="text-white font-display font-semibold text-xs uppercase">
                        Multi-Directional
                      </div>
                      <div className="text-[11px] text-neutral-400">Herringbone sipes for instant cuts.</div>
                    </div>

                    <div className="p-3 bg-[#161824] rounded-lg border border-[#292D3E] space-y-1">
                      <div className="text-[#FF1E27] font-bold text-xs">02. COMPOUND</div>
                      <div className="text-white font-display font-semibold text-xs uppercase">
                        Enhanced Durability
                      </div>
                      <div className="text-[11px] text-neutral-400">Resistant to high abrasion surfaces.</div>
                    </div>

                    <div className="p-3 bg-[#161824] rounded-lg border border-[#292D3E] space-y-1">
                      <div className="text-[#FF1E27] font-bold text-xs">03. CONTROL</div>
                      <div className="text-white font-display font-semibold text-xs uppercase">
                        Superior Grip
                      </div>
                      <div className="text-[11px] text-neutral-400">Engineered dust shedding channels.</div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('technology')}
                      className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#FF1E27] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>EXPLORE BIOMECHANICS LAB SPECS</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
