import React from 'react';
import { Target, Award, Users, Compass, Globe2, ArrowRight } from 'lucide-react';
import { NexoraLogo } from '../components/NexoraLogo';
import { ASSETS } from '../data/products';

interface AboutPageProps {
  onNavigateToShop: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateToShop }) => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="border-b border-[#232532] pb-10">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF1E27] font-semibold">
              ORIGIN & PHILOSOPHY
            </span>
            <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
              BORN IN THE LAB.<br />
              PROVEN ON THE HARDWOOD.
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Nexora was founded by a collective of elite biomechanics engineers, polymer chemists, and former professional basketball athletes who refused to accept the status quo of heavy, sluggish court footwear.
            </p>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#12131B] border border-[#232633] rounded-xl p-6 sm:p-8 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF1E27]/10 flex items-center justify-center text-[#FF1E27]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg uppercase text-white">
              BIOMECHANICAL PRECISION
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every shoe begins with high-frequency 3D foot scanning and pressure distribution heatmaps collected from hundreds of competitive players across multiple leagues.
            </p>
          </div>

          <div className="bg-[#12131B] border border-[#232633] rounded-xl p-6 sm:p-8 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF1E27]/10 flex items-center justify-center text-[#FF1E27]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg uppercase text-white">
              UNCOMPROMISED STANDARDS
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We reject cosmetic gimmicks. Every structural rib, siped tread line, and carbon fiber orientation serves a measurable performance function.
            </p>
          </div>

          <div className="bg-[#12131B] border border-[#232633] rounded-xl p-6 sm:p-8 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF1E27]/10 flex items-center justify-center text-[#FF1E27]">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg uppercase text-white">
              GLOBAL TESTING VAULTS
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              With testing facilities in Portland, Oregon and Munich, Germany, our prototypes undergo harsh friction cycles in diverse climate conditions.
            </p>
          </div>
        </div>

        {/* Feature Story Split with Sneaker Showcase */}
        <div className="bg-[#12131C] border border-[#232635] rounded-2xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF1E27]">
                THE DESIGN MANIFESTO
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                WE ENGINEER REACTION TIME.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                In modern athletics, milliseconds decide titles. A single millisecond lost to midsole lag or foot slippage is the difference between a blown defensive assignment and a game-winning block.
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Nexora footwear is engineered with a strict Zero-Lag Philosophy: when your neural system commands your foot to change vectors, the shoe transfers 100% of your kinetic intention straight into the court floor.
              </p>

              <div className="pt-2">
                <button
                  onClick={onNavigateToShop}
                  className="px-6 py-3.5 bg-[#FF1E27] hover:bg-[#E50914] text-white font-display font-bold text-xs uppercase tracking-widest rounded transition-all flex items-center gap-2 cursor-pointer shadow-md hover:shadow-red-600/30"
                >
                  <span>EXPERIENCE NEXORA FOOTWEAR</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full aspect-4/3 bg-[#181A26] rounded-xl p-8 flex items-center justify-center border border-[#292D3E]">
                <img
                  src={ASSETS.heroShoe}
                  alt="Nexora Elite Blueprint"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Athlete Endorsements Quote */}
        <div className="bg-[#12131A] border-l-4 border-[#FF1E27] p-6 sm:p-8 rounded-r-xl space-y-3">
          <blockquote className="text-base sm:text-lg text-white font-display font-medium italic">
            "The first time I stepped onto the court in the Nexora Elite 1.0, the lateral containment blew me away. No slippage on hard plants, zero ankle rolls, and my legs felt completely fresh going into the fourth quarter."
          </blockquote>
          <div className="text-xs font-mono text-[#FF1E27]">
            — MARCUS D., ALL-STAR POINT GUARD & NEXORA ATHLETE
          </div>
        </div>
      </div>
    </div>
  );
};
