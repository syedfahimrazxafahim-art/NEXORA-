import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectProduct }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { setQuickViewProduct } = useCart();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = PRODUCTS.filter((p) => {
    const text = `${p.name} ${p.category} ${p.sku} ${p.description} ${p.collection}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  const popularSearches = ['Elite 1.0', 'Basketball', 'NX Foam', 'Stealth Black', 'Speed Running'];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4">
      <div className="w-full max-w-2xl bg-[#0F1015] border border-[#232631] text-white rounded-lg shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#232631] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#FF1E27] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search shoes by name, tech (NX Foam, Grip), or category..."
            className="flex-1 bg-transparent text-sm md:text-base text-white placeholder-neutral-500 focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-neutral-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono uppercase bg-[#1C1E28] hover:bg-[#252837] px-2.5 py-1.5 rounded text-neutral-300 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        {!query && (
          <div className="p-4 bg-[#14161F] border-b border-[#232631] flex flex-wrap items-center gap-2 text-xs">
            <span className="text-neutral-400 font-display font-medium">TRENDING:</span>
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-2.5 py-1 bg-[#1E202B] hover:bg-[#2A2E3E] text-neutral-300 hover:text-white rounded text-[11px] transition-colors cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-neutral-500 text-sm">
              No Nexora kicks match "{query}". Try searching "Elite" or "Basketball".
            </div>
          ) : (
            filtered.map((shoe) => (
              <div
                key={shoe.id}
                onClick={() => {
                  onSelectProduct(shoe);
                  onClose();
                  setQuickViewProduct(shoe);
                }}
                className="flex items-center justify-between p-3 bg-[#151720] hover:bg-[#1D202C] border border-[#232631] hover:border-[#383C4F] rounded-lg cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#1C1E28] rounded flex items-center justify-center p-1 overflow-hidden shrink-0">
                    <img
                      src={shoe.primaryImage}
                      alt={shoe.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm tracking-wide text-white group-hover:text-[#FF1E27] transition-colors">
                      {shoe.name}
                    </h4>
                    <p className="text-xs text-neutral-400">
                      {shoe.category} · {shoe.specs.weight}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono font-bold text-sm text-neutral-200">
                    ${shoe.price.toFixed(2)}
                  </span>
                  <div className="p-1.5 rounded-full bg-[#202330] text-neutral-400 group-hover:text-white group-hover:bg-[#FF1E27] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
