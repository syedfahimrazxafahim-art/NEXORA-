import React, { useState } from 'react';
import { ArrowRight, Trophy, Zap, Shield, Flame } from 'lucide-react';
import { PRODUCTS, ASSETS } from '../data/products';
import { useCart } from '../context/CartContext';

interface CollectionsPageProps {
  onNavigateToShop: () => void;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({ onNavigateToShop }) => {
  const { setQuickViewProduct } = useCart();
  const [selectedPillar, setSelectedPillar] = useState<'signature' | 'performance' | 'limited'>('signature');

  const collections = [
    {
      id: 'signature',
      title: 'THE SIGNATURE LINE',
      subtitle: 'NEXORA ELITE 1.0 SERIES',
      tagline: 'Crafted for franchise cornerstones and elite court commanders.',
      icon: Trophy,
      heroImage: ASSETS.heroShoe,
      products: PRODUCTS.filter((p) => p.collection === 'Signature Line'),
      stats: [
        { label: 'Energy Return', val: '85%' },
        { label: 'Impact Absorption', val: '94 Gs' },
        { label: 'Torsional Rigidity', val: 'Level 5' },
      ],
      description: 'The definitive pinnacle of our basketball engineering program. Tested in over 500 game hours with top draft prospects and premier international players.',
    },
    {
      id: 'performance',
      title: 'PERFORMANCE LAB SERIES',
      subtitle: 'VELOCITY CR-7 & APEX ZERO',
      tagline: 'Ultralight compounds engineered for speed, endurance, and multi-surface stamina.',
      icon: Zap,
      heroImage: ASSETS.crimsonShoe,
      products: PRODUCTS.filter((p) => p.collection === 'Performance'),
      stats: [
        { label: 'Shoe Weight', val: '10.8 oz' },
        { label: 'Drop Offset', val: '6 mm' },
        { label: 'Aerodynamic Drag', val: '-14%' },
      ],
      description: 'Designed for guards and sprinters requiring featherweight momentum and instant explosive rebound.',
    },
    {
      id: 'limited',
      title: 'LIMITED EDITION RELEASES',
      subtitle: 'STEALTH PRO CARBON CAPSULE',
      tagline: 'Triple-black ballistic weave with serialized carbon fiber shank plates.',
      icon: Flame,
      heroImage: ASSETS.stealthShoe,
      products: PRODUCTS.filter((p) => p.collection === 'Limited Edition'),
      stats: [
        { label: 'Molded Quantity', val: '1,000 Pairs' },
        { label: 'Chassis Material', val: 'Toray T700' },
        { label: 'Certification', val: 'Numbered' },
      ],
      description: 'Stripped down of all external paint for raw stealth dominance. Features our stiffest full-length carbon torsion shank.',
    },
  ];

  const currentCol = collections.find((c) => c.id === selectedPillar) || collections[0];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="border-b border-[#232532] pb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF1E27]">
            CURATED ATHLETIC LINEUPS
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white mt-1">
            NEXORA COLLECTIONS
          </h1>
          <p className="text-neutral-400 text-sm max-w-2xl mt-2">
            Explore dedicated footwear series engineered for specific playing archetypes, from physical paint anchors to lightning-quick playmakers.
          </p>

          {/* Collection Pillar Selector */}
          <div className="flex flex-wrap gap-3 mt-6">
            {collections.map((col) => {
              const Icon = col.icon;
              return (
                <button
                  key={col.id}
                  onClick={() => setSelectedPillar(col.id as any)}
                  className={`px-5 py-3 rounded-lg font-display text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all cursor-pointer ${
                    selectedPillar === col.id
                      ? 'bg-[#FF1E27] text-white shadow-lg shadow-red-600/30'
                      : 'bg-[#151722] text-neutral-400 hover:text-white border border-[#262838]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{col.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Showcase of Selected Collection */}
        <div className="bg-[#12131C] border border-[#232635] rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info & Metrics */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#FF1E27] uppercase tracking-widest">
                  {currentCol.subtitle}
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mt-1">
                  {currentCol.title}
                </h2>
                <p className="text-neutral-300 text-sm mt-3 leading-relaxed">
                  {currentCol.description}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-[#181A25] rounded-xl border border-[#272A3B]">
                {currentCol.stats.map((s, idx) => (
                  <div key={idx} className="text-center">
                    <div className="font-mono font-bold text-lg text-[#FF1E27]">{s.val}</div>
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={onNavigateToShop}
                  className="px-6 py-3.5 bg-[#FF1E27] hover:bg-[#E50914] text-white font-display font-bold text-xs uppercase tracking-widest rounded transition-all flex items-center gap-2 cursor-pointer shadow-md hover:shadow-red-600/30"
                >
                  <span>SHOP FULL CAPSULE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full aspect-4/3 max-w-md bg-[#181A26] rounded-xl p-8 flex items-center justify-center border border-[#292D3E] group">
                <img
                  src={currentCol.heroImage}
                  alt={currentCol.title}
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Collection Products Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white">
              INCLUDED MODELS IN THIS CAPSULE
            </h3>
            <span className="text-xs font-mono text-neutral-400">
              Verified Authenticity & Factory Warrantied
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCol.products.map((p) => (
              <div
                key={p.id}
                onClick={() => setQuickViewProduct(p)}
                className="bg-[#13141D] border border-[#232634] hover:border-[#383C50] rounded-xl p-5 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="aspect-4/3 bg-[#181A26] rounded-lg p-4 flex items-center justify-center mb-4">
                  <img
                    src={p.primaryImage}
                    alt={p.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-400">{p.category}</span>
                    <span className="text-[#FF1E27] font-bold">${p.price.toFixed(2)}</span>
                  </div>
                  <h4 className="font-display font-bold text-base uppercase text-white group-hover:text-[#FF1E27] transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-1">{p.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
