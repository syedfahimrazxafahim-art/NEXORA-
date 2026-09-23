import React, { useState } from 'react';
import { Mail, ArrowRight, Instagram, Youtube, Twitter } from 'lucide-react';
import { NexoraLogo } from './NexoraLogo';
import { useCart } from '../context/CartContext';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenSupport: (topic: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSupport }) => {
  const { setIsSizeGuideOpen } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#08080A] text-neutral-300 border-t border-[#1C1E26]">
      {/* Newsletter Bar from Reference Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-[#1C1E26]">
        <div className="bg-[#12131A] border border-[#232530] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle red accent line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF1E27] to-transparent" />

          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-lg bg-[#FF1E27]/10 border border-[#FF1E27]/30 flex items-center justify-center text-[#FF1E27] shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-wider text-white">
                STAY AHEAD OF THE GAME
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Subscribe for exclusive drops, early athlete access, and elite updates.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono rounded text-center">
                ✓ YOU ARE ON THE EXCLUSIVE VIP DROP LIST
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-[#181922] border border-[#2B2D3A] rounded px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF1E27] font-sans"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FF1E27] hover:bg-[#E50914] text-white font-display font-bold text-xs uppercase tracking-widest rounded transition-all duration-200 cursor-pointer shadow-md hover:shadow-red-600/30 whitespace-nowrap"
                >
                  SUBSCRIBE
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <NexoraLogo size="md" light={true} />
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Engineered for performance. Designed for champions. Nexora pushes the boundaries of human athletic potential through biomechanical precision and advanced foam chemistry.
            </p>
            <div className="text-[11px] text-neutral-500 font-mono">
              BIOMECHANICS LABS: PORTLAND, USA · MUNICH, GERMANY
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Sneakers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Men's Basketball
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Women's Performance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Speed Running
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Training & Apparel
                </button>
              </li>
            </ul>
          </div>

          {/* COLLECTIONS */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Signature Line
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Performance Pro
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Lifestyle & Culture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Limited Edition Drops
                </button>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">
              SUPPORT
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => onOpenSupport('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenSupport('shipping')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shipping & Returns
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="hover:text-[#FF1E27] transition-colors cursor-pointer"
                >
                  Size Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenSupport('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Socials */}
        <div className="mt-14 pt-8 border-t border-[#1C1E26] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 Nexora. All rights reserved. Precision Sports Technologies Inc.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mr-1">FOLLOW US</span>
            <a
              href="#instagram"
              onClick={(e) => e.preventDefault()}
              className="p-2 text-neutral-400 hover:text-white hover:text-[#FF1E27] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#twitter"
              onClick={(e) => e.preventDefault()}
              className="p-2 text-neutral-400 hover:text-white hover:text-[#FF1E27] transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#youtube"
              onClick={(e) => e.preventDefault()}
              className="p-2 text-neutral-400 hover:text-white hover:text-[#FF1E27] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
